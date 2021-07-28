export const apiMixin = {
  data: function () {
    return {
      get apiURL() {
        return "https://fake-products-app.herokuapp.com";
      },
    };
  },
};

const mixins = {
  apiMixin,
};

export default mixins;
