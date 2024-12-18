import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions/getLabels";

export const useLabels = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
  });
  return {
    data,
    isLoading,
    error,
  };
};
