const BASE = 'http://localhost:3000'

let getApartments = function() {
  return fetch(BASE + '/apartments')
    .then((resp) => {
      let json = resp.json()
      console.log(json);
      return json
    })
    .catch((error) =>
      console.log(error))
}

let createApartment = function(apartment) {
  return fetch(BASE + '/apartments', {
    body: JSON.stringify(apartment),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  })
    .then((resp) => {
      let json = resp.json()
      return json
    })
}

let getApartment = function(id) {
  console.log("this is my id in the getappartment function " + id)
  return fetch(BASE + '/apartments/' + id)
    .then((resp) => {
      let json = resp.json()
      console.log(json);
      return json
    })
}

export {
  getApartments, createApartment, getApartment
}
