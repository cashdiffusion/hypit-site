$ffmpeg = Join-Path $env:LOCALAPPDATA "Microsoft\WinGet\Links\ffmpeg.exe"
$root   = "C:\Users\Administrator\Desktop\hypit-b2b-site"
$pub    = Join-Path $root "public"
$bak    = Join-Path $root "video-originals"
if (-not (Test-Path $bak)) { New-Item -ItemType Directory -Path $bak | Out-Null }

$files = Get-ChildItem $pub -Filter *.mp4 | Sort-Object Length
Write-Output "Scanning $($files.Count) videos (skipping already-backed-up)..."
Write-Output ("=" * 60)

foreach ($f in $files) {
  $name = $f.Name
  $orig = Join-Path $bak $name
  $src  = $f.FullName

  # Already processed in a prior run — its original is safely in backup.
  if (Test-Path -LiteralPath $orig) {
    Write-Output ("skip (done): {0}" -f $name)
    continue
  }

  $beforeMB = $f.Length / 1MB
  try {
    Move-Item -LiteralPath $src -Destination $orig -Force
    & $ffmpeg -nostdin -hide_banner -loglevel error -i $orig -an `
      -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p `
      -vf "scale=-2:'min(1280,ih)'" -movflags +faststart -y $src

    if (($LASTEXITCODE -ne 0) -or (-not (Test-Path -LiteralPath $src))) {
      Copy-Item -LiteralPath $orig -Destination $src -Force
      Write-Output ("FAILED (exit $LASTEXITCODE), restored: {0}" -f $name)
      continue
    }
    $afterMB = (Get-Item -LiteralPath $src).Length / 1MB
    Write-Output ("{0,-26} {1,7:N1} MB -> {2,6:N1} MB  ({3,3:N0}% smaller)" -f `
      $name, $beforeMB, $afterMB, (100 * (1 - $afterMB / $beforeMB)))
  }
  catch {
    if ((Test-Path -LiteralPath $orig) -and (-not (Test-Path -LiteralPath $src))) {
      Copy-Item -LiteralPath $orig -Destination $src -Force
    }
    Write-Output ("ERROR on {0}: {1}" -f $name, $_.Exception.Message)
  }
}

Write-Output ("=" * 60)
Write-Output "DONE"
