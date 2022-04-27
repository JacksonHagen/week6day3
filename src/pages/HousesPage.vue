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
        data-bs-target="#create-house-modal"
        data-bs-toggle="modal"
        v-if="user.isAuthenticated"
      >
        Create
      </button>
    </div>
    <!-- NOTE user.isAuthenticated is making sure the user is logged in - hiding the button if they are not logged in -->
  </div>
  <div class="row justify-content-center">
    <House v-for="h in houses" :key="h.id" :house="h" />
  </div>
  <Modal id="create-house-modal">
    <template #modal-title-slot>
      <h3>Create a House ;)</h3>
    </template>
    <template #modal-body-slot>
      <HouseForm />
    </template>
  </Modal>
</template>


<script>
import { onMounted, computed } from "@vue/runtime-core";
import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";

export default {
  setup() {
    onMounted(async () => {
      try {
        housesService.getAllHouses();
      } catch (error) {
        console.error("[GET_HOUSES_ERROR]", error.message);
        Pop.toast(error.message, "error");
      }
    });
    return {
      houses: computed(() => AppState.houses),
      user: computed(() => AppState.user),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>