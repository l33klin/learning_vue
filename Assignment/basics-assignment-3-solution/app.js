const app = Vue.createApp({
  data() {
    return {
      result: 0,
      // resultText: "RESULT",
    };
  },
  watch: {
    resultText(value) {
      that = this;
      setTimeout(function () {
        that.result = 0;
      }, 5000);
    },
  },
  computed: {
    resultText() {
      if (this.result < 37) {
        return "Not there yet";
      } else if (this.result === 37) {
        return this.result;
      } else {
        return "To much!";
      }
    },
  },
  methods: {
    add(v) {
      console.log("adding " + v);
      this.result += v;
    },
  },
});

app.mount("#assignment");
