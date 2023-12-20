"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    return res.status(200).json({ message: "Server running on On Render." });
});
app.listen(9000, function () {
    console.log("Server started on port 9000.");
});
