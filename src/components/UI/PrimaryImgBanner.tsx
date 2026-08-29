import React from 'react';
import { CardMedia, Card, Typography } from '@mui/material';

interface PrimaryImgBannerProps {
    img: string,
    content?: string,
    width?: string,
    height?: string,
    mt?: string
}

const PrimaryImgBanner: React.FC<PrimaryImgBannerProps> = ({ img, content, width = "720px", height = "540px", mt = "20px" }) => {
    return (
        <CardMedia component="div">
            <>
                <Card
                    component="img"
                    srcSet={img}
                    src={img}
                    alt={img}
                    sx={{
                        height: { xs: "auto", lg: height },
                        mt: mt, boxShadow: "none", borderRadius: "0px",
                        width: { xs: "300px", sm: "420px", lg: width }
                    }}
                    loading="lazy">
                </Card>
                <Typography variant="h1" sx={{
                    fontSize: "14px",
                    fontWeight: 300,
                    py: "10px"
                }} >
                    {content}
                </Typography>
            </>
        </CardMedia>
    );
};

export default PrimaryImgBanner;
