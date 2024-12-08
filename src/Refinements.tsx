import { RefinementSection } from "./RefinementSection";
import { MenuSection } from "./MenuSection";
import { RangeSection } from "./RangeSection";

export function Refinements() {
  return (
    <div className="w-48">
      <MenuSection title="Type" attribute="type" />
      <MenuSection title="Repository" attribute="repo" />
      <MenuSection title="State" attribute="state" />
      <RefinementSection title="Authors" attribute="user" />
      <RefinementSection
        title="Labels (with AND)"
        attribute="labels"
        operator="and"
      />
      <RangeSection title="Issue Number" attribute="number" />
      {/* <RangeSection title="Reactions" attribute="reactions" /> */}
      {/* <RangeSection title="Comments" attribute="comments" /> */}
    </div>
  );
}
