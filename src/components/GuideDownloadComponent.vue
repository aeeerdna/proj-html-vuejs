<template>
  <div class="mt-4">
    <div class="d-flex justify-content-between">
      <!-- Download guide -->
      <div class="d-flex flex-column justify-content-center free-guide">
        <h1 class="fw-bold mb-3">Distant learning for further expansion</h1>
        <p class="fs-5 mb-4">
          Learning is a life-long journey that in fact we never find the
          terminate stop. Stop searching, enjoy the process.
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

      <!-- profile img -->
      <div class="d-flex justify-content-end profile-img">
        <img
          src="@/assets/images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg"
          alt="About me profile"
        />
      </div>
    </div>

    <!-- aziende partner -->
    <div class="client d-flex justify-content-between align-items-center mt-5">
      <div>
        <img src="../assets/images/client-logo-01.png" alt="Azienda 1" />
      </div>
      <div>
        <img src="../assets/images/client-logo-02.png" alt="Azienda 2" />
      </div>
      <div>
        <img src="../assets/images/client-logo-03.png" alt="Azienda 3" />
      </div>
      <div>
        <img src="../assets/images/client-logo-04.png" alt="Azienda 4" />
      </div>
      <div>
        <img src="../assets/images/client-logo-05.png" alt="Azienda 5" />
      </div>
      <div>
        <img src="../assets/images/client-logo-06.png" alt="Azienda 6" />
      </div>
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

.client {
  max-width: 1200px;
  img {
    margin-top: 40px;
    margin-bottom: 40px;
  }
}
</style>
