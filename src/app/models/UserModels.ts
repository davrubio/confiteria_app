export class UserModel {
    constructor(
        public id: number,
        public rut: string,
        public email: string,
        public name: string,
        public last_name: string,
        public user_type: string,
        public user_enabled: boolean,
        public phone: string,
        public address: string,
        public username: string,
        public password: string,
    ){}

    static createUser(event: {
        name: string,
        last_name: string,
        email: string,
    }){
        return {
            name: event.email,
            last_name: event.last_name,
            email: event.email
        }
    }
}