interface Props {
  date: string;
}

export default function ReadingTime({ date }: Props) {
  return (
    <div className="text-sm text-slate-500">
      {new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}
    </div>
  );
}