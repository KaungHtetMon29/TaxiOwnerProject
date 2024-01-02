import Image from "next/image";
import { Inter } from "next/font/google";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Card as MUICard,
  Typography,
} from "@mui/material";
import Card from "@/components/card/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex items-center flex-col gap-4 pt-6">
      <Card
        path="cars"
        content="Check details about cars"
        title="Cars"
        icon={<DirectionsCarFilledIcon sx={{ fontSize: 28 }} />}
      >
        <h1 className="text-2xl font-bold ">Cars</h1>
      </Card>
      <Card
        icon={<AccountCircleIcon sx={{ fontSize: 28 }} />}
        path="drivers"
        content="Check details about drivers"
        title="Drivers"
      >
        <h1 className="text-2xl font-bold ">Drivers</h1>
      </Card>
    </div>
  );
}
