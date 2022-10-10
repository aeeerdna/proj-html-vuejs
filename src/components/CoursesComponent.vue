<template>
  <!-- courses -->
  <div class="card d-flex flex-row">
    <!-- thumbs -->
    <div class="thumbs d-flex">
      <img :src="card.thumb" :alt="card.type" />
    </div>

    <!-- info corso -->
    <div class="d-flex flex-column">
      <p class="price fw-bold fs-5">{{ card.price }}</p>
      <p class="fw-bold">{{ card.type }}</p>
      <div class="info-courses d-flex justify-content-between">
        <p>{{ card.lessons }}</p>
        <p>{{ card.students }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursesComponent",
  props: {
    card: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #f6f7fa;
  border: none;
  margin: 10px;
}
.thumbs {
  border-radius: 50%;
}
.price {
  color: #1fad96;
}

.info-courses {
  color: #8c97c1;
}
</style>
