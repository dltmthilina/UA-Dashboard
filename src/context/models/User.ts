

export default class AuthUser{
    
email?:string;
password?:string;

constructor(obj?: Partial<AuthUser>) {
    Object.assign(this, obj);
}

}