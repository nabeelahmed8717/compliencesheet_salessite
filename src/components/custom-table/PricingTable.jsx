import React from "react";
import { Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function PricingTable({ data }) {
  return (
    <div style={{ padding: "0 0 0 20px" }}>
      <Grid
        container
        alignItems={"center"}
        spacing={{ md: 1.6, xs: 0.5 }}
        sx={{ p: { md: "25px", xs: "9px" } }}
      >
        {data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Grid
                item
                xl={7}
                lg={6.9}
                md={5.6}
                xs={5.5}
                py={2}
                sx={{
                  color: "#565666",
                  fontFamily: "Red Hat Display",
                }}
              >
                {item.name}
              </Grid>
              {item.isText === true ? (
                <>
                  <Grid
                    item
                    xl={3.8}
                    lg={3.5}
                    md={5}
                    sm={4.4}
                    xs={3.5}
                    sx={{
                      color: "#565666",
                      fontFamily: "Red Hat Display",
                      textAlign: "start",
                    }}
                  >
                    {item.Text}
                  </Grid>
                  <Grid
                    item
                    xl={1.2}
                    lg={1.4}
                    md={1.2}
                    sm={2}
                    xs={2.7}
                    sx={{
                      textAlign: "center",
                      color: "#565666",
                      fontFamily: "Red Hat Display",
                    }}
                  >
                    {item.Text2}
                  </Grid>
                  <Grid
                    item
                    xl={12}
                    sx={{ borderBottom: "1px solid #F0F2FC" }}
                  ></Grid>
                </>
              ) : (
                <>
                  {item.Text && item.image ? (
                    <>
                      <Grid
                        item
                        xl={12}
                        lg={12}
                        md={12}
                        xs={12}
                        sm={12}
                        sx={{ borderBottom: "1px solid #F0F2FC" }}
                      ></Grid>
                    </>
                  ) : (
                    <>
                      {" "}
                      {item.isIcon1 === true ? (
                        <Grid
                          item
                          xl={2.2}
                          lg={3}
                          xs={2.2}
                          sx={{ textAlign: "start", ml: "20px" }}
                        >
                          <CheckCircleIcon
                            style={{
                              color: item?.checkOne ? "#697AE2" : "#D2D7F6",
                            }}
                          />
                        </Grid>
                      ) : (
                        <>
                          {" "}
                          <Grid
                            item
                            xl={2.5}
                            lg={3.8}
                            xs={7}
                            sx={{
                              color: "#565666",
                              fontFamily: "Red Hat Display",
                              textAlign: "center",
                              pl: "14px",
                            }}
                          >
                            {item.Text}
                          </Grid>
                        </>
                      )}
                      {item.isIcon2 === true ? (
                        <Grid
                          item
                          xl={2.25}
                          lg={1.2}
                          md={3.4}
                          sm={3.1}
                          xs={2.6}
                          sx={{ textAlign: "end", mr: "15px" }}
                        >
                          <CheckCircleIcon
                            style={{
                              color: item?.checkOne2 ? "#D2D7F6" : "#697AE2",
                            }}
                          />
                        </Grid>
                      ) : (
                        <Grid
                          item
                          xl={2.5}
                          lg={1.6}
                          md={3.7}
                          sm={3.8}
                          xs={3.2}
                          sx={{
                            textAlign: "end",
                            color: "#565666",
                            fontFamily: "Red Hat Display",
                          }}
                        >
                          {item.Text2}
                        </Grid>
                      )}
                      <Grid
                        item
                        xl={12}
                        lg={12}
                        md={12}
                        xs={12}
                        sx={{ borderBottom: "1px solid #F0F2FC" }}
                      ></Grid>
                    </>
                  )}
                </>
              )}
            </React.Fragment>
          );
        })}
      </Grid>
    </div>
  );
}
