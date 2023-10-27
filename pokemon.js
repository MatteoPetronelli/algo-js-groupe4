//exo class
class Pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky() {
        return this.luck>Math.random()
    }

    attackPokemon(def) {
        if (this.isLucky()){
            let dmg = this.attack - def.defense
            def.hp -= dmg
            console.log(this.name + ' a attaqué ' + def.name + ' pour ' + dmg + ' de dégâts! Il lui reste ' + def.hp + ' points de vie.')
        } else {
            console.log(this.name  + ' a raté son attaque !')
        }
    }
}

let Zygarde = new Pokemon("Zygarde", 150, 100, 150, 0.75)
let Necrozma = new Pokemon("Necrozma", 170, 100, 110, 0.8)

while (Zygarde.hp >0 && Necrozma.hp>0){
    Zygarde.attackPokemon(Necrozma)
    if (Necrozma.hp<0){
        console.log("Necrozma à perdu")
        break
    }
    Necrozma.attackPokemon(Zygarde)
    if (Zygarde.hp<0){
        console.log("Zygarde à perdu")
        break
    } 
}


