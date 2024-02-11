import React, { useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Product1 from "../../../assests/p1.jpg";
import Productimg2 from "../../../assests/p2.jpg";
import Product3 from "../../../assests/p3.jpg";
import Product4 from "../../../assests/p4.jpg";
import Product5 from "../../../assests/p5.jpg";
import Product6 from "../../../assests/p6.jpg";
import Product7 from "../../../assests/p7.jpg";

const Data = [
  {
    id: "1",
    name: "Performance Inspection",
    text1: "Make inspections easy.",
    text2: "Customize your templates to get the information you need.",
    text3:
      "Automatic syncing ensures that template updates are automatically rolled out to all users so inspections across all sites follow the same standard.",
    img: Product1,
  },
  {
    id: "2",
    name: "Reports",
    text1: "Generate professional reports on the spot.",
    text2:
      " Transform completed inspections into comprehensive reports that you can customize. Add your company logo, a table of contents, and more. You and your team will love how easy it is to send completed reports from any device.",
    text3:
      "Email reports instantly to the right people. Fields and responses can be hidden so you only see what matters anytime a report is generated.",
    img: Productimg2,
    transform: "ScaleX(-1)",
  },
  {
    id: "3",
    name: "Issues",
    text1: "Make under-reporting a thing of the past.",
    text2:
      "Empower anyone to capture what they see and instantly notify the right people.",
    text3:
      "Allow team members to skip over-complicated forms by reporting issues directly through the compliance sheet app. It’s easy to share what’s happening in detail by capturing critical information like photos, video, weather and location in seconds.",
    img: Product3,
  },
  {
    id: "4",
    name: "Actions",
    text1:
      "Assign tasks or follow-ups to the right person or team to get the job done.",
    text2:
      "  It’s easy to keep everyone involved and in the know. Each action has a traceable timeline that looks like a conversation, where your team members can chat and add photos to keep everyone on the same page.",
    text3: "Track all actions, past and present.",
    img: Product4,
    transform: "ScaleX(-1)",
  },
  {
    id: "5",
    name: "Workplace Communications",
    text1:
      "Communicate with your team, wherever they are, and know they received the message.",
    text2: "Close the communication gap in your workplace.",
    text3: "Create engaging messages in seconds.",
    text4: "Broadcast your message instantly in a newsfeed format to align teams quickly and remotely.",
    img: Product5,
  },
  {
    id: "6",
    name: "Workflows",
    text1:
      "Share templates and schedule inspections.",
    text2:
      " Add teammates and work together from the start.",
    text3: "Use group permissions to protect company confidentiality by giving inspection and report access to authorized personnel only.",
    img: Product6,
    transform: "ScaleX(-1)",
  },
  {
    id: "7",
    name: "Integrating your tools",
    text1:
      "Build your operations ecosystem with Complaince Sheet.",
    text2: "Visualize and compare your data.",
    text3: "Provide seamless and secured access.",
    text4: "Automate manual tasks.",
    text5: "Create customized solutions.",
    img: Product7,
  },
];

const Product2 = () => {
  const [selectedOptions, setSelectedOptions] = useState(
    Data.map(() => [])
  );

  const handleIconClick = (itemIndex, option) => {
    const newSelectedOptions = [...selectedOptions];
    const isSelected = newSelectedOptions[itemIndex].includes(option);

    if (isSelected) {
      newSelectedOptions[itemIndex] = newSelectedOptions[itemIndex].filter(
        (o) => o !== option
      );
    } else {
      newSelectedOptions[itemIndex].push(option);
    }

    setSelectedOptions(newSelectedOptions);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "3rem",
        }}
      >
        <Typography
          className="item-center font-size-on-small"
          sx={{
            width: { md: "40%", xs: "100%" },
            fontSize: "48px",
            fontWeight: "600",
            fontFamily: "Red Hat Display",
            color: "#565666",
            mb: 2,
            py: { md: "2rem" },
            textAlign: "center",
          }}
        >
          Everything you need, all in one product
        </Typography>
      </Box>
      {Data.map((item, index) => (
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          spacing={5}
          key={item.id}
          sx={{ transform: { md: item.transform }, mt: "1.5rem", px: "10px" }}
        >
          <Grid item md={4} xs={12} sx={{ transform: { md: item.transform } }}>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "700",
                fontFamily: "Red Hat Display",
                color: "#565666",
                mb: 2,
              }}
            >
              {item.name}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <CheckCircleIcon
                style={{
                  color: selectedOptions[index].includes("first")
                    ? "#697AE2"
                    : "#D2D7F6",
                  cursor: "pointer",
                }}
                onClick={() => handleIconClick(index, "first")}
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  ml: "20px",
                }}
              >
                {item.text1}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", py: "20px" }}>
              <CheckCircleIcon
                style={{
                  color: selectedOptions[index].includes("second")
                    ? "#697AE2"
                    : "#D2D7F6",
                  cursor: "pointer",
                }}
                onClick={() => handleIconClick(index, "second")}
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  ml: "20px",
                }}
              >
                {item.text2}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <CheckCircleIcon 
                style={{
                  color: selectedOptions[index].includes("third")
                    ? "#697AE2"
                    : "#D2D7F6",  
                  cursor: "pointer",
                }}
                onClick={() => handleIconClick(index, "third")}
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  ml: "20px",
                }}
              >
                {item.text3}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", py: { md: "20px" } }}>
              {item.text4 && (
                <CheckCircleIcon
                  style={{
                    color: selectedOptions[index].includes("forth")
                      ? "#697AE2"
                      : "#D2D7F6",
                    cursor: "pointer",
                  }}
                  onClick={() => handleIconClick(index, "forth")}
                />
              )}
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  ml: "20px",
                }}
              >
                {item.text4}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              {item.text5 && (
                <CheckCircleIcon
                  style={{
                    color: selectedOptions[index].includes("fifth")
                      ? "#697AE2"
                      : "#D2D7F6",
                    cursor: "pointer",
                  }}
                  onClick={() => handleIconClick(index, "fifth")}
                />
              )}
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  ml: "20px",
                }}
              >
                {item.text5}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3.5} xs={12} sx={{ p: { md: "20px" } }}>
            <img
              src={item.img}
              width={"100%"}
              alt={`Product ${item.id}`}
            />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Product2;
