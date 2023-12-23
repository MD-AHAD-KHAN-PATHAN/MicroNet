import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAllTasks from "../../Hooks/useAllTasks";
import { ToastContainer, toast } from "react-toastify";

const Update = () => {
    const data = useLoaderData();
    const [tasks, refetch] = useAllTasks();

    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: `${data?.title}`,
            description: `${data?.description}`,
            date: `${data?.date}`,
            priority: `${data?.priority}`,
        },
    })

    const onSubmit = async (data) => {

        axiosPublic.patch(`/task/update/${data?._id}`, data)
        .then(res => {
            if(res.data.modifiedCount > 0){
                toast.success('Your task is updated successfully')
                refetch();
            }
        })
    }

    return (
        <div className="max-w-2xl mx-auto my-20">
            <div className="">
                    <div className="bg-yellow-400 p-6 rounded-md">
                        <div>
                            <h1 className="text-xl font-bold text-center">Update Your Task</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <div className="form-control">
                                <label>
                                    <span className="label-text text-white">Title</span>
                                </label>
                                <input type="text" {...register("title", { required: true })} placeholder="Title" className="border-1 border-yellow-400 input input-bordered w-full" required />
                            </div>

                            <div className="form-control">
                                <label>
                                    <span className="label-text text-white">Description</span>
                                </label>
                                <input type="text" {...register("description", { required: true })} placeholder="Description" className="border-1 border-yellow-400 input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label>
                                    <span className="label-text text-white">Deadlines</span>
                                </label>
                                <input type="date" {...register("date", { required: true })} placeholder="deadlines" className="border-1 border-yellow-400 input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label>
                                    <span className="label-text text-white">Priority</span>
                                </label>
                                <input type="text" {...register("priority", { required: true })} placeholder="Priority" className="border-1 border-yellow-400 input input-bordered" required />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn bg-white  hover:bg-yellow-400 hover:text-white text-yellow-500 border-1 border-yellow-400 font-bold">Update Task</button>
                            </div>
                            <ToastContainer></ToastContainer>
                        </form>
                    </div>

                </div>
        </div>
    );
};

export default Update;