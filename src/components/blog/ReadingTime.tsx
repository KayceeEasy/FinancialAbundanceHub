type Props = {
  category?: string;
};

const labels: Record<string, string> = {
  wealth: "WEALTH BUILDING",
  "real-estate": "REAL ESTATE",
  investing: "INVESTING",
  mindset: "MINDSET",
};

export default function CategoryBadge({ category }: Props) {
  return (
    <span className="inline-flex rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
      {labels[category || ""] || "INSIGHT"}
    </span>
  );
}