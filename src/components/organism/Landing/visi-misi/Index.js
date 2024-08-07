import Image from "next/image";
import { Fragment } from "react";

export default function VisiMisi() {
  return (
    <Fragment>
      {/* Background Image with Overlay */}
      <div className="relative w-full h-screen">
        <Image
          src="/images/kelurahan-karanganyar.jpg"
          alt="Background with vision, mission"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/3 md:-translate-y-1/2 w-full px-4 lg:px-16 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Section */}
            <div>
              <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">VISI</h1>
              <p className="text-base lg:text-lg leading-relaxed mb-8">
                “Terwujudnya Kelurahan Karanganyar Sebagai Institusi Terpercaya
                Dalam Memberikan Pelayanan Yang Baik Kepada Masyarakat Dengan
                Pelayanan Yang Optimal”
              </p>
              <p className="text-base lg:text-lg leading-relaxed mb-8">
                Visi tersebut memiliki makna bahwa pelayanan prima dan segala
                upaya Pemerintah Kelurahan Karanganyar ditujukan untuk
                mewujudkan Kelurahan Karanganyar sebagai institusi terpercaya
                dalam melayani masyarakat Kelurahan Karanganyar.
              </p>
            </div>

            {/* Mission Section */}
            <div>
              <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">MISI</h1>
              <ol className="text-base lg:text-lg list-decimal pl-6 leading-relaxed">
                <li className="mb-4">
                  Meningkatkan kualitas pelayanan publik;
                </li>
                <li className="mb-4">
                  Meningkatkan kualitas Sumber Daya Manusia (SDM) Aparat
                  Pemerintah Kelurahan Karanganyar;
                </li>
                <li className="mb-4">Meningkatkan pemberdayaan perempuan;</li>
                <li className="mb-4">
                  Meningkatkan pemberdayaan masyarakat kelurahan;
                </li>
                <li className="mb-4">Meningkatkan keamanan dan ketertiban;</li>
                <li className="mb-4">
                  Meningkatkan rasa persatuan dan kesatuan serta persaudaraan
                  dalam masyarakat.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
