export class ChatModel {
    eventId: string;
    userId: string;
    mimeType:string;
    content:string;
    timeStamp:Date;
    senderName:string;
    constructor(userId: string,eventId: string, mimeType:string,content:string,timeStamp:Date,senderName:string ) {
      this.userId=userId;
      this.eventId=eventId;
      this.mimeType=mimeType;
      this.content=content;
      this.timeStamp=timeStamp;
      this.senderName=senderName;
    }
   
    getUserId():string{
        return this.userId;
    }
   
  }