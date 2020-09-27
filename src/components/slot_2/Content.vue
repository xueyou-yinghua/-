<template>
  <div class="content" @click="Click">
      <slot name="img"></slot>
      <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: "Content",
  props:{
    url:String,
  },
  methods:{
    Click(){
      if(this.url!==undefined){
        this.$router.push(this.url)
      }
    }
  }
}
</script>

<style scoped>
.content{
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 20px 0;
  align-items: center;
  border-top: 1px solid white;
  cursor: pointer;
}
</style>