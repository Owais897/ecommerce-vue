<template>
  <a-space direction="vertical" size="large" style="padding: 50px">
    <a-row :gutter="[24, 24]">
      <a-col class="gutter-row" :span="6" v-for="item in items" :key="item.id">
        <a-card @click="openThisProduct(item)" hoverable>
          <img slot="cover" alt="example" :src="item.img" />
          <a-card-meta :title="item.title + item.id">
            <template slot="description"> {{ item.description }} </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </a-space>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Table",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
          img: require(`../assets/foto.jpg`),
        },
        {
          id: 2,
          title: "Table",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
          img: require(`../assets/pro9.jpg`),
        },
        {
          id: 3,
          title: "Table",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
          img: require(`../assets/pro6.jpg`),
        },
        {
          id: 4,
          title: "Table",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
          img: require(`../assets/foto.jpg`),
        },
        {
          id: 5,
          title: "Table",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
          img: require(`../assets/pro9.jpg`),
        },
        {
          id: 6,
          title: "Table",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
          img: require(`../assets/foto.jpg`),
        },
        {
          id: 7,
          title: "Table",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
          img: require(`../assets/pro9.jpg`),
        },
        {
          id: 8,
          title: "Table",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
          img: require(`../assets/pro6.jpg`),
        },
      ],
    };
  },
  methods: {
    openThisProduct(item) {
      this.$router.push({ name: "Product", params: { item } });
    },
  },
};
</script>

<style></style>
