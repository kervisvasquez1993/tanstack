import { useQuery } from "@tanstack/react-query";
import { getIssue } from "../actions/getIssue";
import { getIssueComment } from "../actions/getIssueComments";

const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60,
  });

  const issueCommentQuery = useQuery({
    queryKey: ["issues", issueQuery.data?.number, "comment"],
    queryFn: () => getIssueComment(issueQuery.data!.number),
    staleTime: 1000 * 60 * 60,
    enabled : issueQuery.data !== undefined
  });

  return {
    issueQuery,
    issueCommentQuery,
  };
};

export default useIssue;
