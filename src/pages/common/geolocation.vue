<template>
  <div id="choicelocation">
    <section class="choicelocation-header">
      <i class="iconfont icon-dingwei"></i>
      <em class="choicelocation-seatNow">当前站点：{{address}}</em>
    </section>
    <div class="choicelocation-body">
      <ul class="choicelocation-provincial ">
        <li class="choicelocation-provincial-item" @click="changeProvincial(item.id)" v-for="(item,i) in province"
            :class="{action:item.choice}">{{item.name}}
        </li>
      </ul>
      <ul class="choicelocation-citys">
        <li class="choicelocation-citys-item" v-for="city in cityByProvincial">
          <van-button type="default" @click="changeCityHandle(city)">{{ city.name}}</van-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  import {province} from "../../lib/province";
  import {city} from "../../lib/city";

  export default {
    name: 'choicelocation',
    data() {
      return {
        provinceId: "420000", province
      }
    },
    computed: {
      ...mapState("home", {
        cityName: state => state.location.cityName
      }),
      address() {
        return this.cityName || '定位中'
      },
      cityByProvincial() {
        return city[this.provinceId]
      }
    },
    methods: {
      ...mapMutations("home", ["CHANGE_LOCATION"]),
      changeCityHandle({id, name}) {
        this.CHANGE_LOCATION({cityId: id, cityName: name});
        this.$popRoute();
      },
      changeProvincial(provinceId) {
        this.provinceId = provinceId;
      }
    },
    async created() {
    },
  }
</script>
<style scoped lang="scss">
  @import '../../assets/common';

  #choicelocation {
    padding-bottom: 30px;
    position: fixed;
    width: 100%;

    .choicelocation-header {
      background-color: #fff;
      height: 88px;
      @include alignCenter;
      padding: 0px 30px;
      border-bottom: 0.01rem solid #eee;

      .iconfont {
        color: $themeColor;
        font-size: 40px;
      }

      .choicelocation-seatNow {
        font-size: 24px;
        color: rgb(102, 102, 102);
        margin-left: 20px;
        margin-top: 10px;
      }
    }

    .choicelocation-body {
      position: fixed;
      top: 100px;
      bottom: 0;
      width: 100%;

      .choicelocation-provincial {
        float: left;
        width: 2rem;
        height: 100%;
        background: #f4f4f4;
        overflow: auto;

        .choicelocation-provincial-item {
          color: #666;
          text-align: center;
          font-size: 28px;
          color: #666;
          height: 88px;
          line-height: 88px;
          overflow: hidden;
        }

        li.choicelocation-provincial-item.action {
          background: #fff;
          color: $themeColor;
          font-size: 0.32rem;
        }
      }

      .choicelocation-citys {
        background: #fff;
        height: 100%;
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        padding-right: 20px;

        .choicelocation-citys-item {
          padding: 30px 0;
          color: #666;
          font-size: 0.26rem;
          height: 60px;
          line-height: 1;
          margin-left: 20px;
          @include flex-center;
        }
      }
    }
  }
</style>
