import React, { useRef, useEffect, useState } from "react";
import { Stack, Box } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TopAgentsCard from "./TopAgentsCard";

// SwiperCore.use([Navigation, Pagination, Autoplay]);

const TopAgents = ({initialInput, ...props}: any) => {
  const [topAgents, setTopAgents] = useState<number[]>(initialInput);
  const swiperRef = useRef<any>(null);
  
    // useEffect(() => {
    //   if (swiperRef.current?.swiper) {
    //     swiperRef.current.swiper.navigation.update();
    //   }
    // }, []);

  return (
    <Stack className={"top-agents"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Top Agents</span>
            <p>Our top agents are always ready to serve you!</p>
          </Box>
          <Box className={"right"}>
            <div className="more-box">
              <Link href={"/agent"}>
                <span>See All Agents</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className={"wrapper"}>
          <Box className={"switch-btn swiper-agents-prev"}>
            <ArrowBackIosNewIcon />
          </Box>
          <Box className={"card-wrapper"}>
            <Swiper
              // ref={swiperRef}
              // modules={[Navigation, Pagination, Autoplay]}
              className={"top-agents-swiper"}
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-agents-next",
                prevEl: ".swiper-agents-prev",
              }}
              autoplay={{
                delay: 3000,       // ⏱️ Slide every 3 seconds
                disableOnInteraction: false, // ⬅️ Keep autoplay after user interaction
              }}
            >
              {topAgents.map((agent, index) => (
                <SwiperSlide key={index} className={"top-agents-slide"}>
                  <TopAgentsCard />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box className={"switch-btn swiper-agents-next"}>
            <ArrowBackIosNewIcon />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

TopAgents.defaultProps = {
  initialInput: [1, 2, 3, 4, 5, 6, 7]
}

export default TopAgents