import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";

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

    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
    }

     login(values:any){
        
    }

}