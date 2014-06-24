/* jshint browser:true */
/* global m:false,mc:false */

var app = {

  controller: function () {

    this.datatable = new mc.Datatable.controller([
      {key:"Empty"},
      {key:"Numbers", children:[
        {key:"SKU", label:"SKU", sortable:true},
        {key:"Quantity", sortable:true}
      ]},
      {key:"Text", children:[
        {key:"Item", sortable:true, className:"myClass"},
        {key:"Description", sortable:true, width:200}
      ]}
    ],{
      /*
       If serving this demo from a web server, you can provide the url and it will fetch the data from it.

       //url:'data/stock.json',

       Otherwise, use the data property:
       */
      data: [
        {"SKU":"23-23874", "Quantity":43, "Item":"Helmet", "Description":"Red baseball helmet. Size: Large."},
        {"SKU":"48-38835", "Quantity":84, "Item":"Football", "Description":"Leather football."},
        {"SKU":"84-84848", "Quantity":31, "Item":"Goggles", "Description":"Light blue swim goggles"},
        {"SKU":"84-84843", "Quantity":56, "Item":"Badminton Set", "Description":"Set of 2 badminton rackets, net, and 3 birdies."},
        {"SKU":"84-39321", "Quantity":128, "Item":"Tennis Balls", "Description":"Canister of 3 tennis balls."},
        {"SKU":"39-48949", "Quantity":55, "Item":"Snowboard", "Description":""},
        {"SKU":"99-28128", "Quantity":77, "Item":"Cleats", "Description":"Soccer cleats. Size: 10."},
        {"SKU":"83-48281", "Quantity":65, "Item":"Volleyball", "Description":""},
        {"SKU":"89-32811", "Quantity":12, "Item":"Sweatband", "Description":"Blue sweatband. Size: Medium."},
        {"SKU":"28-22847", "Quantity":43, "Item":"Golf Set", "Description":"Set of 9 golf clubs and bag."},
        {"SKU":"38-38281", "Quantity":1, "Item":"Basketball Shorts", "Description":"Green basketball shorts. Size: Small."},
        {"SKU":"82-38333", "Quantity":288, "Item":"Lip balm", "Description":"Lip balm. Flavor: Cherry."},
        {"SKU":"21-38485", "Quantity":177, "Item":"Ping Pong Ball", "Description":""},
        {"SKU":"83-38285", "Quantity":87, "Item":"Hockey Puck", "Description":"Glow-in-the-dark hockey puck."}
      ]
    });

  },

  view: function (ctrl) {
    return mc.Datatable.view(ctrl.datatable,  {
      caption:'this is the caption'
    });
  }
};

m.module(document.body, app);