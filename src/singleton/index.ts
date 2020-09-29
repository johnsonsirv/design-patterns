import Singleton from './singleton';

const singleton = () => {
  const obj = Singleton.getInstance();
  const obj2 = Singleton.getInstance();
  obj.printRandomNumber();
  obj2.printRandomNumber();

  console.log('Equals', obj === obj2);
};

singleton();
