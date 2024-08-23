import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Image from "next/image";

// Dynamic import for client-side rendering
const Tree = dynamic(
  () => import("react-organizational-chart").then((mod) => mod.Tree),
  { ssr: false }
);
const TreeNode = dynamic(
  () => import("react-organizational-chart").then((mod) => mod.TreeNode),
  { ssr: false }
);

// Styled component for the nodes
const StyledNode = styled.div`
  border-radius: 12px;
  display: inline-block;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  text-align: center;
  font-family: Poppins, sans-serif;
  width: 100px;
  max-width: 100%;
  word-wrap: break-word;

  .name {
    font-weight: bold;
    margin: 8px 0;
    font-size: 0.8em;
  }

  .position {
    font-size: 0.8em;
    color: #555;
  }

  @media (max-width: 768px) {
    width: 80px;

    .name {
      font-size: 0.8em;
    }

    .position {
      font-size: 0.7em;
    }
  }

  @media (max-width: 480px) {
    width: 70px;

    .name {
      font-size: 0.75em;
    }

    .position {
      font-size: 0.65em;
    }
  }
`;

const orgChartData = [
  {
    name: "Sugimin, S.Sos",
    image: "/images/struktur/SUGIMIN.jpg",
    position: "Lurah Karanganyar",
    children: [
      {
        name: "Sri Hangrawiti Suwismorini, SH.MM",
        image: "/images/struktur/SRI_SULAMI.jpg",
        position: "Sekretaris",
        children: [
          {
            name: "Kosong",
            image: "",
            position: "Administrasi Keuangan",
          },
          {
            name: "Sri Sulami",
            image: "/images/struktur/SRI_SULAMI.jpg",
            position: "Administrasi Umum",
          },
          {
            name: "Dwi Sulistyowati, SE",
            image: "/images/struktur/DWI_SULISTYOWATI.bmp",
            position: "Sekretariat Umum",
          },
          {
            name: "Sunarto",
            image: "/images/struktur/SUNARTO.jpg",
            position: "Penjaga dan Kebersihan",
          },
        ],
      },
      {
        name: "Marjiyatno, SH",
        image: "/images/struktur/MARJIYATNO.jpg",
        position: "Kasi Pemerintahan",
        children: [
          {
            name: "Candra Damayanti, S. Pd",
            image: "/images/struktur/CANDRA_DAMAYANTI.jpeg",
            position: "Administrasi Umum",
          },
          {
            name: "Dyan Sarwosih, SE",
            image: "/images/struktur/DYAN_SARWOSIH.bmp",
            position: "Administrasi Lingkungan",
          },
          {
            name: "Sugiyono",
            image: "/images/struktur/SUGIYONO.jpg",
            position: "Administrasi Lingkungan Hidup",
          },
          {
            name: "Ariyadi Nurhani, SE",
            image: "/images/struktur/ARIYADI_NURHANI.bmp",
            position: "Bela Negara",
          },
          {
            name: "Elvin Norrivai Azra",
            image: "/images/struktur/ELVIN.jpeg",
            position: "Pelayanan Masyarakat",
          },
        ],
      },
      {
        name: "Gatot Triyanto, SE",
        image: "/images/struktur/GATOT_TRIYANTO.jpg",
        position: "Kasi Kesejahteraan Sosial",
      },
      {
        name: "Sularso, S.Sos",
        image: "",
        position: "Kasi Kesejahteraan Sosial",
      },
    ],
  },
];

const OrganizationalChart = ({ data }) => (
  <Tree
    lineWidth={"2px"}
    lineColor={"#ddd"}
    lineBorderRadius={"10px"}
    label={
      <StyledNode>
        <Image
          src={data.image || "/user_avatar_placeholder.png"}
          alt={data.name}
          layout="intrinsic"
          width={100}
          height={125}
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="name">{data.name}</div>
        <div className="position">{data.position}</div>
      </StyledNode>
    }
  >
    {data.children &&
      data.children.map((child, index) => (
        <TreeNode
          key={index}
          label={
            <StyledNode>
              <Image
                src={child.image || "/user_avatar_placeholder.png"}
                alt={child.name}
                layout="intrinsic"
                width={100}
                height={125}
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="name">{child.name}</div>
              <div className="position">{child.position}</div>
            </StyledNode>
          }
        >
          {child.children &&
            child.children.map((grandChild, index) => (
              <TreeNode
                key={index}
                label={
                  <StyledNode>
                    <Image
                      src={grandChild.image || "/user_avatar_placeholder.png"}
                      alt={grandChild.name}
                      layout="intrinsic"
                      width={100}
                      height={125}
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <div className="name">{grandChild.name}</div>
                    <div className="position">{grandChild.position}</div>
                  </StyledNode>
                }
              />
            ))}
        </TreeNode>
      ))}
  </Tree>
);

export default function Index() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl lg:text-4xl font-bold mt-12 mb-5 text-center text-black dark:text-white">
          Struktur <span className="text-orange-500">Pemerintahan</span>
        </h1>
        <div className="overflow-x-auto">
          <OrganizationalChart data={orgChartData[0]} />
        </div>
      </div>
    </div>
  );
}
