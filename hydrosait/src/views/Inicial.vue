<template>
  <div class="row mx-auto align-items-center">
    <div class="row align-items-center">
      <div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Total de ríos registrados:</h5>
          <p class="card-text">{{ countRios }}</p>
          <button type="button" class="btn btn-outline-info" @click="gotoViewRios()">Consultar ríos</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'Inicial',
  data() {
    return {}
  },
  computed: {
    ...mapGetters('Rivers', ['countRios']),
  },
  mounted() {
    this.getRivers();
  },
  methods: {
    gotoViewRios() {
      this.$router.push({
        path: "/viewRios/"
      });
    },
    ...mapActions('Rivers', ['getRivers']),
  },
}
</script>