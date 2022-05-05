import Image from "next/image";

const Title = () => {
    return (
        <div className="container px-4 mx-auto">

            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-medium mb-2">
                    Get the header you needed for your awesome website.
                </h1>
                <button className="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">
                    Get Started
                </button>
                <div className="mt-4">
                    <Image
                        src="/as.png"
                        alt="mockup"
                        className="d-block max-w-full rounded shadow-md"
                        width={500}
                        height={500}>
                    </Image>
                </div>
            </div>
        </div >
    );
};

export default Title;
