import { initializeApp } from "firebase/app"
import { getFirestore, getDocs, collection, doc, setDoc } from "firebase/firestore"

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
export const postNoticias = async (idNoticia, genero, id, topico, imagem, noticia) => {
  try {
    setDoc(doc(db, "noticias", idNoticia), {
      genero,
      id,
      topico,
      imagem,
      noticia
    });
  } catch (error) {
    console.log(error.response)
  }
}
