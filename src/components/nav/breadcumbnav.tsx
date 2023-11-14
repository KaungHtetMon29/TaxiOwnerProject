import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

function Breadcumb() {
  const router = useRouter();
  const route: ReactNode[] = router.asPath.split("/");
  return (
    <div className="flex gap-2 bg-black text-primary py-2 px-2 sticky top-0 text-base">
      {route.map((e, i) => (
        <Link
          href={`${i === 2 ? `/cars/${e}` : `/${e}`}`}
          key={i}
          className="font-normal gap-2"
        >
          <div className="flex">
            {e}{" "}
            {route.length === 4
              ? i === 1 || i === 2
                ? "/"
                : ""
              : i === 1
              ? "/"
              : ""}
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Breadcumb;
