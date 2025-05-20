import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Box sx={{
        
        bgcolor:"#2B3445",
        py:1.3,
        borderTopRightRadius:8,
        borderTopLeftRadius:8
    }}>
        <Typography
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        variant="h6"
        color={"HighlightText"}
        sx={{fontSize:18}}
        >
            Desigend and developed by 

            <Button 
            sx={{
                mx:0.5 ,
                fontSize:"18px",
                textTransform:"capitalize",
                color:"#ff7790"
            }}
            variant="text"
            color="primary"
            >
                Marwan Al-Shehabi
            </Button>

            @2025
        </Typography>
      
    </Box>
  )
}
