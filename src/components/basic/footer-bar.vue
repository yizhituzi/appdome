<template>
  <div id="FooterBar">
    <footer class="footer">
      <section class="footer__wrap" :class="{'footer__wrap--active':active==='/'}" id="/" @click="clickHandle">
        <div class="footer-tab">
          <i class="iconfont icon-shouye footer-tab__icon"></i>
          <em class="footer-tab__label">首页</em>
        </div>
      </section>
      <section class="footer__wrap" :class="{'footer__wrap--active':active==='/resume'}" id="/resume"
               @click="clickHandle">
        <div class="footer-tab">
          <i class="iconfont icon-qiuzhi footer-tab__icon"></i>
          <em class="footer-tab__label">人才</em>
        </div>
      </section>
      <section class="footer__wrap" :class="{'footer__wrap--active':active==='/jobOffer'}"
               id="/jobOffer" @click="clickHandle">
        <div class="footer-tab">
          <i class="iconfont icon-zhaopin1 footer-tab__icon"></i>
          <em class="footer-tab__label">招聘</em>
        </div>
      </section>
      <section class="footer__wrap" :class="{'footer__wrap--active':active==='/mine'}" id="/mine"
               @click="clickHandle">
        <div class="footer-tab">
          <i class="iconfont icon-account footer-tab__icon"></i>
          <em class="footer-tab__label">我的</em>
        </div>
      </section>
    </footer>
  </div>

</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'

  export default {
    name: "FooterBar",
    data() {
      return {
        active: ""
      }
    },
    methods: {
      clickHandle(e) {
        const path = e.currentTarget.id;
        this.active = path;
        if (path.indexOf("/publication")) {
          return this.$pushRoute(path);
        }
        this.$pushRoute(path);
      }
    },
    computed: {},
    watch: {
      $route(newVal) {
        this.active = newVal.path;
      }
    },
    created() {
      this.active = this.$route.path;
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/common";

  #FooterBar {
    $icon-size: 46px;
    .footer {
      filter: drop-shadow(0 -2px 6px rgba(0, 0, 0, .3));
      @include positionAbsolute(null, 0, 0, 0);
      position: fixed;
      color: #838383;
      display: flex;
      background: #ECE4F9;
      z-index: 99;
      &__wrap {
        flex: 1;
        padding: 12px 0;
        &--active {
          color: $themeColor;
        }
      }
      &-tab {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        position: relative;
        &__icon {
          font-size: $icon-size;
          &__placeholder {
            content: "";
            display: inline-block;
            width: $icon-size;
            height: $icon-size;
          }
        }
        &__label {
          margin-top: 7px;
          font-size: 24px;
        }
        .tab-center {
          position: absolute;
          transform: translateY(-40%);
          border-radius: 50%;
          font-size: 0;
          box-shadow: 0 0 0 10px #ECE4F9;
          &__icon {
            font-size: 74px;
            color: $themeColor;
          }
        }

      }
    }
  }
</style>
