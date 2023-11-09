import Link from "next/link";
import { useRouter } from "next/router";

function Detailcard() {
  const router = useRouter();
  return (
    <div className="shadow-md w-[340px] bg-primary font-normal p-6 rounded-xl gap-8 flex flex-col text-justify">
      <Status header="Licence Number" />
      <Status header="Model" />
      <Status header="Owner Name" />
      <Status header="Driver Name" />
      <Status header="Fuel Type" />
      <Link
        href={`/cars/${router.asPath.split("/")[2]}/1`}
        className="font-bold"
      >
        Maintenance History
      </Link>
    </div>
  );
}
export default Detailcard;

export function Status({ header }: { header: string }) {
  return (
    <div className="w-full flex">
      <div className="w-1/2">{header}</div>
      <div className="w-1/2">test</div>
    </div>
  );
}
