function NormallistLayout(props: { children: React.ReactNode }) {
  return (
    <div className="px-4 gap-4 flex flex-col justify-center">
      {props.children}
    </div>
  );
}
export default NormallistLayout;
