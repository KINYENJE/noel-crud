document.querySelector('button').addEventListener('click', getApi)

async function getApi() {
    const nameRapper = document.querySelector('input').value

    const response = await fetch(`https://noel-crud.onrender.com/api/${nameRapper}`)
    const data = await response.json()

    console.log(data)
}