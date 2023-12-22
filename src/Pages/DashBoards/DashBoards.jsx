import useAuth from "../../Hooks/useAuth";


const DashBoards = () => {

    const { user } = useAuth();

    return (
        <div className="grid grid-cols-4 gap-4 mx-20 my-10">
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

            <div>

            </div>
        </div>
    );
};

export default DashBoards;