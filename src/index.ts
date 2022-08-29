import { Observable } from "rxjs";

type TrackParams = {
  targetSelector: string;
  eventType?: string;
};

type Event = {
  trackParams: TrackParams;
  nativeDomEvent: Event;
};

export const EVENTS_TYPES: Array<string> = [
  "resize",
  "focusin",
  "focusout",
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "paste",
  "keydown",
  "keypress",
  "keyup",
  "submit",
  "change",
  "input",
];

export default function track(params: TrackParams): Observable<Event> {
  let { targetSelector, eventType = "click" } = params;

  if (eventType && !EVENTS_TYPES.includes(eventType)) {
    eventType = "click";
  }

  const observable = new Observable((subscriber) => {
    subscriber.next((callback) =>
      document.addEventListener(
        eventType,
        (event) => {
          if (event.target.closest(targetSelector)) {
            callback();
          }
        },
        true
      )
    );
  });

  return observable;
}

const observer = track({
  targetSelector: "button",
  eventType: "click",
});

if (observer) {
  observer.subscribe({
    next(callback) {
      callback(() => console.log("ураа"));
    },
  });
}