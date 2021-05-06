<template>
  <div class="container">
    <div class="row">
      <div class="col align-self-center">
        <h3 class="titulo">{{ isEditing ? 'Editar río del sistema' : 'Añadir río al sistema' }}</h3>
        <form class="was-validated">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label" for="validacionNombre">Nombre del río</label>
            <div class="col-sm-10">
              <input type="text" class="form-control is-invalid" id="validacionNombre"
                     placeholder="Introducir nombre del río" required :value="name"
                     @input="setName($event.target.value)">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label" for="validacionOrigen">País de origen</label>
            <div class="col-sm-10">
              <input type="text" class="form-control is-invalid" id="validacionOrigen"
                     placeholder="Introducir país de origen del río" required :value="country"
                     @input="setCountry($event.target.value)">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label" for="validacionLogintud">Longitud total</label>
            <div class="col-sm-10">
              <input type="number" class="form-control is-invalid" id="validacionLogintud"
                     placeholder="Introducir longitud total del río" required :value="length"
                     @input="setLength($event.target.value)">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex';

export default {
  name: 'RioForm',
  props: {
    isEditing: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    ...mapState('Rivers', ['name', 'country', 'length']),
  },
  methods: {
    ...mapActions('Rivers', ['setName', 'setCountry', 'setLength']),
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

.titulo {
  margin-bottom: 30px;
}
</style>>