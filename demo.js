var m = require('mithril');
var modal = require('./modal/modal.js');

//top level
var demo = {
	view: function(ctrl) {
		return [
			m("button[type=button]", {
                onclick: function () {
                    modal.show();
                }
            }, "Click to show modal"),
			m.component(modal, {
                view: inner.view,
                class: 'modal-animation-8'
            })
		]
	}
}

//to be rendered in the modal
var inner = {
	controller: function() {},
	view: function() {
		return [
			m("h1", "Hello world")
		]
	}
}

m.module(document.body, demo)
