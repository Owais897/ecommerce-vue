<template>
  <div style="padding: 50px 30px">
    <a-row>
      <a-col :span="16">
        <a-list item-layout="vertical" size="large" :data-source="cart">
          <a-list-item slot="renderItem" key="item.title" slot-scope="item">
            <template slot="actions">
              <a-space>
                <a-button
                  @click="increaseNumber(item.id)"
                  type="primary"
                  shape="circle"
                >
                  +
                </a-button>
                {{ item.value }}
                <a-button
                  @click="decreaseCount(item.id)"
                  type="primary"
                  shape="circle"
                >
                  -
                </a-button>
                <a-button
                  @click="deleteProduct(item.id)"
                  type="danger"
                  shape="circle"
                >
                  <a-icon type="delete" />
                </a-button>
              </a-space>
            </template>
            <img slot="extra" width="100px" alt="logo" :src="item.image" />
            <a-list-item-meta :description="item.description">
              <a slot="title" :href="item.href">{{ item.title }}</a>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
      <a-col :span="8">
        <a-affix :offset-top="120">
          <div>total Bill {{ getTotalBill }}</div>
        </a-affix>
      </a-col>
    </a-row>
    <!-- <div v-show="cart.length === 0">nothing to show in cart</div> -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getTotalBill"]),
  },
  methods: {
    titleCount(item) {
      return `${item.title} count ${item.value}`;
    },
    ...mapMutations(["increaseCount", "decreaseCount", "removeProduct"]),
    increaseNumber(id) {
      this.increaseCount(id);
      console.log("cart: ", this.cart);
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
