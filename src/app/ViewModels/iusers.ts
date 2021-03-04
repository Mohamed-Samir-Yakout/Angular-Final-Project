export class User {
    constructor ( public id: number,public name: string,public email: string,public password: string,
    private token?:string,
    private tokenExpireDate?:Date){}


    // getToken(){
    //     if(!this.tokenExpireDate ||this.tokenExpireDate<new Date())
    //     return null;
    //     return this.token;
    // }
}
