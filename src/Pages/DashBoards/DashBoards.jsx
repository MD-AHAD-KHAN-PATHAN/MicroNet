import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAllTasks from "../../Hooks/useAllTasks";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DashBoards = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const [tasks, refetch] = useAllTasks();

    console.log(tasks);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {

        data.status = 'to-do';
        data.email = user?.email;
        console.log(data);

        axiosPublic.post('/task', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    reset();
                    Swal.fire({
                        icon: "success",
                        title: "Task added successfull.",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    refetch();
                }
            })
    }

    const handleOnGoing = (id) => {

        const data = {
            status: 'ongoing'
        }
        axiosPublic.patch(`/task/${id}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "your task is ongoing.",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    refetch();
                }
            })

    }
    const handleComplete = (id) => {

        const data = {
            status: 'completed'
        }

        axiosPublic.patch(`/task/${id}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "your task is completed",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    refetch();
                }
            })
    }

    const handleDelete = (id) => {
        axiosPublic.delete(`/task/${id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.deletedCount > 0){
                toast.success("Your Task is Deleted!");
                refetch();
            }
        })
    }

    return (
        <div>
            {/* Profile details */}
            <div className="col-span-1 bg-yellow-200 flex justify-center py-20 rounded-md">
                <div className="">
                    <div className="w-52 h-52 rounded-full border-8 border-yellow-500 flex justify-center items-center">
                        <img className="w-40 h-40 rounded-full" src={user?.photoURL} alt="" />
                    </div>
                    <div className="flex justify-center">
                        <h3 className="text-lg font-bold mt-4">{user?.displayName}</h3>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mx-20 my-10">

                {/* Create Task */}
                <div className="">
                    <div className="bg-yellow-400 p-6 rounded-md">
                        <div>
                            <h1 className="text-xl font-bold text-center">Create your new task</h1>
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
                                <button className="btn bg-white  hover:bg-yellow-400 hover:text-white text-yellow-500 border-1 border-yellow-400 font-bold">Add To-Do</button>
                            </div>
                        </form>
                    </div>

                </div>
                {/* To-Do List */}
                <div>
                    <h1 className="text-center bg-lime-400 p-4 mb-4 font-bold rounded-md text-white">MY TO-DO</h1>
                    <div>
                        {
                            tasks.map(task =>
                                <div key={task._id} >
                                    {
                                        task?.status === 'to-do' &&
                                        <div className="bg-lime-300 mb-4 p-4 rounded-md space-y-1">
                                            <h1 className="font-bold">{task?.title}</h1>
                                            <p>{task?.description}</p>
                                            <p>{task?.date}</p>
                                            <p>{task?.status}</p>
                                            <button className="px-2 py-1 bg-teal-600 font-semibold text-white">{task?.priority}</button>
                                            <div className="flex justify-between">
                                                <button onClick={() => handleDelete(task?._id)} className="px-2 py-1 bg-red-600 rounded-full font-semibold text-white">Delete</button>
                                                <ToastContainer />
                                                <button onClick={() => handleOnGoing(task?._id)} className="px-2 py-1 bg-blue-600 font-semibold rounded-full text-white">Update</button>
                                                <button onClick={() => handleOnGoing(task?._id)} className="px-2 py-1 bg-lime-600 font-semibold rounded-full text-white">OnGoing</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>

                {/* Ongoing List */}
                <div>
                    <h1 className="text-center bg-yellow-400 p-4 mb-4 font-bold rounded-md text-white">ONGOING TASKS</h1>
                    <div>
                        {
                            tasks.map(task => <div key={task._id}>
                                {
                                    task?.status === 'ongoing' && <div className="bg-yellow-300 mb-4 p-4 rounded-md space-y-1">
                                        <h1 className="font-bold">{task?.title}</h1>
                                        <p>{task?.description}</p>
                                        <p>{task?.date}</p>
                                        <p>{task?.status}</p>
                                        <button className="px-2 py-1 bg-teal-600 font-semibold text-white">{task?.priority}</button>


                                        <div className="flex justify-between">
                                            <button onClick={() => handleDelete(task?._id)} className="px-2 py-1 bg-red-600 rounded-full font-semibold text-white">Delete</button>
                                            <ToastContainer />
                                            <button onClick={() => handleOnGoing(task?._id)} className="px-2 py-1 bg-blue-600 font-semibold rounded-full text-white">Update</button>
                                            <button onClick={() => handleComplete(task?._id)} className="px-2 py-1 bg-yellow-600 font-semibold rounded-full text-white">Complete</button>
                                        </div>
                                    </div>}
                            </div>)
                        }
                    </div>
                </div>

                {/* Completed Listd */}
                <div>
                    <h1 className="text-center bg-green-400 p-4 mb-4 font-bold rounded-md text-white">COMPLETED TASKS</h1>
                    <div>
                        {
                            tasks.map(task => <div key={task._id}>
                                {
                                    task?.status === 'completed' && <div className="bg-green-300 mb-4 p-4 rounded-md space-y-1">
                                        <h1 className="font-bold">{task?.title}</h1>
                                        <p>{task?.description}</p>
                                        <p>{task?.date}</p>
                                        <p>{task?.status}</p>
                                        <button className="px-2 py-1 bg-teal-600 font-semibold text-white">{task?.priority}</button>
                                        <div className="flex justify-between">
                                            <button onClick={() => handleDelete(task?._id)} className="px-2 py-1 bg-red-600 rounded-full font-semibold text-white">Delete</button>
                                            <ToastContainer />
                                            <button onClick={() => handleOnGoing(task?._id)} className="px-2 py-1 bg-blue-600 font-semibold rounded-full text-white">Update</button>
                                        </div>
                                    </div>
                                }
                            </div>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashBoards;