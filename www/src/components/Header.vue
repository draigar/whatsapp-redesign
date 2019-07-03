<template>
  <div class="header">
    <h1 class="fl">WhatsApp</h1>
    <ion-icon class="fr settings-icon waves-effect waves-light" v-pre name="ios-settings"></ion-icon>
    <Search />
  </div>
</template>

<script>
import Search from "@/src/components/Search.vue";

export default {
  components: {
    Search
  }
};
</script>