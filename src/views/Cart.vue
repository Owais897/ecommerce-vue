<template>
  <div>
    <div>total Bill {{ getTotalBill }}</div>
    <div :key="c.id" v-for="c in cart">
      <a-card v-show="c.value > 0" hoverable style="width: 300px">
        <img slot="cover" alt="example" :src="c.image" />
        <template slot="actions" class="ant-card-actions">
          <a-icon key="up" type="up" @click="increaseNumber(c.id)" />
          <a-icon key="down" type="down" @click="decreaseCount(c.id)" />
          <a-icon key="delete" type="delete" @click="deleteProduct(c.id)" />
        </template>
        <a-card-meta :title="titleCount(c)" :description="c.description">
        </a-card-meta>
      </a-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['getTotalBill']),
  },
  methods: {
    titleCount(c) {
      return `${c.title} ${c.id} count ${c.value}`;
    },
    ...mapMutations(['increaseCount', 'decreaseCount', 'removeProduct']),
    increaseNumber(id) {
      this.increaseCount(id);
      console.log('cart: ', this.cart);
    },
    decreaseNumber(id) {
      this.decreaseCount(id);
    },
    deleteProduct(id) {
      this.removeProduct(id);
    },
  },
};
</script>

<style></style>
