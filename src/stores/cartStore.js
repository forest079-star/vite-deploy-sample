// const { defineStore } = Pinia;
import { defineStore } from 'pinia';
import productStore from './productStore.js';

export default defineStore('cart', {
  // methods
  // actions
  state: () => ({
    cart: [
      // {
      //   // 多色餅乾 productId
      // }
    ],
  }),
  actions: {
    addToCart(productId, qty = 1) {
      // 取得已經加入購物車項目
      // 進行判斷，如果購物車有該項目則 + 1，如果沒有則新增一個購物車項目。
      const currentCart = this.cart.find(
        (item) => item.productId === productId
      );
      // console.log(currentCart);
      if (currentCart) {
        currentCart.qty = currentCart.qty + 1;
      }
      else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty,
        });
      }
      console.log('cart',this.cart);
      // console.log(productId, qty);
      // this.cart.push({
      //   id: new Date().getTime(),
      //   productId,
      //   qty,
      // });
      // console.log(this.cart);
    },
    setCartQty(id, event){
      console.log(id, event);
      // console.log(event.target.value, typeof event.target.value);
      const currentCart = this.cart.find((item) => item.id === id);
      console.log(currentCart);
      currentCart.qty = event.target.value * 1; // 轉為數字，本來是字串。
    },
    removeCartItem(id) {
      const index = this.cart.findIndex((item) => item.id === id);
      this.cart.splice(index, 1);
    },
  },
  getters: {
    cartList: ({ cart }) => {
      // 將購物車資料狀態取出 所以使用解構的形式 放入{ cart }
      // 1. 購物車品量資訊，需要整合產品資訊
      // 2. 必須計算小計的金額
      // 3. 必須提供總金額
      const { products } = productStore(); // 因為這邊是從另一個store 取用，所以直接執行該 store
      // console.log(products);
      // console.log(cart);
      const carts = cart.map((item) => {
        // console.log(item);
        // 單一產品取出
        const product = products.find(
          (product) => product.id === item.productId
        );
        console.log('相同ID的產品', product);

        return {
          ...item, // 原本購物車資訊
          product, // 單一產品資訊
          subTotal: product.price * item.qty, // 小計金額
        };
      });
      console.log(carts);
      const total = carts.reduce((a, b) => a + b.subTotal, 0);
      console.log(total);

      return {
        // carts:[], // 列表
        // total: 100, // 總金額
        carts,
        total,
      };
    },
  },
});
