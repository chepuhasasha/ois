export type EventListener = () => void;
export type eventsName =
  | "pointerdown"
  | "pointerup"
  | "pointerover"
  | "pointerout";

export class EventsService {
  public events: {
    [K in eventsName]: EventListener[];
  };
  public _event: eventsName | null;

  constructor() {}

  on(event: eventsName, cb: EventListener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(cb);
  }

  set event(e: eventsName) {
    if (this.events[e]) {
      this.events[e].forEach((cb) => {
        cb();
      });
    }
  }
}
