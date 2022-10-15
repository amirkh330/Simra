import { FC } from "react";
import { useDefaultFrame } from "./DefaultFrame.style";


interface DefaultFrame {
title:string,
count:number
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
const DefaultFrame: FC<DefaultFrame> = ({ title, count }) => {
  const {
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
  } = useDefaultFrame();

  return (
    <Container>
      <Title>{title}</Title>
      <Slider>
        {Array(count)
          .fill("")
          .map((item: any, index: number) => {
            return (
              <Card key={index}>
                <Img src={imageViewer(index)} />
                <Caption>افتتاحیه بازی های المپیک ۲۰۲۰ توکیو در </Caption>
                <Row>
                  <Tag>ارسالی</Tag> <SubTitle>اخبار ورزشی</SubTitle>
                </Row>
                <Row>
                  <SubTitle>۳ روز پیش . ۲۱۸ هزار بازدید</SubTitle>
                </Row>
              </Card>
            );
          })}
      </Slider>
    </Container>
  );
};
export default DefaultFrame