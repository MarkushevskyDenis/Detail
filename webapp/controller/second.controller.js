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
				console.log(UIComponent.getRouterFor(this).oHashChanger.hash);
                this.byId("test1").bindElement("products>/" + UIComponent.getRouterFor(this).oHashChanger.hash);
				this.byId("image").bindElement("products>/" + UIComponent.getRouterFor(this).oHashChanger.hash);
            }
		});
	});
