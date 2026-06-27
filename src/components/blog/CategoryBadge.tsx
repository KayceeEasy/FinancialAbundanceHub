type Props = {
  category?: string;
};

const labels: Record<string, string> = {
  wealth: "Wealth Building",
  "real-estate": "Real Estate",
  investing: "Investing",
  mindset: "Mindset",
};

export default function CategoryBadge({ category }: Props) {
  return (
    <span className="inline-flex rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
      {labels[category || ""] || "Insight"}
    </span>
  );
}