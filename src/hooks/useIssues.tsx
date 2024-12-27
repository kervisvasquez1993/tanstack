import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/getIssues";
import { State } from "../interfaces/labes.interfaces";
interface Props {
  state: State;
}
const useIssues = ({ state }: Props) => {
  const IssuesQuerys = useQuery({
    queryKey: ["issues", { state }],
    queryFn: () => getIssues(state),
    staleTime: 1000 * 60 * 60,
  });
  return {
    ...IssuesQuerys,
  };
};

export default useIssues;
