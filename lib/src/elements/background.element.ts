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
      if (this.app.selected && this.app.selected.type === "component") {
        this.app.scrollToSelected(d);
      }
      if (this.app.container.position.x != this.tile.tilePosition.x) {
        this.app.container.position.x = this.tile.tilePosition.x;
      }
      if (this.app.container.position.y != this.tile.tilePosition.y) {
        this.app.container.position.y = this.tile.tilePosition.y;
      }
    });
  }

  pointerDown(e: InteractionEvent) {
    if (this.app.selected) {
      this.app.selected.unselect();
      this.app.selected = null;
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
    }
  }
}
