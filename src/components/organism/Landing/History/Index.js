import Image from "next/image";
import React from "react";

export default function Index({ data }) {
    return (
        <div className=" bg-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl lg:text-4xl text-black dark:text-white font-bold mb-5 lg:mb-5 text-center">
                    <span className="text-black">
                        Sejarah & Tokoh di Balik Pendirian
                    </span>{" "}
                </h1>
                <h1 className="text-2xl lg:text-4xl text-black dark:text-white font-bold mb-5 lg:mb-5 text-center">
                    <span className="text-orange-500">karangjatih</span>
                </h1>
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-16 p-6 md:p-0">
                    <div className="w-full md:w-1/3 flex flex-col items-center lg:items-center">
                        <Image
                            src={data.tokoh1.image.preview}
                            alt={"Yulis Praptiningsih"}
                            className="md:h-72 rounded-lg object-cover aspect-square"
                            width={720}
                            height={480}
                            quality={70}
                        />
                        <div className="bg-orange-500 text-white text-sm font-medium rounded px-4 py-2 ">
                            {data.tokoh1.name}{" "}
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="mb-4 text-left md:text-xl">
                            {data.tokoh1.description}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 p-6 md:p-0">
                    <div className="w-full md:w-1/3 flex flex-col items-center lg:items-center">
                        <Image
                            src={data.tokoh2.image.preview}
                            alt="Alm. H suprapto soeparno"
                            className="md:h-72 rounded-lg object-cover aspect-square"
                            width={720}
                            height={480}
                            quality={70}
                        />
                        <div className="bg-orange-500 text-white text-sm font-medium rounded px-4 py-2 ">
                            {data.tokoh2.name}{" "}
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="mb-4 text-left md:text-xl">
                            {data.tokoh2.description}{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
