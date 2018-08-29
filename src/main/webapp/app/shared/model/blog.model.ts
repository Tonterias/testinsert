export interface IBlog {
    id?: number;
    title?: string;
}

export class Blog implements IBlog {
    constructor(public id?: number, public title?: string) {}
}
