import { Container } from "pixi.js";
import { Factory } from "../services/factory.service";

export class Viewer extends Container {
  constructor(private FACTORY: Factory) {
    super();
  }
}
