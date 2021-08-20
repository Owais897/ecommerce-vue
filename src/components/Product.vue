<template>
  <div>
    <div v-show="items">
      <div style="padding: 50px">
        <a-row>
          <a-col
            :xl="{ span: 16 }"
            :lg="{ span: 16 }"
            :md="{ span: 24 }"
            :xs="{ span: 24 }"
          >
            <h2
              v-if="searchTerm"
              style="display: flex; justify-content: flex-start"
              class="product-title"
            >
              Search Results for: {{ searchTerm }}
            </h2>
            <h2
              v-if="!searchTerm"
              style="display: flex; justify-content: flex-start"
              class="product-title"
            >
              Products
            </h2>
          </a-col>
          <a-col
            :xl="{ span: 8 }"
            :lg="{ span: 8 }"
            :md="{ span: 24 }"
            :xs="{ span: 24 }"
          >
            <div
              style="display: flex; justify-content: flex-end; flex-wrap: wrap"
            >
              <strong style="margin-top: 5px">sort by price: </strong>
              <a-button
                key="3"
                style="margin-left: 10px"
                @click="sortAscendingAction"
              >
                Low to High
              </a-button>
              <a-button
                key="2"
                style="margin-left: 10px"
                @click="sortDescendingAction"
              >
                High to Low
              </a-button>
            </div>
          </a-col>
        </a-row>
        <a-row :gutter="[20, 20]">
          <a-col
            class="gutter-row"
            v-for="item in items"
            :key="item.id"
            :xl="{ span: 6 }"
            :lg="{ span: 8 }"
            :md="{ span: 12 }"
            :xs="{ span: 24 }"
          >
            <a-card @click="openThisProduct(item)" hoverable>
              <img slot="cover" alt="example" :src="item.image" />
              <a-card-meta>
                <span slot="title">
                  <a-tooltip>
                    <template slot="title">
                      {{ item.title }}
                    </template>
                    <span>{{ item.title.substring(0, 65) + '...' }}</span>
                  </a-tooltip>
                </span>
                <template slot="description">
                  <a-tooltip>
                    <template slot="title">
                      {{ item.description }}
                    </template>
                    <span>{{ item.description.substring(0, 65) + '...' }}</span>
                    <br />
                    <span class="price"> Price: {{ item.price }} </span>
                  </a-tooltip>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>
    <div v-show="!items">
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
import { apiMixin } from '../mixins';
import axios from 'axios';

export default {
  created: async function () {
    if (this.$route.name === 'Home') {
      const { data } = await axios(`${this.apiURL}/products`);
      this.items = data;
      return;
    }

    if (this.searchTerm) {
      const { data } = await axios(
        `${this.apiURL}/products/search?q=${this.searchTerm}`
      );
      this.items = data;
    }
  },
  data() {
    return {
      items: null,
    };
  },
  methods: {
    sortAscendingAction() {
      this.items = this.items.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    sortDescendingAction() {
      this.items = this.items.sort(function (a, b) {
        return b.price - a.price;
      });
    },
    openThisProduct(item) {
      this.$router.push({ name: 'productDetails', params: { id: item.id } });
    },
  },
  mixins: [apiMixin],
  props: {
    searchTerm: String,
  },
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
.product-title {
  /* margin-bottom: 40px; */
  font-size: 35px;
  font-style: oblique;
}
</style>
>
