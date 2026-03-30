let user = 'admin'
let senha ='1234'

if (user === 'admin' && senha === '1234') {
    console.log('Acesso permitido')
} else if (user !== 'admin') {
    console.log('Usuario invalido')
} else {
    console.log('Senha invalida')
}