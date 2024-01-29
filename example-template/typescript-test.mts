/**
 * Represents a {+ClassNameDescription+} capable of basic arithmetic operations.
 * The class allows {+OperationList+}, and resetting the result.
 */
export class {+ Class Name+} {
    private result: {+ResultType+};

    /**
     * Initializes a new instance of the {+ClassName+} class.
     */
    constructor() {
        this.result = {+ a long template variable name +};
    }

    /**
     * Adds a number to the current result.
     * @param {{+NumberType+}} number - The number to add.
     */
    add(number: {+NumberType+}): void {
        this.result += number;
    }

    /**
     * Subtracts a number from the current result.
     * @param {{+NumberType+}} number - The number to subtract.
     */
    subtract(number: {+NumberType+}): void {
        this.result -= number;
    }

    /**
     * Resets the result to {+ResetValue+}.
     */
    reset(): void {
        this.result = {+ResetValue+};
    }

    /**
     * Displays the current result.
     */
    displayResult(): void {
        console.log(`{+DisplayMessage+} ${this.result}`);
    }
}
