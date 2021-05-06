<template>
  <div>
    <RiosDatabase/>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-2">
          <button type="button" class="btn btn-outline-info" @click="gotoInicial()">Inicio</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import RiosDatabase from '../components/riosDatabase.vue'
import {mapActions} from "vuex";

export default {
  name: 'ViewRios',
  components: {
    RiosDatabase,
  },
  mounted() {
    this.getRivers();
  },
  methods: {
    gotoInicial() {
      this.$router.push({
        path: "/inicial/"
      });
    },
    ...mapActions('Rivers', ['getRivers']),
  },
}
</script>