function MaintenanceHistoryCard() {
  return (
    <div className="shadow-md w-[340px] bg-primary font-normal px-6 py-4 rounded-xl gap-4 flex flex-col text-justify">
      <HistoryDetail header="Date" />
      <HistoryDetail header="Parts" />
    </div>
  );
}
export default MaintenanceHistoryCard;
export function HistoryDetail({ header }: { header: string }) {
  return (
    <div className="w-full flex text-sm">
      <div className="w-1/3">{header}</div>
      <div className="w-2/3">test</div>
    </div>
  );
}
