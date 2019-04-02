<template>
  <!--由于使用 preview 导致图片事件被托管 所以如果要禁用图片时间 需要传prevent:true-->
  <img v-if="prevent" :src="url" @click.stop="void 0" :preview="preview" alt="志汇同城">
  <img v-else :src="url" :preview="preview" alt="志汇同城">
</template>

<script>

  import {PLACE_HOLDER_IMG} from "../../const";

  export default {
    name: "ImgWrapper",
    props: ["src", "preview", "prevent"],
    data() {
      return {
        url: PLACE_HOLDER_IMG
      }
    },
    methods: {
      changeImage(url) {
        if (!url) return;
        const image = new Image();
        image.src = url;
        image.onload = () => {
          this.url = url;
          image.onload = null;
        }
      }
    },
    computed: {},
    watch: {
      src(newVal) {
        this.changeImage(newVal);
      }
    },
    created() {
      this.changeImage(this.src);
    }
  }
</script>


