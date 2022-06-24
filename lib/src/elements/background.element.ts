import { Texture, TilingSprite, InteractionEvent } from "pixi.js";
import { App } from "..";

export class Background {
  public tile: TilingSprite;
  private start: { x: number; y: number };
  private dragging: boolean;
  constructor(private app: App) {
    this.tile = new TilingSprite(
      Texture.from("bg"),
      this.app.screen.width,
      this.app.screen.height
    );
    this.tile.interactive = true;
    this.tile
      .on("pointerdown", (e) => {
        this.app.selected = null;
      })
      .on("pointerdown", (e) => this.pointerDown(e))
      .on("pointerup", (e) => this.pointerUp(e))
      .on("pointerupoutside", (e) => this.pointerOut(e))
      .on("pointermove", (e) => this.pointerMove(e));
    this.app.stage.addChild(this.tile);
    this.app.ticker.add((d) => {
      this.app.scrollToSelected(d);
      if (this.app.container.position.x != this.tile.tilePosition.x) {
        this.app.container.position.x = this.tile.tilePosition.x;
        this.app.container.position.y = this.tile.tilePosition.y;
      }
    });
  }

  pointerDown(e: InteractionEvent) {
    this.start = e.data.getLocalPosition(this.tile.parent);
    this.dragging = true;
  }
  pointerUp(e: InteractionEvent) {
    this.dragging = false;
  }
  pointerOut(e: InteractionEvent) {
    console.log(e);
  }
  pointerMove(e: InteractionEvent) {
    if (this.dragging) {
      const newPosition = e.data.getLocalPosition(this.tile.parent);
      const x = newPosition.x - this.start.x;
      const y = newPosition.y - this.start.y;
      this.tile.tilePosition.x += x;
      this.tile.tilePosition.y += y;
      this.start.x += x;
      this.start.y += y;
    }
  }
}
