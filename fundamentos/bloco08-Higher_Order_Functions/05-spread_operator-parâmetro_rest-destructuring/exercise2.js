const sum = (...args) => args.reduce((acc, current) => acc + current, 0);
console.log(sum(5,8,2,4,6,8));