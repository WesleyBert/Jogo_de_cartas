import { Personagem } from "../modules/personagem.js";
import { personagemView } from "./components/personagem-view.js";
import { Mago } from "../modules/mago.js";

const personagemJose = new Personagem('Jose', 'Arqueiro', 4, 20);
const personagemPedrinho = new Personagem('Pedrinho', 'Mago', 10, 50);



const personagens = [personagemJose, personagemPedrinho]

new personagemView(personagens).render();
console.log(new Mago('fogo', 50, 130))