import React, {useState} from "react";
import { 
  Stack,
  Typography,
  Checkbox,
  Button,
  OutlinedInput,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton 
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { propertySquare } from "@/libs/config";

const Filter = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);
  const [propertyPrice, setPropertyPrice] = useState({
    start: 0,
    end: 250000,
  });

  return (
    <Stack className={"filter-main"}>
      <Stack className={"find-your-home"} mb={"40px"}>
        <Typography className={"title-main"}>Find Your Home</Typography>
        <Stack className={"input-box"}>
          <OutlinedInput
            value={searchText}
            type={"text"}
            className={"search-input"}
            placeholder={"What are you looking for?"}
            onChange={(e: any) => setSearchText(e.target.value)}
          />
          <img src={"/img/icons/search_icon.png"} alt={""} />
          <Tooltip title="Reset">
            <IconButton>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
      <Stack className={"find-your-home"} mb={"30px"}>
        <p className={"title"} style={{ textShadow: "0px 3px 4px #b9b9b9" }}>
          Location
        </p>
        <Stack 
          className={`property-location`}
          style={{ height: showMore ? "253px" : "115px" }}
        >
          {["SEOUL", "BUSAN", "DAEGU"].map((location: string) => {
            return (
              <Stack className={"input-box"} key={location}>
                <Checkbox
                  id={location}
                  className={"property-checkbox"}
                  color="default"
                  size="small"
                  value={location}
                  checked={false}
                />
                <label htmlFor={location} style={{ cursor: "pointer" }}>
                  <Typography className={"property-type"}>{location}</Typography>
                </label>
              </Stack>
            );
          })}
        </Stack>
      </Stack> 
      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Property Type</Typography>
        {["APARTMENT", "HOUSE", "VILLA"].map((type: string) => (
          <Stack className={"input-box"} key={type}>
            <Checkbox
              id={type}
              className={"property-checkbox"}
              color="default"
              size="small"
              value={type}
            />
            <label>
              <Typography className={"property-type"}>{type}</Typography>
            </label>
          </Stack>
        ))}
      </Stack>
      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Rooms</Typography>
        <Stack className={"button-group"}>
          <Button
            sx={{
              borderRadius: "12px 0 0 12px",
              border: "1px solid #b9b9b9"
            }}
          >
            Any
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
          >
            1
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
          >
            2
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
          >
            3
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
          >
            4
          </Button>
          <Button
            sx={{
              borderRadius: "0 12px 12px 0",
              border: "1px solid #b9b9b9"
            }}
          >
            5+
          </Button>
        </Stack>
      </Stack>
      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Bedrooms</Typography>
        <Stack className={"button-group"}>
          <Button
            sx={{
              borderRadius: "12px 0 0 12px",
              border: "1px solid #b9b9b9"
            }}
          >
            Any
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
          >
            1
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
          >
            2
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
          >
            3
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
          >
            4
          </Button>
          <Button
            sx={{
              borderRadius: "0 12px 12px 0",
              border: "1px solid #b9b9b9"
            }}
          >
            5+
          </Button>
        </Stack>
      </Stack>
      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Options</Typography>
        <Stack className={"input-box"}>
          <Checkbox
              id={"Barter"}
              className={"property-checkbox"}
              color="default"
              size="small"
              value={"propertyBarter"}
            />
            <label htmlFor={"Barter"} style={{ cursor: "pointer" }}>
              <Typography className={"property-type"}>Barter</Typography>
            </label>
        </Stack>
        <Stack className={"input-box"}>
          <Checkbox
              id={"Rent"}
              className={"property-checkbox"}
              color="default"
              size="small"
              value={"propertyRent"}
            />
            <label htmlFor={"Rent"} style={{ cursor: "pointer" }}>
              <Typography className={"property-type"}>Rent</Typography>
            </label>
        </Stack>
      </Stack>
      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Square meter</Typography>
        <Stack className={"square-year-input"}>
          <FormControl>
            <InputLabel id={"demo-simple-select-label"}>Min</InputLabel>
            <Select
              labelId={"demo-simple-select-label"}
              id={"demo-simple-select"}
              value={0}
              label="Min"
            >
              {propertySquare.map((square: number) => (
                <MenuItem value={square} key={square}>
                  {square}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className={"central-divider"}></div>
          <FormControl>
            <InputLabel id={"demo-simple-select-label"}>Max</InputLabel>
            <Select
              labelId={"demo-simple-select-label"}
              id={"demo-simple-select"}
              value={500}
              label="Max"
            >
              {propertySquare.map((square: number) => (
                <MenuItem value={square} key={square}>
                  {square}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Price Range</Typography>
        <Stack className={"square-year-input"}>
          <input
            type="number"
            placeholder="$ min"
            min={0}
            value={propertyPrice?.start ?? 0}
            onChange={(e: any) => {
              console.log("value: ", e.target.value);
              if (e.target.value >= 0) {
                setPropertyPrice({ ...propertyPrice, start: e.target.value });
              }
            }}
          />
          <div className={"central-divider"}></div>
          <input
            type="number"
            placeholder="$ max"
            value={propertyPrice?.end ?? 0}
            onChange={(e: any) => {
              console.log("value: ", e.target.value);
              if (e.target.value >= 0) {
                setPropertyPrice({ ...propertyPrice, end: e.target.value });
              }
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}; 

export default Filter;