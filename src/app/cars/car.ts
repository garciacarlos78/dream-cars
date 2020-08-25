export class Car {

    constructor(
        public id: number,
        public brand: string,
        public model: string,
        public imageURL: string,
        public year?: number,
        public power?: number,
        public topSpeed?: number,
        public acceleration?: number
    ) { }

}