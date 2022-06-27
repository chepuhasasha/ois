import { App } from "..";
import { Config } from "../interfaces/config.interface";

export class ConfigService {
  public app: App;
  public history: Config[] = [];

  constructor(app: App) {
    this.app = app;
  }

  do() {
    if (this.history.length <= 20) {
      this.history.push(this.config);
    }
  }

  undo() {
    if (this.history.length >= 2) {
      this.history.pop();
      this.app.config = this.history[this.history.length - 1];
    }
  }

  get config(): Config {
    return {
      offset: {
        x: this.app.background.tile.tilePosition.x,
        y: this.app.background.tile.tilePosition.y,
      },
      components: this.app.elementsService.components,
      lines: this.app.elementsService.lines,
      planes: this.app.elementsService.planes,
      texts: this.app.elementsService.texts,
      assets: this.app.elementsService.assets,
    };
  }
}
