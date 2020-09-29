class Singleton {
  private static instance: Singleton;
  private randomNo: number;
  private constructor() {
    this.randomNo = Math.random();
  }

  /**
   * getInstance
   */
  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  /**
   * printRandomNumber
   */
  public printRandomNumber() {
    console.log(this.randomNo);
  }
}

export default Singleton

// module.exports = Singleton;
