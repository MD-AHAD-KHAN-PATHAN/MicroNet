

const About = () => {
    return (
        <div className="md:m-20 m-4">
            <h1 className="md:text-5xl text-4xl font-bold mb-10">Our team members</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                <div className="border rounded-md">
                    <img src="https://i.ibb.co/7Wf5x9G/lily.jpg" alt="" />
                    <div className="p-4">
                        <p>Seniors</p>
                        <h1 className="font-bold text-xl">Jim Moreana</h1>
                        <button className="px-2 py-1 font-semibold bg-yellow-300 text-white mt-4 rounded-full">Management</button>
                    </div>
                </div>
                <div className="border rounded-md">
                    <img src="https://i.ibb.co/wQbbJfn/dennis.jpg" alt="" />
                    <div className="p-4">
                        <p>Seniors</p>
                        <h1 className="font-bold text-xl">James Gardner</h1>
                        <button className="px-2 py-1 font-semibold bg-yellow-300 text-white mt-4 rounded-full">Management</button>
                    </div>
                </div>
                <div className="border rounded-md">
                    <img src="https://i.ibb.co/7Wf5x9G/lily.jpg" alt="" />
                    <div className="p-4">
                        <p>Intern</p>
                        <h1 className="font-bold text-xl">Jenny Buffer</h1>
                        <button className="px-2 py-1 font-semibold bg-yellow-300 text-white mt-4 rounded-full">Design</button>
                    </div>
                </div>
                <div className="border rounded-md">
                    <img src="https://i.ibb.co/mC0vksc/jack.jpg" alt="" />
                    <div className="p-4">
                        <p>Employees</p>
                        <h1 className="font-bold text-xl">John Doe</h1>
                        <button className="px-2 py-1 font-semibold bg-yellow-300 text-white mt-4 rounded-full">Finance</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;