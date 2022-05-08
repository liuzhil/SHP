<template>
  <div>
      {{$route.query.k}}
      {{$route.params.keyWord}}
  </div>
</template>
<script>
export default {
    // props:["keyWord"],
  data() {
    return {

    }
  },
  mounted(){
      console.log(this.$route)
  },
  computed:{

  },
  methods:{

  },
}
</script>
<style scoped>

</style>
