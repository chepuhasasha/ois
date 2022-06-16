export function onDragStart(event: any) {
  this.data = event.data;
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
    if (newPosition.x - this.x >= 50) {
      this.x = this.x + 30;
    } else if (newPosition.x - this.x <= -50) {
      this.x = this.x - 30;
    }
    if (newPosition.y - this.y >= 30) {
      this.y = this.y + 30;
    } else if (newPosition.y - this.y <= -30) {
      this.y = this.y - 30;
    }
  }
}
