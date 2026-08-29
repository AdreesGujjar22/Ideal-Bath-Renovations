import React from 'react';
import { Box, Typography, ListItem } from '@mui/material';

interface FeaturesProps {
    title: string
    features: string[]
    bold: boolean
}

const FeaturesList: React.FC<FeaturesProps> = ({ title, features, bold }) => {
    return (
        <Box>
            <Typography variant="h6" sx={{
                fontSize: {
                    xs: "24px",
                    sm: "28px",
                    md: "32px",
                    lg: "35.2px",
                },
                fontWeight: 700,
                fontFamily: "'Abel'",
                my: "32px"
            }}>
                {title} <span style={{ fontWeight: 300 }} >(no acne pen)</span>
            </Typography>
            {features.map((feature, index) => (
                <ListItem key={index} sx={{
                    fontFamily: "primaryFont", p: 0, my: "19px",
                    display: "flex",
                    alignItems: "start"
                }}>
                    {bold ? `${index + 1}.` : <b style={{ fontFamily: "sans-serif", fontWeight: 900, }} >{index + 1}</b>}
                    <span style={{ paddingLeft: "32px" }} >
                        {feature}
                    </span>
                </ListItem>
            ))}
        </Box>
    );
};


export default FeaturesList;




