import React from "react";
import Image from "next/image";

export default function Index() {
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-white flex items-center justify-center">
            {/* <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500">
                <span className="sr-only">Loading...</span>
            </div> */}
            <div className="flex flex-col items-center">
                <div className="flex flex-row items-center">
                    <Image
                        src="/images/logo.png"
                        alt="Logo karangjatih"
                        width={500}
                        height={500}
                        className="h-32 w-32"
                    />
                    <h1 className="text-3xl font-bold text-orange-500">
                        karangjatih
                    </h1>
                </div>
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-500">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
}
