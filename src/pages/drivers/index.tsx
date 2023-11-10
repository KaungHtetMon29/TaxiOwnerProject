import DriverCard from "@/components/driver/drivercard";
import Breadcumb from "@/components/nav/breadcumbnav";
import Listlayouts from "@/layout/listlayout";
import NormallistLayout from "@/layout/normallistlayout";

function Drivers() {
  return (
    <NormallistLayout>
      <DriverCard />
      <DriverCard />
      <DriverCard />
      <DriverCard />
    </NormallistLayout>
  );
}
export default Drivers;
