import React from "react";
import { Container, Wrapper } from "./AboutStyles";
import NextImg from "next/image";
import Title from "@/elements/Title";
import Button from "@/elements/Button";
import { useRouter } from "next/router";
import AboutImage from "@/assets/edgargt.jpg";
import { scroller } from "react-scroll";

const About = () => {
  const route = useRouter();
  return (
    <Wrapper className="margin-top" id="aboutSection">
      <div className="container">
        <div className="inner-container">
          <Container>
            <div className="left">
              <NextImg
                src={AboutImage}
                layout="responsive"
                alt="About  Image"
              />
            </div>

            <div className="right">
              <Title name="About Myself" />
              <h4>Electronic engineer and computer programmer</h4>
              <p className="subtitle-5 description">
                Graduated as computer programmer from <b>Seneca College</b>.
              </p>
              <p className="subtitle-5 description">
                Interested in working as fullstack developer, with experience developing web apps using frameworks like Next.js, Angular, React.js
                and Express.js using SQl and noSQL databases.
              </p>
              <p className="subtitle-5 description">
                Currently working as <span>Front End developer</span> as volunteer in a startup company called
                <b> TOlindo deliveries</b>,  since October 2022
              </p>

              <div className="btnContainer">
                <Button
                  name="Contact Me"
                  marginTop="0rem"
                  btnHandler={() => {
                    scroller.scrollTo("contactSection", {
                      duration: 1500,
                      delay: 100,
                      smooth: true,
                    });
                  }}
                />
                <Button
                  name="Resume"
                  marginTop="0rem"
                  isOutlineBtn
                  btnHandler={() => route.push("/resume")}
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
