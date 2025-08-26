// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (
  req: { params: { num: string } },
  res: { send: (output: string) => void }
) => {
  const num: string = req.params.num;   
  const n: number = parseInt(num, 10);  

  const fibN: number = fibonacci(n);
  let result = `fibonacci(${n}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${n}) is undefined`;
  }

  res.send(result);
  
};
