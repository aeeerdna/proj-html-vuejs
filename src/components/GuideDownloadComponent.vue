<template>
  <div class="d-flex justify-content-between mt-4">
    <div class="d-flex flex-column justify-content-center free-guide">
      <h1 class="fw-bold mb-3">Distant learning for further expansion</h1>
      <p class="fs-5 mb-4">
        Learning is a life-long journey that in fact we never find the terminate
        stop. Stop searching, enjoy the process.
      </p>
      <button class="download-btn btn px-3 py-3 mb-3">
        <font-awesome-icon icon="fa-solid fa-download" />
        Download free guide
      </button>
      <p>
        Have questions?
        <a href="#">
          Get Free Sample <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </a>
      </p>
    </div>

    <div class="d-flex justify-content-end profile-img">
      <img
        src="@/assets/images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg"
        alt="About me profile"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "GuideDownloadComponent",
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3rem;
}
.download-btn:hover,
.download-btn {
  background-color: #1fad96;
  color: white;
  width: 50%;
  p {
    font-size: 0.9rem;
  }
}

p a {
  color: #1fad96;
  text-decoration: none;
}

.free-guide {
  width: 40%;
}
.profile-img {
  width: 50%;
}
.profile-img img {
  border-radius: 50%;
  width: 90%;
}
</style>
