import http from "./db_connect";

class RiverDataService {
    getRivers() {
        return http.get("/rivers");
    }

    getRiverByID(id) {
        return http.get(`/rivers/${id}`);
    }

    createNewRiver(river) {
        return http.post("/rivers", river);
    }

    updateRiver(id, river) {
        return http.put(`/rivers/${id}`, river);
    }

    deleteRiver(id) {
        return http.delete(`/rivers/${id}`);
    }
}

export default new RiverDataService();