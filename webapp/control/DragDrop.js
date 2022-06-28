sap.ui.define([
	"sap/m/Button"
], function (Button) {
	"use strict";
	return Button.extend("login.control.DragDrop", {
		metadata: {
			dnd: {
				droppable: true
			}
		},
		renderer: {}
	});
});