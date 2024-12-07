import { ClearRefinements, Menu, RefinementList } from "react-instantsearch";

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

function MenuSection({
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

export function Refinements() {
  return (
    <div className="w-48">
      <ClearRefinements className="my-2" />
      <MenuSection title="Type" attribute="type" />
      <MenuSection title="Repository" attribute="repo" />
      <MenuSection title="State" attribute="state" />
      <RefinementSection title="Authors" attribute="user" />
      <RefinementSection
        title="Labels (with AND)"
        attribute="labels"
        operator="and"
      />
    </div>
  );
}
