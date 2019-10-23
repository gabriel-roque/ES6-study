const tratarErro = ({message}) => {
    //throw new Error (`Error: ${message} as ${new Date}`)
    console.error(`Error: ${message} as ${new Date()}`);
}

const run = ({nome}) => {
    try {
        console.log(nome.toUpperCase());
    } catch (e) {
       tratarErro({message: e.message})
    } finally {
        console.log('Sempre finalizo aqui!');
    }
}

const pessoa = {
    nome2: 'Gabriel Roque',
    idade: 20,
    cargo: 'Desenvolvedor de Software'
}

run(pessoa)