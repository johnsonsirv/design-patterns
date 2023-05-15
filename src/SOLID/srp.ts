class Calculator {
    add(a: number, b:number): number {
        return a + b
    }
}

class Printer {
    print(value: string): void {
        console.log(value);
    }
}

/**
 * In this example, we have two classes that 
 * adhere to the Single Responsibility Principle.
 * The Calculator class is responsible for performing arithmetic operations, specifically addition.
 * The Printer class is responsible for printing values to the console.
 * Each class has a single responsibility, making them focused and easy to understand.
 */