var agora = new Date()
var diaSem = agora.getDay()

diaSem = 6

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('Segunda')
        break

    case 3:
        console.log('Terça-feira')
        break

    case 4:
        console.log('Quarta-Feira')
        break

    case 5:
        console.log('Quinta-feira')
        break

    case 6:
        console.log('Sexta-feira')
        break

    default:
        console.log('ERRO! Dia incorreto!')
        break
}
