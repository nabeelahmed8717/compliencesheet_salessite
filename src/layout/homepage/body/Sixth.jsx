import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import AppStoreImg from "../../../assests/app.png";
import PlayStoreImg from "../../../assests/play.png";
import IconImg from "../../../assests/iconstyle.svg";


const Sixth = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                backgroundColor: "#E1E4F9",
                margin:'20px 0'
            }}
        >
            <Grid container justifyContent={'center'} alignItems={'center'} sx={{py:'60px'}}>
            <Grid item md={2} sx={{p:'0 0 80px 60px'}} className="hide-on-sm-md hide-on-xs">
            <img src={IconImg} alt="IconImg" maxWidth={'100%'} />
            </Grid>
                <Grid item md={5} xs={12} >
                <Typography className={`item-center`}
                    sx={{
                        fontSize: "48px",
                        fontWeight: "700",
                        fontFamily: "Red Hat Display",
                        color: "#565666",
                        py: '30px',
                        width:'90%'
                    }}
                >
                    Download the Compliancesheet App
                </Typography>
                </Grid>
                <Grid item md={4} xs={12} sx={{ display: 'flex', gap: 1.5, justifyContent:'center' }}>
                    <img src={AppStoreImg} width={'237px'} height={'79px'} />
                    <img src={PlayStoreImg} width={'237px'} height={'79px'} />
                </Grid>
            </Grid>
        </div>
    );
};

export default Sixth;
