import Image from "next/image";
import React from "react";
import moment from "moment";
import "moment/locale/id";
import Link from "next/link";

export default function Index({ data }) {
  const activities = data.slice(0, 3) || []; // Limit the displayed cards to 3

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-6 md:px-20 py-8">
        <h2 className="text-center text-3xl font-bold mb-6 text-orange-500">
          Kegiatan <span className="text-black">Terbaru</span>
        </h2>
        <div className="flex flex-wrap justify-between items-start">
          {activities.length === 2 ? (
            <div className="flex flex-col md:flex-row w-full">
              {activities.map((activity, index) => (
                <div key={index} className="w-full md:w-1/2 p-4">
                  <Link href={`/kegiatan/detail?slug=${activity.slug}`}>
                    <div className="flex flex-col h-full cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden bg-white">
                      <Image
                        src={activity.image.preview}
                        alt={`Kegiatan ${index + 1}`}
                        className="w-full h-64 md:h-80 object-cover"
                        width={500}
                        height={500}
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-black line-clamp-2">
                          {activity.name}
                        </h3>
                        <p className="text-gray-600">
                          {moment(activity.date).format("LL")}
                        </p>
                        <p className="text-gray-600">
                          {moment(
                            moment(activity.date).format("YYYY-MM-DD") +
                              " " +
                              activity.start_time
                          ).format("LT")}{" "}
                          -{" "}
                          {moment(
                            moment(activity.date).format("YYYY-MM-DD") +
                              " " +
                              activity.end_time
                          ).format("LT")}
                        </p>
                        <p className="text-gray-600">{activity.location}</p>
                      </div>
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
                  <Link href={`/kegiatan/detail?slug=${activities[0].slug}`}>
                    <div className="flex flex-col h-full cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden bg-white">
                      <Image
                        src={activities[0].image.preview}
                        alt="Most Recent Activity"
                        className="w-full h-64 md:h-80 object-cover"
                        width={500}
                        height={500}
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-orange-500 line-clamp-2">
                          {activities[0].name}
                        </h3>
                        <p className="text-gray-600">
                          {moment(activities[0].date).format("LL")}
                        </p>
                        <p className="text-gray-600">
                          {moment(
                            moment(activities[0].date).format("YYYY-MM-DD") +
                              " " +
                              activities[0].start_time
                          ).format("LT")}{" "}
                          -{" "}
                          {moment(
                            moment(activities[0].date).format("YYYY-MM-DD") +
                              " " +
                              activities[0].end_time
                          ).format("LT")}
                        </p>
                        <p className="text-gray-600">{activities[0].location}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Next Two Recent Activities */}
              {activities.length > 1 && (
                <div className="w-full md:w-1/2 lg:w-1/2 p-4">
                  <div className="flex flex-col space-y-4">
                    {activities.slice(1, 3).map((activity, index) => (
                      <Link
                        key={index}
                        href={`/kegiatan/detail?slug=${activity.slug}`}
                      >
                        <div className="flex items-center space-x-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden bg-white p-4">
                          <Image
                            src={activity.image.preview}
                            alt={`Kegiatan ${index + 2}`}
                            className="w-32 h-32 md:w-64 md:h-40 object-cover"
                            width={200}
                            height={200}
                          />
                          <div>
                            <h4 className="text-lg font-semibold text-orange-500 line-clamp-2">
                              {activity.name}
                            </h4>
                            <p className="text-gray-600">
                              {moment(activity.date).format("LL")}
                            </p>
                            <p className="text-gray-600">
                              {moment(
                                moment(activity.date).format("YYYY-MM-DD") +
                                  " " +
                                  activity.start_time
                              ).format("LT")}{" "}
                              -{" "}
                              {moment(
                                moment(activity.date).format("YYYY-MM-DD") +
                                  " " +
                                  activity.end_time
                              ).format("LT")}
                            </p>
                            <p className="text-gray-600">
                              {activity.location}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
