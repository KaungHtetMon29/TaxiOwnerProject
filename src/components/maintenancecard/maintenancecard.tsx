import Link from "next/link";
import { useRouter } from "next/router";

function Detailcard({
  licenceNumber,
  image,
  model,
  ownerName,
  driverName,
  fuelType,
}: {
  licenceNumber: string;
  image?: string;
  model: string;
  ownerName: string;
  driverName: string;
  fuelType: string;
}) {
  return (
    <div className="shadow-md w-[340px] bg-primary font-normal p-6 rounded-xl gap-8 flex flex-col text-justify">
      <Status header="Licence Number" info={licenceNumber} />
      <Status header="Model" info={model} />
      <Status header="Owner Name" info={ownerName} />
      <Status header="Driver Name" info={driverName} />
      <Status header="Fuel Type" info={fuelType} />
      <Link href={`/cars/${licenceNumber}`} className="font-bold">
        Maintenance History
      </Link>
    </div>
  );
}
export default Detailcard;
export function Status({ header, info }: { header: string; info: string }) {
  return (
    <div className="w-full flex">
      <div className="w-1/2">{header}</div>
      <div className="w-1/2">{info}</div>
    </div>
  );
}
