const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Com uma população estimada em <span>212,6 milhões</span> de habitantes, aproximadamente <span>98% dos brasileiros</span> utilizam algum tipo de aplicativo atualmente. Um levantamento realizado pelo IBGE em 2022 apontou que, em média, <span>1,5 milhão</span>de brasileiros utilizam aplicativos e plataformas digitais como fonte de trabalho. Do total de usuários de aplicativos, cerca de <span>161,6 milhões</span> apresentam uso excessivo dessas ferramentas.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
