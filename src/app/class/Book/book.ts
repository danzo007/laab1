export class Book{
    code: string;
    readerNum: string;
    startDate: Date;
    endDate: Date;
    constructor(code: string, readerNum: string, startDate: Date, endDate: Date){
        this.code = code;
        this.readerNum = readerNum;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}