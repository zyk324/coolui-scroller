<template>
  <div id="app">
    <Header></Header>
    <div class="main at-container row">
      <aside>
        <vue-scroll :ops="ops" @handle-scroll="handleScroll" id="vs1" ref="vs1">
          <at-menu :active-name="active">
            <at-menu-item
              :to="item.meta.fullpath"
              :name="item.name"
              v-for="(item, index) in menu"
              v-bind:key="index"
            >
              <i class="icon icon-disc"></i>
              {{ item.meta.title }}
            </at-menu-item>
          </at-menu>
        </vue-scroll>
      </aside>
      <div class="right">
        <vue-scroll :ops="ops" @handle-scroll="handleScroll" id="vs" ref="vs">
          <div class="p_30">
            <div class="wiki"><div v-html="content"></div></div>
          </div>
        </vue-scroll>
      </div>
    </div>
  </div>
</template>

<script>
  import marked from 'marked'
  import instance from '@/api/config.js'
  import Header from '@/components/common/Header.vue'
  // import Footer from '@/components/common/Footer.vue';
  export default {
    name: 'app',
    components: {
      Header,
      // Footer
    },
    data() {
      return {
        ops: {
          vuescroll: {},
          scrollPanel: {
            speed: 300,
            easing: 'easeInQuad',
          },
          rail: {
            gutterOfSide: 0,
          },
          bar: {
            background: '#6190E8',
          },
        },
        content: '',
        active: '',
        menu: [],
      }
    },
    created() {
      this.active = this.$route.name
      this.init()
    },
    mounted() {
      window.scrollPanel = this.$refs['vs']
    },
    methods: {
      handleScroll() {},
      init() {
        // let that = this
        let fullPath = this.$route.fullPath
        console.log(this.$route.meta.level)
        if (this.$route.meta.level == 2) {
			console.log(1);
        }
        // let now = fullPath.split('/');
        // console.log(now,that);

        console.log(fullPath)
        instance
          .get(fullPath + '.md?t=' + Date.parse(new Date()))
          .then((res) => {
            this.content = marked(res.data)
          })
      },
    },
    watch: {
      $route() {
        // console.log(to);
        this.active = this.$route.name
        this.init()
      },
    },
  }
</script>

<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    overflow: hidden;
    background-color: #f8faff;
    .main {
      position: relative;
      margin: 48px auto;
      width: 90%;
      background-color: #fff;
      box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
      height: calc(100vh - 60px - 48px - 48px);
      display: flex;
      justify-content: space-between;
      aside {
        height: calc(100vh - 60px - 48px - 48px - 32px - 32px);
        margin: 32px 0;
        overflow: hidden;
        .at-menu {
          min-height: calc(100vh - 60px - 48px - 48px - 32px - 32px);
        }
      }
      .right {
        flex: 1;
        height: 100%;
      }
    }
  }
</style>
