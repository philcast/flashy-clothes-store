var App = Ember.Application.create();

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
