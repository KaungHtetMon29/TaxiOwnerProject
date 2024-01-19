import DriverForm from "@/components/driverform/driverform";
import Plus from "@/components/plus/Plus";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export type mode = "form" | "button";
function NormallistLayout(props: { children: React.ReactNode }) {
  const router = useRouter();
  const [moodle, setmoodle] = useState<mode>("button");
  return (
    <>
      <Head>
        <title>
          {router.asPath.split("/")[router.asPath.split("/").length - 1]}
        </title>
      </Head>
      <div className="relative">
        {moodle === "button" ? (
          <Plus setmoodle={setmoodle} />
        ) : (
          <DriverForm setmoodle={setmoodle} />
        )}
        <div className="pt-6 pb-20 px-4 gap-4 flex flex-col items-center">
          {props.children}
        </div>
      </div>
    </>
  );
}
export default NormallistLayout;
