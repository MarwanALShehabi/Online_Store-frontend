import { Box, Button, Container, Link, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
// @ts-ignore
import banner17 from "../../imag/banner-17.jpg";
// @ts-ignore
import banner16 from "../../imag/banner-16.jpg";
import { ArrowForward } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css'

// @ts-ignore
import banner15 from "../../imag/banner-15.jpg"
// @ts-ignore
import banner25 from "../../imag/banner-25.jpg"

import { Pagination } from "swiper/modules";
import IconSection from "./IconSection";


const mySLider = [
  {
    text: "WOMAN",
    link:  banner25 ,
      
  },
  {
    text: "MAN",
    link:  banner15 ,

  },
];


export default function Hero() {
  const theme  = useTheme()
  return (
    <Container >
      <Box sx={{pt:2,  mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySLider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="perant-slider">
                <img src={item.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                  // sx={{position:"absolute" , left:"10%" , textAlign:"left"}}
                >
                  <Typography
                    sx={{
                      color: "#222",
                    }}
                    variant="h5"
                  >
                    LIFESTYLE COLLECTTON
                  </Typography>
                  <Typography
                    sx={{
                      color: "#222",
                      fontWeight: 400,
                      my: 1,
                    }}
                    variant="h4"
                  >
                    {item.text}
                  </Typography>

                  <Stack
                    sx={{
                      justifyContent: { xs: "center", sm: "left" },
                    }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color="#333" mr={1} variant="h5">
                      SALE UP TO
                    </Typography>
                    <Typography color="#D23F57" variant="h5">
                      30% OFF
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{ color: "#000", fontWeight: 300, my: 1 }}
                    variant="body1"
                  >
                    Get Free Shipping orders over $99.00
                  </Typography>

                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    SHOP NOW...
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src={banner17} alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "30px",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1.5,
                }}
              >
                SUMMER
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1.5,
                }}
              >
                SALE 20% OFF
              </Typography>

              <Link
                variant="h6"
                sx={{
                  mt: 1.5,
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  fontSize: "13PX",
                  "&:hover": {
                    color: "#D23F57",
                    cursor: "pointer",
                  },
                }}
                href="#"
                underline="none"
              >
                SHOP NEW
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src={banner16} alt="" />

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "30px",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                GAMMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1.5,
                }}
              >
                DISKTOPS &
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1.5,
                }}
              >
                LAPTOPS
              </Typography>

              <Link
                variant="h6"
                sx={{
                  mt: 1.5,
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  fontSize: "13PX",
                  "&:hover": {
                    color: "#D23F57",
                    cursor: "pointer",
                  },
                }}
                href="#"
                underline="none"
              >
                SHOP NEW
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>

      <IconSection />
    </Container>
  );
}
