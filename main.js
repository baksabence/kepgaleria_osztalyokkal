import { kepekLISTA } from "./adat.js";
import Jatekter from "./jatekter.js";
import Kartya from "./kartya.js";

const nagyKepELEM = $(".nagykep")
new Kartya(kepekLISTA[0], nagyKepELEM, kepekLISTA)

const kisKepELEMEK = $(".kiskepek")
new Jatekter(kepekLISTA, kisKepELEMEK, nagyKepELEM)