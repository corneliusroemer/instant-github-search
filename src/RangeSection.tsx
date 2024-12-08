import { RangeInput } from "react-instantsearch";

type RangeSectionProps = {
  title: string;
  attribute: string;
};

export function RangeSection({ title, attribute }: RangeSectionProps) {
  return (
    <div className="mb-4">
      <p className="text-sm font-semibold text-gray-600 mb-2">{title}</p>
      <RangeInput
        attribute={attribute}
        className="px-1"
        translations={{
          separatorElementText: "-",
          submitButtonText: "Apply",
        }}
        classNames={{
          form: "flex items-center gap-0 text-sm",
          input: "w-12 px-0 py-0.5 border rounded text-center",
          submit:
            "px-1 py-0.5 bg-gray-100 rounded border text-xs hover:bg-gray-200",
          separator: "text-gray-400 m-1",
        }}
      />
    </div>
  );
}
