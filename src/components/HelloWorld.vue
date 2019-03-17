<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Store Count: {{this.$store.state.count}}</h1>
    <h1>State Count: {{ count }}</h1>

    <button @click="countAction">Store count+</button>
    <button v-on:click="count++">State count+</button>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br>check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store.js";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
    counter: Number
  },
  data: () => ({ count: 0 }),
  methods: {
    ...mapActions({
      countAction: "countAction"
    })
  },
  computed: {
    ...mapGetters(["countGetter"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
