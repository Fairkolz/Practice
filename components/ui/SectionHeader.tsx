interface SectionHeaderProps {
  title: string;
  text?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  text,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="mb-4 font-display text-heading-large font-semibold text-on-surface">
        {title}
      </h2>
      {text && (
        <p
          className={`text-body-large text-on-surface-variant ${
            centered ? "mx-auto" : ""
          } max-w-[560px]`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
