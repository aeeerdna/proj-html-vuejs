<template>
  <div class="main">
    <div>
      <!-- titolo corsi -->
      <div class="courses container text-center">
        <h6 class="text-uppercase">Stimulated to learn?</h6>
        <h2 class="text-capitalize fw-bold">Featured online courses</h2>
      </div>

      <!-- elenco corsi -->
      <div class="container d-flex flex-wrap">
        <div
          class="container-item d-flex flex-wrap"
          v-for="card in cards"
          :key="card.type"
        >
          <CoursesComponent :card="card" />
        </div>
      </div>

      <!-- btn vedi tutti i corsi -->
      <div class="container d-flex justify-content-center mt-5">
        <button class="download-btn btn px-5 py-3 mb-3">
          View all courses
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>

    <!-- tutoring -->
    <div>
      <TutoringComponent />
    </div>

    <!-- learners -->
    <div>
      <LearnersComponent />
    </div>

    <!-- blogs -->
    <div>
      <BlogsComponent />
    </div>
  </div>
</template>

<script>
import CoursesComponent from "./CoursesComponent.vue";
import TutoringComponent from "./TutoringComponent.vue";
import LearnersComponent from "./LearnersComponent.vue";
import BlogsComponent from "./BlogsComponent.vue";

export default {
  name: "MainComponent",
  components: {
    CoursesComponent,
    TutoringComponent,
    LearnersComponent,
    BlogsComponent,
  },
  props: {
    cards: Array,
  },

  mounted() {
    console.log(this.cards);
  },
};
</script>

<style lang="scss" scoped>
.main {
  background-color: #f6f7fa;
}
.container-item {
  width: calc(100% / 2);
}
.courses {
  padding-top: 100px;
  padding-bottom: 50px;
}
h6 {
  color: #8c97c1;
}

.download-btn:hover,
.download-btn {
  background-color: #1fad96;
  color: white;
  p {
    font-size: 0.9rem;
  }
}
</style>
