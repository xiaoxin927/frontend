const nums = [10, 20, 111, 222, 444, 40, 50];

// 1.filter函数的使用
// 数组有多少元素就会执行多少次，将满足条件的元素返回到一个新数组
let newNums = nums.filter(function (n) {
  return n < 100;
});

console.log(newNums);
