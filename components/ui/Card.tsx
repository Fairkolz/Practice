interface CardProps {
  icon?: React.ReactNode;
  title: string;
  text: string;
  className?: string;
}

export default function Card({ icon, title, text, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-outline-variant bg-surface-container-lowest p-8 transition-all hover:shadow-elevation-3 hover:-translate-y-0.5 ${className}`}
    >
      {icon && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-surface-container-high text-primary">
          {icon}
        </div>
      )}
      <h3 className="mb-3 text-title-medium font-semibold text-on-surface">{title}</h3>
      <p className="text-body-medium text-on-surface-variant">{text}</p>
    </div>
  );
}
