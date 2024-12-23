import { Navigate, useNavigate, useParams } from "react-router-dom";

import { FiSkipBack } from "react-icons/fi";
import { IssueComment } from "../components/IssueComment";
import useIssue from "../../hooks/useIssue";
import { IssuesCommentInterfaces } from "../../interfaces/issuesComment.interfaces";

export const IssueView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const issueNumber = Number(id ?? 0);
  const { issueQuery, issueCommentQuery } = useIssue(issueNumber);
  if (issueQuery.isLoading) {
    return (
      <div className="flex justify-center items-center h-52">loading...</div>
    );
  }
  if (!issueQuery.data) {
    return <Navigate to={"/404"} />;
  }

  return (
    <div className="mb-5">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="hover:underline text-blue-400 flex items-center"
        >
          <FiSkipBack />
          Regresar
        </button>
      </div>
      {issueCommentQuery.data?.map((comment) => (
        <IssueComment key={comment.url} body={comment} />
      ))}
    </div>
  );
};
