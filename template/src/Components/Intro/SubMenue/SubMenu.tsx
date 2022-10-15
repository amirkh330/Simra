import khandevane from "../../../Asset/Image/khandevane-logo.svg";
import { Themes } from "../../Context/Context";
import { useSubMenu } from "./SubMenu.style";

export default function SubMenu() {
  const { icons } = Themes();
  const {
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
  } = useSubMenu();

  return (
    <Container>
      <Row>
        <img src={khandevane} alt={"khandevane"} width={53} />
        <Wrapper>
          <RightPart>
            <TitleWrapper>
              <Title>خنداونه</Title>
              <SubTitle>(صفحه تعاملی)</SubTitle>
            </TitleWrapper>
            <SubWrapper>
              <Highlight>
                <HighlightTitleTag>شبکه نسیم</HighlightTitleTag>
                <HighlightTitle>۲۱۸ هزار بازدید</HighlightTitle>
                <HighlightTitle>بازی سرگرمی</HighlightTitle>
              </Highlight>
              <DropDownIcon>
                <img src={icons.dropdown} alt='' />
              </DropDownIcon>
            </SubWrapper>
            <Description>
              در حال انجام بازی همزمان AR کهکشان، از خودتون و صفحه گوشی‌تون فیلم
              بگیرید و اینجا بارگذاری کنید. صاحبان بهترین ویدئوها به استودیوی
              کهکشان دعوت میشن برای بازی و بازدید
            </Description>
          </RightPart>
          <LeftPart>
            <SeasonTitle>قسمت ها در فیلم و سریال</SeasonTitle>
            <Slider>
              {Array(10)
                .fill("")
                .map((item: any,index:any) => {
                  return (
                    <Box key={index}>
                      <BoxTitle>فصل اول</BoxTitle>
                      <BoxTitle>فسمت ۲۵</BoxTitle>
                    </Box>
                  );
                })}
            </Slider>
          </LeftPart>
        </Wrapper>
      </Row>
      <Link>
        <LinkTitle>قسمت ها در فیلم سریال</LinkTitle>
        <img src={icons.arrow} alt='' />
      </Link>
    </Container>
  );
}
