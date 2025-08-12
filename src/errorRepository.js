export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [10, 'Invalid user input'],
            [20, 'Connection failed'],
            [30, 'Timeout exceeded'],
        ]);
    }

    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code);
        }
        return 'Unknown error'
    }
}