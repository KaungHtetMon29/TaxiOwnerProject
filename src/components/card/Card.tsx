import Link from "next/link";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Card as MUICard,
  Typography,
} from "@mui/material";
import { theme } from "@/pages/_app";

function Cardframe(props: {
  children: React.ReactNode;
  path: string;
  content: string;
  title: string;
  icon: any;
}) {
  return (
    <MUICard
      className="sm:w-[500px] w-[320px]"
      sx={{ borderRadius: 3, padding: 2 }}
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <CardHeader
        sx={{ padding: 1 }}
        title={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {props.icon}
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: 26,
              }}
            >
              {props.title}
            </Typography>
          </Box>
        }
        style={{ fontWeight: "bold" }}
      />
      <CardContent sx={{ padding: 1 }}>
        <Typography variant="body1">{props.content}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          size="medium"
          endIcon={<ArrowRightIcon />}
          variant="contained"
          style={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
          }}
        >
          <Link href={`/${props.path}`}>Details</Link>
        </Button>
      </CardActions>
    </MUICard>
  );
}
export default Cardframe;
{
  /* <Link
      className="w-80 h-52 bg-primary rounded-xl p-8 shadow-lg"
      href={`/${props.path}`}
    >
      {props.children}
    </Link> */
}
