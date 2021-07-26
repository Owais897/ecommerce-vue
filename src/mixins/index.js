export const apiMixin = {
  data: function () {
    return {
      get apiURL() {
        return 'https://fakestoreapi.com';
      },
    };
  },
};

const mixins = {
  apiMixin,
};

export default mixins;
