var app = app || {};

app.BookView = Backbone.View.extend({
    
    tagName:'div',
    className: 'bookContainer',
    template:_.template($('#bookTemplate').html()),

    events: {
        'click .delete': 'deleteBook'
    },

    deleteBook: function() {
        // delete model
        this.model.destroy();
        // delete view
        this.remove();
    },

    // initialize: function() {
    
    // },

    render:function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});