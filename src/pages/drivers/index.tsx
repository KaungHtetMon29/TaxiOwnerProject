import DriverCard from "@/components/driver/drivercard";
import Breadcumb from "@/components/nav/breadcumbnav";
import Listlayouts from "@/layout/listlayout";
import NormallistLayout from "@/layout/normallistlayout";
import GetFetcher from "@/utils/getfetcher";

type fetchdriver = {
  data: [
    {
      licenceNumber: number;
      address: string;
      phoneNumber: string;
      name: string;
    }
  ];
};
function Drivers(props: { data: fetchdriver["data"] }) {
  return (
    <NormallistLayout>
      {props.data.map((e) => (
        <DriverCard data={e} key={e.licenceNumber} />
      ))}
    </NormallistLayout>
  );
}
export default Drivers;

export const getStaticProps = async () => {
  const data = await GetFetcher(
    "https://taxi-rental-helper-service.onrender.com/api/drivers"
  );
  return {
    props: { data: data },
    revalidate: 86400,
  };
};
