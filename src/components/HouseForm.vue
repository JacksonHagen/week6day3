<template>
  <form @submit.prevent="handleSubmit()">
    <div class="form-group">
      <label for="price">Price:</label>
      <input
        required
        class="form-control"
        type="number"
        name="price"
        id="price"
      />
    </div>
    <div class="form-group">
      <label for="year" class="form-label">Year:</label>
      <input
        type="number"
        min="1800"
        max="2022"
        class="form-control"
        id="year"
        required
        v-model="editable.year"
      />
    </div>
    <div class="form-group">
      <label for="levels" class="form-label">Levels:</label>
      <input
        type="number"
        max="5"
        default="1"
        class="form-control"
        id="levels"
        required
        v-model="editable.levels"
      />
    </div>
    <div class="form-group">
      <label for="bedrooms" class="form-label">Bedrooms:</label>
      <input
        type="number"
        class="form-control"
        id="bedrooms"
        min="1"
        required
        v-model="editable.bedrooms"
      />
    </div>
    <div class="form-group">
      <label for="img" class="form-label">Image Url:</label>
      <input
        type="text"
        class="form-control"
        id="img"
        required
        v-model="editable.imgUrl"
      />
    </div>

    <div class="form-group">
      <label for="description" class="form-label">Description:</label>
      <textarea
        type="text"
        class="form-control"
        id="description"
        required
        v-model="editable.description"
      />
    </div>
    <button type="submit" class="btn btn-primary mt-3">Submit</button>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { House } from "../models/House.js";
import { Modal } from "bootstrap";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";
export default {
  props: {
    house: {
      type: House,
      default: () => new House(),
    },
  },
  setup(props) {
    const router = useRouter();
    const editable = ref({});
    watchEffect(() => {
      editable.value = { ...props.house };
    });
    return {
      editable,
      async handleSubmit() {
        try {
          if (editable.value.id) {
            await housesService.editHouse(editable.value);
            Pop.toast("House Successfully Edited", "success");
            Modal.getOrCreateInstance(
              document.getElementById("edit-house-modal")
            ).toggle();
          } else {
            const createdHouse = await housesService.createHouse(
              editable.value
            );
            router.push({
              name: "HouseDetailsPage",
              params: { id: createdHouse.id },
            });
            Pop.toast("House Successfully Created", "success");
            Modal.getOrCreateInstance(
              document.getElementById("create-house-modal")
            ).toggle();
          }
        } catch (error) {
          console.error("[hehe you seedling]", error.message);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>