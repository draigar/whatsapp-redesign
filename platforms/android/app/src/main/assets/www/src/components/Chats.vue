<template>
  <div class="chats">
    <div v-for="(data, key) in symbols" :key="key" class="chat-box">
      {{getPost(data.id)}}
      <div class="im tc">
        <img :src="gss(data.username)" />
      </div>
      <div class="det">
        <h1>{{data.name}}</h1>
        <p>{{lastBody}}</p>
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
      lastBody: ""
    };
  },
  methods: {
    gss: function(url) {
      let imageSrc = "https://robohash.org/" + url;
      return imageSrc;
    },
    getPost: function(user) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts?userId=" + user)
        .then(function(response) {
          // handle success
          let sl = response.data;
          var lastItem = null;

          for (let i = 0; i < sl.length; i++) {
            //console.log(i + " Has a value " + sl[i]);
            lastItem = i;
          }
          this.lastBody = sl[lastItem].body;
          //console.log(sl);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
        });
    }
  },
  created: function() {
    //this.getPost("1");
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
