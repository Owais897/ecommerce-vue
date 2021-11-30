<template>
  <div>
    <div v-show="items">
      <div style="padding: 50px">
        <div v-show="!searchTerm" style="margin-bottom: 10px">
          categories
          <span v-for="cat in categories" :key="cat">
            <a-button
              style="margin-left: 5px"
              @click="getProductByCategory(cat)"
              class="name"
            >
              {{ cat }}
            </a-button>
          </span>
        </div>

        <a-row>
          <a-col
            :xl="{ span: 12 }"
            :lg="{ span: 12 }"
            :md="{ span: 12 }"
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
            :xl="{ span: 12 }"
            :lg="{ span: 12 }"
            :md="{ span: 12 }"
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
              <img slot="cover" alt="example" :src="item.thumbnail" />
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
                    <span class="price"> Price: ${{ item.price }} </span>
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
import { apiMixin } from "../mixins";
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  created: async function () {
    // console.log('sssssssssssssssssssssss');
    if (this.$route.name === "Home") {
      await this.getAllProducts();

      // return;
    }

    if (this.searchTerm) {
      const { data } = await axios(
        `https://dummyjson.com/products/search?q=${this.searchTerm}`
      );
      this.setItems(data.products);
    }
  },
  data() {
    return {
      // items: null,
      categories: [
        "all",
        "smartphones",
        "laptops",
        "skincare",
        "groceries",
        "furniture",
        "tops",
        "automotive",
        "motorcycle",
      ],
    };
  },
  computed: {
    ...mapState(["items"]),
  },
  methods: {
    ...mapMutations([
      "setItems",
      "sortAscendingAction",
      "sortDescendingAction",
    ]),
    // setItemInStore(data) {},
    async getAllProducts() {
      const { data } = await axios(`https://dummyjson.com/products`);
      // this.items = data;
      this.setItems(data.products);
    },
    async getProductByCategory(cat) {
      if (cat === "all") {
        await this.getAllProducts();
        return;
      }
      let d = await fetch(`https://dummyjson.com/products/category/${cat}`);
      let da = await d.json();
      // this.items = da;
      this.setItems(da.products);

      // this.$router.push('/');
    },

    openThisProduct(item) {
      this.$router.push({ name: "productDetails", params: { id: item.id } });
    },
  },
  mixins: [apiMixin],
  props: {
    searchTerm: String,
  },
};
</script>

<style scoped>
.name {
  font-weight: 600;
  text-transform: capitalize;
}
.ant-card-cover img {
  object-fit: contain;
  min-height: 280px;
  max-height: 280px;
  display: inline-block;
  padding: 12px;
}
.ant-card {
  height: 420px;
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
