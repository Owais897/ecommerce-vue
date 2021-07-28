<template>
  <div>
    <div v-show="items.length > 0">
      <a-space direction="vertical" size="large" style="padding: 50px">
        <a-row :gutter="[20, 20]">
          <a-col
            class="gutter-row"
            :span="6"
            v-for="item in items"
            :key="item.id"
          >
            <a-card @click="openThisProduct(item)" hoverable>
              <img slot="cover" alt="example" :src="item.image" />
              <a-card-meta>
                <span slot="title">
                  <a-tooltip>
                    <template slot="title">
                      {{ item.title }}
                    </template>
                    <span>{{ item.title.substring(0, 65) + "..." }}</span>
                  </a-tooltip>
                </span>
                <template slot="description">
                  <a-tooltip>
                    <template slot="title">
                      {{ item.description }}
                    </template>
                    <span>{{ item.description.substring(0, 65) + "..." }}</span>
                    <br />
                    <span class="price"> Price: {{ item.price }} </span>
                  </a-tooltip>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </a-space>
    </div>
    <div v-show="items.length === 0">
      <template>
        <a-row v-for="n in 4" :key="n" :gutter="[16, 32]">
          <a-col :span="6"> <a-skeleton /> </a-col>
          <a-col :span="6"> <a-skeleton /> </a-col>
          <a-col :span="6"> <a-skeleton /> </a-col>
          <a-col :span="6"> <a-skeleton /> </a-col>
        </a-row>
      </template>
    </div>
  </div>
</template>

<script>
import { apiMixin } from "../mixins";
import axios from "axios";

export default {
  created: async function () {
    const { data } = await axios(`${this.apiURL}/products`);
    this.items = data;
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    openThisProduct(item) {
      this.$router.push(`product/${item.id}`);
    },
  },
  mixins: [apiMixin],
};
</script>

<style scoped>
.ant-card-cover img {
  object-fit: contain;
  min-height: 280px;
  max-height: 280px;
  display: inline-block;
  padding: 12px;
}
.price {
  color: orange;
}
</style>
>
