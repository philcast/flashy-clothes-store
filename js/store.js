// Models
App.Store = DS.Store.extend({
    adapter: DS.FixtureAdapter
});

App.Category = DS.Model.extend({
    name: DS.attr(),
    cssClass: DS.attr(),
    //Relations
    items: DS.hasMany('item', {async: true})
});

App.Item = DS.Model.extend({
    name: DS.attr(),
    description: DS.attr(),
    price: DS.attr('number'),
    cssClass: DS.attr(),
    //Relations
    category: DS.belongsTo('category', {async: true})
});

App.Category.FIXTURES = [
    {
        id: 1,
        name: 'Suits',
        cssClass: 'icon-suit1 blue',
        items: [1, 2, 3, 4, 5, 6]
    },
    {
        id: 2,
        name: 'hoodies',
        cssClass: 'icon-hoody blue',
        items: [20, 21, 22, 23]
    },
    {
        id: 3,
        name: 'Tshirts',
        cssClass: 'icon-tshirt blue',
        items: [40, 41, 42, 43]
    },
    {
        id: 4,
        name: 'Dresses',
        cssClass: 'icon-dress2 pink',
        items: [60, 61, 62, 63]
    },
    {
        id: 5,
        name: 'Skirts',
        cssClass: 'icon-skirt2 pink',
        items: [80, 81]
    },
    {
        id: 6,
        name: 'Tops',
        cssClass: 'icon-top pink',
        items: [100, 101, 102]
    }
];

App.Item.FIXTURES = [
//Suits
    {
        id: 1,
        category: 1,
        name: 'Black two button slim suit',
        description: 'Black suit with slim two button jacket and slim fit trousers.',
        price: 80,
        cssClass: 'icon-suit1 black'
    },
    {
        id: 2,
        category: 1,
        name: 'Blue two button slim suit',
        description: 'Blue suit with slim two button jacket and slim fit trousers.',
        price: 90,
        cssClass: 'icon-suit1 blue'
    },
    {
        id: 3,
        category: 1,
        name: 'Green two button slim suit',
        description: 'Green suit with slim two button jacket and slim fit trousers.',
        price: 90,
        cssClass: 'icon-suit1 green'
    },
    {
        id: 4,
        category: 1,
        name: 'Black skinny suit',
        description: 'Black 1 button single breasted skinny fit suit jacket and black skinny fit suit trousers.',
        price: 150,
        cssClass: 'icon-suit2 black'
    },
    {
        id: 5,
        category: 1,
        name: 'Blue skinny suit',
        description: 'Blue 1 button single breasted skinny fit suit jacket and black skinny fit suit trousers.',
        price: 140,
        cssClass: 'icon-suit2 blue'
    },
    {
        id: 6,
        category: 1,
        name: 'Red skinny suit',
        description: 'Red 1 button single breasted skinny fit suit jacket and black skinny fit suit trousers.',
        price: 190,
        cssClass: 'icon-suit2 red'
    },
//hoodies
    {
        id: 20,
        category: 2,
        name: 'Red kangaroo hoody',
        description: 'Red kangaroo hoody with metal zip and patterned back neck tape detail.',
        price: 40,
        cssClass: 'icon-hoody red'
    },
    {
        id: 21,
        category: 2,
        name: 'Green kangaroo hoody',
        description: 'Green kangaroo hoody with metal zip and patterned back neck tape detail.',
        price: 30,
        cssClass: 'icon-hoody green'
    },
    {
        id: 22,
        category: 2,
        name: 'Yellow kangaroo hoody',
        description: 'Yellow kangaroo hoody with metal zip and patterned back neck tape detail.',
        price: 45,
        cssClass: 'icon-hoody yellow'
    },
    {
        id: 23,
        category: 2,
        name: 'Purple kangaroo hoody',
        description: 'Purple kangaroo hoody with metal zip and patterned back neck tape detail.',
        price: 50,
        cssClass: 'icon-hoody purple'
    },
//Tshirts
    {
        id: 40,
        category: 3,
        name: 'Orange cotton t-shirt',
        description: 'Orange jersey crew neck tshirt. 100% Cotton.',
        price: 10,
        cssClass: 'icon-tshirt orange'
    },
    {
        id: 41,
        category: 3,
        name: 'Pink cotton t-shirt',
        description: 'Pink jersey crew neck tshirt. 100% Cotton.',
        price: 20,
        cssClass: 'icon-tshirt pink'
    },
    {
        id: 42,
        category: 3,
        name: 'Blue cotton t-shirt',
        description: 'Blue jersey crew neck tshirt. 100% Cotton.',
        price: 15,
        cssClass: 'icon-tshirt blue'
    },
    {
        id: 43,
        category: 3,
        name: 'Red cotton t-shirt',
        description: 'Red jersey crew neck tshirt. 100% Cotton.',
        price: 17,
        cssClass: 'icon-tshirt red'
    },
    {
        id: 43,
        category: 3,
        name: 'Black cotton t-shirt',
        description: 'Black jersey crew neck tshirt. 100% Cotton.',
        price: 25,
        cssClass: 'icon-tshirt black'
    },
//Dresses
    {
        id: 60,
        category: 4,
        name: 'Black fit & flare dress',
        description: 'Narrow straps secure a charming, stretch-cotton dress styled with a delicate, sheer V-neckline.',
        price: 120,
        cssClass: 'icon-dress2 black'
    },
    {
        id: 61,
        category: 4,
        name: 'Pink fit & flare dress',
        description: 'Narrow straps secure a charming, stretch-cotton dress styled with a delicate, sheer V-neckline.',
        price: 120,
        cssClass: 'icon-dress2 pink'
    },
    {
        id: 62,
        category: 4,
        name: 'Orange fit & flare dress',
        description: 'Narrow straps secure a charming, stretch-cotton dress styled with a delicate, sheer V-neckline.',
        price: 120,
        cssClass: 'icon-dress2 orange'
    },
    {
        id: 63,
        category: 4,
        name: 'Pink cotton dress',
        description: 'A pretty pink shade punctuated by an exposed zipper in back refreshes a dress tailored from fine stretch cotton.',
        price: 90,
        cssClass: 'icon-dress1 pink'
    },
//Skirts
    {
        id: 80,
        category: 5,
        name: 'Orange flowy skirt',
        description: 'An elastic waistband delicately gathers a silken skirt into a light and airy flow.',
        price: 70,
        cssClass: 'icon-skirt1 orange'
    },
    {
        id: 81,
        category: 5,
        name: 'Pink tiered flare skirt',
        description: 'Two tiers of soft jersey fashion a floaty skirt beneath a wide waistband.',
        price: 60,
        cssClass: 'icon-skirt2 pink'
    },
//Tops
    {
        id: 100,
        category: 6,
        name: 'Pink silk top',
        description: 'A supple silk pocket shirt has a keyhole back closure that gives it just a touch of chic.',
        price: 45,
        cssClass: 'icon-top pink'
    },
    {
        id: 101,
        category: 6,
        name: 'Blue silk top',
        description: 'A supple silk pocket shirt has a keyhole back closure that gives it just a touch of chic.',
        price: 30,
        cssClass: 'icon-top blue'
    },
    {
        id: 102,
        category: 6,
        name: 'Yellow silk top',
        description: 'A supple silk pocket shirt has a keyhole back closure that gives it just a touch of chic.',
        price: 40,
        cssClass: 'icon-top yellow'
    }
];