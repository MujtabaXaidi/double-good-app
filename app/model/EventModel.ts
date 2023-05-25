export class EventModel {
    eventId: string;
    userId: string;
    eventName: string;
    startDate: Date;
    endDate: Date;
    status:Boolean;
    teamActivity:string;
    eventCode:string;
    isMyEvent:boolean;
    constructor(userId: string,eventId: string,eventName: string,startDate:Date,endDate:Date,teamActivity:string,status:Boolean,eventCode:string ) {
      this.userId=userId;
      this.eventId=eventId;
      this.eventName=eventName;
      this.startDate=startDate;
      this.endDate=endDate;
      this.teamActivity=teamActivity;
      this.status=status;
      this.eventCode=eventCode;
    }
    getEventStatus():Boolean{
      return this.status;
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
   getEventCode():string{
    return this.eventCode
   }
   public set setMyEvent(val:boolean){
    this.isMyEvent=val;
   }
   
  }