import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import  Genre  from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    staleTime: ms("24h"),
    queryFn: apiClient.getAll,
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
