<script>
import Sidebar from '@/components/Sidebar/Sidebar.vue'


export default {
  name: 'App',
  components: {Sidebar},
  computed: {
    isToggle() {
      return this.$store.getters.TOGGLE_THEME_STATE
    }
  },
}

</script>

<template>
  <div class="app">
    <div class="container">
      <div class="app__inner" :class="isToggle && 'app__theme_white'">
        <Sidebar/>
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app__inner {
  background-color: #586C92;
  display: flex;
  min-height: 1080px;
  transition: all .3s;
}

.app__theme_white {
  background-color: #FFFFFF;
}

.home {
  width: 100%;
  text-align: center;
  font-size: 50px;
}

@media (max-width: 1550px) {
  .app__inner {
    min-height: 720px;
  }
}

</style>
