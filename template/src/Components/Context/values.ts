import arrowIcon from "../../Asset/Image/arrow.svg"
import dropdownIcon from "../../Asset/Image/dropdown.svg"
import khandevaneIcon from "../../Asset/Image/khandevane-logo.svg"
import logoIcon from "../../Asset/Image/logo.svg"
import searchIcon from "../../Asset/Image/search.svg"
import userIcon from "../../Asset/Image/user.svg"

const arrow=arrowIcon
const dropdown=dropdownIcon
const khandevane=khandevaneIcon
const logo=logoIcon
const search=searchIcon
const user=userIcon

const values = {
  colors: {
    black: " #000000",
    white: " #FFFFFF",
    gray: "#7B8794",
    primary: "#1F2933",
    secondry: "#CBD2D9",
  },
  fontSize: {
    xSmall: "11.24px",
    small: "12.64px",
    medium: "14.22px",
    large: "16px",
    xLarge: "18px",
  },
  fontWeight: {
    normal: 500,
    bold: 700,
  },
  icons: {
    arrow,
    dropdown,
    khandevane,
    logo,
    search,
    user,
  },
  spacing: (size: number) => {
    return `${size * 4}px `;
  },
};

export default values