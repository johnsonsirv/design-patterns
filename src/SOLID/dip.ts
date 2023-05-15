interface Logger {
    log(message: string): void;
  }
  
  class ConsoleLogger implements Logger {
    log(message: string): void {
      console.log(message);
    }
  }
  
  class EmailLogger implements Logger {
    log(message: string): void {
      // Send log message via email
    }
  }
  
  class App {
    logger: Logger;
  
    constructor(logger: Logger) {
      this.logger = logger;
    }
  
    performTask(): void {
      // Perform task
      this.logger.log("Task completed.");
    }
  }


  /**
   *  In this case, the App class depends 
   * on the abstraction of the Logger interface, rather than directly depending on concrete implementations like ConsoleLogger or EmailLogger. This allows for flexibility and easier maintenance.

By following the DIP, we can easily 
switch between different logger 
implementations without modifying the App class. 
For example, if we want to change from using 
a ConsoleLogger to an EmailLogger, 
we can simply provide an instance of EmailLogger when
creating an App object:
   */