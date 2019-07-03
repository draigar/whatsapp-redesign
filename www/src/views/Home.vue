<template>
  <div class="app">
    <div class="hdd">
      <Header />
    </div>
    <div class="sdd">
      <Status />
      <Chats />
    </div>
    <Bottom />
  </div>
</template>

<script>
import Header from "@/src/components/Header.vue";
import Status from "@/src/components/Status.vue";
import Chats from "@/src/components/Chats.vue";
import Bottom from "@/src/components/Bottom.vue";

export default {
  name: "Home",
  components: {
    Header,
    Status,
    Chats,
    Bottom
  },
  mounted() {}
};
</script>
