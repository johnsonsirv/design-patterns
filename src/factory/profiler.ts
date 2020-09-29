/**
 * A simple code profiler
 * Usage in a real world application:
 * Calculate the execution time of different routines in your code exectution
 * Problem:
 * If we are in production mode, redirect logging to another file or
 * return a mock object with the same interface but empty methods. i.e
 * no logging on the console when we are in production
 * Why Factory method ?
 * Using the 'new' keyword to instantiate the Profiler object,
 * the client code or the object itself needs to implement additional logic
 * to determine between different logging options.
 * With factory method, we can abstract the creation of the Profiler object
 * depending on whether we are in 'production' or 'development' we return a working
 * profile instance
 */

interface ProfilerType {
  start(): void;
  end(): void;
}

class Profiler {
  constructor() {}

  /**
   * createProfiler - our factory method
   */
  public createProfiler(label: string) {
    if (process.env.NODE_ENV === 'production') {
      return new NonProductionProfiler();
    }
    return new ProductionProfiler(label);
  }
}

class NonProductionProfiler implements ProfilerType {
  /**
   * start - do nothing use another loggeing system
   */
  constructor() {}

  public start(): void {}

  /**
   * end - do nothing or use another loggeing system
   */
  public end(): void {}
}

class ProductionProfiler implements ProfilerType {
  label: string;
  lastExecuted: any;

  constructor(label: string) {
    this.label = label;
    this.lastExecuted = null;
  }
  /**
   * start
   */
  public start(): void {
    this.lastExecuted = process.hrtime();
  }

  /**
   * end
   */
  public end() {
    const [seconds, nanoSeconds] = process.hrtime(this.lastExecuted);
    console.log(`Report: '${this.label}' took ${seconds} seconds
    and ${nanoSeconds} nanoseconds.`);
  }
}

export default new Profiler().createProfiler;
