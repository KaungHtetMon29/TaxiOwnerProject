import Link from "next/link";

function Cardframe(props: { children: React.ReactNode; path: string }) {
  return (
    <Link
      className="w-80 h-52 bg-primary rounded-xl p-8 shadow-lg"
      href={`/${props.path}`}
    >
      {props.children}
    </Link>
  );
}
export default Cardframe;
