import { GithubLabel } from "../../interfaces/labes.interfaces";
import { useLabels } from "../../hooks/useLabels";

export const LabelPicker = () => {
  const { data, isLoading } = useLabels();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-52">loading...</div>
    );
  }
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {data?.map((picker: GithubLabel) => (
        <span
          key={picker.id}
          className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
          style={{
            border: `1px solid #${picker.color}`,
            color: `#${picker.color}`,
          }}
        >
          {picker.name}
        </span>
      ))}
    </div>
  );
};
