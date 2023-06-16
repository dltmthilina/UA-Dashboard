import { action, makeAutoObservable, observable } from "mobx";
import RootStore from "./RootStore";
import AuthUser from "context/models/User";


export default class AuthStoreP{

    authenticatedUsers=[
        {
            "email":"regionalmanager@gmail.com",
            "password":"123456"
        },
        {
            "email":"teamleader@gmail.com",
            "password":"123456"
        }
    ]

    @observable
    authUser?:AuthUser

    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
    }

    @action
    async login(values:any){
        const emailChecked =   this.authenticatedUsers.filter((user)=>user.email==values.email);
        if(emailChecked.length){
            const isAuth =  emailChecked[0].password===values.password; 
            if(isAuth){
                this.authUser=emailChecked[0]
                return {status:200, result:this.authUser}
            }else{
                return {status:403, result:"please enter valid credentials"}
            } 
            
        }else{
            return {status:403, result:"please enter valid credentials"}
        }

    }
}