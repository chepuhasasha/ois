import { Container } from "pixi.js";
import { Factory } from "../services/factory.service";

export class Mover extends Container {
  constructor(private FACTORY: Factory) {
    super();
  }
}
