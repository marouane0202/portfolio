type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="muted mt-4 text-lg leading-8">{description}</p> : null}
    </div>
  );
}
