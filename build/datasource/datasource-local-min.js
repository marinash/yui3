YUI.add("datasource-local",function(C){var B=C.Lang,A=function(){A.superclass.constructor.apply(this,arguments);};C.mix(A,{NAME:"DataSource.Local",ATTRS:{source:{value:null}},_tId:0,issueCallback:function(E){if(E.callback){var F=E.callback.scope||window,D=(E.error&&E.callback.failure)||E.callback.success;if(D){D.apply(F,[E]);}}}});C.extend(A,C.Base,{_queue:null,initializer:function(){this._queue={interval:null,conn:null,requests:[]};this._initEvents();},destructor:function(){},_initEvents:function(){this.publish("request",{defaultFn:function(D,E){this._defRequestFn(D,E);}});this.publish("data",{defaultFn:function(D,E){this._defDataFn(D,E);}});this.publish("response",{defaultFn:function(D,E){this._defResponseFn(D,E);}});},_defRequestFn:function(E,F){var D=this.get("source");if(B.isUndefined(D)){F.error=true;}if(F.error){this.fire("error",null,F);}this.fire("data",null,C.mix(F,{data:D}));},_defDataFn:function(D,E){E.results=E.data;if(!E.results){E.results=[];}if(!E.meta){E.meta={};}this.fire("response",null,E);},_defResponseFn:function(D,E){A.issueCallback(E);},sendRequest:function(D,F){var E=A._tId++;this.fire("request",null,{tId:E,request:D,callback:F});return E;}});C.namespace("DataSource");C.DataSource.Local=A;},"@VERSION@",{requires:["base"]});