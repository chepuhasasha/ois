import { Config } from "../interfaces/config.interface";
import { ElementsService } from "./elements.service";

export class ConfigService {
  public makeConfig(refs: ElementsService["refs"]) {
    const result: Config = {
      components: [],
      texts: [],
      planes: [],
      lines: [],
      offset: { x: 0, y: 0 },
      assets: [],
    };
    Object.keys(refs).forEach((key) => {
      switch (refs[key].type) {
        case "component":
          // result.components.push(refs[key].config)
          break;
        case "text":
          // result.texts.push(refs[key].config)
          break;

        default:
          break;
      }
    });
  }
}
