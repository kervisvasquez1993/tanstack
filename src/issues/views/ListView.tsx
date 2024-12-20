import useIssues from "../../hooks/useIssues";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";

export const ListView = () => {
  const { data, isLoading } = useIssues();

  console.log(data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {isLoading ? (
          <div className="flex justify-center items-center h-52">
            loading...
          </div>
        ) : (
          <IssueList issues={data!} />
        )}
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker />
      </div>
    </div>
  );
};
