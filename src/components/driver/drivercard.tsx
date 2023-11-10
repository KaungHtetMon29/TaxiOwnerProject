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
    <div className="w-full flex">
      <div className="w-1/3">{header}</div>
      <div className="w-2/3">test</div>
    </div>
  );
}
