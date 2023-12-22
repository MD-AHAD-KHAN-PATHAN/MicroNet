

const OurUsers = () => {

    return (

        <div className="mx-20">

            <h1 className="text-5xl font-bold text-center my-10">Our Users</h1>
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-green-300 p-5 rounded-md">
                    <h1 className="font-bold">Research and Academia</h1>
                    <li>Researchers managing experiments</li>
                    <li>Academic teams collaborating on studies</li>
                </div>
                <div className="bg-lime-300 p-5 rounded-md">
                    <h1 className="font-bold">Students and Educators</h1>
                    <li>Educators organizing lesson plans and tasks</li>
                    <li>Students managing assignments and projects</li>
                </div>
                <div className="bg-yellow-300 p-5 rounded-md">
                    <h1 className="font-bold">Software Development</h1>
                    <li>Developers tracking tasks and milestones.</li>
                    <li>Agile and Scrum teams managing sprints</li>
                </div>
                <div className="bg-lime-300 p-5 rounded-md">
                    <h1 className="font-bold">Healthcare Professionals</h1>
                    <li>Medical teams coordinating patient care</li>
                    <li>Healthcare project managers</li>
                </div>
                <div className="bg-yellow-300 p-5 rounded-md">
                    <h1 className="font-bold">Business Professionals</h1>
                    <li>Entrepreneurs</li>
                    <li>Executives</li>
                </div>
                <div className="bg-green-300 p-5 rounded-md">
                    <h1 className="font-bold">Teams and Collaborative Groups</h1>
                    <li>Remote teams</li>
                    <li>Creative teams</li>
                </div>

            </div>

        </div>

    );
};

export default OurUsers;