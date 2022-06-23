<template>
  <div>
    <mcv-topbar />
    <router-view></router-view>
  </div>
</template>

<script>
import McvTopbar from "@/components/Topbar";
import { actionTypes } from "./store/modules/auth";
export default {
  name: "McvApp",
  components: {
    McvTopbar,
  },
  mounted() {
    console.log("Hello app")
    this.$store.dispatch(actionTypes.getCurrentUser)
  }
};
</script>

<style></style>
