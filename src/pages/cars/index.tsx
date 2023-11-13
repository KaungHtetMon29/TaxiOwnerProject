import Detailcard from "@/components/maintenancecard/maintenancecard";
import Breadcumb from "@/components/nav/breadcumbnav";
import Listlayouts from "@/layout/listlayout";
import NormallistLayout from "@/layout/normallistlayout";

type fetchdata = {
  data: [
    {
      licenceNumber: string;
      image: string;
      model: string;
      ownerName: string;
      driverName: string;
      fuelType: string;
    }
  ];
};
function Detailcar(props: { data: fetchdata["data"] }) {
  return (
    <NormallistLayout>
      {props.data &&
        props.data.map((e: any) => (
          <Detailcard
            key={e.licenceNumber}
            licenceNumber={e.licenceNumber}
            model={e.model}
            ownerName={e.ownerName}
            driverName={e.driverName}
            fuelType={e.fuelType}
          />
        ))}
    </NormallistLayout>
  );
}
export default Detailcar;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://taxi-rental-helper-service.onrender.com/api/cars"
  );
  const data = await res.json();
  return {
    props: {
      data: data,
    },
    revalidate: 86400,
  };
};
