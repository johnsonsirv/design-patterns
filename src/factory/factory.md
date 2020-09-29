## The Factory Method design pattern (aka Virtual Constructor)

- Learning design patterns so that you use them when designing your codes and identify them when you see them in another source code.
### Credits

https://refactoring.guru/design-patterns

Node.js Design Patterns 3rd Edition by Mario Casciaro & Luciano Mammino

### TLDR;

- Define a method which should be used for creating objects instead of the `new` operator (constructor call)
- Override this method (in sub-clasess) to change the class of objects that will be created depending on configuration or environment
- Decouple object creation and implementation
- Mechanism to enforce Encapsulation using any of the known techniques - closures, private class fields(# hashbang syntax), WeakMaps, Symbols, Private variables in constructor.

### What is Factory Method?

The name suggests where a product is made or created. It is a creational design pattern. It provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

### When can I use a factory method pattern on my code design?

- When you create objects whose class is determined at runtime -you don’t know beforehand the exact types and dependencies of the objects your code should work with.
- Reuse existing objects instead of rebuilding them each time, thereby saving system resources (like database connections, file systems, and network resources). Something like return new objects as well as reusing existing ones.

### How to implement

- Declare an interface which is common to all objects that can be produced by the creator and its sub-clasess. This interface can declare methods that make sense in every object(product).
- Inside the creator class (base class) add a factory method. The return type should match the common interface for all objects. You can start out with some default implementation here OR leave it empty for the subclasses to override it to determine the type of object returned

#### This next step is Conditional. It typically applies to refactoring existing class with direct constructor calls to the `new` keyword scattered all over the creator (base) class

- Replace all references to constructor call with calls to the factory method, while extracting the different object types that needs to be created.
- Create a subclass for each type of object or product that needs to be created. This subclass should extend the creator class and override the factory method to extract the appropriate construction code. At this point, you should leverage the advantage of the factory method, which decouples object creation and implementation. Let the subclasses focus on creating the new object(product), while you define another class specific for each object to be returned, and have it implement the common interface defined earlier. This way, you can provide various implementations of the interface, without messing up with the object creation.
- There may be too many object types and it will get messy to create subclasses for all of them. It's time to get creative. You can group related objects into a new sub-classs, or alternatively, the client code can pass an argument to the factory method of one the subclasses to determine the object type it wants to receive.

### Pros & Cons

- Pro: Avoid tight coupling between the creator and the product types
- Pro: Single Responsibility Principle
- Pro: Open/Closed principle. Introduce new types of product into the program without breaking existing client code
- Con: Introducing lots of new subclasses may make the code complicated

### Sample real-world examples

- A Simple Profiler App - to calculate code execution time
- Image Generator App
- Logistics Management App

### Popular usage in production
- [Knex.js](http://nodejsdp.link/knex) | [Knex Factory](http://nodejsdp.link/knex-factory)

### Key Notes

The consumer of the factory is totally agnostic about how
the creation of the instance is carried out.

### Next step?
- Look back at some of your code, and refactor
- Move on to the next design pattern - Singleton