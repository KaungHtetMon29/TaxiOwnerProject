import Link from "next/link";

function Carlistcard() {
  return (
    <Link
      className="bg-black w-full flex text-white rounded-full px-4 py-2 text-xl items-center"
      href={"cars/2"}
    >
      carno
    </Link>
  );
}
export default Carlistcard;
