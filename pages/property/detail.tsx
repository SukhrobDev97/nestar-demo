import withLayoutBasic from "@/libs/components/layout/LayOutBasic"
import useDeviceDetect from "@/libs/hooks/useDeviceDetect"
import { Container, Stack } from "@mui/material"
import { NextPage } from "next"

const PropertDetail: NextPage = () =>{

    const device = useDeviceDetect()
    if (device === "mobile"){
        return <Stack>Property detail mobile</Stack>
    }else{
        return( 
            <>
               <Container>Property Detail</Container>
            </>
           )
    }
   
}

export default withLayoutBasic (PropertDetail)