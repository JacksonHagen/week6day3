<template>
  <div class="row p-2">
    <div class="col-2">
      <button
        class="btn btn-info square-right"
        data-bs-target="#nav"
        data-bs-toggle="offcanvas"
      >
        Nav
      </button>
      <button
        class="btn btn-success square-left"
        data-bs-target="#create-car-modal"
        data-bs-toggle="modal"
        v-if="user.isAuthenticated"
      >
        Create
      </button>
    </div>
    <!-- NOTE user.isAuthenticated is making sure the user is logged in - hiding the button if they are not logged in -->
  </div>
  <div
    class="
      home
      flex-grow-1
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
    <div class="home-card p-5 bg-white rounded elevation-3">
      <img
        src="https://bcw.blob.core.windows.net/public/img/8600856373152463"
        alt="CodeWorks Logo"
        class="rounded-circle"
      />
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        Vue 3 Starter
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
