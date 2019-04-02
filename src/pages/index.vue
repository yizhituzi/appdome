<template>
  <div id="Index">
    <div :class="$route.meta.tab&&'index-page-wrap'">
      <transition :name="isModalTransition?'pop-up':'normal'">
        <router-view/>
      </transition>
      <footer-bar v-show="$route.meta.tab"/>
    </div>
  </div>

</template>

<script>

  import {mapActions, mapState, mapGetters} from 'vuex'
  import FooterBar from "../components/basic/footer-bar";

  export default {
    name: "Index",
    components: {FooterBar},
    data() {
      return {}
    },
    methods: {},
    computed: {
      isModalTransition() {
        return this.$route.path === "/publication";
      }
    },
    watch: {},
    created() {
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/common";

  .pop-up-enter-active {
    transition: transform .2s linear;
  }

  .pop-up-enter {
    transform: translateY(100%);
  }

  .normal-enter, .normal-leave-to {
    visibility: hidden;
  }

  #Index {
    background: #F4F4F4;
    position: relative;
    min-height: 100vh;
    .index-page-wrap {
      padding-bottom: 120px;
    }
  }
</style>
