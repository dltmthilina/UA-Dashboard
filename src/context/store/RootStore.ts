import SimpleStore from "./SimpleStore";
import {makeAutoObservable} from "mobx";
import AuthStore from "./AuthStore";

class RootStore {

    simpleStore:SimpleStore;
    authStore:AuthStore;

    constructor() {
        this.simpleStore = new SimpleStore(this);
        this.authStore = new AuthStore(this);
        makeAutoObservable(this);
    }

}

export default RootStore;