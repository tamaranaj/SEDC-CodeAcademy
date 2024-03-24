import { EventEmitter } from "events";
import fs from "fs";
import { eventNames } from "./errorEventNames.js";

export const errorEvent = new EventEmitter();

errorEvent.on(eventNames.ERROR_EVENTS, (error) => {
  const text = `\nAt ${Date.now()} an error happened: ${error}.`;
  fs.appendFileSync("db/errors.db/errors.txt", text);
});
