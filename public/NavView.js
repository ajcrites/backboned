var MOB = MOB || {};

MOB.NavView = Backbone.View.extend({
    el: $("#nav-header"),
    template: _.template($("#nav").html()),
    render: function () {
        this.$el.html(this.template({date: new Date}));
    },
});
