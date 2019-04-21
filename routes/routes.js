    // A path for the home page (from the logo link too)
    app.get("/", function (req, res) {
        res.render("home");
    });

    // A path for the "saved" page (from the nav
    app.get("/saved", function (req, res) {
        res.render("saved");
    });