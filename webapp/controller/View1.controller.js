sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    "sap/ui/model/json/JSONModel"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast,JSONModel) {
        "use strict";

        // var EdmType = exportLibrary.EdmType;

        return Controller.extend("new.controller.View1", {
            onInit: function () { 
                this._oRouter= sap.ui.core.UIComponent.getRouterFor(this);
            },
            openPdf:function(){
                this._sValidPath = "/model/Sample.pdf";				
				this._oModel = new JSONModel({
					Source: this._sValidPath,
					Title: "My Custom Title",
					Height: "600px"
				});
				this.getView().setModel(this._oModel);	
            },
            goNext:function(){
                this._oRouter.navTo("RouteView2");
            },
            // mapPress:function(){
            //     window.open("https://www.google.com/maps/@20.9880135,82.7525294,5z");
            // }
           
            playAudio:function(){
                // var audio =newAudio('audio.mp3');
                var audio = new Audio('/model/audio.mp3');
                audio.play();
            }
            
        });
    });
