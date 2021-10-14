fetch("https://randomuser.me/api/")
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    .then(function(random) {
        console.log(random)
        document.querySelector("body").innerHTML += `<p>${random.results[0].location.city}</p>`
    })