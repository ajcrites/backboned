var MOB = MOB || {};

MOB.NotesView = Backbone.View.extend({
    template: _.template($("#notes").html()),
    render: function () {
        this.$el.html(this.template({
            notes: this.notes
        }));
    },
    initialize: function ($el, notes) {
        this.$el = $el;
        this.notes = notes;
    },
    events: {
        "click li": "liClicked",
    },
    liClicked: function (event) {
        console.log(event.target);
    },
});

