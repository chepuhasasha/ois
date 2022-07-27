export declare type EventListener = () => void;
export declare type eventsName = "pointerdown" | "pointerup" | "pointerover" | "pointerout";
export declare class EventsService {
    events: {
        [K in eventsName]: EventListener[];
    };
    _event: eventsName | null;
    constructor();
    on(event: eventsName, cb: EventListener): void;
    set event(e: eventsName);
}
