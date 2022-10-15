import styled from "styled-components";
import { Themes } from "../Context/Context";

export const useLanding = () => {
  const { colors, spacing, fontWeight } = Themes();
  const Container = styled.section`
    background: ${colors.black};
    color: ${colors.white};
    font-wieght: ${fontWeight.normal};
    display: flex;
    flex-direction: column;
    gap: 16px;
  `;

  const Wrapper = styled.section`
    padding: ${spacing(4)};
  `;

  return { Container, Wrapper };
};
