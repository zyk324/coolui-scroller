<template>
  <header>
    <div class="at-container">
      <div class="row  at-row no-gutter">
        <div class="col-md-18">
          <div class="logo light-blue">
            <i class="iconfont">&#xe643;</i>
            {{ logo }}
          </div>
        </div>
        <div class="col-md-6">
          <at-menu mode="horizontal" :active-name="active">
            <template v-for="(item, index) in list">
              <at-submenu
                name="/website"
                v-if="item.children && item.children[0].children"
                :key="index"
              >
                <template slot="title">
                  <i :class="['icon', item.meta.icon]"></i>
                  {{ item.meta.title }}
                </template>

                <at-menu-item
                  v-for="(it, ind) in item.children"
                  name="/website/pc/index"
                  to="/website/pc/index"
                  :key="ind"
                >
                  <i :class="['icon', it.meta.icon]"></i>
                  {{ it.meta.title }}
                </at-menu-item>
              </at-submenu>
              <at-menu-item
                v-else
                :name="item.path"
                :to="item.children[0].meta.fullpath"
                :key="index"
              >
                <i :class="['icon', item.meta.icon]"></i>
                {{ item.meta.title }}
				<!-- {{active == item.path}} -->
              </at-menu-item>
            </template>
          </at-menu>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import instance from '@/api/config.js'
  export default {
    data() {
      return {
        active: '',
        list: [],
        logo: '',
      }
    },
    computed: {},
    created() {
      let that = this
      this.active = '/' + this.$route.fullPath.split('/')[1]
      instance.get('router.json').then((res) => {
        // console.log(res.data)
        that.list = res.data.nav
        that.logo = res.data.logo
      })
    },
    methods: {},
    watch: {
      $route() {
        this.active = this.$route.fullPath
      },
    },
  }
</script>

<style scoped lang="scss">
  header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
    opacity: 0.98;
    width: 100%;
    position: relative;
    z-index: 5;
    .logo {
      font-size: 22px;
      line-height: 60px;
      font-weight: bold;
      display: flex;
      align-items: center;
      i {
        font-size: 30px;
        display: block;
        margin-right: 10px;
      }
    }
    .at-menu {
      float: right;
      line-height: 60px;
      height: 60px;
    }
  }
</style>
