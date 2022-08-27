import IItem from "./item";

export default interface ILaptop extends IItem {
  screen: {
    "screen diagonal": number;
    "matrix type": string;
    resolution: string;
    "refresh rate": number;
  };
  cpu: {
    name: string;
    "number of cores": number;
    "clock speed": string;
  };
  ram: {
    capacity: number;
    speed: number;
    type: string;
  };
  storage: { type: string; capacity: number }[];
  gpu?: { name: string; memory: number };
  weight: number;
  color: string;
  __t: "Laptop";
}
