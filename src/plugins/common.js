import {assetPath} from "../project-config/base";

const Plugin = Object.create(null);
import moment from 'moment'
import {randomNumber} from "../utils";

Plugin.install = function (Vue, options) {

  Vue.mixin({
    computed: {},
    methods: {
      getPathByAssetPath(path) {
        return `${assetPath}${path}`
      },
      formatDate(date = Date(), formatter = "YYYY-MM-DD") {
        return moment(date).format(formatter)
      },
      $replaceRoute(route) {
        this.$router.replace(route);
      },
      $popRoute() {
        this.$router.go(-1);
      },
      $pushRoute(route) {
        this.$router.push(route);
      },
      randomNumber
    },
    created() {
    }
  })

}
export default Plugin;
