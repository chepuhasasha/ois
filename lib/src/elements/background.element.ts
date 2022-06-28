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
      .on("pointerdown", (e) => this.pointerDown(e))
      .on("pointerup", () => this.pointerUp())
      // .on("pointerupoutside", () => this.pointerOut())
      .on("pointermove", (e) => this.pointerMove(e));
    this.app.stage.addChild(this.tile);
    this.app.ticker.add((d) => {
      if (
        this.app.offset.x != this.tile.tilePosition.x ||
        this.app.offset.y != this.tile.tilePosition.y
      )
        this.moveToOffset(d);
      if (this.app.container.position.x != this.tile.tilePosition.x)
        this.app.container.position.x = this.tile.tilePosition.x;
      if (this.app.container.position.y != this.tile.tilePosition.y)
        this.app.container.position.y = this.tile.tilePosition.y;
    });
  }

  moveToOffset(d: number) {
    if (this.tile.tilePosition.x > this.app.offset.x) {
      this.tile.tilePosition.x -= d * 20;
      if (this.tile.tilePosition.x < this.app.offset.x)
        this.tile.tilePosition.x = this.app.offset.x;
    }
    if (this.tile.tilePosition.x < this.app.offset.x) {
      this.tile.tilePosition.x += d * 20;
      if (this.tile.tilePosition.x > this.app.offset.x)
        this.tile.tilePosition.x = this.app.offset.x;
    }
    if (this.tile.tilePosition.y > this.app.offset.y) {
      this.tile.tilePosition.y -= d * 20;
      if (this.tile.tilePosition.y < this.app.offset.y)
        this.tile.tilePosition.y = this.app.offset.y;
    }
    if (this.tile.tilePosition.y < this.app.offset.y) {
      this.tile.tilePosition.y += d * 20;
      if (this.tile.tilePosition.y > this.app.offset.y)
        this.tile.tilePosition.y = this.app.offset.y;
    }
  }

  pointerDown(e: InteractionEvent) {
    if (this.app.selected) {
      this.app.selected = null;
      // this.app.selected.unselect();
    }
    if (!this.app.tools.line) {
      this.start = e.data.getLocalPosition(this.tile.parent);
      this.dragging = true;
    }
  }
  pointerUp() {
    this.dragging = false;
  }
  // pointerOut() {
  //   this.dragging = false;
  // }
  pointerMove(e: InteractionEvent) {
    if (this.dragging) {
      const newPosition = e.data.getLocalPosition(this.tile.parent);
      const x = newPosition.x - this.start.x;
      const y = newPosition.y - this.start.y;
      this.tile.tilePosition.x += x;
      this.tile.tilePosition.y += y;
      this.start.x += x;
      this.start.y += y;
      this.app.offset.x += x;
      this.app.offset.y += y;
    }
  }
}
