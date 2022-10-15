import React from "react";
import { Themes } from "../Context/Context";
import { useHeaderStyle } from "./Header.style";


export default function Header() {
  const { icons } = Themes();
  const { Wrapper ,SearchIcon,NavItem,NavActive,NavMenu} = useHeaderStyle();
  
  return (
    <Wrapper>
      <div>
        <img src={icons.logo} alt='logoIcon' />
      </div>
      <NavMenu>
        <NavItem>خانه</NavItem>
        <NavItem>پخش زنده</NavItem>
        <NavItem>فیلم سریال</NavItem>
        <NavActive>پویش</NavActive>
      </NavMenu>
      <div>
        <SearchIcon>
          <img src={icons.search} alt='searchIcon' />
        </SearchIcon>
        <img src={icons.user} alt='userIcon' />
      </div>
    </Wrapper>
  );
}
