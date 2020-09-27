<template>
  <div class="main">
    <top-nav></top-nav>
    <router-view :style="{height:($store.state.height-60)+'px'}"></router-view>
  </div>
</template>

<script>
import topNav from "@/components/slot/topNav";
export default {
  name: "smain",
  components:{topNav},
  methods:{

  },
}
</script>

<style scoped>
.main{
  width: 100%;
  height: 100%;
}
</style>