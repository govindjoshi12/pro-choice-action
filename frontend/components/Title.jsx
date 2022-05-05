import Image from "next/image";
const Title = () => {
    return (
        <div class="container px-4 mx-auto">

            <div class="text-center max-w-2xl mx-auto">
                <h1 class="text-3xl md:text-4xl font-medium mb-2">
                    Get the header you needed for your awesome website.
                </h1>
                <button class="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">
                    Get Started
                </button>
                <div class="mt-4">
                    <Image
                        src="/as.png"
                        alt="mockup"
                        class="d-block max-w-full rounded shadow-md"
                        width={500}
                        height={500}>
                    </Image>
                </div>
            </div>
        </div >
    );
};

export default Title;
