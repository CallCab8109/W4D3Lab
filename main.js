let button = document.querySelector('button')

function useButton () {
    axios.get('http://swapi.dev/api/planets/2')
    .then((response) => {
        for(let i = 0; i < response.data.residents.length; i++) {
            axios.get(response.data.residents[i])

           .then((response) => {
            let theResidents = document.createElement('h2')                 
            theResidents.innerHTML = response.data.name                 
            document.getElementById('test').appendChild(theResidents) 
           })
        }
    })

    // .catch((error) => {
    //     console.log('you got an error' + error)
    // })

}

button.addEventListener('click', useButton)

