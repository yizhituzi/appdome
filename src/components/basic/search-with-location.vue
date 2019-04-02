<template>
  <div id="SearchWithLocation">
    <div class="search-box" :class="sticky&&'search-box--sticky'" ref="searchBox">
      <div slot="action" @click="onLocation" class="search-click">{{address}} <i
        class="iconfont icon-xiangxiajiantou"></i></div>
      <div class="search-btn" @click="onSearch">请输入搜索内容</div>
      <div slot="action" @click="onSearch" class="search-click search-action">搜索</div>
    </div>
  </div>

</template>

<script>
  import {mapActions, mapState, mapMutations} from 'vuex'
  import {showDialog} from "../../utils";

  export default {
    name: "SearchWithLocation",
    data() {
      return {
        value: '',
        sticky: false,
      }
    },
    methods: {
      ...mapActions("common", ["getLocationByLatLng"]),
      ...mapMutations("home", ["CHANGE_LOCATION"]),
      onSearch() {
        this.$pushRoute({path: "/search"})
      },
      async onLocation() {
        this.$pushRoute("/geolocation")
      },
      stickyHandle() {
        this.$nextTick(() => {
          const fn = (e) => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 10) {
              return this.sticky = true
            }
            this.sticky = false;
          };
          document.onscroll = fn.bind(this);
        })
      },

    },
    computed: {
      ...mapState("home", {
        cityName: state => state.location.cityName,
        cityId: state => state.location.cityId,
      }),
      address() {
        return this.cityName|| '定位中'
      }
    },
    watch: {},
    async created() {
      this.stickyHandle();
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/common";
  //不吸顶的情况
  #SearchWithLocation {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;

    .search-box {
      box-sizing: border-box;
      padding: 12px 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      //不吸顶的情况
      background-color: var(--mainColor);
      transition: background-color .2s;

      &--sticky {
        background-color: var(--mainColor);

        .search-btn {
          color: #666;
        }

        .search-action {
          color: $themeColor;
        }
      }

      .search-icon {
        position: absolute;
        left: 20%;
        top: 100px;
        z-index: 3;
        transform: translateY(-100%)
      }
    }

    .search-btn {
      flex: 1;
      padding: 0px 30px;
      height: 60px;
      width: 100%;
      background-color: #fff;
      color: #666;
      font-size: 24px;
      position: relative;
      line-height: 60px;
      border: 0;
      border-radius: 32px;
    }

    .search-click {
      display: inline-block;
      font-size: 30px;
      margin-right: 24px;
      min-width: 100px;
      line-height: 64px;
      color: #fff;

      .icon-xiangxiajiantou {
        font-size: 30px;
      }
    }

    .search-action {
      margin: 0px;
      position: absolute;
      right: 60px;
      color: $themeColor;
    }
  }

</style>
