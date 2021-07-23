<template>
  <div>
    <button @click="subtractFromCounter(parseInt(value))">-</button>
    {{ value }}
    <button @click="addToCounter(parseInt(value))">+</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    addToCounter() {
      this.value++;
    },
    subtractFromCounter() {
      if (this.value == 0) return 0;
      this.value--;
    },
  },
};
</script>

<style scoped>
.counter {
  font-size: 5rem;
}
button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 700;
  cursor: pointer;
}
input {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
}

.btn {
  border-radius: 0.5rem;
  width: auto;
  background: #41b983;
  margin-top: 1rem;
  color: white;
  cursor: pointer;
}
</style>
