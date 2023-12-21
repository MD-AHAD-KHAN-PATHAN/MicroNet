import { Link } from "react-router-dom";


const Header = () => {

    return (

        <div className="flex justify-between mx-20 my-10">
            <div className="flex items-center">
                <div>
                    <h1 className="text-5xl font-bold">Manage work <span className="text-yellow-300">Efficiently.</span></h1>
                    <p className="text-2xl font-bold my-4">Plan, Track and Organise your work.</p>
                    <p className="text-lg font-normal">An Intranet platform to Manage projects, organise work and focus on what’s important.</p>
                    <Link to="/login"><button className="px-4 py-2 font-bold bg-yellow-300 text-white mt-4 rounded-lg">Let’s Explore</button></Link>
                </div>
            </div>
            <div className="w-3/5">
                <img className="" src="https://i.ibb.co/dcRW0Yp/her-micronet.jpg" alt="" />
            </div>


        </div>

    );
};

export default Header;