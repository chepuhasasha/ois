import { App } from "..";

declare global {
  interface Window {
    muup: App;
  }
}
