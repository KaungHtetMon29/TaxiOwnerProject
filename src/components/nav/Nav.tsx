import Home from "@/pages";
import { Homebutton, Engineoil, Avatar } from "@/assets/icons";
import Active from "./active";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav(props: { children: React.ReactNode }) {
  const router = useRouter();
  const pathcheck = (route: string) => {
    if (route === router.asPath.split("/")[1]) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
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
