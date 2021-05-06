import Api from '../../services/api';

export default {
    namespaced: true,
    state: {
        rivers: [],
        name: '',
        country: '',
        id: '',
        length: 0,
    },
    getters: {
        countRios(state) {
            return state.rivers.length
        }
    },
    mutations: {
        GET_RIVERS(state, rivers) {
            state.rivers = rivers;
        },
        GET_RIO_DETAIL(state, value) {
            state.id = value.id;
            state.name = value.name;
            state.country = value.country;
            state.length = value.length;
        },
        SET_NAME(state, value) {
            state.name = value;
        },
        SET_COUNTRY(state, value) {
            state.country = value;
        },
        SET_LENGTH(state, value) {
            state.length = value;
        },
        INITIALIZE_DATA(state) {
            state.name = '';
            state.country = '';
            state.length = 0;
        },
    },
    actions: {
        async getRivers(context) {
            await Api.getRivers().then(response => {
                let rivers = response.data;
                context.commit('GET_RIVERS', rivers);
            }).catch(e => {
                console.log(e);
            });
        },
        async getRioDetail(context, id) {
            await Api.getRiverByID(id).then(response => {
                let river = response.data;
                context.commit('GET_RIO_DETAIL', river);
            }).catch(e => {
                console.log(e);
            });
        },
        async createRiver(context) {
            const river = {
                name: context.state.name,
                country: context.state.country,
                length: context.state.length,
            }
            await Api.createNewRiver(river).then((response) => {
                console.log(response)
            }, (err) => {
                console.log(err)
            });
        },
        async updateRiver(context) {
            const river = {
                name: context.state.name,
                country: context.state.country,
                length: context.state.length,
            }
            await Api.updateRiver(context.state.id, river)
                .then(response => {
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        async deleteRiver(context, id) {
            await Api.deleteRiver(id)
                .then(response => {
                    console.log(response.data);
                    context.dispatch('getRivers')
                })
                .catch(e => {
                    console.log(e);
                });
        },
        setName(context, value) {
            context.commit('SET_NAME', value);
        },
        setCountry(context, value) {
            context.commit('SET_COUNTRY', value);
        },
        setLength(context, value) {
            context.commit('SET_LENGTH', value);
        },
        initializeData(context) {
            context.commit('INITIALIZE_DATA');
        }
    },
};