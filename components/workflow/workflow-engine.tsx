import { ENGINE_NODES } from "@/lib/workflow-content";
import { NodeCard } from "@/components/workflow/node-card";

const HEX = "50,8 86.4,29 86.4,71 50,92 13.6,71 13.6,29";

/* A few interior "network" points to fill the core node. */
const CORE_DOTS = [
  [38, 40],
  [62, 38],
  [44, 60],
  [60, 62],
  [50, 32],
  [33, 52],
  [67, 52],
];

export function WorkflowEngine() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[410px] lg:aspect-auto lg:h-[410px] lg:w-[410px]">
      {/* connectors — dashed, gently flowing toward the core */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {ENGINE_NODES.map((n) => (
          <line
            key={n.key}
            x1="50"
            y1="50"
            x2={n.cx}
            y2={n.cy}
            stroke="#f3a6c6"
            strokeOpacity="0.28"
            strokeWidth="0.3"
            strokeDasharray="1.4 1.4"
            style={{ animation: "flow-dash 2s linear infinite" }}
          />
        ))}
      </svg>

      {/* central hexagon core */}
      <div className="absolute left-1/2 top-1/2 flex h-[128px] w-[128px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div
          aria-hidden
          className="absolute h-24 w-24 rounded-full bg-pink-200/25 blur-2xl"
          style={{ animation: "engine-pulse 4.5s ease-in-out infinite" }}
        />
        <svg width="128" height="128" viewBox="0 0 100 100" className="relative">
          <polygon
            points={HEX}
            fill="rgba(243,166,198,0.05)"
            stroke="#f3a6c6"
            strokeOpacity="0.4"
            strokeWidth="0.8"
          />
          {CORE_DOTS.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1" fill="#f3a6c6" opacity="0.5" />
          ))}
          {/* core star */}
          <path
            d="M50 36 L52.4 47.6 L64 50 L52.4 52.4 L50 64 L47.6 52.4 L36 50 L47.6 47.6 Z"
            fill="#f8c8dd"
          />
        </svg>
      </div>

      {/* nodes positioned around the core */}
      {ENGINE_NODES.map((n) => (
        <div
          key={n.key}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.cx}%`, top: `${n.cy}%` }}
        >
          <NodeCard node={n} />
        </div>
      ))}
    </div>
  );
}
