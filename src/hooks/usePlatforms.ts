import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');


const usePlatforms = () => {
    const gameQuery = useGameQueryStore(s=>s.gameQuery)

    return useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll({params : 
        {
        parent_platforms: gameQuery.platformId,
        ...gameQuery
        }}),
    staleTime: 24*60*60*1000,
    // initialData: {count: platforms.length, results: platforms}
})
}
export default usePlatforms;