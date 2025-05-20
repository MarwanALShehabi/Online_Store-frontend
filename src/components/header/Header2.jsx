import { useState } from "react";

import {
  ExpandMore,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Container,
  IconButton,
  ListItem,
  Stack,
  useTheme,
} from "@mui/material";

import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { useCart } from "./CartContext";
import CartDrawer from "./CartDrawer";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  flexGrow: 0.4,
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "266px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const options = ["All", "Sort", "Hody", "Shoz"];

export default function Header2() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Theme = useTheme();
   const { cartItems } = useCart();
   const [openCart, setOpenCart] = useState(false);
 const toggleCart = () => setOpenCart((prev) => !prev);
  return (
    <Container
      sx={{ my: 3, display: "flex  ", justifyContent: "space-between" }}
    >
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined />
        <Typography variant="body2">E-commerse</Typography>
      </Stack>

      <Search
        sx={{
          borderRadius: "22px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              // @ts-ignore
              bgcolor: Theme.palette.myColor.main,
              borderBottomRightRadius: "22px",
              borderTopRightRadius: "22px",
              p: 0,
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                sx={{
                  width: "93px",
                  alignItems: "center",
                  "&:hover": { cursor: "pointer " },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "13px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Search>

      <Stack direction={"row"} alignItems={"center"}>
        <IconButton>
          <Person2OutlinedIcon />
        </IconButton>

        <IconButton aria-label="cart" onClick={toggleCart}>
          <StyledBadge badgeContent={cartItems.length} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Stack>
      <CartDrawer open={openCart} onClose={toggleCart} />
    </Container>
  );
}
