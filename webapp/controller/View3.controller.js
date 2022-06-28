sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,MessageBox) {
        "use strict";

        return Controller.extend("login.controller.View3", {
            onInit: function () {
                this._oRouter= sap.ui.core.UIComponent.getRouterFor(this);
               
            },
            onNext:function(){
                this._oRouter.navTo("RouteView4");
            }

        
           
            
            
        });
    });
