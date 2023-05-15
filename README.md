## Exploring Algorithms & Data Structures
Explore algorithms and data structures. Practice, discover patterns in coding, & develop strong coding skills.
### Sorting Algorithms
1. Merge Sort [Readme](./src/sorting_algorithms/mergesort.md)
2. Quick Sort [Readme](./src/sorting_algorithms/quicksort.md)
3. Insertion Sort [Readme](./src/sorting_algorithms/insertion_sort.md)

### Search Algorithms
1. Binary Search [Readme](./src/search_algorithms/binary_search.md)


### > Coding Examples on Sorting & Searching
1. [Find Duplicates](./src/sorting_algorithms/find_duplicates.md)
2. [Merge Intervals](./src/sorting_algorithms/merge_intervals.md)
3. [Number Finder](./src/sorting_algorithms/number_finder.md)

### Trees & Graphs
[WIP]()

## Exploring Coding Principles
Using simple words and examples to explain principles like SOLID, OOP, DRY.

### SOLID
The SOLID principles are a set of guidelines that help software developers write code that is easier to understand, maintain, and extend. These principles provide a way to design software that is flexible, robust, and scalable. Let's go through each principle:

S - Single Responsibility
- Keep things focused and do one thing well.
- Example: In a bakery, a baker has the single      responsibility of baking bread. They don't handle deliveries or make pastries. This allows the baker to specialize in their task and become highly efficient.
- [Code example](./src//SOLID/srp.ts)

O - Open, Close
- Open for extension, closed for modification.
- Example: Think of a car with customizable features. The car itself remains unchanged, but you can add or modify features like a sunroof or different seat covers. This principle encourages designing software modules that can be extended without modifying the existing code.
- [Code example](./src//SOLID/ocp.ts)

L - Liskov Substitution:
- Substitutability of objects without altering program correctness.
- Example: Imagine a company that delivers packages using different types of vehicles, like trucks, bicycles, and drones. Each vehicle should be able to perform the delivery task without breaking the delivery process. This principle ensures that derived classes (subtypes) can be used interchangeably with their base classes.
- [Code example](./src//SOLID/liksp.ts)

I - Interface Segregation
- Clients should not be forced to depend on interfaces they do not use.
- Example: In a library, readers can borrow books and magazines. The library doesn't force readers to also subscribe to newspapers or access digital media if they don't need them. This principle encourages creating smaller, focused interfaces tailored to the specific needs of the clients.
- [Code example](./src//SOLID/isp.ts)

D - Dependency Inversion
- Depend on abstractions, not on concrete implementations.
- Example: Think of a smart home system that can control different devices like lights, thermostats, and speakers. Instead of the system depending on specific device brands, it depends on a common interface that abstracts the functionalities. This principle promotes loose coupling and allows flexibility in using different implementations.
- [Code example](./src//SOLID/dip.ts)

## Exploring Design Patterns

Using real-world examples to explore and explain design patterns, that is the aim of this project.

Educational purposes only.

`Design patterns are typical solutions to common problems
in software design. Each pattern is like a blueprint
that you can customize to solve a particular
design problem in your code.`

### Credits:
- https://refactoring.guru/design-patterns
- Node.js Design Patterns 3rd Edition by Mario Casciaro & Luciano Mammino

### Content:

#### A. Creational Patterns

1. [Factory Method](./factory/factory.md)
2. Singleton: [WIP]()
3. Builder: [WIP]()
5. Prototype: [WIP]()

#### B. Structural Patterns
[WIP]()

#### C. Behavioral Patterns
[WIP]()