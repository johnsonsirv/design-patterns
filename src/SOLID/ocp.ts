interface Shape {
    calculateArea(): number;
  }
  
  class Rectangle implements Shape {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  class Circle implements Shape {
    radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }

    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  /**
   * In this example, we have shapes represented by 
   * the Shape interface. The Rectangle and Circle classes 
   * implement the Shape interface and provide their 
   * own implementations of the calculateArea method. 
   * This allows new shapes to be added without modifying 
   * the existing code, adhering to the Open-Closed Principle.
   */