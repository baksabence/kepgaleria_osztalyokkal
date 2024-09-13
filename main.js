import { kepekLISTA } from "./modell/adat.js";
import Jatekter from "./view/Jatekter.js";
import Kartya from "./view/Kartya.js";

const nagyKepELEM = $(".nagykep")
new Kartya(kepekLISTA[0], nagyKepELEM, kepekLISTA)

const kisKepELEMEK = $(".kiskepek")
new Jatekter(kepekLISTA, kisKepELEMEK, nagyKepELEM)