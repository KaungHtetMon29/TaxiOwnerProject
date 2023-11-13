import { DriverDetail } from "../driver/drivercard";

export default function EngineOilCard() {
  return (
    <div className="shadow-md w-[340px] bg-primary font-normal p-6 rounded-xl gap-4 flex flex-col text-justify">
      <DriverDetail header="Driver Name" />
      <DriverDetail header="Licence Number" />
    </div>
  );
}
