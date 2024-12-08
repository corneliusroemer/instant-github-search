import { Menu } from "react-instantsearch";

export function MenuSection({
  title,
  attribute,
}: {
  title: string;
  attribute: string;
}) {
  return (
    <div className="mb-4">
      <p className="text-sm font-semibold text-gray-600 mb-1">{title}</p>
      <Menu attribute={attribute} className="ml-1" />
    </div>
  );
}
