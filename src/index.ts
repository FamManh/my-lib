import { sum } from 'Demo';

const hello = (): number => {
  return sum(2, 3);
};

const printb2bENV = ()=>{
  return process.env.B2B_ENV
}

export { hello, printb2bENV };
