import IItem from "./item";

export default interface IConsole extends IItem {
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
  storage: [{ type: string; capacity: number }];
  gpu: { name: string; memory: number };
  __t: "Console";
}
