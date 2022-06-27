import { App } from "..";
import { Config } from "../interfaces/config.interface";

export class ConfigService {
  public app: App;
  public history: { selected: string | null; config: Config }[] = [];

  constructor(app: App) {
    this.app = app;
  }

  do() {
    if (
      this.history.length <= 20 &&
      JSON.stringify(this.config) !==
        JSON.stringify(this.history[this.history.length - 1])
    ) {
      this.history.push({
        config: this.config,
        selected: this.app.selected?.ref,
      });
    }
  }

  undo() {
    if (this.history.length >= 2) {
      this.history.pop();
      const point = this.history[this.history.length - 1];
      this.app.config = point.config;
      if (point.selected) {
        this.app.elementsService.refs[point.selected].select();
      }
    }
  }

  get config(): Config {
    return {
      offset: {
        x: this.app.offset.x,
        y: this.app.offset.y,
      },
      components: this.app.elementsService.components,
      lines: this.app.elementsService.lines,
      planes: this.app.elementsService.planes,
      texts: this.app.elementsService.texts,
      assets: this.app.elementsService.assets,
    };
  }
}
