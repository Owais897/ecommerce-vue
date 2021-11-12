export const apiMixin = {
  data: function () {
    return {
      get apiURL() {
        return 'https://dummyjson.com';
      },
    };
  },
};

const mixins = {
  apiMixin,
};

export default mixins;
