import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addProductToCart(state, payload) {
      let check = true;

      state.cart.forEach((element) => {
        if (element.id === payload.id) {
          element.value = payload.value;
          check = false;
        }
      });
      if (check) {
        state.cart.push(payload);
      }
    },
    removeProductToCart(state, id) {
      if (!id) {
        return;
      }
      state.cart = [...state.cart.filter((v) => v.id !== id)];
    },
    increaseCount(state, id) {
      state.cart.forEach((element) => {
        if (element.id === id) {
          element.value++;
        }
      });
    },
    decreaseCount(state, id) {
      state.cart.forEach((element) => {
        if (element.id === id) {
          if (element.value > 0) {
            element.value--;
          }
        }
      });
    },
    removeProduct(state, id) {
      if (!id) {
        return;
      }
      state.cart = [...state.cart.filter((v) => v.id !== id)];
    },
  },
  getters: {
    allProductLength: (state) => state.cart.filter((v) => v.value != 0).length,
  },
  actions: {},
  modules: {},
});
