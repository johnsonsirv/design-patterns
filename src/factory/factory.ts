interface Athlete {
  practise(): string;
}

abstract class AllAthlete {
  /**
   * createAthlete - if empty
   * abstract to focre the subclasses to implement thier own method
   * else define default beahaviour
   */
  public abstract createAthlete(): Athlete;
}

class TrackandFieldAthlete extends AllAthlete {
  /**
   * override createAthlete factory method
   */
  public createAthlete(): Athlete {
    return new Sprinter();
  }
}

class IndoorAthlete extends AllAthlete {
  /**
   * override createAthlete factory method
   */
  public createAthlete(): Athlete {
    return new Swimmer();
  }
}

class Sprinter implements Athlete {
  /**
   * practise
   */
  public practise(): string {
    return '{The Sprinter practises by running 50m in 3 seconds}';
  }
}

class Swimmer implements Athlete {
  /**
   * practise
   */
  public practise(): string {
    return '{The Swimmer practises by holding breadth under water for 5 mins}';
  }
}
