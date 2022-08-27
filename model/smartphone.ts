import IItem from "./item";

export default interface ISmartphone extends IItem {
  sim: number;
  ram: number;
  storage: number;
  microsd: boolean;
  accumulator: number;
  network: {
    GSM: boolean;
    HSPA: boolean;
    LTE: boolean;
    "5G": boolean;
  };
  body: {
    weight: number;
    build: string;
    dimensions: {
      height: number;
      width: number;
      thickness: number;
    };
  };
  display: { type: string; size: number; resolution: string };
  cpu: {
    name: string;
    "number of cores": number;
    "clock speed": string;
  };
  camera: {
    front: number;
    back: number[];
  };
  __t: "Smartphone";
}
