import useIsomorphicLayoutEffect from "@/utils/useIsomorphicEffect";
import React, { useRef } from "react";
import { Wrapper, Canvas, Container, Content } from "./HeroStyles";
import Button from "@/elements/Button";
import { useRouter } from "next/router";

const Hero = () => {
  const canvasRef = useRef(null);
  const route = useRouter();

  const lazyLoadSmokeEffect = async (canvas: any) => {
    const { smokeSimulation } = await import("./SmokeEffect");
    smokeSimulation(canvas);
  };

  useIsomorphicLayoutEffect(() => {
    if (canvasRef?.current && window.innerWidth >= 1200) {
      setTimeout(() => {
        lazyLoadSmokeEffect(canvasRef.current);
      }, 2000);
    }
  }, []);

  return (
    <Wrapper id="heroSection">
      <Canvas ref={canvasRef}></Canvas>
      <Container>
        <div className="container">
          <div className="inner-container">
            <Content>
              <h1 className="heading-subtitle"> Full Stack developer. </h1>
              <h2 className="heading-subtitle"> Electronic Engineer. </h2>
              <Button
                name="Resume"
                isOutlineBtn={true}
                btnHandler={() => route.push("/resume")}
              />
            </Content>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default React.memo(Hero);
