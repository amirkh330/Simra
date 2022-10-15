import styled from "styled-components";

export const useIntro = () => {
  const Container = styled.section`
    display: flex;
    flex-direction: column;
  `;
  const Cover = styled.img``;

  return { Cover, Container };
};
