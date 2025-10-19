import Head from "next/head";
import { Stack } from "@mui/material";
import Top from "../Top";
import Footer from "../Footer";

const withLayoutBasic = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>

        <Stack id="pc-wrap">

          <Stack id="top">
            <Top />
          </Stack>

          <Stack
            className={`header-basic`}
            style={{
              backgroundImage: `url(/img/banner/properties.png)`,
              backgroundSize: "cover",
              boxShadow: "inset 10px 40px 150px 40px rgb(24, 22, 36)",
              
            }}
          >
            <Stack className="container">
              <strong>Property Search</strong>
              <span>We are glad to see you again!</span>
            </Stack>
          </Stack>

          <Stack id="main">
            <Component {...props} />
          </Stack>

          <Stack id="footer">
            <Footer />
          </Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutBasic;
