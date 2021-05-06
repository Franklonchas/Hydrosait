<template>
  <div>
    <RioForm/>
    <div :class="`alert alert-danger ${visible}`" role="alert">
      Hay campos requeridos sin rellenar.
    </div>
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-2">
          <button type="button" class="btn btn-outline-warning" @click="gotoViewRios()">Cancelar</button>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#exampleModalCenter">
            Guardar
          </button>
          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
               aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">¿Los datos son correctos?</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <h3>Por favor verifique los datos</h3>
                  <hr>
                  <h5>Nombre:</h5>
                  <p>{{ name }}</p>
                  <hr>
                  <h5>Pais de origen:</h5>
                  <p>{{ country }}</p>
                  <hr>
                  <h5>Longitud total:</h5>
                  <p>{{ length }}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-success" @click="validarDatos()">Guardar</button>
                  <button type="button" class="btn btn-outline-warning" data-dismiss="modal">Volver</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import RioForm from '../components/rioForm.vue'
import {mapState, mapActions} from 'vuex';

export default {
  name: 'CreateRio',
  components: {
    RioForm,
  },
  data() {
    return {
      visible: 'd-none',
    }
  },
  computed: {
    ...mapState('Rivers', ['name', 'country', 'length']),
  },
  methods: {
    // Aqui esperamos a que la API nos devuelva la array de rios para pasar a la vista y asi le tiempo a la APP saber
    // que datos nuevos han llegado
    async validarDatos() {
      if (this.name !== '' && this.country !== '' && this.length !== '') {
        await this.createRiver();
        $('#exampleModalCenter').modal('hide');
        this.$notify({
          group: 'foo',
          title: 'Río ' + this.name,
          text: 'ha sido guardado en el sistema',
        });
        this.gotoInicial();
      } else {
        this.visible = "";
      }
    },
    gotoViewRios() {
      this.$router.push({
        path: "/viewRios/"
      });
    },
    gotoInicial() {
      this.$router.push({
        path: "/inicial/"
      });
    },
    ...mapActions('Rivers', ['createRiver']),
  },
}
</script>

<style>

</style>
