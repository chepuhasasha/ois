export function onDragStart(event: any) {
  this.scale.set(0.95, 0.95);
  this.data = event.data;
  this.start = this.data.getLocalPosition(this.parent);
  this.alpha = 0.8;
  this.dragging = true;
}

export function onDragEnd() {
  this.scale.set(1, 1);
  this.alpha = 1;
  this.dragging = false;
  this.data = null;
}

export function onDragMove() {
  if (this.dragging) {
    const newPosition = this.data.getLocalPosition(this.parent);
    this.x = newPosition.x;
    this.y = newPosition.y;
  }
}
export function onDragMoveStep() {
  if (this.dragging) {
    const newPosition = this.data.getLocalPosition(this.parent);
    if (newPosition.x - this.x >= 25) {
      this.x += 25;
    } else if (newPosition.x - this.x <= -25) {
      this.x -= 25;
    }
    if (newPosition.y - this.y >= 15) {
      this.y += 15;
    } else if (newPosition.y - this.y <= -15) {
      this.y -= 15;
    }
  }
}
export function onDragMoveMap() {
  if (this.dragging) {
    const newPosition = this.data.getLocalPosition(this.parent);
    const x = newPosition.x - this.start.x;
    const y = newPosition.y - this.start.y;
    this.tilePosition.x += x;
    this.tilePosition.y += y;
    this.start.x += x;
    this.start.y += y;
  }
}
