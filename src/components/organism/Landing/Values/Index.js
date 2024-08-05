import Image from "next/image";

export default function Index({ data }) {
    return (
        <div className="bg-gray-100 p-5">
            <div className="container mx-auto">
                <h1 className="text-2xl lg:text-4xl text-black dark:text-white font-bold mb-5 text-center">
                    <span className="text-orange-500">Nilai-nilai Kami</span>
                </h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
                        >
                            <Image
                                src={item.image.preview}
                                alt={item.name}
                                width={100}
                                height={100}
                                className="rounded-full"
                            />
                            <p className="text-lg font-semibold text-center text-gray-800 mt-4">
                                {item.name}
                            </p>
                            <p className="mt-2 text-center text-base md:text-md text-gray-700">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
