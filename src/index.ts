import { Dict } from "@pixi/utils";
import {
  Application,
  Loader,
  Texture,
  AnimatedSprite,
  IApplicationOptions,
  Sprite,
  LoaderResource,
} from "pixi.js";

declare global {
  interface Window {
    muup: App;
  }
}

// const app = new Application({
//   width: innerWidth,
//   height: innerHeight,
// });

// document.body.appendChild(app.view);

// const loader = Loader.shared;

// loader.add("./assets/spritesheet.json").load(() => {
//   const textures = [];
//   for (let i = 0; i <= 7; i++) {
//     const texture = Texture.from(`server${i}.png`);
//     textures.push(texture);
//   }
//   for (let i = 7; i > 0; i--) {
//     const texture = Texture.from(`server${i}.png`);
//     textures.push(texture);
//   }
//   const sprite = new AnimatedSprite(textures);
//   sprite.play();
//   sprite.position.set(300);
//   sprite.animationSpeed = 0.2;
//   app.stage.addChild(sprite);
// });

export class App extends Application {
  loader: Loader;
  constructor(selector: string, options: IApplicationOptions) {
    super(options);
    const container = document.querySelector(selector);
    if (!container) document.body.appendChild(this.view);
    else container.appendChild(this.view);

    this.loader = Loader.shared;
    this.load();
  }

  load() {
    this.loader.add("./assets/spritesheet.json").load((l, r) => {
      this.setup();
    });
  }
  setup() {
    const textures = [];
    for (let i = 0; i <= 7; i++) {
      const texture = Texture.from(`server${i}.png`);
      textures.push(texture);
    }
    for (let i = 7; i > 0; i--) {
      const texture = Texture.from(`server${i}.png`);
      textures.push(texture);
    }
    const sprite = new AnimatedSprite(textures);
    sprite.play();
    sprite.animationSpeed = 0.2;
    this.stage.addChild(sprite);
  }
}

export function create(selector: string, options: IApplicationOptions) {
  window.muup = new App(selector, options);
  return window.muup;
}

const muup = create("#muup", {});

