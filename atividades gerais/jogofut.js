let nomecomple = 'Geovane de Oliveira'
let tipodejog = 'domestico'
let etapadojog = 'semi-final'
let categoria = 3
quantidade = 1
preçosemificat3 = 550
preçofinalca3 =880
preço3lugarcat3 = 330
preçosemificat1 = 1320
preçofinalca1 = 1980
preço3lugarcat1 = 660
preçosemificat2 = 880
preço3lugarcat2 = 440
preçofinalca2 = 1320
preçosemificat4 = 220
preço3lugarcat4 = 170
preçofinalca4 = 330
switch (etapadojog) {
    case 'semi-final':
        switch (categoria) {
            case 1:
                console.log(nomecomple,'semi-final',tipodejog, preçosemificat1, 'R$')
                break;
                case 2:
                    console.log(nomecomple,'semi-final',tipodejog, preçosemificat2, 'R$')
                    break;
                    case 3:
                        console.log(nomecomple,'semi-final',tipodejog, preçosemificat3, 'R$')
                        break;
                        case 4:
                    console.log(nomecomple,'semi-final',tipodejog, preçosemificat4, 'R$')
                    break;
            default: console.log('contate a recepção, dados mau colocados')
                break;
        }
    case 'final':
        switch (categoria) {
            case 1:
                console.log(nomecomple, 'final', tipodejog,'quantidade comprada:', quantidade, preçofinalca1, 'R$')
                break;
                case 2:
                    console.log(nomecomple, 'final', tipodejog,'quantidade comprada:', quantidade, preçofinalca2, 'R$')
                    break;
                    case 3:
                        console.log(nomecomple, 'final', tipodejog,'quantidade comprada:', quantidade, preçofinalca3, 'R$')
                        break;
                        case 4:
                            console.log(nomecomple, 'final', tipodejog,'quantidade comprada:', quantidade, preçofinalca4, 'R$')
            default:
                console.log('contate a recepção, dados não corretamente cadastrados')
                break;
        }
    case '3ºfinal':
        switch (categoria) {
            case 1:
                console.log(nomecomple, '3ºlugar', tipodejog, 'quantidade comprada:', quantidade, preço3lugarcat1 )
                break;
        
            default:
                break;
        }

    default:
        break;
}