import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions/getLabels";

export const useLabels = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
    placeholderData: [
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
        description: null,
      },
      {
        id: 69105383,
        node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
        name: "Browser: IE",
        color: "c7def8",
        default: false,
        description: null,
      },
      {
        id: 69105358,
        node_id: "MDU6TGFiZWw2OTEwNTM1OA==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20Safari",
        name: "Browser: Safari",
        color: "c7def8",
        default: false,
        description: null,
      },
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
        description: null,
      },
    ],
  });
  return {
    data,
    isLoading,
    error,
  };
};
