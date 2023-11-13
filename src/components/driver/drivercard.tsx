function DriverCard() {
  return (
    <div className="shadow-md w-[340px] bg-primary font-normal p-6 rounded-xl gap-8 flex flex-col text-justify">
      <DriverDetail header="Licence No" />
      <DriverDetail header="Name" />
      <DriverDetail header="Address" />
      <DriverDetail header="PhoneNo" />
    </div>
  );
}
export default DriverCard;
export function DriverDetail({ header }: { header: string }) {
  return (
    <div className="w-full flex text-sm">
      <div className="w-1/2">{header}</div>
      <div className="w-1/2">test</div>
    </div>
  );
}
