import { useIntro } from "./Intro.style";
import SubMenu from "./SubMenue/SubMenu";
import cover from "../../Asset/Image/rambod.png";
export default function Intro() {
  
const { Container, Cover } = useIntro();
  return (
    <Container>
      <Cover src={cover} />
      <SubMenu />
    </Container>
  );
}
