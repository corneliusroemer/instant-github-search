import { RefinementList } from "react-instantsearch";

type RefinementSectionProps = {
  title: string;
  attribute: string;
  operator?: "and" | "or";
};
export function RefinementSection({
  title,
  attribute,
  operator,
}: RefinementSectionProps) {
  return (
    <div className="mb-4">
      <p className="text-sm font-semibold text-gray-600 mb-1">{title}</p>
      <RefinementList
        attribute={attribute}
        operator={operator}
        showMore
        searchable
        showMoreLimit={200}
      />
    </div>
  );
}
