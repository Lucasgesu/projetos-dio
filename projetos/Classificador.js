let heroi = "kratos"
let Xp = 0
switch(Xp){
    case Xp <= 1000:
        console.log("O jogador", heroi, "está no nível de ferro")
        break
        case Xp > 1001 && Xp <= 2000:
            console.log("O jogador", heroi, "está no nível de Bronze")
            break
            case Xp > 2001 && Xp <= 5000:
                console.log("O jogador", heroi, "está no nível de Prata")
                break
                case Xp > 5001 && Xp <= 7000:
                    console.log("O jogador", heroi, "está no nível de Ouro")
                    break
                    case Xp > 7001 && Xp <= 8000:
                        console.log("O jogador", heroi, "está no nível de Platina")
                        break
                        case Xp > 8001 && Xp <= 9000:
                            console.log ("O jogador", heroi, "está no nível de Ascendente0")
                            break
                            case Xp > 9001 && Xp <= 10000:
                            console.log("O jogador", heroi, "está no nivel de Imortal")
                            break
                            default: console.log(" O jogador", heroi, "está no nível de Radiante")
}
