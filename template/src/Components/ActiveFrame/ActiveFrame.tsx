import active1 from "../../Asset/Image/active1.png";
import active2 from "../../Asset/Image/active2.png";
import { useActiveFrame } from "./ActiveFrame.style";
export default function ActiveFrame() {
 const { Wrapper ,Title,Slider,Card} = useActiveFrame();
  return (
    <Wrapper>
      <Title>پویش های فعال</Title>
      <Slider>
        {Array(4)
          .fill("")
          .map((item: any, index: number) => {
            return <Card src={index % 2 === 0 ? active1 : active2} key={index}/>;
          })}
      </Slider>
    </Wrapper>
  );
}
