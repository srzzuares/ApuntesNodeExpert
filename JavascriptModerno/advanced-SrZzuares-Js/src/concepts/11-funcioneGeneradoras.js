import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element Elemento tipo HTML
 */
export const GenerateFucComponent = (element) => {
    // const myGenerator = myFuncionGeneradora();
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());

    const genId = igGenerater();
    const button = document.createElement('button');
    button.innerText = 'CLick me';
    element.append(button);

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${value}`;
    }
    button.addEventListener('click', renderButton);
}

function* myFuncionGeneradora() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    return 'no hay nada';
}

function* igGenerater() {
    let idGen = 0;
    while (true) {
        yield ++idGen;
    }
}