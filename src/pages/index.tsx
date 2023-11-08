import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/card/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex items-center flex-col gap-8">
      <Card /> <Card /> <Card /> <Card />
    </div>
  );
}
