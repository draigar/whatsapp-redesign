<template>
  <div class="splashscreen">
    <img src="img/33447.png">
  </div>
</template>

<script>
export default {
  name: "Splashscreen",
  mounted() {
    app.getRoute("home");
  }
};
</script>
