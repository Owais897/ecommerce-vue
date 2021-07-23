<template>
  <div>
    <div :key="c.id" v-for="c in cart">
      <a-card hoverable style="width: 300px">
        <img slot="cover" alt="example" :src="c.img" />
        <template slot="actions" class="ant-card-actions">
          <a-icon key="up" type="up" />
          <a-icon key="down" type="down" />
          <a-icon key="delete" type="delete" />
        </template>
        <a-card-meta :title="titleCount(c)" :description="c.description">
        </a-card-meta>
      </a-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    titleCount(c) {
      return `${c.title} ${c.id} count ${c.value}`;
    },
  },
};
</script>

<style></style>
