module.exports = app => {
    const rivers = require("../controllers/river.controller.js");
    const router = require("express").Router();

    router.post("/", rivers.create);
    router.get("/", rivers.findAll);
    router.get("/:id", rivers.findOne);
    router.put("/:id", rivers.update);
    router.delete("/:id", rivers.delete);

    app.use("/api/rivers", router);
};
