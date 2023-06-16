import { db } from "../../firebase";
import { collection,updateDoc, doc, getDocs,getDoc, query, serverTimestamp, setDoc, where } from "firebase/firestore";
import User from "context/models/User";


export default class UserService{

    static selectPlan=async(subscriptionPlan:any,user:any)=>{
        const docRef = doc(db, `users/${user.uid}`);
        await updateDoc(docRef, {
          substcriptionPlan:subscriptionPlan
        });
    }

   static createUser = async (user:any) => {
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const { docs } = await getDocs(q);
    
      if (docs.length === 0) {
        const { uid, displayName, email, photoURL, reloadUserInfo } = user;
    
        const docRef = doc(db, `users/${uid}`);
        await setDoc(docRef, {
          displayName,
          subscriptionPlan:"default",
          email,
          photoURL,
          uid,
          status:"default",
          role:"user",
          username: reloadUserInfo.screenName,
          createdAt: serverTimestamp(),
     
        });
      }
    };

    static getUsers=async()=>{
      
      const snapshot = await getDocs(collection(db, "users"));
      const documents:any[] = [];
      snapshot.forEach(doc => {
        const document = doc.data();
        documents.push(document);
      })
      return documents;
     
    }

    static getLoggedUser = async() => {

      const usersRef = collection(db, "users");
      const uid = localStorage.getItem("userId");
      const q = query(usersRef, where("uid", "==", `${uid}`));
      const snapshot  = await getDocs(q);
      const documents:User[] = [];
      snapshot.forEach(doc => {
        const documentData = doc.data();
        const documentObject = Object.assign({}, documentData);
        documents.push(documentObject);
      
      })
     
      return documents;
    }

    static suspendUser=async(rowData:any)=>{

      const Status = rowData.status==="suspended"? "default":"suspended"
      const docRef = doc(db, `users/${rowData.uid}`);
      await updateDoc(docRef, {
        status: Status
      });

    }
}