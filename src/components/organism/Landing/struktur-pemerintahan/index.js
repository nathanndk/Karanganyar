import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";

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

  img {
    border-radius: 12px;
    width: 100%;
    height: 125px;
  }

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
        name: "Sri Hangrawity Suwismorini, SH.MM",
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
            image: "/images/struktur/SUNARTO.JPG",
            position: "Penjaga dan Kebersihan",
          },
        ],
      },
      {
        name: "Marjiyatno, SH",
        image: "/images/struktur/MARJIYATNO.JPG",
        position: "Kasi Pemerintahan",
        children: [
          {
            name: "Candra D, S.Pd",
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
            image: "/images/struktur/SUGIYONO.JPG",
            position: "Administrasi Lingkungan Hidup",
          },
          {
            name: "Ariyadi Nurhani, SE",
            image: "/images/struktur/ARIYADI_NURHANI.bmp",
            position: "Bela Negara",
          },
          {
            name: "Elvin Norran Azra",
            image: "",
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
        name: "Sularyo, S.Sos",
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
        <img
          src={data.image || "/user_avatar_placeholder.png"}
          alt={data.name}
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
              <img
                src={child.image || "/user_avatar_placeholder.png"}
                alt={child.name}
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
                    <img
                      src={grandChild.image || "/user_avatar_placeholder.png"}
                      alt={grandChild.name}
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

// const AdditionalInfo = ({ data }) => {
//   const members = extractMembers(data);

//   return (
//     <div className="mt-8 px-4 md:px-16">
//       <h2 className="text-xl lg:text-2xl font-bold text-center text-black dark:text-white">
//         Informasi Tambahan
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//         {members.map((member, index) => (
//           <div
//             key={index}
//             className="flex items-center rounded-lg shadow-md bg-white p-4"
//           >
//             <div className="w-1/3 h-full">
//               <img
//                 src={member.image || "/user_avatar_placeholder.png"}
//                 alt={member.name}
//                 className="rounded-lg h-full w-full object-cover"
//               />
//             </div>
//             <div className="w-2/3 pl-4">
//               <p className="font-semibold text-lg">{member.name}</p>
//               <p className="text-sm text-gray-600 dark:text-gray-300">
//                 {member.position}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// Function to extract all members
const extractMembers = (data, members = []) => {
  members.push({ name: data.name, position: data.position, image: data.image });

  if (data.children) {
    data.children.forEach((child) => extractMembers(child, members));
  }

  return members;
};

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
        {/* <AdditionalInfo data={orgChartData[0]} /> */}
      </div>
    </div>
  );
}
