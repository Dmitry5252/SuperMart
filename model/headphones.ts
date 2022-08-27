import IItem from "./item";

export default interface IHeadphones extends IItem {
  type: string;
  interface: string;
  frequency: string;
  sensitivity: number;
  __t: "Headphones";
}
