import { useQuery } from "@tanstack/react-query";
import { getIssue } from "../actions/getIssue";

const useIssue = (issueNumber: number) => {
  const IssueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60 * 60,
    retry: false,
  });
  return {
    ...IssueQuery,
  };
};

export default useIssue;
