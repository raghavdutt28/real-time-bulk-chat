export type UserId = string;

export interface Chat{
    name: string;
    userId: UserId;
    message: string;
    upvotes: UserId[];
}
export abstract class Store{
    constructor(){

    }
    initRoom(roomId: string) {

    }
    getChats(room: string, limit: number, offset: number){

    }
    addChat(userId: UserId, name: string, room: string, message: string){

    }
    upvote(userId: UserId, room: string, chatId: string){

    }
}