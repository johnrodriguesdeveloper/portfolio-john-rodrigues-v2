export function FilterButton({
  filter,
  isActive,
  onClick,
}: {
  filter: { label: string; value: string };
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`h-10 px-4 rounded-sm text-sm font-medium transition-all duration-200 ${
        isActive
          ? "bg-accent text-accent-foreground shadow-md"
          : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
      }`}
    >
      {filter.label}
    </button>
  );
}
