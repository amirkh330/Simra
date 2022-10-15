import styled from "styled-components";
import { Themes } from "../Context/Context";

export const useActiveFrame = () => {
  const { spacing, fontSize } = Themes();
  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: ${spacing(9)};
  `;
  const Title = styled.section`
    font-size: ${fontSize.large};
    margin-bottom: ${spacing(7)};
  `;
  const Slider = styled.section`
    display: flex;
    height: auto;
    @media (max-width: 768px) {
      overflow-x: auto;
    }
  `;

  const Card = styled.img`
    width: 25%;
    flex-shrink: 0;
    margin: 0 ${spacing(2)};
    @media (max-width: 768px) {
      overflow-x: auto;
      width: 85%;
    }
  `;

  return { Wrapper, Title, Slider, Card };
};
