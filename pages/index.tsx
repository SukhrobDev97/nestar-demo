import { Stack } from "@mui/material";
import { NextPage } from "next";
import withLayoutMain from "@/libs/components/layout/LayOutHome";
import TrendProperties from "@/libs/components/homePage/TrendProperties";
import PopularProperties from "@/libs/components/homePage/PopularProperties";
import Advertisement from "@/libs/components/homePage/Advertisement";
import TopProperties from "@/libs/components/homePage/TopProperties";
import TopAgents from "@/libs/components/homePage/TopAgents";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const Home: NextPage = () => {
  
  const  device  = useDeviceDetect()

  if(device === "mobile") {
    return <Stack>HOME PAGE</Stack>
  }else{
    return (
      <Stack className={"home-page"}>
        <TrendProperties />
        <PopularProperties />
        <Advertisement />
        <TopProperties />
        <TopAgents />
      </Stack>
    );
  }

};

export default withLayoutMain(Home);
