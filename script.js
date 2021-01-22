const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')

// getUser('Soupy96')

async function getUser(username) {
    try {
        const { data } = await axios.get(APIURL + username)

        console.log(data)
    } catch(err) {
        console.log(err)
    }
}

form.addEventListener('submit', (e) =>  {
    e.preventDefault()

    const user = search.value

    if (user) {
        getUser(user)

        search.value = ''
    }
})