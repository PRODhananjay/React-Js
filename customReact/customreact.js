function customRender(reactElement,container){
    const domElement = document
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainConatiner = document.querySelector('#root')

customRender(reactElement, mainConatiner)