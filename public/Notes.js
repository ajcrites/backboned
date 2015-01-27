var MOB = MOB || {};
MOB.Notes = Backbone.Collection.extend({
    model: MOB.Note,
    url: "http://private-763b-explosionpills.apiary-mock.com/notes",
});
