import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/getIssues";

const useIssues = () => {
  const IssuesQuerys = useQuery({
    queryKey: ["issues"],
    queryFn: getIssues,
    staleTime: 1000 * 60 * 60,
  });
  return {
    ...IssuesQuerys,
  };
};

export default useIssues;
