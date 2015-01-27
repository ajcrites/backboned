var MOB = MOB || {};

MOB.Router = Backbone.Router.extend({
    routes: {
        "": "home",
        "notes": "displayNotes",
    },

    initialize: function () {
        MOB.navView = new MOB.NavView;
        MOB.navView.render();
    },

    home: function () {
        console.log("went home");
    },

    displayNotes: function () {
        var notes = new MOB.Notes;
        notes.comparator = "order";

        notes.fetch().done(function () {
            if (MOB.mainView) {
                MOB.mainView.remove();
            }
            var viewEl = $("<div>");
            viewEl.appendTo("#main-content");
            MOB.mainView = new MOB.NotesView(viewEl, notes);
            MOB.mainView.render();
        }).fail(function () {
            console.log(arguments);
        });
    },
});

MOB.router = new MOB.Router;
Backbone.history.start();
