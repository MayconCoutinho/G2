import { initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { v1 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyDxIg1nU21HM_dDJ3XGg2xntoWGcZehGdQ",
  authDomain: "fir-teste-df160.firebaseapp.com",
  projectId: "fir-teste-df160",
  storageBucket: "fir-teste-df160.appspot.com",
  messagingSenderId: "615236290881",
  appId: "1:615236290881:web:dcdaf74ea313196a2df9c0"
};
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
    const dbRef = doc(db, "noticias", id)
    const response = await deleteDoc(dbRef)
    return response
  } catch (error) {
    console.log(error.response)
  }
}
export const EditarNoticias = async (form, id) => {
  console.log(form, id)
  try {
    const { genero, topico, imagem, noticia } = form

    const dbRef = doc(db, "noticias", id[0])
    if (genero) {
      await updateDoc(dbRef, {
        genero
      })
    }
    if (topico) {
      await updateDoc(dbRef, {
        topico
      })
    }
    if (imagem) {
      await updateDoc(dbRef, {
        imagem
      })
    }
    if (noticia) {
      await updateDoc(dbRef, {
        noticia
      })
    }


  } catch (error) {
    console.log(error.response)
  }
}
export const EditarAovivo = async (form) => {
  try {
    const { video, videoChat } = form
    console.log(form)
    const dbRef = doc(db, "aovivo", "fuyGfPTsnkeRHQhcNpDC")
    if (video) {
      await updateDoc(dbRef, {
        video
      })
    }
    if (videoChat) {

      await updateDoc(dbRef, {
        videoChat
      })
    }
  } catch (error) {
    console.log(error.response)
  }
}
export const postNoticias = async (form) => {
  try {
    const { genero, topico, imagem, noticia } = form
    const id = await v1()
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
