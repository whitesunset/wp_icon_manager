LAIconManagerView = Backbone.View.extend({
    events: {
        'click .preview': 'resetIcon'
    },
    initialize: function (data) {
        this.template = data.template;
        this.model = new Backbone.Model(_.extend({}, this.model.toJSON(), data));

        this.on('render', data.afterRender || this.afterRender);
    },
    afterRender: function () {},
    render: function () {

        this.$el.empty();
        this.$el.append(this.template(this.model.toJSON()));
        this.trigger('render');
        return this;
    },
    resetIcon: function (e) {
        e.preventDefault();
        e.stopPropagation();

        this.model.set('set', '');
        this.model.set('icon', '');

        $(this.model.get('field')).val('');
        $(this.model.get('custom_field')).val('');

        window["la_icon_manager_select_" + this.model.id].model.set(this.model.toJSON());
        $(this.el).trigger('iconManagerIconChanged');

        this.render();
    }
});