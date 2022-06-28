sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("login.controller.View1", {
            onInit: function () {
                this._oRouter= sap.ui.core.UIComponent.getRouterFor(this);
                var oVizFrame = this.getView().byId("vizframe");
                var oVizFrame = this.getView().byId("vizframed");
                var oModel=new JSONModel();
                oModel.loadData("/model/employee.json");
                this.getView().setModel(oModel);
                oVizFrame.setVizProperties({
                    plotArea: {
                        colorPalette: d3.scale.category20().range()
                    }
                });
            },
            onPress:function(){
                this._oRouter.navTo("RouteView2");
            }
        });
    });
