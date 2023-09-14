export class Personagem {
    nome
    vida = 100
    mana = 100
    level
    tipo
    descricao

    constructor(nome, tipo, level) {
        this.nome = nome
        this.tipo = tipo
        this.level = level
    
    }

    obterInsignia() {
        if (this.level >= 5) {
            return `Inplacavel ${this.tipo}`
        }
        return `${this.tipo} Iniciante`
        
    }
}
