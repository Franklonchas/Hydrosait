<template>
  <div class="container">
    <h3 class="titulo">Ríos registrados</h3>
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">País de Origen</th>
        <th scope="col">Longitud (m)</th>
        <th scope="col">
          <button type="button" class="btn btn-outline-success" @click="gotoCreateRio()">Añadir río</button>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(river, index) in rivers"
          :key="index">
        <td>{{ river.name }}</td>
        <td>{{ river.country }}</td>
        <td>{{ river.length }}</td>
        <td>
          <button type="button" class="btn btn-outline-warning" @click="goToEditRio(river.id)">Editar</button>
          <button type="button" class="btn btn-outline-danger" @click="deleteRiverNotify(river.id, river.name)">Borrar
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex';

export default {
  name: 'RiosDatabase',
  data() {
    return {}
  },
  computed: {
    ...mapState('Rivers', ['rivers']),
  },
  methods: {
    gotoCreateRio() {
      this.initializeData();
      this.$router.push({
        path: "/createRio/"
      });
    },
    async goToEditRio(id) {
      await this.getRioDetail(id);
      this.$router.push({
        path: "/editRio/"
      });
    },
    deleteRiverNotify(id, name) {
      this.deleteRiver(id);
      this.$notify({
        group: 'foo',
        title: 'Río ' + name,
        text: 'ha sido eliminado del sistema',
      });
    },
    ...mapActions('Rivers', ['deleteRiver', 'getRioDetail', 'initializeData']),
  },
}
</script>

<style scoped>
.container {
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px 12px;
  border: 1px solid #e4e6ed;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  background: white;
}
</style>