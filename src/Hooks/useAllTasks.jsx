import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllTasks = () => {
    
    const axiosPublic = useAxiosPublic();

    const {data: tasks = [], refetch} = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get('/task');
            return res.data;
        }
    })

    return [tasks, refetch];
};

export default useAllTasks;