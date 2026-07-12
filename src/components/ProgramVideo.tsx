type ProgramVideoProps = {
  title: string;
  src: string;
  className?: string;
  orientation?: 'landscape' | 'portrait';
};

export default function ProgramVideo({ title, src, className = '', orientation = 'landscape' }: ProgramVideoProps) {
  return (
    <div className={`program-video program-video--${orientation} ${className}`}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
