
import { getCSS, tickfont_Config} from "./comun.Js" /* Esta importanto o código do comun.Js */

async function Quantidade_Usuarios(){
    const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res =await fetch(url)
    const dados = await res.json()
    const nomesDasRedes = Object.keys(dados) /* keys = chaves */
    const QuantidadeUsuarios = Object.values(dados)

    const data = [ /* Essa data é super importante pois é ela que dá os parametros para o gráfico */
        {
            X: nomesDasRedes,
            y:QuantidadeUsuarios,
            type: 'bar', 
            marker: {
               color: getCSS ('--Extra') /*aqui esta colorindo o gráfico, pegando as cores do Css */ 
            }
        }
    ]

        const layout = { /* Essa parte está colorindo o fundo do gráfico e colocando as palavras*/
            plot_bgcolor: getCSS('--Fundo'), /* Primeira camada */
            paper_bgcolor: getCSS('--Fundo'), /*Segunda camada */
        title: {
            text: 'Redes sociais com mais usuários no planeta.',
            
            font: { /* Está editando o título do gráfico */
                color: getCSS ('--secundaria'),
                family: getCSS('--font'),
                size: 30
            }
        },

        xaxis: { /*Escrita Horizontal */
            tickfont: tickfont_Config,
            
            title: {
                text: 'Nome das redes sociais',
                font:{
                    color: getCSS('--principal')
                }
            }
        },

                yaxis:{ /*Escrita vertical */
                    tickfont: tickfont_Config,
                    title: {
                        text: 'Bilhões de usuários ativos',
                        font:{
                            color: getCSS('--principal')
                        }
                    }
                }

        
    }


    const Grafico = document.createElement('div')
    Grafico.className = 'Grafico'
    document.getElementById('Graficos-Container').appendChild(Grafico)
    Plotly.newPlot(Grafico, data, layout) /* está colocando adicionando o gráfico para o site e o data é importante colocar aqui */
}

Quantidade_Usuarios()