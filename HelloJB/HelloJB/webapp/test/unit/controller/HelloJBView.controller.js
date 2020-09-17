/*global QUnit*/

sap.ui.define([
	"HelloJBNamespace/HelloJB/controller/HelloJBView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("HelloJBView Controller");

	QUnit.test("I should test the HelloJBView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
