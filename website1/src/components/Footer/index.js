import React from 'react'
import {FooterContainer, FooterWrap, SocialIconLink, SocialMedia, 
    SocialLogo, SocialIcons,SocialMediaWrap} from './FooterElements'
import { FaFacebook, FaInstagram} from 'react-icons/fa'


const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap>
        <SocialMedia>
        <SocialMediaWrap>
        <SocialLogo to = "/">Acai</SocialLogo>
        <SocialIcons>
        <SocialIconLink href="/" target="_blank" aria-label = "Facebook" rel="noopener noreffer">
        <FaFacebook/>
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label = "Instagram" rel="noopener noreffer">
        <FaInstagram/>
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label = "LinkedIn" rel="noopener noreffer">
        <FaFacebook/>
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label = "Facebook" rel="noopener noreffer">
        <FaFacebook/>
        </SocialIconLink>
        
     
        </SocialIcons>
        </SocialMediaWrap></SocialMedia>
        </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
