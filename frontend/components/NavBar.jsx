import Image from "next/image";

const tabclassName = "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300";

function toggleMenu() {
    const navbar = document.getElementById("navbar-collapse");
    navbar.classList.toggle("hidden");
}

const NavBar = () => {
    return (
        <div>
            <nav className="bg-white py-2 md:py-4">
                <div className="container px-4 mx-auto md:flex md:items-center">

                    <div className="flex justify-between items-center">
                        <a href="#" className="font-bold text-xl text-indigo-600">
                            Roe v. Wade
                        </a>
                        <button
                            onClick={toggleMenu}
                            id="navbar-toggle"
                            className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                        >
                            {/* <Image
                                src="/as.png"
                                alt="mockup"
                                className="d-block max-w-full rounded shadow-md"
                                layout="fill"
                            >
                            </Image> */}
                            /
                        </button>
                    </div>

                    <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        <a href="/" className={tabclassName}>
                            Home
                        </a>
                        <a href="form" className={tabclassName}>
                            Form
                        </a>
                        <a href="info" className={tabclassName}>
                            Additional Information
                        </a>
                        <a href="about" className={tabclassName}>
                            About Us
                        </a>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default NavBar;
