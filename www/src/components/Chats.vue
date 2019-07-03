<template>
  <div class="chats">
    <div v-for="(data, key) in symbols" :key="key" class="chat-box">
      <div class="im tc">
        <img :src="gss(data.username)" />
      </div>
      <div class="det">
        <h1>{{data.name}}</h1>
        <p></p>
      </div>
      <div class="tm">
        <p class="fr">09:30</p>
        <i class="fr"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      symbols: [],
      lastBody: "",
      message: "no message"
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
        let sl = response.data;
        for (let i = 0; i < sl.length; i++) {
          //console.log(i + " Has a value " + sl[i]);
          let userId = sl[i].id;
          return axios.get(
            "https://jsonplaceholder.typicode.com/posts?userId=" + userId
          );
        }
      })
      .then(response => {
        console.log(sl);
        console.log(response.data);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => (this.symbols = response.data))
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
