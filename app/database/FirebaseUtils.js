import { firebase } from "@react-native-firebase/firestore"
let instance=null;
let USER_COLLECTION='User';
let PROFILE_COLLECTION='profile';
let EVENT_COLLECTION="Event";
let MESSSAGE_COLLECTION="Message";
let PRODUCTS_COLLECTION="Products"
class Database {

    constructor() {
        if(instance==null){
            instance=this;
            return; 
        }
        console.log('new instance cannot be created');        
    }
    getDatabase(){
        return firebase;
    }
    getUserCollections(){
      const usersCollection=  firebase.firestore().collection(USER_COLLECTION);
      return usersCollection;
    }
    authenticatePhoneNumber(number){
        const provider= new firebase.au
    }
    async createNewUser(newUser){
        let user=await firebase.firestore().collection(USER_COLLECTION).doc(newUser.getUserId()).collection("profile").doc(newUser.getUserId()).set(newUser);
        return user;
    }
    async updateUserInfo(user){
        let newUser=await firebase.firestore().collection(USER_COLLECTION).doc(user.getUserId()).collection(PROFILE_COLLECTION).doc(user.getUserId()).set(user);
        return newUser;
    }
    async getSinglerUser(userId){
        let user= firebase.firestore().collection(USER_COLLECTION).doc(userId).collection(PROFILE_COLLECTION).doc(userId).get();
        return user;
    }
    async addNewEvent(EventModel){
        let newEvent=await firebase.firestore().collection(EVENT_COLLECTION).doc(EventModel.getEventCode()).set(EventModel);
        return newEvent;
    }
    async addUserEvent(EventModel){
        console.log('EventModel.getUserId()', EventModel.getUserId());
        let newEvent=await firebase.firestore().collection(USER_COLLECTION).doc(EventModel.getUserId()).collection(EVENT_COLLECTION).doc(EventModel.getEventCode()).set(EventModel);
        return newEvent;
    }
    async deleteEvent(id){
      let status=  await firebase.firestore().collection(EVENT_COLLECTION).doc(id).update({status:false});
        return status;
    }
    async getUserEvent(userId){
        let userEvent=await firebase.firestore().collection(USER_COLLECTION).doc(userId).collection(EVENT_COLLECTION).where('status','==',true ).get();
        console.log('userEvent.....', userEvent)
        return userEvent;
    }
    async sendMessage(chat){
        let theChat=await firebase.firestore().collection(EVENT_COLLECTION).doc(chat.getUserId()).collection(MESSSAGE_COLLECTION).add(chat);
        return theChat;
    }
    async getPublicMessage(eventId){
        let messages=await firebase.firestore().collection(EVENT_COLLECTION).doc(eventId).collection(MESSSAGE_COLLECTION).limit(10).get();
        return messages;
    }
    async getDatabaseInstance(eventId){
        return  firebase.firestore().collection(EVENT_COLLECTION).doc(eventId).collection(MESSSAGE_COLLECTION);
    }
    async getProducts(){
        let products=await firebase.firestore().collection(PRODUCTS_COLLECTION).get();
        console.log('userEvent.....', products)
        return products;
    }
    async getDocumentWithEventCode(eventId){
        let doc = await  firebase.firestore().collection(EVENT_COLLECTION).doc(eventId).get();
        return doc;
    }
}   
let databaseInstance=Object.freeze(new Database());
export default databaseInstance;