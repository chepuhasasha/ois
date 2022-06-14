import { Application, Loader, Texture, AnimatedSprite } from "pixi.js";

const app = new Application({
  width: innerWidth,
  height: innerHeight,
});

document.body.appendChild(app.view);

const loader = Loader.shared;

loader.add("./assets/spritesheet.json").load(() => {
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
  sprite.position.set(300);
  sprite.animationSpeed = 0.2;
  app.stage.addChild(sprite);
});

