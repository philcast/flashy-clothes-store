/*global App*/
var App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    enableLogging: true
});

// Router
App.Router.map(function () {
    this.resource('catalog', function () {
        this.resource('category', { path: '/category/:category_id' }, function () {
            this.resource('item', { path: '/item/:item_id' });
        });
    });
    this.route('checkout');
    this.route('fourofour', { path: '*:'});
});

App.ApplicationRoute = Ember.Route.extend({
    setupController: function () {
        this.controllerFor('shoppingCart').set('model', App.ShoppingCart.create({
            items: []
        }));
    }
});

App.ApplicationView = Ember.View.extend({
    didInsertElement: function () {
        this.$().foundation();
    }
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

App.CategoryRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('category', params.category_id);
    }
});

App.ItemRoute = Ember.Route.extend({
    actions: {
        backToCategory: function () {
            //this.replaceWith('category.index', this.modelFor('item').get('category'));
            this.transitionTo('category');
        }
    },
    model: function (params) {
        return this.store.find('item', params.item_id);
    }
});

App.CheckoutRoute = Ember.Route.extend({
    model: function () {
        return this.controllerFor('shoppingCart').get('model');
    }
});

App.ItemController = Ember.ObjectController.extend({
    needs: ['shoppingCart'],

    actions: {
        addToCart: function () {
            this.get('controllers.shoppingCart').send('addItem', this.get('model'));
        }
    }
});

App.ItemView = Ember.View.extend({
    didInsertElement: function () {
        var self = this;

        this.$('#itemModal').foundation('reveal', {
            close_on_background_click: true,
            close_on_esc: true
        });
        $(document).on('closed', '[data-reveal]', function () {
            self.get('controller').send('backToCategory');
        });
        this.$('#itemModal').foundation('reveal', 'open');
    },

    willDestroyElement: function () {
        $(document).off('closed', '[data-reveal]');
        $('#itemModal').foundation('reveal', 'close');
    },

    actions: {
        addToCartClicked: function () {
            this.get('controller').send('addToCart');
            $('#itemModal').foundation('reveal', 'close');
        }
    }
});

App.ShoppingCart = Ember.Object.extend({
    accountName: '',

    items: [],

    itemsCount: function () {
        return this.get('items').length;
    }.property('items.[]'),

    price: function () {
        return this.get('items').getEach('price').reduce(function (accum, item) {
            return accum + item;
        }, 0);
    }.property('items.@each.price')
});

App.ShoppingCartController = Ember.ObjectController.extend({
    actions: {
        addItem: function (item) {
            this.get('model.items').pushObject(item);
        }
    }
});

App.CheckoutController = Ember.ObjectController.extend({
   actions: {
       buy: function() {
            alert('alert("Thanks for your order")');
       }
   }
});