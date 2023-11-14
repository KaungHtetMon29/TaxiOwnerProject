import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/card/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex items-center flex-col gap-4 pt-6">
      <Card path="cars">
        <h1 className="text-2xl font-bold ">Cars</h1>
      </Card>
      <Card path="drivers">
        <h1 className="text-2xl font-bold ">Drivers</h1>
      </Card>
    </div>
  );
}
