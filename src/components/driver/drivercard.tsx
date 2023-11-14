type driver = {
  licenceNumber: number;
  address: string;
  phoneNumber: string;
  name: string;
};
function DriverCard({ data }: { data: driver }) {
  return (
    <div className="shadow-md w-[340px] bg-primary font-normal p-6 rounded-xl gap-4 flex flex-col text-justify">
      <DriverDetail header="Licence No" info={data.licenceNumber} />
      <DriverDetail header="Name" info={data.name} />
      <DriverDetail header="Address" info={data.address} />
      <DriverDetail header="PhoneNo" info={data.phoneNumber} />
    </div>
  );
}
export default DriverCard;
export function DriverDetail({
  header,
  info,
}: {
  header: string;
  info: string | number;
}) {
  return (
    <div className="w-full flex text-sm">
      <div className="w-1/3">{header}</div>
      <div className="w-2/3">{info}</div>
    </div>
  );
}
