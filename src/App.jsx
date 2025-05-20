import React, { useState } from "react";
import Header2 from "./components/header/Header2";
import Header1 from "./components/header/Header1";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import IconSection from "./components/hero/IconSection";
import Main from "./components/main/main";
import Footer from "./components/footer/Footer";
import ScrollButton from "./components/scroll/ScrollButton";
import CartDrawer from "./components/header/CartDrawer";

function App() {
  const [theme, colorMode] = useMode();
  const [openCart, setOpenCart] = useState(false);

  // التبديل بين فتح وإغلاق السلة
  const toggleCart = () => {
    setOpenCart(prev => !prev);
  };

  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 
// @ts-ignore
        toggleCart={toggleCart} />
        <CartDrawer open={openCart} onClose={toggleCart} />
        <Header3 />
        
        <Box sx={{ bgcolor: theme.
// @ts-ignore
        palette.bg.main }}>
          <Hero />
          <Main />
        </Box>
        
        <Footer />
        <ScrollButton />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
