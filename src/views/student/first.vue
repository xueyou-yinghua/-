<template>
  <div class="first">
    <student></student>
  </div>
</template>

<script>
import Student from "@/components/slot/student";
export default {
  name: "first",
  components: {Student}
}
</script>

<style scoped>
.first{
  width: 100%;
  height: 100%;
}
</style>