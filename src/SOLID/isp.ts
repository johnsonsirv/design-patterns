interface Book {
    read(): void;
  }
  
  interface Magazine {
    browse(): void;
  }
  
  class Novel implements Book {
    read(): void {
      console.log("Reading a novel...");
    }
  }
  
  class FashionMagazine implements Magazine {
    browse(): void {
      console.log("Browsing a fashion magazine...");
    }
  }

  /**
   * In this example, we have separate interfaces for
   *  Book and Magazine. The Novel class 
   * implements the Book interface with a 
   * read method, while the FashionMagazine 
   * class implements the Magazine interface with 
   * a browse method. Each class implements only 
   * the methods relevant to their specific interface,
   *  adhering to the Interface Segregation Principle.
   */