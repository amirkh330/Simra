import { useCallback } from "react";
import styled from "styled-components";
import { Themes } from "../Context/Context";
import clip1 from "../../Asset/Image/clip1.png";
import clip2 from "../../Asset/Image/clip2.png";
import clip3 from "../../Asset/Image/clip3.png";
import clip4 from "../../Asset/Image/clip4.png";
const repeat = (arr: any, n: any) =>
  Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);
const array = repeat([clip1, clip2, clip3, clip4], 5);

export const useDefaultFrame = () => {
  const { spacing, fontSize, colors } = Themes();

  const Container = styled.section`
    display: flex;
    flex-direction: column;
  `;
  const Slider = styled.section`
    gap: ${spacing(2.5)};
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: ${spacing(1)};
    }
  `;
  const Row = styled.section`
    display: flex;
  `;
  const Title = styled.title`
    display: flex;
    flex: direction;
    margin-top: ${spacing(12)};
    margin-bottom: ${spacing(8)};
  `;
  const Img = styled.img`
    margin: ${spacing(1)};
  `;
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      width: 47%;
    }
  `;
  const SubTitle = styled.p`
    font-size: ${fontSize.xSmall};
    color: ${colors.gray};
  `;
  const Caption = styled.p``;

  const Tag = styled.p`
    background: ${colors.primary};
    font-size: ${fontSize.xSmall};
    color: ${colors.secondry};
    padding: 0 ${spacing(1)};
    border-radius: ${spacing(1)};
    margin-left: ${spacing(1)};
  `;

  const imageViewer = useCallback((index: number) => {
    return array[index];
  }, []);

  return {
    imageViewer,
    Container,
    Slider,
    Row,
    Title,
    Img,
    Card,
    SubTitle,
    Caption,
    Tag,
  };
};
