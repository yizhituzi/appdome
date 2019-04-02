<template>
  <div id="Home">
    <search-with-location />
  </div>

</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import SearchWithLocation from "../../components/basic/search-with-location";

  export default {
    name: "Home",
    components: {SearchWithLocation},
    data() {
      return {}
    },
    methods: {
      onReady(){

      }
    },
    computed: {},
    created() {
    }
  }
</script>

<style scoped lang="scss">
  #Home {
  }
</style>
