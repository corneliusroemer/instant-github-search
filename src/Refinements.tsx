import { RefinementList } from "react-instantsearch";

type RefinementSectionProps = {
  title: string;
  attribute: string;
  operator?: "and" | "or";
};

function RefinementSection({
  title,
  attribute,
  operator,
}: RefinementSectionProps) {
  return (
    <div className="mb-4">
      <p className="text-sm font-semibold text-gray-600 mb-1">{title}</p>
      <RefinementList attribute={attribute} operator={operator} />
    </div>
  );
}

export function Refinements() {
  return (
    <div className="w-64">
      <RefinementSection title="Repositories" attribute="repo" />
      <RefinementSection title="State" attribute="state" />
      <RefinementSection title="Authors" attribute="user" />
      <RefinementSection title="Labels" attribute="labels" operator="and" />
      <RefinementSection title="Type" attribute="type" />
    </div>
  );
}
