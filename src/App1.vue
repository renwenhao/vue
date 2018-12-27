<!--  -->
<template>
  <div>aaaaaa</div>
</template>

<script>
export default {
  name:"App1",
  props:{
      click1:{
          type:Function
      }
  },
  data () {
    return {

    };
  },
    created(){
        this.$emit('click1');
    },
}

</script>
<style scoped>
</style>