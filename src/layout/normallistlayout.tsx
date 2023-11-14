function NormallistLayout(props: { children: React.ReactNode }) {
  return (
    <div className="px-4 gap-4 flex flex-col items-center pt-6">
      {props.children}
    </div>
  );
}
export default NormallistLayout;
