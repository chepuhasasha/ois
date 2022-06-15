export function onDragStart(event: any) {
  this.data = event.data;
  this.alpha = 0.5;
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
