interface Bird {
    fly(): void;
  }
  
class Sparrow implements Bird {
    fly(): void {
        console.log("Sparrow flying...");
    }
}
  
class Penguin implements Bird {
    fly(): void {
      throw new Error("Penguins cannot fly.");
    }
}

/**
 * In this example, we have the Bird interface 
 * that defines the behavior of flying. 
 * The Sparrow class implements the Bird 
 * interface and can fly. However, 
 * the Penguin class also implements the 
 * Bird interface but throws an error 
 * because penguins cannot fly.
 *  Despite this difference, 
 * the Liskov Substitution Principle ensures 
 * that both Sparrow and Penguin can be
 * used interchangeably where a Bird is expected.
 */