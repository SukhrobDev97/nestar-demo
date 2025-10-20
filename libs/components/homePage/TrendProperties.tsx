import React, { useRef, useEffect } from "react";
import { Stack, Box } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import TrendPropertyCard from "./TrendPropertyCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ Register modules (required in v8.3.1)
// SwiperCore.use([Navigation, Pagination, Autoplay]);

const TrendProperties = () => {
  const swiperRef = useRef<any>(null);

//   useEffect(() => {
//     // ✅ Ensure swiper navigation is aware of DOM elements
//     if (swiperRef.current?.swiper) {
//       swiperRef.current.swiper.navigation.update();
//     }
//   }, []);

  const trendProperties = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Stack className={"trend-properties"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Trend Properties</span>
            <p>Trend is based on like</p>
          </Box>
          <Box className={"right"}>
            <div className={"pagination-box"}>
              <WestIcon className="swiper-trend-prev" />
              <div className="swiper-trend-pagination"></div>
              <EastIcon className="swiper-trend-next" />
            </div>
          </Box>
        </Stack>
        <Stack className={"card-box"}>
          {trendProperties.length === 0 ? (
            <Box className={"empty-list"}>Trends Empty</Box>
          ) : (
            <Swiper
            //   ref={swiperRef}
            //   modules={[Navigation, Pagination, Autoplay]}
              className={"trend-property-swiper"}
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-trend-next",
                prevEl: ".swiper-trend-prev",
              }}
              pagination={{
                el: ".swiper-trend-pagination",
                clickable: true,
              }}
              autoplay={{
                delay: 3000,       // ⏱️ Slide every 3 seconds
                disableOnInteraction: false, // ⬅️ Keep autoplay after user interaction
              }}
            >
              {trendProperties.map((property, index) => (
                <SwiperSlide key={index} className={"trend-property-slide"}>
                  <TrendPropertyCard />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TrendProperties;