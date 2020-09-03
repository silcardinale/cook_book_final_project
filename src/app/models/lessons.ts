export class Lessons {
    public name: string;
    public date: string;
    public timetable: string;
    public dificulty: string;
    public price: number;
    public img: string;

    constructor(name: string,  date: string, timetable: string, dificulty: string, price: number, img: string){
        this.name = name;
        this.date = date;
        this.timetable = timetable;
        this.dificulty = dificulty;
        this.price = price;
        this.img = img;
    }

}