const main = document.querySelector('#root')

const reactElement = {
    type: 'a',
    props : {
        href : 'https://google.com'
    },
    children : 'Click Me'
}


function customRender(reactElement,main){
    const element  = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children
    // element.setAttribute('href',reactElement.props.href)

    for (const prop in reactElement.props) {
        element.setAttribute(prop,reactElement.props[prop])
    }

    main.appendChild(element)
}

customRender(reactElement,main)