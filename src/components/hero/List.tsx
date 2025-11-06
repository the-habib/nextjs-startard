export function List({ items }: { items: string[] }) {
  return (
    <ul className="ml-4 list-disc space-y-1.5">
      {items.map((it, i) => (
        <li
          key={i}
          className="transition will-change-transform hover:translate-x-0.5"
        >
          {it}
        </li>
      ))}
    </ul>
  );
}
