import React, { useRef, useEffect, useState } from "react";
import { Stack, Box } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TopPropertyCard from "./TopPropertyCard";

// SwiperCore.use([Navigation, Pagination, Autoplay]);

const TopProperties = ({initialInput, ...props}: any) => {
  const [topProperties, setTopProperties] = useState<number[]>(initialInput);
  const swiperRef = useRef<any>(null);
  
    // useEffect(() => {
    //   if (swiperRef.current?.swiper) {
    //     swiperRef.current.swiper.navigation.update();
    //   }
    // }, []);

  return (
    <Stack className={"top-properties"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Top Properties</span>
            <p>Check out our top Properties</p>
          </Box>
          <Box className={"right"}>
            <div className={"pagination-box"}>
              <WestIcon className="swiper-top-prev" />
              <div className="swiper-top-pagination"></div>
              <EastIcon className="swiper-top-next" />
            </div>
          </Box>
        </Stack>
        <Stack className={"card-box"}>
          {topProperties.length === 0 ? (
            <Box className={"empty-list"}>Trends Empty</Box>
          ) : (
            <Swiper
            //   ref={swiperRef}
            //   modules={[Navigation, Pagination, Autoplay]}
              className={"top-property-swiper"}
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-top-next",
                prevEl: ".swiper-top-prev",
              }}
              pagination={{
                el: ".swiper-top-pagination",
                clickable: true,
              }}
              autoplay={{
                delay: 3000,       // ⏱️ Slide every 3 seconds
                disableOnInteraction: false, // ⬅️ Keep autoplay after user interaction
              }}
            >
              {topProperties.map((property, index) => (
                <SwiperSlide key={index} className={"top-property-slide"}>
                  <TopPropertyCard />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

TopProperties.defaultProps = {
  initialInput: [1, 2, 3, 4, 5, 6, 7]
}

export default TopProperties