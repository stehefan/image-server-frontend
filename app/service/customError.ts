export class CustomError extends Error {
    readonly statusCode: number;

    constructor(message: string, statusCode?: number) {
        super(message);
        this.statusCode = statusCode || 500;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
