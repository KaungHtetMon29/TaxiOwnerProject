import Home from "@/pages/index";
import { Homebutton, Engineoil, Avatar } from "@/assets/icons";
import Active from "./active";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav(props: { children: React.ReactNode }) {
  const router = useRouter();
  const pathcheck = (route: string) => {
    if (route === router.asPath.split("/")[1]) {
      return true;
    } else if (
      router.asPath.split("/")[1] === "cars" &&
      route !== "engineoil" &&
      route !== "profile"
    ) {
      return true;
    } else if (
      router.asPath.split("/")[1] === "drivers" &&
      route !== "engineoil" &&
      route !== "profile"
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="font-segoe">
      {props.children}
      <div className="fixed bottom-0 flex w-full justify-center gap-24 items-center h-14 bg-black">
        <Link href={"/"}>
          <Active status={pathcheck("")}>
            <Homebutton fill="#FCCB06" />
          </Active>
        </Link>
        <Link href={"/engineoil"}>
          <Active status={pathcheck("engineoil")}>
            <Engineoil fill="#FCCB06" />
          </Active>
        </Link>
        <Link href={"/profile"}>
          <Active status={pathcheck("profile")}>
            <Avatar fill="#FCCB06" />
          </Active>
        </Link>
      </div>
    </div>
  );
}
export default Nav;
