import { initializeApp } from "firebase/app"
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from "firebase/firestore"
import { v1 } from 'uuid'


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
export const getLogin = async () => {
  try {
    const userCollectionRef = collection(db, "admin")
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

export const delPost = async (id) => {
  try {
    const response = await deleteDoc(doc(db, "noticias", id))
    return response
  } catch (error) {
    console.log(error.response)
  }
}

export const postNoticias = async (form) => {
  try {
    const { genero, topico, imagem, noticia } = form
    const id = await  v1()
    setDoc(doc(db, "noticias", id), {
      genero,
      id: id,
      topico,
      imagem,
      noticia,
      data: new Date().toISOString()
    });
  } catch (error) {
    console.log(error.response)
  }
}
