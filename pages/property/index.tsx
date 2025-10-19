import withLayoutBasic from "@/libs/components/layout/LayOutBasic"
import { Container, Stack } from "@mui/material"
import { NextPage } from "next"

const PropertyList: NextPage = () =>{
    return( 
     <div style={{margin: "20px 0"}}>
        <Stack className={"container"}>Property List</Stack>
     </div>
    )
}

export default withLayoutBasic(PropertyList)