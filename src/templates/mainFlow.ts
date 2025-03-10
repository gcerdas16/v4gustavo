import { addKeyword, EVENTS } from "@builderbot/bot";
import { eventNames } from "process";


const mainFlow = addKeyword([
  EVENTS.WELCOME,
  EVENTS.MEDIA,
  EVENTS.DOCUMENT,
  EVENTS.VOICE_NOTE
]).addAnswer("test");

export { mainFlow, }




