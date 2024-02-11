import {
  Grid,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import PIC1 from "../../../assests/pic1.png";
import PIC2 from "../../../assests/pic2.png";
import PIC3 from "../../../assests/pic3.png";
import PIC4 from "../../../assests/pic4.png";
import PIC5 from "../../../assests/pic5.png";
import "./index.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const initialAccordionData = [
  {
    id: "panel1",
    title: "No more paper or spreadsheets",
    content:
      "Streamline your compliance processes by going digital, eliminating paperwork, and ensuring accuracy.",
    image: PIC1,
  },
  {
    id: "panel2",
    title: "Share and retain Knowledge",
    content:
      "Empower your team with a knowledge-sharing platform that preserves institutional knowledge and enhances collaboration.",
    image: PIC2,
  },
  {
    id: "panel3",
    title: "Transparency and visibility in real-time",
    content:
      "Gain real-time insights into compliance status, fostering transparency and informed decision-making.",
    image: PIC3,
  },
  {
    id: "panel4",
    title: "Capture and Connect",
    content:
      "Seamlessly capture data, connect teams, and foster collaboration to enhance compliance efficiency.",
    image: PIC4,
  },
  {
    id: "panel5",
    title: "Monitor & Alert",
    content:
      "Stay ahead of compliance issues with proactive monitoring and instant alerts, ensuring timely action and peace of mind.",
    image: PIC5,
  },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  margin: `${theme.spacing(2)}px 0`,
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "white"
      ? "#F0F2FC"
      : theme.palette.background.default,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Secondpart = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const [currentPic, setCurrentPic] = React.useState(PIC1);
  const [accordionData, setAccordionData] =
    React.useState(initialAccordionData);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);

    const updatedAccordionData = accordionData.map((accordionItem) => {
      if (accordionItem.id === panel) {
        return { ...accordionItem, clicked: newExpanded };
      } else {
        return { ...accordionItem, clicked: false };
      }
    });

    setAccordionData(updatedAccordionData);

    const selectedAccordion = updatedAccordionData.find(
      (accordion) => accordion.id === panel
    );
    if (!newExpanded) {
      setCurrentPic(PIC1);
    } else if (selectedAccordion) {
      setCurrentPic(selectedAccordion.image);
    }
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{
        height: {
          xl: "85vh",
          lg: "115vh",
          md: "130vh",
          sm: "60vh",
          xs: "135vh",
        },
      }}
    >
      <div
        className="sec-section-text-p"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box>
          <Typography
            className={`item-center font-size-on-small`}
            sx={{
              width: "90%",
              fontSize: "48px",
              fontWeight: "700",
              fontFamily: "Red Hat Display",
              textAlign: "center",
              color: " #565666",
              m: "20px 0 20px 0",
              py: "20px",
            }}
          >
            Everything you need, all in one product
          </Typography>
          <Typography
            className={`item-center`}
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              fontFamily: "Red Hat Display",
              mt: "10px",
              color: " #565666",
              mb: "20px",
            }}
          >
            Enhance the way your team captures data, identifies improvement
            areas, and collaborates
          </Typography>
        </Box>
      </div>
      <Grid
        container
        sx={{ mt: { xl: "20px", lg: "20px", md: "30px" } }}
        spacing={1}
      >
        <Grid item xl={7} lg={6} md={5} xs={12} sx={{ p: "30px", ml: "20px" }}>
          {accordionData.map((accordionItem) => (
            <div key={accordionItem.id} style={{ marginBottom: "10px" }}>
              <Accordion
                expanded={expanded === accordionItem.id}
                onChange={handleChange(accordionItem.id)}
              >
                <AccordionSummary
                expandIcon={expanded === accordionItem.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  aria-controls={`${accordionItem.id}-content`}
                  id={`${accordionItem.id}-header`}
                  sx={{
                    background:
                      accordionItem.clicked || expanded === accordionItem.id
                        ? "#F0F2FC"
                        : "inherit",
                    color: "#565666",
                    fontFamily: "Red Hat Display",
                  }}>
                  <Typography>{accordionItem.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{ color: "#565666", fontFamily: "Red Hat Display" }}
                  >
                    {accordionItem.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </Grid>
        <Grid
          item
          xl={4}
          lg={5}
          md={6}
          sx={{ display: "flex", justifyContent: "flex-end", mr: "20px" }}
        >
          <img
            src={currentPic}
            alt="currentPic"
            className={`hide-on-xs hide-on-sm-md`}
            style={{ height: "80%" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Secondpart;
