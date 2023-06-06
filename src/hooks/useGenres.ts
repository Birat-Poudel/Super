import { useQuery } from "@tanstack/react-query";
import { Genre } from "../entities/Genre";
import APIClient from "../services/api-client";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => {
    const gameQuery = useGameQueryStore(s=>s.gameQuery)
    return useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.getAll({params : 
        {genres : gameQuery.genreId, ...gameQuery
        }}),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    // initialData: {count: genres.length, results: genres }
})
}
export default useGenres