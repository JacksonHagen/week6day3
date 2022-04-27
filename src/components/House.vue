<template>
  <div class="col-md-4 my-3">
    <router-link :to="{ name: 'HouseDetailsPage', params: { id: house.id } }">
      <img
        :src="house.imgUrl"
        :alt="house.price + ' ' + house.year"
        class="img-fluid rounded selectable"
      />
    </router-link>
  </div>
</template>


<script>
import { House } from "../models/House.js";
export default {
  props: {
    house: {
      type: House,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>