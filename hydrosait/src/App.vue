<template>
  <div id="app" class="Site">
    <notifications group="foo" />
    <Navbar/>
      <router-view class="Site-content"></router-view>
    <Footer/>
  </div>
</template>
<script>

import Footer from './components/footer.vue';
import Navbar from './components/navbar.vue';

export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Site-content {
  flex: 1;
}
</style>
