LAIconManagerView = Backbone.View.extend({
    events: {
        'click .preview': 'resetIcon'
    },
    initialize: function (data) {
        this.template = data.template;
        this.model = _.extend({}, this.model.toJSON(), data);

        // this.listenTo(this.model, 'change', this.render);
        this.on('render', data.afterRender || this.afterRender);
    },
    afterRender: function () {},
    render: function () {

        this.$el.empty();
        this.$el.append(this.template(this.model));
        this.trigger('render');
        return this;
    },
    resetIcon: function (e) {
        e.preventDefault();
        e.stopPropagation();

        this.model.set = '';
        this.model.icon = '';

        $(this.model.field).val('');
        $(this.model.custom_field).val('');

        this.render();
    }
});