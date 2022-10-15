import { Themes } from "../../Context/Context";
import styled from "styled-components";

export const useSubMenu = () => {
  const { colors, spacing, fontSize } = Themes();
  const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: ${spacing(2)};
  `;
  const Row = styled.section`
    display: flex;
    align-items: center;
    @media (min-width: 768px) {
      align-items: start;
    }
  `;
  const Wrapper = styled.section`
    display: flex;
    width: 100%;
    margin-right: ${spacing(1)};
  `;
  const TitleWrapper = styled.section`
    display: flex;
    align-items: center;
  `;
  const SubWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: ${spacing(3.5)};
  `;
  const Title = styled.p`
    font-size: ${fontSize.xLarge};
  `;
  const SubTitle = styled.p`
    font-size: ${fontSize.small};
    color: ${colors.gray};
    margin-right: ${spacing(1)};
  `;
  const DropDownIcon = styled.div`
    display: flex;
    @media (min-width: 768px) {
      display: none;
    }
  `;
  const Highlight = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    width: 100%;
    gap: ${spacing(2.5)};
  `;
  const HighlightTitle = styled.li`
    font-size: ${fontSize.xSmall};
    margin: 0 ${spacing(1)};
  `;
  const HighlightTitleTag = styled.li`
    font-size: ${fontSize.xSmall};
    color: ${colors.secondry};
    padding: 0 ${spacing(1)};
    gap: ${spacing(1)};
    background: ${colors.primary};
    border-radius: ${spacing(0.5)};
  `;
  const Link = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid ${colors.secondry};
    border-radius: ${spacing(0.5)};
    margin-top: ${spacing(3.5)};
    padding: ${spacing(2)} ${spacing(4)};
    @media (min-width: 768px) {
      display: none;
    }
  `;
  const LinkTitle = styled.div`
    font-size: ${fontSize.medium};
    margin-left: ${spacing(0.5)};
  `;
  const Description = styled.div`
    font-size: ${fontSize.small};
    margin-top: ${spacing(4)};
    color: ${colors.secondry};
    @media (max-width: 768px) {
      display: none;
    }
  `;
  const RightPart = styled.div`
    width: 100%;
    @media (min-width: 768px) {
      width: 30%;
    }
  `;
  const LeftPart = styled.div`
    width: 70%;
    flex-direction: column;
    display: flex;
    @media (max-width: 768px) {
      display: none;
    }
  `;
  const Slider = styled.div`
    width: 100%;
    display: flex;
    overflow-x: auto;
  `;
  const Box = styled.div`
    width: ${spacing(40)};
    height: ${spacing(22.5)};
    display: flex;
    border: 1px solid ${colors.gray};
    border-radius: ${spacing(1)};
    padding: ${spacing(2)};
    margin: 0 ${spacing(1)};
    flex-direction: column;
    flex-shrink: 0;
    cursor: pointer;
  `;
  const BoxTitle = styled.p`
    width: 100%;
    margin-bottom: ${spacing(2)};
    color: ${colors.gray};
    font-size: ${fontSize.medium};
  `;
  const SeasonTitle = styled.p`
    color: ${colors.gray};
    font-size: ${fontSize.medium};
    margin-bottom: ${spacing(4)};
  `;

  return {
    Container,
    Row,
    Wrapper,
    TitleWrapper,
    SubWrapper,
    Title,
    SubTitle,
    DropDownIcon,
    Highlight,
    HighlightTitle,
    HighlightTitleTag,
    Link,
    LinkTitle,
    Description,
    RightPart,
    LeftPart,
    Slider,
    Box,
    BoxTitle,
    SeasonTitle,
  };
};
