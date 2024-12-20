import useIssues from "../../hooks/useIssues";
import { IssuesInterfaces } from "../../interfaces/issues.interfaces";
import { IssueItem } from "./IssueItem";

interface Props {
  issues: IssuesInterfaces[];
}
export const IssueList = ({ issues }: Props) => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button className="btn active">All</button>
        <button className="btn">Open</button>
        <button className="btn">Closed</button>
      </div>

      {/* Lista de issues */}

      <div className="mt-4">
        {issues.map((issue: IssuesInterfaces) => (
          <IssueItem key={issue.id}  issue={issue}/>
        ))}
      </div>
    </>
  );
};
