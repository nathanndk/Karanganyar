import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/molekuls/Sidebar/Index";

const inter = Inter({ subsets: ["latin"] });
import List from "@/components/organism/BaseCrud/List";
import products from "@/models/hero";

export default function Home() {
  return (
    <>
      <Sidebar />
      <List models={products} />
    </>
  );
}
