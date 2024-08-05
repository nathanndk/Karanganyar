import Image from "next/image";
import React from "react";
import moment from "moment";
import "moment/locale/id";
import Link from "next/link";

export default function Index({ data }) {
    const activities = data || [];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-center text-3xl font-bold mb-6 text-orange-500">
                Kegiatan <span className="text-black">Terbaru</span>
            </h2>
            <div className="flex flex-wrap justify-between items-start">
                {activities.length === 2 ? (
                    <div className="flex flex-col md:flex-row w-full">
                        {activities.slice(0, 2).map((activities, index) => (
                            <div key={index} className="w-full md:w-1/2 p-4">
                                <Link
                                    href={`/kegiatan/detail?slug=${activities.slug}`}
                                >
                                    <div className="flex flex-col h-full">
                                        <Image
                                            src={activities.image.preview}
                                            alt={`Kegiatan ${index + 1}`}
                                            className="w-full h-64 md:h-80 rounded-lg mb-4 object-cover"
                                            width={500}
                                            height={500}
                                        />
                                        <h3 className="text-xl font-semibold text-orange-500">
                                            {activities.name}
                                        </h3>
                                        <p className="text-gray-600">
                                            {moment(activities.date).format(
                                                "LL"
                                            )}
                                        </p>
                                        <p className="text-gray-600">
                                            {moment(
                                                moment(activities.date).format(
                                                    "YYYY-MM-DD"
                                                ) +
                                                    " " +
                                                    activities.start_time
                                            ).format("LT")}{" "}
                                            -{" "}
                                            {moment(
                                                moment(activities.date).format(
                                                    "YYYY-MM-DD"
                                                ) +
                                                    " " +
                                                    activities.end_time
                                            ).format("LT")}
                                        </p>
                                        <p className="text-gray-600">
                                            {activities.location}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {/* Most Recent Activities */}
                        {activities.length > 0 && (
                            <div className="w-full md:w-1/2 lg:w-1/2 p-4">
                                <Link
                                    href={`/kegiatan/detail?slug=${activities[0].slug}`}
                                >
                                    <div className="flex flex-col h-full">
                                        <Image
                                            src={activities[0].image.preview}
                                            alt="Most Recent Activities"
                                            className="w-full h-64 md:h-80 rounded-lg mb-4 object-cover"
                                            width={500}
                                            height={500}
                                        />
                                        <h3 className="text-xl font-semibold text-orange-500">
                                            {activities[0].name}
                                        </h3>
                                        <p className="text-gray-600"></p>
                                        <p className="text-gray-600">
                                            {moment(
                                                moment(
                                                    activities[0].date
                                                ).format("YYYY-MM-DD") +
                                                    " " +
                                                    activities[0].start_time
                                            ).format("LT")}{" "}
                                            -{" "}
                                            {moment(
                                                moment(
                                                    activities[0].date
                                                ).format("YYYY-MM-DD") +
                                                    " " +
                                                    activities[0].end_time
                                            ).format("LT")}
                                        </p>
                                        <p className="text-gray-600">
                                            {activities[0].location}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        )}

                        {/* Next Two Recent Activities */}
                        {activities.length > 1 && (
                            <div className="w-full md:w-1/2 lg:w-1/2 p-4">
                                <div className="flex flex-col space-y-4">
                                    {activities
                                        .slice(1, 4)
                                        .map((activities, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center space-x-4"
                                            >
                                                <Image
                                                    src={
                                                        activities.image.preview
                                                    }
                                                    alt={`Kegiatan ${
                                                        index + 2
                                                    }`}
                                                    className="w-32 h-32 md:w-64 md:h-40 rounded-lg object-cover"
                                                    width={200}
                                                    height={200}
                                                />
                                                <div>
                                                    <h4 className="text-lg font-semibold text-orange-500">
                                                        {activities.name}
                                                    </h4>
                                                    <p className="text-gray-600">
                                                        {moment(
                                                            activities.date
                                                        ).format("LL")}
                                                    </p>
                                                    <p className="text-gray-600">
                                                        {moment(
                                                            moment(
                                                                activities.date
                                                            ).format(
                                                                "YYYY-MM-DD"
                                                            ) +
                                                                " " +
                                                                activities.start_time
                                                        ).format("LT")}{" "}
                                                        -{" "}
                                                        {moment(
                                                            moment(
                                                                activities.date
                                                            ).format(
                                                                "YYYY-MM-DD"
                                                            ) +
                                                                " " +
                                                                activities.end_time
                                                        ).format("LT")}
                                                    </p>
                                                    <p className="text-gray-600">
                                                        {activities.location}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
