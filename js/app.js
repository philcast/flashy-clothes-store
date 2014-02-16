var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function () {
    this.resource('catalog', function () {
        this.resource('category', { path: '/category/:category_id' }, function () {
            this.resource('item', { path: '/item/:item_id' });
        });
    });
    this.route('checkout');
});

App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo('catalog');
    }
});

App.CatalogRoute = Ember.Route.extend({
    model: function () {
        return this.store.findAll('category');
    }
});