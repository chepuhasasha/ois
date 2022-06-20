export function onDragStart(event: any) {
  this.data = event.data;
  this.start = this.data.getLocalPosition(this.parent);
  this.alpha = 0.8;
  this.dragging = true;
}

export function onDragEnd() {
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
    if (newPosition.x - this.x >= 50) {
      this.x += 50;
    } else if (newPosition.x - this.x <= -50) {
      this.x -= 50;
    }
    if (newPosition.y - this.y >= 30) {
      this.y += 30;
    } else if (newPosition.y - this.y <= -30) {
      this.y -= 30;
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
