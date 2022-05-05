import Image from "next/image";


function toggleMenu() {
    const navbar = document.getElementById("navbar-collapse");
    navbar.classList.toggle("hidden");
}

const NavBar = () => {
    return (
        <div>
            <nav class="bg-white py-2 md:py-4">
                <div class="container px-4 mx-auto md:flex md:items-center">

                    <div class="flex justify-between items-center">
                        <a href="#" class="font-bold text-xl text-indigo-600">
                            Roe v. Wade
                        </a>
                        <button
                            onClick={toggleMenu}
                            id="navbar-toggle"
                            class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                        >
                            {/* <Image
                                src="/as.png"
                                alt="mockup"
                                class="d-block max-w-full rounded shadow-md"
                                layout="fill"
                            >
                            </Image> */}
                            /
                        </button>
                    </div>

                    <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">
                            Home
                        </a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                            Additional Information
                        </a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                            About
                        </a>
                        <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default NavBar;
