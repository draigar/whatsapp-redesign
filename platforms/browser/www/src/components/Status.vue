<template>
  <div class="status">
    <div class="status-ball plus grow" style="background-image:url('file:img/2.jpg')">
      <i>
        <ion-icon v-pre name="add"></ion-icon>
      </i>
    </div>
    <div v-for="(data, key) in symbols" :key="key" class="status-ball grow">
      <img :src="gss(data.username)" />
    </div>
  </div>
</template>

<script>
// import VueImgLoader from "vue-img-loader";

export default {
  //   components: {
  //     "vue-img-loader": VueImgLoader
  //   },
  data: function() {
    return {
      symbols: []
    };
  },
  methods: {
    gss: function(url) {
      let imageSrc = "https://robohash.org/" + url;
      return imageSrc;
    }
  },
  created: function() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.symbols = response.data;
        if (ls.clearObject("Status")) {
          ls.setObject("Status", response.data);
        }
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  },
  mounted() {}
};
</script>

