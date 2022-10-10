<template>
  <div id="app">
    <HeaderComponent />
    <MainComponent :cards="courses" />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import courses from "@/assets/data/courses.json";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
  data() {
    return {
      courses,
    };
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
@import "./components/styles/generic.scss";

#app {
  color: #3f3a64;
}
</style>
