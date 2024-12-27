import { IssuesInterfaces } from "../../interfaces/issues.interfaces";
import { State } from "../../interfaces/labes.interfaces";
import { IssueItem } from "./IssueItem";

interface Props {
  issues: IssuesInterfaces[];
  state: State;
  onStateChange: (state: State) => void;
}
export const IssueList = ({ issues, state, onStateChange }: Props) => {
  return (
    <>
      <div className="flex gap-4">
        <button className="btn active" onClick={() => onStateChange(State.All)}>
          All
        </button>
        <button className="btn" onClick={() => onStateChange(State.Open)}>
          Open
        </button>
        <button className="btn" onClick={() => onStateChange(State.Close)}>
          Closed
        </button>
      </div>
      <div className="mt-4">
        {issues?.map((issue: IssuesInterfaces) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
