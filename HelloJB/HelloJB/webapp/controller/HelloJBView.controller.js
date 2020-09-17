sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("HelloJBNamespace.HelloJB.controller.HelloJBView", {
			onInit: function () {
                console.log("Hello JB");
            },
            onArterRendering: function() {
                console.log("Hello JB2");
            },
            MyMehod:function() {
                var inputValue = this.byId("input0").getValue();
                alert("get " + inputValue);
            },
            selectCustomer: function(oEvent)
            {
               // @ts-ignor
               var index = oEvent.getSource().getTable().indexOfItem(oEvent.getSource());
               // @ts-ignore
               var c =this.byId("form0");
               var sPath = "myListModel>/"+index;
               c.bindElement(sPath);
           
            }
		});
	});
