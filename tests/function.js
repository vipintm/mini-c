module.exports = [
  `i32 fact(i32 n) {
    if (n == 0) {
      return 1;
    }
    return(n * fact(n - 1));
  };
  export i32 main(i32 a, i32 b) {
    return (fact(4));
  };`,
  `24`
];
