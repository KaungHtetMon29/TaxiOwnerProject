function Active(props: { children: React.ReactNode; status: Boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      {props.children}
      {props.status && (
        <div className="w-[5px] h-[5px] rounded-full bg-primary"></div>
      )}
    </div>
  );
}
export default Active;
