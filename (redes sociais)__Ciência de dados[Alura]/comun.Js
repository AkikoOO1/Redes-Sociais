/* Aqui vai ficar os caminhos dos atalhos do projeto. Para não der que ficar toda hora repedindo eles no projeto, eles veem aqui para serem tranformados "APELIDADOs" */
const getCSS = (variavel) => {
    return  getComputedStyle(document.body).getPropertyValue(variavel) 
}

    const tickfont_Config = {
        color: getCSS('--Extra'),
                size: 16,
                family: getCSS('--font')
    }


export {getCSS, tickfont_Config} /* Está permitindo que esse código seja exportado para as outras páginas */