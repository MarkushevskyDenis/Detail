sap.ui.define([
	"sap/ui/core/mvc/Controller"
],

	function (Controller) {
		"use strict";

		return Controller.extend("project1.controller.first", {
			onInit: function () {
				var data = {
					data: [
						{
							ProductId: 1,
							Name: "Apple",
							SupplierName: "OOO Apple",
							Cost: 123.123,
							Currencykey: "RUB",
							Unit: "KG",
							WeightMeasure: 10,
							Description: "dsfhjdsfhjdshfjhds kjfdsj jkdshflkasdjfhdsjfhskjdf",
							Image: "/images/Apple"
						},
						{
							ProductId: 2,
							Name: "Banana",
							SupplierName: "OOO Banana",
							Cost: 12,
							Currencykey: "EUR",
							Unit: "KG",
							WeightMeasure: 20,
							Description: "dsfhjdsfhjdshfjhds kjfdsj jkdshflkasdjfhdsjfhskjdfsadfffffffffffffff",
							Image: "/images/banana.jfif"
						},
						{
							ProductId: 3,
							Name: "Cherry",
							SupplierName: "OOO Cherry",
							Cost: 9999,
							Currencykey: "USD",
							Unit: "KG",
							WeightMeasure: 120,
							Description: "dsfhjdsfhjdshfjhds kjfdsj jkdshflkasdjfhdsjfhskjdf11111111111111111111111",
							Image: "/images/cherry.jfif"
						},
						{
							ProductId: 4,
							Name: "Orange",
							SupplierName: "OOO Orange",
							Cost: 12,
							Currencykey: "RUB",
							Unit: "KG",
							WeightMeasure: 15,
							Description: "dsfhjdsfhjdshfjhds kjfdsj jkdshflkasdjfhdsjfhskjdf222222222222222222222222",
							Image: "/images/Orange"
						},
						{
							ProductId: 5,
							Name: "Watermellon",
							SupplierName: "OOO Watermellon",
							Cost: 10,
							Currencykey: "RUB",
							Unit: "KG",
							WeightMeasure: 99,
							Description: "dsfhjdsfhjdshfjhds kjfdsj jkdshflkasdjfhdsjfhskjdf333333333333",
							Image: "/images/Watermellon"
						}
					]
				};
				var model = new sap.ui.model.json.JSONModel(data);
				this.getOwnerComponent().setModel(model,"products");
			},
			onDetail: function(oEvent){
				this.getOwnerComponent().getRouter().navTo("Second",{
					path: oEvent.getParameters().listItem.oBindingContexts.products.sPath.split("/")[2]
				});
			}
		});
	});
