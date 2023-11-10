function Listlayouts(props: { children: React.ReactNode }) {
  return (
    <div className="items-center flex flex-col gap-8 mt-8">
      {props.children}
    </div>
  );
}
export default Listlayouts;
