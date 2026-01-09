import { randomUUID } from 'node:crypto';

export class Payments {
    constructor({ author, payment }) {
        this.id = randomUUID();
        this.author = author;
        this.payment = payment;
    }
}