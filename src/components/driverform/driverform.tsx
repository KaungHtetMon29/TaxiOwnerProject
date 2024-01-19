import { mode } from "@/layout/normallistlayout";
import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export default function DriverForm({
  setmoodle,
}: {
  setmoodle: Dispatch<SetStateAction<mode>>;
}) {
  const date = new Date();
  return (
    <div className="w-full h-full absolute flex justify-center">
      <div className="w-full h-full backdrop-blur-sm"></div>
      <form className="flex flex-col gap-3 w-10/12 z-[9999] bg-black px-6 py-6 rounded-xl fixed top-8">
        <Custinput type="text" label="Licence Number" />
        <Custinput type="text" label="Select Image" />
        <Custinput type="text" label="Name" />
        <Custinput label="Address" type="text" />
        <Custinput label="Phone Number" type="text" />
        <div className="flex gap-4">
          <Custinput
            label="Birth Date"
            type="date"
            max={`${date.getFullYear() - 18}-${
              date.getMonth().toString().length !== 2
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1
            }-${date.getDate()}`}
          />
          <Custinput
            label="Joined Date"
            type="date"
            max={`${date.getFullYear()}-${
              date.getMonth().toString().length !== 2
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1
            }-${date.getDate()}`}
          />
        </div>
        <div className="mx-auto gap-8 flex">
          <button onClick={() => setmoodle("button")} className="text-white">
            Cancel
          </button>
          <button onClick={() => setmoodle("button")} className="text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export const Custinput: React.FC<
  InputHTMLAttributes<HTMLInputElement> & { label: string }
> = ({ label, className, ...props }) => {
  return (
    <div className={`text-sm w-full flex flex-col gap-2  ${className}`}>
      <label className="text-white">{label}</label>
      <input {...props} className={`p-2 w-full rounded-lg`} />
    </div>
  );
};
