
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useCart } from "../header/CartContext";

export default function ProductDetails({ product, handleClose, onBuy }) {
  const { addToCart } = useCart();

  if (!product) return null;

  const {
    productImg = [],
    productTitle,
    productPris,
    productDescription,
  } = product;

  const images = productImg || [];

  const getImageUrl = (img) => {
    if (!img) return "";
    return `http://localhost:1337${img.formats?.small?.url || img.url || ""}`;
  };

  const handleBuyNow = () => {
    addToCart(product);
    onBuy(); // استدعاء الدالة التي تمررها من Main لفتح التنبيه
    handleClose(); // أغلق الديالوج بعد الشراء
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img width={300} src={getImageUrl(images[0])} alt={images[0]?.name} />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">{productTitle}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h5">
          ${productPris}
        </Typography>
        <Typography variant="body1">{productDescription}</Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {images.length > 0 ? (
            images.map((img, index) => (
              <img
                key={index}
                style={{ borderRadius: 3 }}
                height={100}
                width={90}
                src={getImageUrl(img)}
                alt={img.name}
              />
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              No images available
            </Typography>
          )}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
          onClick={handleBuyNow}
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
}
