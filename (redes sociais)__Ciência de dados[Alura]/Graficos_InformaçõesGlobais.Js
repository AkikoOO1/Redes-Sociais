const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

    async function VizualizarInformações() {
        const res = await fetch(url) /*cons= variavel constante; res= resposta;  await= espera a aquisição ser feita; fetch=???*/
        const dados = await res.json()
        const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9) /* esse 1e9 => É um bilião. ESSA VARIAVÉL ESTÁ PEGANDO O NÚMERO E O ESTÁ DIVIDINDO POR UM BILHÃO */
        const pessoasMundo = (dados.total_pessoas_mundo / 1e9) /*Semelhante com o pessoasConectadas porém agora ele pega o 788800000 e o divide por 1 bilhão */
        const Horas = parseInt (dados.tempo_medio) /* Pegou somente o 2*/
        const Minutos = Math.round(dados.tempo_medio - Horas) * 100 /*!Math =>Matemática e o round =>Arredondar! Aqui ele pegou os dados dos tempo original e diminiui 2, que ficou =0,37 daí depois ele muitiplicou por 100 para ficar somente o 37 */
        const PorcentagemPessoas = ((pessoasConectadas / pessoasMundo) * 100).toFixed(2) /*Esse toFixed deixará apenas 2 casas decimais*/ 

        const paragrafo = document.createElement('p')
    paragrafo.classList.add('Graficos-Container__texto')/*Adicionou uma clase do css*/ 
    paragrafo.innerHTML = `Sabia que no mundo tem <span class="Dados">${pessoasMundo} bilhões</span> de pessoas e que 
aproximadamente <span class="Sp">${pessoasConectadas} bilhões </span> estão conectadas em alguma rede social
e passam em média <span class="Sp">${Horas} horas</span> e <span class="Sp">${Minutos} minutos</span> conectadas. <br>Isso significa portanto que 
<span class="Sp">${PorcentagemPessoas}% </span> pessoas estão conectadas na redes sociais.`

    /*<--Essa parte fez com que o Html mostrasse o paragrafo--> */
        const container = document.getElementById('Graficos-Container') /*O grafico-container tem que ser igual ao que pois lá no html*/
        container.appendChild(paragrafo) /*o appendChild é o pai do paragrafo  */
    }
VizualizarInformações()