import React from "react";
import { FooterStyled, FooterContainer, FooterTitle, AppList } from "./Footer.style";
import { Typography, Box } from "@mui/material";

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <Box sx={ {maxWidth: '400px'} }>
                    <FooterTitle>
                        Quem somos?
                    </FooterTitle>
                    <Typography variant={'body2'} sx={{ marginTop: '16px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio id dolorem amet vero animi dignissimos, blanditiis, consequuntur adipisci mollitia exercitationem! Iste modi autem qui fugit ducimus. Natus, pariatur rerum?
                    </Typography>
                </Box>
                <div>
                    <FooterTitle>
                        Baixe nossos aps
                    </FooterTitle>
                    <AppList>
                        <li>
                            <a href={"/"} target={"_blank"} rel={"noopener noreferer noreferrer"}>
                                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
                            </a>
                        </li>
                        <li>
                            <a href={"/"} target={"_blank"} rel={"noopener noreferer noreferrer"}>
                                <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
                            </a>
                        </li>
                    </AppList>
                </div>
            </FooterContainer>
        </FooterStyled>
    )
}

export default Footer