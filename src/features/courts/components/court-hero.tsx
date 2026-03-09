'use client';

interface CourtHeroProps {
  name: string;
  status?: string;
}

export function CourtHero({ name, status }: CourtHeroProps) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h2 className="text-xl font-semibold">{name}</h2>
      {status && (
        <p className="text-muted-foreground text-sm">{status}</p>
      )}
    </div>
  );
}
