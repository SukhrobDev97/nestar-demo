import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PropertyCard = () => {
  const imagePath: string = "/img/banner/header1.svg";

  return (
    <Stack className={"card-config"}>
      <Stack className={"top"}>
        <Link
          href={{
            pathname: "/property/detail",
            query: { id: "test123sdijfsdf" },
          }}
        >
          <img src={imagePath} alt="" />
        </Link>
        <Box className={"top-badge"}>
          <img src="/img/icons/electricity.svg" />
          <Typography>TOP</Typography>
        </Box>
        <Box className={"price-box"}>
          <Typography>$250000</Typography>
        </Box>
      </Stack>
      <Stack className={"bottom"}>
        <Stack className={"name-address"}>
          <Stack className={"name"}>
            <Link
              href={{
                pathname: "/property/detail",
                query: { id: "test123sdijfsdf" },
              }}
            >
              <Typography>Kingstone apartments</Typography>
            </Link>
          </Stack>
          <Stack className={"address"}>
            <Typography>Busan, City Center 200 - 5</Typography>
          </Stack>
        </Stack>
        <Stack className={"options"}>
          <Stack className={"option"}>
            <img src="/img/icons/bed.svg" alt="" />
            <Typography>2 bed</Typography>
          </Stack>
          <Stack className={"option"}>
            <img src="/img/icons/bed.svg" alt="" />
            <Typography>7 rooms</Typography>
          </Stack>
          <Stack className={"option"}>
            <img src="/img/icons/bed.svg" alt="" />
            <Typography>170 sq.m.</Typography>
          </Stack>
        </Stack>
        <Stack className={"divider"}></Stack>
        <Stack className={"type-buttons"}>
          <Stack className={"type"}>
            <Typography
              sx={{ fontWeight: 500, fontSize: "13px" }}
            >
              Rent
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              Barter
            </Typography>
          </Stack>
          <Stack className={"buttons"}>
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className={"view-cnt"}>100</Typography>
            <IconButton color={"default"}>
              <FavoriteIcon color={"primary"} />
            </IconButton>
            <Typography className={"view-cnt"}>20</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PropertyCard;
