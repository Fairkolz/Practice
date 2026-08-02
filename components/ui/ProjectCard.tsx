import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  category: string;
  image: string;
  description?: string;
  href?: string;
  variant?: "static" | "hover";
  aspect?: string;
  className?: string;
}

export default function ProjectCard({
  name,
  category,
  image,
  description,
  href,
  variant = "static",
  aspect = "aspect-[16/10]",
  className = "",
}: ProjectCardProps) {
  const content = (
    <>
      <Image
        src={image}
        alt={`${name} — ${category} project`}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
      />
      {variant === "static" ? (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[hsla(210,82%,15%,0.85)] to-transparent p-6 text-on-primary">
          <div className="mb-1 text-label-large uppercase opacity-80">{category}</div>
          <div className="text-title-medium font-semibold">{name}</div>
          {description && <div className="mt-1 text-body-small opacity-85">{description}</div>}
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-[hsla(210,82%,15%,0.85)] via-transparent to-transparent opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-on-primary">
            <div className="translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
              <div className="mb-1 text-label-large uppercase opacity-80">{category}</div>
              <div className="text-title-medium font-semibold">{name}</div>
            </div>
            <div className="mt-3 inline-flex translate-y-3 items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-body-small font-medium text-on-primary opacity-0 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
              View Project
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                &rarr;
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );

  const classes = `group relative ${aspect} cursor-pointer overflow-hidden rounded-xl ${className}`;

  if (href) {
    return (
      <Link href={href} aria-label={`View ${name} project`} className="block">
        <div className={classes}>{content}</div>
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
