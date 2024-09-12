import { kepekLISTA } from "./adat.js";
import Jatekter from "./Jatekter.js";
import Kartya from "./Kartya.js";

const nagyKepELEM = $(".nagykep")
new Kartya(kepekLISTA[0], nagyKepELEM, kepekLISTA)

const kisKepELEMEK = $(".kiskepek")
new Jatekter(kepekLISTA, kisKepELEMEK)