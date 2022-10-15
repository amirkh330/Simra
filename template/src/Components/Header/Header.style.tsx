import styled from "styled-components";
import { Themes } from "../Context/Context";

export const useHeaderStyle = () => {
  const { spacing, fontSize, fontWeight } = Themes();
  const Wrapper = styled.section`
    padding: ${spacing(3)} ${spacing(2)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    wisth: 100%;
    @media (max-width: 768px) {
      padding-bottom: ${spacing(0)};
    }
  `;

  const SearchIcon = styled.image`
    margin-left: ${spacing(5.5)};
    @media (min-width: 768px) {
      display: none;
    }
  `;

  const NavMenu = styled.div`
    display: flex;
    gap: ${spacing(6)};
    @media (max-width: 768px) {
      display: none;
    }
  `;

  const NavActive = styled.div`
    font-size: ${fontSize.large};
    font-weight: ${fontWeight.bold};
  `;

  const NavItem = styled.div`
    font-size: ${fontSize.large};
    font-weight: ${fontWeight.normal}l;
  `;

  return {
    Wrapper,
    SearchIcon,
    NavMenu,
    NavActive,
    NavItem,
  };
};
