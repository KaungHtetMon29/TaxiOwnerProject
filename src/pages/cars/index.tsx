import Detailcard from "@/components/maintenancecard/maintenancecard";
import Breadcumb from "@/components/nav/breadcumbnav";
import Listlayouts from "@/layout/listlayout";
import NormallistLayout from "@/layout/normallistlayout";

function Detailcar() {
  return (
    <NormallistLayout>
      <Detailcard />
      <Detailcard />
      <Detailcard />
      <Detailcard />
    </NormallistLayout>
  );
}
export default Detailcar;
