import Head from "next/head";
import { useRouter } from "next/router";

function NormallistLayout(props: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          {router.asPath.split("/")[router.asPath.split("/").length - 1]}
        </title>
      </Head>
      <div className="px-4 gap-4 flex flex-col items-center pt-6">
        {props.children}
      </div>
    </>
  );
}
export default NormallistLayout;
