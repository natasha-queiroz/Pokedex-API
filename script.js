
document.addEventListener("DOMContentLoaded", () => {
    const campo = document.getElementById("campo")
    const botao_buscar = document.getElementById("botao_buscar")
    const container_image = document.getElementById("container_image")
    const nome = document.getElementById("nome")

    const fetchApi = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        return data
    }

    const resposta = async (id) => {
        const result = await fetchApi(id)
        if (result) {
            container_image.innerHTML = `<img src="${result.sprites.front_default}" alt="Pokemon">`
            nome.innerHTML = `<p>${result.name}</p>`
        }
    }

    botao_buscar.addEventListener("click", async () => {
        const id = campo.value
        if (id) {
            await resposta(id)
        }
    })
})