
    sap.ui.core.Control.extend("new.control.Video",{
    
        metadata:{
    
            properties:{
                "src":{type:"String"},
                "value": {type : "String", defaultValue :0}
            },
    
            aggregations : { },
    
            events:{}
        },
        init :function(){
            
    
        },
       
    
        renderer:{
            render:function(oRm,oControl){
                oRm.write("<center><video controls autoplay>");
                oRm.write("<source src='"+oControl.getSrc()+"'>");
                oRm.write("</video></center>");
                
            }
        }
        
    
    });