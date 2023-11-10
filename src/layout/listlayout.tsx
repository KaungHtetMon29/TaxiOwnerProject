function Listlayouts(props: { children: React.ReactNode }) {
  return (
    <div className="items-center flex flex-col gap-4 mt-4">
      {props.children}
    </div>
  );
}
export default Listlayouts;
