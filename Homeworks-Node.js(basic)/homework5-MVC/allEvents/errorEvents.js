import { EventEmitter } from "events";
import fs from "fs";
import { eventNames } from "./events.js";


export const errorEvent = new EventEmitter();

errorEvent.on(eventNames.ERROR_EVENTS, (error) => {
    const text = `\nAt ${Date.now()} an error happened: ${error}.`
  fs.appendFileSync(
    "Db/errors.txt", text);
});
