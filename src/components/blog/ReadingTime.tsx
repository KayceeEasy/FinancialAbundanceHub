interface Props {
  excerpt?: string; // Add excerpt here
  date: string;
}

export default function ReadingTime({ excerpt, date }: Props) {
  return (
    <div className="text-sm text-slate-400">
      {excerpt && <p className="mb-2 italic">{excerpt}</p>}
      <p>{new Date(date).toLocaleDateString()}</p>
    </div>
  );
}