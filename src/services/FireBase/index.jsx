import { initializeApp } from "firebase/app"
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore"
import { v1, v4 } from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyDxIg1nU21HM_dDJ3XGg2xntoWGcZehGdQ",
  authDomain: "fir-teste-df160.firebaseapp.com",
  projectId: "fir-teste-df160",
  storageBucket: "fir-teste-df160.appspot.com",
  messagingSenderId: "615236290881",
  appId: "1:615236290881:web:dcdaf74ea313196a2df9c0"
}
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export const getNoticias = async () => {
  try {
    const userCollectionRef = collection(db, "noticias")
    const querySnapshot = await getDocs(userCollectionRef)
    const result = querySnapshot.docs.map((doc) => doc.data())
    return result
  } catch (error) {
    console.log(error.response)
  }
}
export const getAoVivo = async () => {
  try {
    const userCollectionRef = collection(db, "aovivo")
    const querySnapshot = await getDocs(userCollectionRef)
    const result = querySnapshot.docs.map((doc) => doc.data())
    return result
  } catch (error) {
    console.log(error.response)
  }
}
export const postNoticias = async (form) => {
  try {
    const { genero, topico, imagem, noticia } = form

    setDoc(doc(db, "noticias", v1()), {
      genero,
      id:v4(),
      topico,
      imagem,
      noticia
    });
  } catch (error) {
    console.log(error.response)
  }
}
