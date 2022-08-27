import IItem from "../../../model";

const prepareTechDetails = (item: IItem) => {
  if (item.__t == "Laptop") {
    return `Display ${item.screen["screen diagonal"]}" ${item.screen["matrix type"]} ${
      item.screen.resolution
    } / ${item.cpu.name} (${item.cpu["clock speed"]} GHz) / RAM ${
      item.ram.capacity
    } GB / ${item.storage.map((e) => `${e.type} ${e.capacity} GB /`)} ${
      item.gpu ? `${item.gpu.name}, ${item.gpu.memory} GB /` : ""
    } ${item.weight} kg / ${item.color}`;
  } else if (item.__t == "Console") {
    return `${item.cpu.name} (${item.cpu["clock speed"]} GHz) / RAM ${
      item.ram.capacity
    } GB / ${item.storage.map((e) => `${e.type} ${e.capacity} GB /`)} ${item.gpu.name}, ${
      item.gpu.memory
    } GB `;
  } else if (item.__t == "Smartphone" || item.__t == "Tablet") {
    return `Display ${item.display.size}" ${item.display.type} ${item.display.resolution} / ${
      item.cpu.name
    } (${item.cpu["clock speed"]}) / main camera ${item.camera.back[0]} MP${item.camera.back
      .slice(1)
      .map((e) => ` + ${e} MP`)
      .join("")}, selfie camera ${item.camera.front} MP / RAM ${item.ram} GB / storage ${
      item.storage
    } GB${item.microsd ? ` + microSD` : ""} / ${item.network.GSM ? `GSM / ` : ""}${
      item.network.HSPA ? `HSPA / ` : ""
    }${item.network.LTE ? `LTE / ` : ""}${item.network["5G"] ? `5G / ` : ""}${item.sim} SIM / ${
      item.accumulator
    } mAh`;
  } else if (item.__t == "Headphones") {
    return `${item.type} ${item.interface} / ${item.frequency} / ${item.sensitivity} dB/mW`;
  }
};

export default prepareTechDetails;
