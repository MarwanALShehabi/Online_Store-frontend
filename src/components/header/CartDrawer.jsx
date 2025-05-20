import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { useCart } from "./CartContext";
import { Close } from "@mui/icons-material";

export default function CartDrawer({ open, onClose }) {
  const { cartItems, removeFromCart } = useCart();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        width: "50vw", // تغطي نصف الشاشة
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "50vw",
          backgroundColor: "#f5f5f5", // خلفية فاتحة ولكن أكثر حيوية
          color: "#333", // نص داكن وواضح
          borderRadius: "10px 0 0 10px",
          padding: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // تأثير الظل
        },
      }}
    >
      <Box sx={{ width: "100%", padding: 2, position: "relative" }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            color: "#333",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            },
          }}
        >
          <Close />
        </IconButton>
        <Typography variant="h6" sx={{ color: "#333", marginBottom: 2 }}>
          Your Cart
        </Typography>

        <List sx={{ paddingTop: 1 }}>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingY: 1,
                  borderBottom: "1px solid #ddd",
                }}
              >
                {/* عرض صورة المنتج */}
                <Box sx={{ width: 80, height: 80, marginRight: 2 }}>
                  <img
                    src={`http://localhost:1337${
                      item.productImg[0]?.formats?.small?.url ||
                      item.productImg[0]?.url
                    }`}
                    alt={item.productTitle}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 5,
                    }}
                    
                    />
                </Box>
                {/* تفاصيل المنتج */}
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#000" }}
                  >
                    {item.productTitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginBottom: 1 }}
                  >
                    ${item.productPris}
                  </Typography>
                </Box>
                {/* زر إزالة المنتج */}
                <Button
                  onClick={() => removeFromCart(item.id)}
                  sx={{
                    color: "#e91e63", // أحمر لزر إزالة المنتج
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "rgba(233, 30, 99, 0.1)",
                    },
                  }}
                >
                  Remove
                </Button>
              </ListItem>

                    ))
          ) : (
            <Typography variant="body2" sx={{ color: "#777" }}>
              Your cart is empty
            </Typography>
          )}
        </List>

        <Divider sx={{ marginY: 2 }} />

        {cartItems.length > 0 && (
          <Button
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: "#4caf50", // الأخضر لزر الـ Checkout
              "&:hover": {
                backgroundColor: "#388e3c",
              },
              padding: 1.5,
              textTransform: "none",
            }}
            onClick={onClose}
          >
            Checkout
          </Button>
        )}
      </Box>
    </Drawer>
  );
}
