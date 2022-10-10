<template>
  <header class="container">
    <section>
      <NavbarComponent />
    </section>

    <section>
      <GuideDownloadComponent />
    </section>
  </header>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import GuideDownloadComponent from "./GuideDownloadComponent.vue";

export default {
  name: "HeaderComponent",

  components: {
    NavbarComponent,
    GuideDownloadComponent,
  },
};
</script>

<style lang="scss" scoped></style>
