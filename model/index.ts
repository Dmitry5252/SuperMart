import IConsole from "./console";
import IHeadphones from "./headphones";
import ILaptop from "./laptop";
import ISmartphone from "./smartphone";
import ITablet from "./tablet";

type item = ILaptop | IConsole | ISmartphone | ITablet | IHeadphones;

export default item;
