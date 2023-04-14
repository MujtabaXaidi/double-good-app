export class EventModel {
    eventId: string;
    userId: string;
    eventName: string;
    statedDate: Date;
    endDate: Date;
    teamActivity:string;
    constructor(userId: string,eventId: string,eventName: string,startedDate:Date,endDate:Date,teamActivity:string) {
      this.userId=userId;
      this.eventId=eventId;
      this.eventName=eventName;
      this.statedDate=startedDate;
      this.endDate=endDate;
      this.teamActivity=teamActivity;
    }
   getEventName():string {
    return this.eventName;
   }
   getUserId():string {
    return this.userId;
   }
   getEventId():string {
    return this.eventId;
   }
   
  }