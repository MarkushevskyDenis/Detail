sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
],

	function (Controller, UIComponent) {
		"use strict";

		return Controller.extend("project1.controller.second", {
			onInit: function () {
				this.getOwnerComponent().getRouter().getTarget("Second").attachDisplay(function () {
					this.fnUpdateProduct();
                }, this);
            },
            fnUpdateProduct: function () {
				var uri = UIComponent.getRouterFor(this).oHashChanger.hash.split("/");
                this.byId("detail").bindElement(uri[2] + ">/" + uri[0] + "/" + uri[1]);
				this.byId("image").bindElement(uri[2] + ">/" + uri[0] + "/" + uri[1]);

            }
		});
	});
