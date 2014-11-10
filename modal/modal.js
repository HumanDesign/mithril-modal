var submodule = function(module, args) {
	return module.view.bind(this, new module.controller(args))
}

var Modal = new function() {
	var Modal = {}
	
	var bind = function(fn, args) {return fn.bind(this, args)}
	var subview = function() {}
	
	Modal.module = new function(store) {
		return function(module, args) {
			if (arguments.length) {
				store = module
				if (store) {
					subview = submodule(module)
				}
			}
			return store
		}
	}
	
	Modal.controller = function() {}
	
	Modal.view = function(ctrl, args) {
		args = args || {}
		return [
			m(".modal", {
				class: [
					Modal.module() ? "modal-visible" : "",
					args.class
				].join(" "),
				onclick: bind(Modal.module, null),
				config: Modal.config()
			}, [
				m(".modal-dialog", [
					m("a.modal-close[href=javascript:;]", {onclick: bind(Modal.module, null)}, "×"),
					subview()
				])
			]),
			m(".modal-overlay")
		]
	}
	
	Modal.config = function() {
		return function(element, isInitialized, context) {
			if (!isInitialized) {
				var handleKey = function(e) {
					if (e.keyCode == 27) {
						Modal.module(null)
						m.redraw()
					}
				}

				document.body.addEventListener("keyup", handleKey)

				context.onunload = function() {
					document.body.removeEventListener("keyup", handleKey)
				}
			}
		}
	}
	
	return Modal
}