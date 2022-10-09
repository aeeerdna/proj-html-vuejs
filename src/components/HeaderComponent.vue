<template>
  <div class="d-flex">
    <!-- logo -->
    <div>
      <img src="@/assets/images/dark-logo.png" alt="Logo Max Coach" />
    </div>

    <!-- navbar sito -->
    <nav class="d-flex">
      <ul class="d-flex">
        <li v-for="link in dropDown" :key="link.title">
          <a :href="link.link">
            {{ link.title }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- profilo utente e search bar -->
    <div>
      <font-awesome-icon icon="fa-regular fa-circle-user" />
      <input type="text" />
    </div>
  </div>
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

<style></style>
