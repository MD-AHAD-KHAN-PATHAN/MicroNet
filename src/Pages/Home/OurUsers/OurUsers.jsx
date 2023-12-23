import { FaRegHandPointRight } from "react-icons/fa";


const OurUsers = () => {

    return (

        <div className="mx-20">

            <h1 className="text-5xl font-bold text-center mt-20 mb-4">Our Users</h1>
            <p className="text-center font-medium mb-10">This task management platform can be used by a diverse range of individuals <br /> and groups across various industries. Here are some categories of people and <br /> situations where a task management platform can be beneficial.</p>
            <div className="grid grid-cols-3 gap-6 mb-5">
                <div  className="bg-green-300 p-5 rounded-md">
                    <h1 className="font-bold">Research and Academia</h1>
                    <li>Researchers managing experiments</li>
                    <li>Academic teams collaborating on studies</li>
                </div>
                <div  className="bg-lime-300 p-5 rounded-md">
                    <h1 className="font-bold">Students and Educators</h1>
                    <li>Educators organizing lesson plans and tasks</li>
                    <li>Students managing assignments and projects</li>
                </div>
                <div  className="bg-yellow-300 p-5 rounded-md">
                    <h1 className="font-bold">Software Development</h1>
                    <li>Developers tracking tasks and milestones.</li>
                    <li>Agile and Scrum teams managing sprints</li>
                </div>
                <div  className="bg-lime-300 p-5 rounded-md">
                    <h1 className="font-bold">Healthcare Professionals</h1>
                    <li>Medical teams coordinating patient care</li>
                    <li>Healthcare project managers</li>
                </div>
                <div  className="bg-yellow-300 p-5 rounded-md">
                    <h1 className="font-bold">Business Professionals</h1>
                    <li>Entrepreneurs</li>
                    <li>Executives</li>
                </div>
                <div  className="bg-green-300 p-5 rounded-md">
                    <h1 className="font-bold">Teams and Collaborative Groups</h1>
                    <li>Remote teams</li>
                    <li>Creative teams</li>
                </div>

            </div>
            <div className="space-y-2 mb-20">
                <h2 className="text-2xl font-bold mb-4">The benefits of using our platform</h2>
                <p className="flex gap-4 items-center text-xl"><span className="text-3xl text-yellow-400"><FaRegHandPointRight /></span> Improved Organization.</p>
                <p className="flex gap-4 items-center text-xl"><span className="text-3xl text-yellow-400"><FaRegHandPointRight /></span> Increased Efficiency.</p>
                <p className="flex gap-4 items-center text-xl"><span className="text-3xl text-yellow-400"><FaRegHandPointRight /></span> Time Management.</p>
                <p className="flex gap-4 items-center text-xl"><span className="text-3xl text-yellow-400"><FaRegHandPointRight /></span> Accountability.</p>
                <p className="flex gap-4 items-center text-xl"><span className="text-3xl text-yellow-400"><FaRegHandPointRight /></span> Scalability.</p>
            </div>

        </div>

    );
};

export default OurUsers;