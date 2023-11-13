import MaintenanceHistoryCard from "@/components/maintenancecard/historycard";
import Detailcard from "@/components/maintenancecard/maintenancecard";
import Breadcumb from "@/components/nav/breadcumbnav";
import Listlayouts from "@/layout/listlayout";
import GetFetcher from "@/utils/getfetcher";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Maintenances() {
  const router = useRouter();
  return (
    <>
      <Breadcumb />
      <Listlayouts>
        <MaintenanceHistoryCard />
        <MaintenanceHistoryCard />
        <MaintenanceHistoryCard />
        <MaintenanceHistoryCard />
        <MaintenanceHistoryCard />
        <MaintenanceHistoryCard />
      </Listlayouts>
    </>
  );
}
export default Maintenances;
export const getStaticPaths = async () => {
  const data = await GetFetcher(
    "https://taxi-rental-helper-service.onrender.com/api/cars"
  );
  const paths = data.map((e: any) => ({
    params: { maintenances: e.licenceNumber },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const data = await GetFetcher(
    `https://taxi-rental-helper-service.onrender.com/api/maintenances?carLicenceNumber=${params.maintenances}`
  );
  console.log(data);
  return { props: {}, revalidate: 86400 };
};
