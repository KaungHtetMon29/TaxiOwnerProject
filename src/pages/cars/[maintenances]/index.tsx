import MaintenanceHistoryCard from "@/components/maintenancecard/historycard";
import Detailcard from "@/components/maintenancecard/maintenancecard";
import Breadcumb from "@/components/nav/breadcumbnav";
import Listlayouts from "@/layout/listlayout";
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
