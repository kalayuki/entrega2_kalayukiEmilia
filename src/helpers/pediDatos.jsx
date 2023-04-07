import { MOCK_DATA1 } from "../data/MOCK_DATA1.jsx";

export const pediDatos = () => {
  return new Promise((resolve, rejet) => {
    setTimeout(() => {

      resolve(MOCK_DATA1)


    }, 1500)

  })
}

export const pedirProductoPorId = (id) => {
  return new Promise((resolve, rejet) => {
    setTimeout(() => {

      resolve(MOCK_DATA1.find(prod => prod.id === id))


    }, 1500)

  })
}

