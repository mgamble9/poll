export class Poll {
    poll: string = '';
    createdBy: string;
    option1 : {option: string, count: number};
    option2 : {option: string, count: number};
    option3 : {option: string, count: number};
    option4 : {option: string, count: number};
    createdAt: Date;
    updatedAt: Date;
    _id: string;
}
