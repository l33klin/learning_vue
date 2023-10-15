const app = Vue.createApp({
  data() {
    return {
      inputValue1: "",
      inputValue2: "",
    };
  },
  methods: {
    showAlert() {
      alert("show alert");
    },
    inputing(event) {
      this.inputValue1 = event.target.value;
    },
    inputEnter(event) {
      this.inputValue2 = event.target.value;
    },
  },
});

app.mount("#assignment");
