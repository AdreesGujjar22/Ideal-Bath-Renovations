import React from 'react'
import { Box, CardMedia, Typography } from "@mui/material";
import { Stack } from '@mui/system';

interface CareCardProps {
    img: string,
    title: string,
    duration: string
}

const CareCard: React.FC<CareCardProps> = ({ img, title, duration }) => {
    return (
        <Stack alignItems="center" >
            <Box sx={{
                width: { xs: "281px", md: "465px" },
                height: { xs: "188px", md: "350px" },
                py: "25px",
            }}>
                <CardMedia
                    component="img"
                    image={img}
                    alt="img"
                    loading="lazy"
                    height="100%"
                    width="100%"
                />
            </Box>
            <Stack alignItems="center" >
                <Typography variant="h1" sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    fontFamily: "sans-serif"
                }}>
                    {title}
                </Typography>
                <Typography variant="h1" sx={{
                    fontSize: "16px",
                    py: "30px",
                    fontWeight: 300,
                }}>
                    {duration}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default CareCard;
