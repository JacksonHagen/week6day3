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
    </div>
    <!-- NOTE user.isAuthenticated is making sure the user is logged in - hiding the button if they are not logged in -->
  </div>
  <div class="row justify-content-center" v-if="house">
    <div
      class="
        col-md-7
        d-flex
        justify-content-center
        flex-column
        bg-secondary
        p-0
        rounded
      "
    >
      <img :src="house.imgUrl" alt="" class="img-fluid rounded-top" />
      <div class="row justify-content-between">
        <div class="col-6">
          <ul>
            <li>
              <p class="px-4 pt-2">${{ house.price }}</p>
            </li>
            <li>
              <p class="px-4">Built in {{ house.year }}</p>
            </li>
            <li>
              <p class="px-4">Posted by {{ house.creator.name }}</p>
            </li>
          </ul>
        </div>
        <div class="col-6 border-start border-3 border-dark">
          <ul>
            <li>
              <p class="px-4 pt-2">{{ house.levels }} story</p>
            </li>
            <li>
              <p class="px-4">{{ house.bedrooms }} bedrooms</p>
            </li>
            <li>
              <p class="px-4">{{ house.bathrooms }} bathrooms</p>
            </li>
          </ul>
        </div>
        <div class="col-12">
          <p class="px-4 pt-2">{{ house.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted, computed } from "@vue/runtime-core";
import { housesService } from "../services/HousesService.js";
import { House } from "../models/House.js";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      try {
        AppState.house = null;
        await housesService.getHouseById(route.params.id);
      } catch (error) {
        console.error("[COULDNT_GET_HOUSE]", error.message);
        Pop.toast(error.message, "error");
      }
    });
    return {
      house: computed(() => AppState.house),
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>