import Detailcard from "@/components/maintenancecard/maintenancecard";
import Breadcumb from "@/components/nav/breadcumbnav";

function Detailcar() {
  return (
    <Breadcumb>
      <div className="items-center flex flex-col gap-6 mt-2">
        <Detailcard />
      </div>
    </Breadcumb>
  );
}
export default Detailcar;
