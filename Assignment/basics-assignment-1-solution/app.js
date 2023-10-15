const app = Vue.createApp({
  data() {
    return {
      name: "Jann",
      age: 18,
      src: "https://images.unsplash.com/photo-1697275021816-42588f48ef7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3648&q=80",
      in: "123",
    };
  },
  methods: {
    favariteNum() {
      return Math.random();
    },
  },
});
app.mount("#assignment");
