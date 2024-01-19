import { Box, Container } from "@mui/material";
import { Dispatch, SetStateAction, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
import { mode } from "@/layout/normallistlayout";

export default function Plus({
  setmoodle,
}: {
  setmoodle: Dispatch<SetStateAction<mode>>;
}) {
  const router = useRouter();
  return (
    <Container
      fixed
      className={`w-full h-[100vh] absolute ${
        router.pathname === "/drivers" || router.pathname === "/cars"
          ? "flex"
          : "hidden"
      }`}
    >
      <div
        className="bg-black w-fit rounded-full fixed z-[999] p-2 right-4 bottom-16"
        onClick={() => setmoodle("form")}
      >
        <AddIcon className="text-primary text-3xl" />
      </div>
    </Container>
  );
}
