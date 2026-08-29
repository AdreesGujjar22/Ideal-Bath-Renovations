import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { CardMedia, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
    }),
}));

interface ReferralCardProps {
    img: string,
    title: string,
    content1?: string,
    content2?: string,
    content3?: string[],
    content4?: string[]
}

const ReferralCard: React.FC<ReferralCardProps> = ({ img, title, content1, content2, content3, content4 }) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "87%",
                m: "auto",
                py: { xs: "15px", md: "55px" },
                position: "relative",
            }}
        >
            <Stack
                spacing={2}
                sx={{ flexDirection: { xs: "column", lg: "row", gap: 15 } }}
            >
                <Item
                    sx={{
                        width: { xs: "282px", md: "817px" },
                        height: { xs: "240px", md: "451px" },
                        boxShadow: "none",
                        display: "flex",
                        position: "relative",
                        overflow: "hidden",
                        alignItems: "center",
                        borderRadius: 0,
                        p: 0,
                    }}
                >
                    <CardMedia
                        component="img"
                        image={
                            img
                        }
                        alt="img"
                        loading="lazy"
                        height="100%"
                        width="100%"
                    />
                </Item>

                <Item
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        boxShadow: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "15px",
                        p: "86px 0px 0px 16px"
                    }}
                >
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            textAlign: "start",
                            color: "rgb(63,63,63)",
                            fontWeight: 400,
                            fontSize: { xs: "30px", md: "38px", lg: "48px" },
                            letterSpacing: 1,
                            lineHeight: "27.2px",
                            fontFamily: '"Abel", sans-serif',
                            textTransform: "none",
                            backgroundColor: "white",
                            zIndex: 5,
                            p: 2,
                            position: "absolute",
                            left: { xs: "5px", md: "33%" },
                            top: { xs: "33%", md: "13%" },
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            textAlign: "start",
                            color: "rgb(63,63,63)",
                            fontWeight: 700,
                            fontSize: { xs: 12, md: 16 },
                            textTransform: "none",
                            ":hover": { backgroundColor: "white" },
                            fontFamily: "sans-serif"
                        }}
                    >
                        {content1}
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            textAlign: "start",
                            color: "rgb(63,63,63)",
                            fontWeight: 300,
                            fontSize: { xs: 12, md: 16 },
                            letterSpacing: 1,
                            lineHeight: "27.2px",
                            textTransform: "none",
                            m: 0,
                            ":hover": { backgroundColor: "white" },
                        }}
                    >
                        {content2}
                    </Typography>
                    {content3?.map((element) => (
                        <Typography
                            variant="body1"
                            gutterBottom
                            sx={{
                                textAlign: "start",
                                color: "rgb(63,63,63)",
                                fontWeight: 300,
                                fontSize: { xs: 12, md: 16 },
                                letterSpacing: 1,
                                lineHeight: "27.2px",
                                textTransform: "none",
                                m: 0,
                                ":hover": { backgroundColor: "white" },
                            }}
                        >
                            {element}
                        </Typography>
                    ))}
                    {content4?.map((element) => (
                        <Typography
                            variant="body1"
                            gutterBottom
                            sx={{
                                textAlign: "start",
                                color: "rgb(63,63,63)",
                                fontWeight: 700,
                                fontSize: { xs: 12, md: 16 },
                                letterSpacing: 1,
                                lineHeight: "27.2px",
                                textTransform: "none",
                                ":hover": { backgroundColor: "white" },
                                fontFamily: "sans-serif",
                                m: 0,
                            }}
                        >
                            {element}
                        </Typography>
                    ))}
                </Item>
            </Stack>
        </Box>
    );
};

export default ReferralCard;