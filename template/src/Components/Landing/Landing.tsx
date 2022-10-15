import ActiveFrame from "../ActiveFrame/ActiveFrame";
import DefaultFrame from "../DefaultFrame/DefaultFrame";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import { useLanding } from "./Landing.style";

export default function Landing() {
 
const { Container, Wrapper } = useLanding();
  return (
    <Container>
      <Header />
      <Wrapper>
        <Intro />
        <ActiveFrame />
        <DefaultFrame count={12} title={"کلیپ‌های برنامه‌سازان"} />
        <DefaultFrame count={6} title={"کلیپ‌های تقطیع شده"} />
        <DefaultFrame count={18} title={"کلیپ‌های ارسالی "} />
      </Wrapper>
    </Container>
  );
}
