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
import { useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "@/apollo/user/query";

const Home: NextPage = () => {
  
  const  device  = useDeviceDetect()

  const {
    loading: getPropertiesLoading,
    data: getPropertiesData,
    error: getPropertiesError
  } = useQuery(GET_PROPERTIES, {
    fetchPolicy: "network-only",
    variables: {
      input:{
          page: 1,
          limit: 5,
          sort: "createdAt",
          direction: "DESC",
          search:{}
  
      }
  }
  })
  console.log("getPropertiesData: ", getPropertiesData)
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
