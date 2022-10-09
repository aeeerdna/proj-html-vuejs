<template>
  <header>
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
          <li class="search-input input-group mb-3">
            <input type="text" class="form-control" placeholder="Search..." />
            <button class="btn btn-outline-secondary" type="button">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
          </li>
        </ul>
      </nav>

      <!-- profilo utente e search bar -->
    </div>
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
</style>
