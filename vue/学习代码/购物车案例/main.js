const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-9",
        price: 85.0,
        count: 1,
      },
      {
        id: 2,
        name: "《UNIX编程艺术》",
        date: "2006-9",
        price: 70.0,
        count: 1,
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: "2006-9",
        price: 128.0,
        count: 1,
      },
      {
        id: 4,
        name: "《计算机组成原理》",
        date: "2006-9",
        price: 90.0,
        count: 1,
      },
    ],
  },
  methods: {
    getFinalPrice(price) {
      return "￥" + price.toFixed(2);
    },
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeHandler(index) {
      this.books.splice(index, 1);
    },
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].price * this.books[i].count;
      }
      // for (let i in this.books) 这样拿到的i是下标值
      // for(let i of this.books) 这样的i拿到的是每一项
      return totalPrice;
    },
  },
  filters: {
    showPrice(price) {
      return "￥" + price.toFixed(2);
    },
  },
});
