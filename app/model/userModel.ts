export class UserModel {
    username: string;
    userId: string;
    email: string;
    constructor(username: string,userId: string,email: string) {
      this.username=username;
      this.userId=userId;
      this.email=email;
    }
   getUsername():string {
    return this.username;
   }
   getUserId():string {
    return this.userId;
   }
   getEmail():string {
    return this.email;
   }
  }