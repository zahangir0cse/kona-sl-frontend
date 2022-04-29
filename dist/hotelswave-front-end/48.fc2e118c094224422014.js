(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{ObSI:function(e,t,i){"use strict";i.r(t),i.d(t,"ROUTES",function(){return Q}),i.d(t,"ServiceAdminModule",function(){return y});var n=i("UPO+"),c=i("KZX/"),r=i("iInd"),s=i("oTcB"),o=i("8Y7J"),l=i("G0yt"),a=i("jgEc"),b=function(){return function(){}}(),d=i("s7LF"),u=i("EApP"),v=function(){function e(e,t,i){this.httpService=e,this.fb=t,this.toastrService=i,this.baseUrl="api/v1/serviceAdmin/",this.serviceNameListTest=[],this.dropdownServiceTypeData=[],this.selectedServiceTypeList=[],this.dropdownServiceNameData=[],this.selectedServices=[]}return e.prototype.ngOnInit=function(){this.dropdownMenuSettings={singleSelection:!0,idField:"id",textField:"name",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:3,allowSearchFilter:!0},this.serviceNameDropdownMenuSettings={singleSelection:!1,idField:"id",textField:"name",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:3,allowSearchFilter:!0};var e=[];e.push("Hotel","Ship","Bus","Air"),this.dropdownServiceTypeData=e},e.prototype.onItemSelect=function(e){var t=this;if(this.dropdownServiceNameData=[],this.selectedServiceType=e,"Hotel"===e)try{this.httpService.sendAuthenticateGetRequestObserver(this.baseUrl+"getAllHotels","").subscribe(function(e){t.hotelList=e.content;var i=[];t.hotelList.forEach(function(e){t.serviceNameListTest.push(null==e?void 0:e.name),i.push({id:e.id,name:e.name})}),t.dropdownServiceNameData=i,t.selectedServices=[]})}catch(i){console.log(i)}else if("Ship"===e)try{this.httpService.sendAuthenticateGetRequestObserver(this.baseUrl+"getAllShips","").subscribe(function(e){t.hotelList=e.content;var i=[];t.hotelList.forEach(function(e){t.serviceNameListTest.push(null==e?void 0:e.name),i.push({id:e.id,name:e.name+"-"+e.shipNumber})}),t.dropdownServiceNameData=i,t.selectedServices=[]})}catch(i){console.log(i)}else if("Bus"===e)try{this.httpService.sendAuthenticateGetRequestObserver("api/v1/buses/list","").subscribe(function(e){t.hotelList=e.content;var i=[];t.hotelList.forEach(function(e){t.serviceNameListTest.push(null==e?void 0:e.name),i.push({id:e.id,name:e.name+"-"+e.couchNumber})}),t.dropdownServiceNameData=i,t.selectedServices=[]})}catch(i){console.log(i)}},e.prototype.onItemDeSelect=function(){this.dropdownServiceNameData=[]},e.prototype.submitData=function(e,t,i,n,c,r){var s,o,l=this;if(""!==e&&""!==t&&null!=c&&0!==(null===(s=c.selectedServiceTypeList)||void 0===s?void 0:s.length)&&null!=n&&0!==(null===(o=n.selectedServices)||void 0===o?void 0:o.length)){var a=new b;a.name=e,a.phone=t,a.email=i,a.serviceType=c.selectedItems[0].id;var d=[];n.selectedItems.forEach(function(e){d.push(null==e?void 0:e.id)}),a.serviceId=d,this.httpService.sendAuthenticatePostRequestObserver(this.baseUrl+"create","",a).subscribe(function(e){if(null!=e)return(null==e?void 0:e.statusCode)<400?(l.toastrService.success(null==e?void 0:e.message,"Success"),void r.reset()):void l.toastrService.error(null==e?void 0:e.message,"Error");l.toastrService.error("Something Wrong","Error")})}else this.toastrService.error("Name, Phone & Service Selection are Required","Error")},e.\u0275fac=function(t){return new(t||e)(o.Lb(a.a),o.Lb(d.d),o.Lb(u.b))},e.\u0275cmp=o.Fb({type:e,selectors:[["app-service-admin-form"]],decls:45,vars:8,consts:[[1,"container-fluid"],[1,"row","px-3","details-title","text-left"],[1,"my-3","p-4","shifting-form","label1","text-left"],["myForm","ngForm"],[1,"row"],[1,"col-sm-6"],["for","name"],[1,"required-indicator"],["placeholder","Enter your name","id","name","type","text",1,"form-control"],["name",""],["for","phone"],["placeholder","Enter your phone","id","phone","maxlength","11",1,"form-control"],["phone",""],["for","email"],["placeholder","Enter your email","id","email","type","email",1,"form-control"],["email",""],["for","serviceType"],["id","serviceType","name","serviceType",3,"placeholder","settings","data","ngModel","ngModelChange","onSelect","onDeSelect"],["serviceType",""],["for","serviceIds"],["id","serviceIds","name","serviceIds",3,"placeholder","settings","data","ngModel","ngModelChange"],["serviceIds",""],[1,"d-flex","flex-row-reverse","bd-highlight",2,"padding-top","20px"],[1,"btn","btn-success","mx-1",3,"click"]],template:function(e,t){if(1&e){var i=o.Rb();o.Qb(0,"div",0),o.Qb(1,"span",1),o.Lc(2,"Add Service Admin"),o.Pb(),o.Pb(),o.Qb(3,"div",0),o.Qb(4,"form",2,3),o.Qb(6,"div",4),o.Qb(7,"div",5),o.Qb(8,"label",6),o.Lc(9,"Name "),o.Qb(10,"span",7),o.Lc(11,"*"),o.Pb(),o.Pb(),o.Mb(12,"input",8,9),o.Pb(),o.Qb(14,"div",5),o.Qb(15,"label",10),o.Lc(16,"Phone "),o.Qb(17,"span",7),o.Lc(18,"*"),o.Pb(),o.Pb(),o.Mb(19,"input",11,12),o.Pb(),o.Pb(),o.Qb(21,"div",4),o.Qb(22,"div",5),o.Qb(23,"label",13),o.Lc(24,"Email"),o.Pb(),o.Mb(25,"input",14,15),o.Pb(),o.Qb(27,"div",5),o.Qb(28,"label",16),o.Lc(29,"Service Type "),o.Qb(30,"span",7),o.Lc(31,"*"),o.Pb(),o.Pb(),o.Qb(32,"ng-multiselect-dropdown",17,18),o.bc("ngModelChange",function(e){return t.selectedServiceTypeList=e})("onSelect",function(e){return t.onItemSelect(e)})("onDeSelect",function(){return t.onItemDeSelect()}),o.Pb(),o.Pb(),o.Pb(),o.Qb(34,"div",4),o.Qb(35,"div",5),o.Qb(36,"label",19),o.Lc(37,"Service Name "),o.Qb(38,"span",7),o.Lc(39,"*"),o.Pb(),o.Pb(),o.Qb(40,"ng-multiselect-dropdown",20,21),o.bc("ngModelChange",function(e){return t.selectedServices=e}),o.Pb(),o.Pb(),o.Pb(),o.Qb(42,"div",22),o.Qb(43,"button",23),o.bc("click",function(){o.Ac(i);var e=o.xc(13),n=o.xc(20),c=o.xc(26),r=o.xc(41),s=o.xc(33),l=o.xc(5);return t.submitData(e.value,n.value,c.value,r,s,l)}),o.Lc(44,"Submit"),o.Pb(),o.Pb(),o.Pb(),o.Pb()}2&e&&(o.zb(32),o.mc("placeholder","Select Service Type")("settings",t.dropdownMenuSettings)("data",t.dropdownServiceTypeData)("ngModel",t.selectedServiceTypeList),o.zb(8),o.mc("placeholder","Select Service Name")("settings",t.serviceNameDropdownMenuSettings)("data",t.dropdownServiceNameData)("ngModel",t.selectedServices))},directives:[d.y,d.o,d.p,n.a,d.n,d.q],styles:[""]}),e}(),p=i("XNiG"),m=i("SVse");function h(e,t){if(1&e){var i=o.Rb();o.Qb(0,"div"),o.Qb(1,"button",9),o.bc("click",function(){o.Ac(i);var e=o.ec().$implicit;return o.ec().activeDeactive(null==e?null:e.id)}),o.Lc(2,"Disable"),o.Pb(),o.Pb()}}function f(e,t){if(1&e){var i=o.Rb();o.Qb(0,"div"),o.Qb(1,"button",10),o.bc("click",function(){o.Ac(i);var e=o.ec().$implicit;return o.ec().activeDeactive(null==e?null:e.id)}),o.Lc(2,"Enable"),o.Pb(),o.Pb()}}function g(e,t){if(1&e&&(o.Qb(0,"tr"),o.Qb(1,"td"),o.Lc(2),o.Pb(),o.Qb(3,"td"),o.Lc(4),o.Pb(),o.Qb(5,"td"),o.Lc(6),o.Pb(),o.Qb(7,"td"),o.Lc(8),o.Pb(),o.Qb(9,"td"),o.Lc(10),o.Pb(),o.Qb(11,"td"),o.Jc(12,h,3,0,"div",8),o.Jc(13,f,3,0,"div",8),o.Pb(),o.Pb()),2&e){var i=t.$implicit;o.zb(2),o.Mc(null==i?null:i.name),o.zb(2),o.Mc(null==i?null:i.phoneNumber),o.zb(2),o.Mc(null==i?null:i.email),o.zb(2),o.Mc(null==i?null:i.serviceType),o.zb(2),o.Mc(null==i?null:i.serviceName),o.zb(2),o.mc("ngIf",null==i?null:i.isActive),o.zb(1),o.mc("ngIf",!(null!=i&&i.isActive))}}var S=function(){function e(e,t){this.httpService=e,this.toast=t,this.baseUrl="api/v1/serviceAdmin/",this.dtOptions={},this.dtTrigger=new p.a}return e.prototype.ngOnInit=function(){this.dtOptions={pagingType:"full_numbers"},this.getServiceAdminList()},e.prototype.getServiceAdminList=function(){var e=this;this.httpService.sendAuthenticateGetRequestObserver(this.baseUrl+"getAll","").subscribe(function(t){t.statusCode<400&&(e.serviceAdminList=t.content),e.dtTrigger.next()})},e.prototype.activeDeactive=function(e){var t=this;""!==e&&void 0!==e&&confirm("Are you sure ?")&&this.httpService.sendAuthenticateGetRequestObserver(this.baseUrl+e,"").subscribe(function(e){if(null!=e)return(null==e?void 0:e.statusCode)<400?(t.getServiceAdminList(),t.toast.success(""+(null==e?void 0:e.message)),void t.dtTrigger.next()):void t.toast.info(""+(null==e?void 0:e.message));alert("Something Wrong")})},e.\u0275fac=function(t){return new(t||e)(o.Lb(a.a),o.Lb(u.b))},e.\u0275cmp=o.Fb({type:e,selectors:[["app-list-form"]],decls:23,vars:3,consts:[["datatable","",1,"table","table-hover","table-responsive-sm","border",3,"dtOptions","dtTrigger"],[2,"background-color","#f8f9fa"],["colspan","5"],[1,"row"],[1,"col"],[1,"mr-auto"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"btn","btn-danger",3,"click"],[1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(o.Qb(0,"table",0),o.Qb(1,"thead"),o.Qb(2,"tr",1),o.Qb(3,"td",2),o.Qb(4,"div",3),o.Qb(5,"div",4),o.Qb(6,"h5",5),o.Lc(7,"List of Service Admins"),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Qb(8,"tr"),o.Qb(9,"th",6),o.Lc(10,"Name"),o.Pb(),o.Qb(11,"th"),o.Lc(12,"Phone"),o.Pb(),o.Qb(13,"th"),o.Lc(14,"Email"),o.Pb(),o.Qb(15,"th"),o.Lc(16,"Service Type"),o.Pb(),o.Qb(17,"th"),o.Lc(18,"Service Name"),o.Pb(),o.Qb(19,"th"),o.Lc(20,"Action"),o.Pb(),o.Pb(),o.Pb(),o.Qb(21,"tbody"),o.Jc(22,g,14,7,"tr",7),o.Pb(),o.Pb()),2&e&&(o.mc("dtOptions",t.dtOptions)("dtTrigger",t.dtTrigger),o.zb(22),o.mc("ngForOf",t.serviceAdminList))},directives:[s.a,m.o,m.p],styles:[""]}),e}();function P(e,t){1&e&&o.Mb(0,"app-service-admin-form")}function L(e,t){1&e&&(o.Ob(0),o.Mb(1,"app-list-form"),o.Nb())}var Q=[{path:"add",component:function(){function e(){this.activeNav=1}return e.prototype.ngOnInit=function(){},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["app-add"]],decls:12,vars:4,consts:[[1,"container"],["ngbNav","",1,"nav-tabs",3,"activeId","activeIdChange"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[1,"mt-2",3,"ngbNavOutlet"]],template:function(e,t){if(1&e&&(o.Qb(0,"div",0),o.Qb(1,"ul",1,2),o.bc("activeIdChange",function(e){return t.activeNav=e}),o.Qb(3,"li",3),o.Qb(4,"a",4),o.Lc(5,"Create"),o.Pb(),o.Jc(6,P,1,0,"ng-template",5),o.Pb(),o.Qb(7,"li",3),o.Qb(8,"a",4),o.Lc(9,"List"),o.Pb(),o.Jc(10,L,2,0,"ng-template",5),o.Pb(),o.Pb(),o.Mb(11,"div",6),o.Pb()),2&e){var i=o.xc(2);o.zb(1),o.mc("activeId",t.activeNav),o.zb(2),o.mc("ngbNavItem",1),o.zb(4),o.mc("ngbNavItem",2),o.zb(4),o.mc("ngbNavOutlet",i)}},directives:[l.n,l.p,l.q,l.o,l.s,v,S],styles:[""]}),e}()}],y=function(){function e(){}return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(t){return new(t||e)},imports:[[c.a,r.d.forChild(Q),n.b,s.b]]}),e}()}}]);