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

        return Controller.extend("login.controller.View2", {
            onInit: function () {
                this._oRouter= sap.ui.core.UIComponent.getRouterFor(this);
                var oModel=new JSONModel();
                oModel.loadData("/model/employee.json");
                this.getView().setModel(oModel);

        //         var today = new Date();
        // var dd = today.getDate();
        // var mm = today.getMonth()+1; //January is 0!
        // var yyyy = today.getFullYear();
        // var hour = today.getHours();
        // var Minutes = today.getMinutes();
        // var Seconds = today.getSeconds();
        // var today1 = ( dd+'/'+mm+'/'+yyyy+' '+hour+':'+Minutes+':'+Seconds);
        // this.getView().byId("date").setText(today1.valueOf(Text));

        var oLabel = this.getView().byId("oLabel");
          var result = this.GetClock();
          oLabel.setText(result);
          var that = this;
          setInterval(function() {
            var result = that.GetClock();
            oLabel.setText(result);
          }, 1000);
            },
            // onDrop:function(oEvent){
            //     var bindingContext=parseInt(oEvent.getParameters('dragSession').draggedControl.getBindingContextPath().split('/')[2]);
                
            //     var oModel=new JSONModel();
            //     oModel.loadData("/model/employee.json");
            //     this.getView().setModel(oModel);
            //     var oEmpModel=this.getOwnerComponent().getModel(oModel);
            //     var oEmpModelData=oEmpModel.getData();
            //     oEmpModelData.splice(bindingContext,1);
            //     // oEmpModel.setProperty('/Companies',oEmpModelData);
                
            //     oEmpModel.refresh();
            //     MessageBox.success("Employee record deleted!");
            // }
            
            GetClock: function() {

                // var tday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
                // var tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
                var d = new Date();
                var nday = d.getDay(),
                  nmonth = d.getMonth()+1,
                  ndate = d.getDate(),
                  nyear = d.getYear(),
                  nhour = d.getHours(),
                  nmin = d.getMinutes(),
                  nsec = d.getSeconds(),
                  ap;
                if (nhour === 0) {
                  ap = " AM";
                  nhour = 12;
                } else if (nhour < 12) {
                  ap = " AM";
                } else if (nhour == 12) {
                  ap = " PM";
                } else if (nhour > 12) {
                  ap = " PM";
                  nhour -= 12;
                }
                if (nyear < 1000) nyear += 1900;
                if (nmin <= 9) nmin = "0" + nmin;
                if (nsec <= 9) nsec = "0" + nsec;
                // var today1 = ( dd+'/'+mm+'/'+yyyy+' '+hour+':'+Minutes+':'+Seconds);
                var result =  nmonth + "/" + ndate + "/" + nyear + " " + nhour + ":" + nmin + ":" + nsec + ap + "";
                return result;
            },
            onNext(){
                this._oRouter.navTo("RouteView3");
            }
        });
    });
