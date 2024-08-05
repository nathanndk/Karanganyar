import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/molekuls/Sidebar/Index";

const inter = Inter({ subsets: ["latin"] });
import List from "@/components/organism/BaseCrud/List";
import products from "@/models/activities";

export default function Home() {
    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-800">
                <Sidebar />
                <List models={products} />
            </div>
        </>
    );
}
