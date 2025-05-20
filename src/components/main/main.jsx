import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Rating,
  Snackbar,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";

import React, { useState } from "react";
import ProductDeteles from "./ProductDeteles";
import { useGetproductByNameQuery } from "../../Redux/products";



export default function Main() {


  const theme = useTheme();

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleBuyProduct = () => {
    setOpen(false); // سكّر الدايالوغ
    setOpenSnackbar(true); // افتح التوست بعد ما الدايالوغ يتسكر
  };




  const allProductsAPI = "products?populate=*"
  const menProductsAPI = "products?populate=*&filters[category][$eq]=men";
  const womenProductsAPI = "products?populate=*&filters[category][$eq]=women"


  const [myData, setMyData] = useState(allProductsAPI);

  const [selectedProduct, setSelectedProduct] = useState(null);

    const { data, error, isLoading } = useGetproductByNameQuery(myData);
      if(data){
        console.log(data.data)
      }

 
  const handelAlignment = () => {
 
  };
  const [open, setOpen] = useState(false);
  const handeleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if(isLoading){
    return <Typography variant="h5">isLoooding</Typography>;
  }
  if(error){
    // @ts-ignore
    return <Typography variant="h5">{error.massage}</Typography>;
  }
 
  if(data){
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>

          <ToggleButtonGroup
            // @ts-ignore
            color="erroe"
            value={myData}
            exclusive
            onChange={handelAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233 , 69, 96 ,0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={allProductsAPI}
              aria-label=""
              onClick={() => {
                setMyData(allProductsAPI);
              }}
            >
              All products
            </ToggleButton>

            <ToggleButton
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
              className="myButton"
              value={womenProductsAPI}
              aria-label=""
              onClick={() => {
                setMyData(womenProductsAPI);
              }}
            >
              Woman category
            </ToggleButton>

            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={menProductsAPI}
              aria-label=""
              onClick={() => {
                setMyData(menProductsAPI);
              }}
            >
              Man category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root": {
                    rotate: "1deg",
                    scale: "1.1",
                    transition: "0.3",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  image={`http://localhost:1337${item.productImg[0].url}`}
                  title=""
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {item.productTitle}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="p">
                      ${item.productPris}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.productDescription}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      setSelectedProduct(item); // خزّن المنتج
                      handeleClickOpen(); // افتح الديالوج
                    }}
                    sx={{ textTransform: "capitalize" }}
                    size="large"
                  >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    add to cart
                  </Button>
                  <Rating
                    precision={0.5}
                    name="read-only"
                    value={item.productRaiting}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            onClick={handleClose}
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
          >
            <Close />
          </IconButton>

          <ProductDeteles
            product={selectedProduct}
            handleClose={handleClose}
            onBuy={handleBuyProduct}
          />
        </Dialog>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }} // التعديل هنا
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            ✅ تم إضافة المنتج إلى السلة!
          </Alert>
        </Snackbar>
      </Container>
    );
  }
  }
