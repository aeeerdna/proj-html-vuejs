<template>
  <header>
    <section>
      <div class="container d-flex justify-content-between">
        <!-- logo -->
        <div class="logo">
          <img src="@/assets/images/dark-logo.png" alt="Logo Max Coach" />
        </div>

        <!-- navbar sito -->
        <nav>
          <ul class="d-flex">
            <li v-for="link in dropDown" :key="link.title">
              <a :href="link.link">
                {{ link.title }}
              </a>
              <font-awesome-icon
                icon="fa-solid fa-chevron-down"
                class="chevron"
              />
            </li>
            <li>
              <a href="#">
                <font-awesome-icon icon="fa-regular fa-circle-user" />
              </a>
            </li>
            <!-- profilo utente e search bar -->
            <li class="search-input input-group mb-3">
              <input type="text" class="form-control" placeholder="Search..." />
              <button class="btn btn-outline-secondary" type="button">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <section class="d-flex">
      <div class="free-guide">
        <h1>Distant learning for further expansion</h1>
        <p>
          Learning is a life-long journey that in fact we never find the
          terminate stop. Stop searching, enjoy the process.
        </p>
        <button class="download-btn btn px-5 py-3">
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

      <div class="profile-img">
        <img
          src="@/assets/images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg"
          alt="About me profile"
        />
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      dropDown: [
        {
          title: "Home",
          link: "#",
        },

        {
          title: "Pages",
          link: "#",
        },

        {
          title: "Courses",
          link: "#",
        },

        {
          title: "Features",
          link: "#",
        },

        {
          title: "Blog",
          link: "#",
        },

        {
          title: "Shop",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  max-width: 1200px;
  margin: 0px auto;
}

.container {
  padding-top: 25px;
  padding-bottom: 25px;
}
.logo {
  img {
    width: 150px;
  }
}

ul {
  list-style-type: none;
  li {
    margin: 0px 20px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .search-input {
    width: 200px;
    button,
    input {
      border: none;
      background-color: #e8e8e8;
    }
    button {
      color: #1fad96;
    }
  }
  .chevron {
    align-self: center;
    font-size: 0.8rem;
  }
}

.download-btn {
  background-color: #1fad96;
  color: white;

  p {
    font-size: 0.9rem;
  }
}

.download-btn:hover {
  background-color: #1fad96;
  color: white;
}

p a {
  color: #1fad96;
  text-decoration: none;
}

.free-guide {
  width: 40%;
}
.profile-img {
  width: 60%;
}
.profile-img img {
  border-radius: 50%;
  width: 90%;
}
</style>
