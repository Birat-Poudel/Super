import useGenres from "./useGenres";
import { Genre } from "../entities/Genre";

const useGenre = (id?:number) => {
    const { data } = useGenres();
    return data?.results.find((g: Genre) => g.id === id);
}

export default useGenre