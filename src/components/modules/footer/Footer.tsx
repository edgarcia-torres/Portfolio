import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { TbBrandWhatsapp } from "react-icons/tb";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { Grid, Wrapper } from "./FooterStyles";
import logo from '@/assets/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <Wrapper className="margin-top">
      <div className="container">
        <div className="inner-container">
          <Grid>
            <div className="left">
              <Image className="footer-logo" src={logo} width={80} height={80} />
            </div>

            <div className="copyright">
              <h3 className="subtitle-5">
                © Copyright 2022. All right reserved
              </h3>
            </div>

            <div className="right">
              <a
                href="https://www.linkedin.com/in/edgar-garcia-to/"
                target="_blank"
                aria-label="Linkedin"
                rel="noreferrer">
                <GrLinkedinOption />
              </a>

              <a
                href="https://github.com/edgarcia-torres"
                target="_blank"
                aria-label="Github"
                rel="noreferrer">
                <AiFillGithub />
              </a>

              <a
                aria-label="Whatsapp"
                href="https://api.whatsapp.com/send?phone=16475706403">
                <TbBrandWhatsapp />
              </a>

              <a
                aria-label="Mail"
                href="mailto:edgardavidgt@gmail.com?subject=Contact us Form&cc=cc@example.com">
                <AiOutlineMail />
              </a>
            </div>
          </Grid>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
