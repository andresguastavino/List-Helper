(this["webpackJsonplist-helper"]=this["webpackJsonplist-helper"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,o){},function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var r=o(2),s=o.n(r),n=o(9),a=o.n(n),i=(o(14),o(3)),l=o(4),c=o(1),u=o(6),d=o(5),b=o(7),h=(o(15),o(0)),m=function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(e){var r;return Object(i.a)(this,o),(r=t.call(this,e)).state={showCustomThemeModal:!1,theme:0,mainColor:"#000",secondaryColor:"#000",borderColor:"#000",textColor:"#000"},r.changeTheme=r.changeTheme.bind(Object(c.a)(r)),r.changeColor=r.changeColor.bind(Object(c.a)(r)),r.onMouseEnter=r.onMouseEnter.bind(Object(c.a)(r)),r.onMouseLeave=r.onMouseLeave.bind(Object(c.a)(r)),r}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var e,t,o,r,s,n,a,i,l,c=document.cookie;if(""!==c){var u,d=Object(b.a)(c.split(";"));try{for(d.s();!(u=d.n()).done;){var h=u.value,m=h.split("=")[0].trim(),p=h.split("=")[1].split(",");"themeProps"===m?(e=p[0],t=p[1],o=p[2],r=p[3],s=p[4]):"customThemeProps"===m&&(n=p[0],a=p[1],i=p[2],l=p[3])}}catch(f){d.e(f)}finally{d.f()}}var j=!1;void 0===e?e=0:2===parseInt(e)&&(j=!0),this.setState({showCustomThemeModal:j}),this.setState({theme:e,showCustomThemeModal:j,mainColor:void 0!==n?n:"#000",secondaryColor:void 0!==a?a:"#000",borderColor:void 0!==i?i:"#fff",textColor:void 0!==l?l:"#fff"});var v={theme:e,mainColor:t,secondaryColor:o,borderColor:r,textColor:s};this.props.setTheme(v);var C,y=Object(b.a)(document.querySelectorAll('input[type="radio"]'));try{for(y.s();!(C=y.n()).done;){var O=C.value;O.value===e&&(O.checked=!0)}}catch(f){y.e(f)}finally{y.f()}}},{key:"changeTheme",value:function(e){var t={},o=!0;if(0===e)t={theme:e,mainColor:"#fff",secondaryColor:"#fff",borderColor:"#000",textColor:"#000"},o=!1;else if(1===e)t={theme:e,mainColor:"#000",secondaryColor:"#201e25",borderColor:"#383434",textColor:"#fff"},o=!1;else{var r=document.querySelectorAll('input[type="color"]');t={theme:e,mainColor:r[0].value,secondaryColor:r[1].value,borderColor:r[2].value,textColor:r[3].value}}this.props.setTheme(t),this.setState({themeProps:t,showCustomThemeModal:o})}},{key:"changeColor",value:function(e){var t=document.querySelector("#"+e).value;switch(document.querySelector("#sp-"+e).style.backgroundColor=t,e){case"main-color":this.setState({mainColor:t});break;case"secondary-color":this.setState({secondaryColor:t});break;case"border-color":this.setState({borderColor:t});break;default:this.setState({textColor:t})}}},{key:"onMouseEnter",value:function(e){var t=this.props.themeProps,o=document.querySelector("."+e);o.style.backgroundColor=t.textColor,o.style.color=t.mainColor}},{key:"onMouseLeave",value:function(e){var t=this.props.themeProps,o=document.querySelector("."+e);o.style.backgroundColor=t.mainColor,o.style.color=t.textColor}},{key:"render",value:function(){var e=this,t=this.props.themeProps,o=this.state,r=o.mainColor,s=o.secondaryColor,n=o.borderColor,a=o.textColor,i=o.showCustomThemeModal,l=t.borderColor,c={backgroundColor:t.mainColor,borderColor:t.borderColor,color:t.textColor},u={backgroundColor:t.borderColor},d={backgroundColor:t.mainColor,borderColor:t.borderColor,color:t.textColor};return Object(h.jsxs)("div",{className:"header",style:c,children:[Object(h.jsx)("div",{className:"text-holder",children:Object(h.jsx)("h1",{children:"List Helper"})}),Object(h.jsx)("div",{className:"vertical-separator",style:u}),Object(h.jsx)("div",{className:"vertical-separator",style:u}),Object(h.jsxs)("div",{className:"theme-group-holder",children:[Object(h.jsx)("div",{className:"input-group-title",children:Object(h.jsx)("p",{children:"Theme"})}),Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("input",{type:"radio",name:"theme",id:"light",value:"0",onClick:function(){return e.changeTheme(0)}}),Object(h.jsx)("label",{htmlFor:"light",children:"Light"})]}),Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("input",{type:"radio",name:"theme",id:"dark",value:"1",onClick:function(){return e.changeTheme(1)}}),Object(h.jsx)("label",{htmlFor:"dark",children:"Dark"})]}),Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("input",{type:"radio",name:"theme",id:"custom",value:"2",onClick:function(){return e.setState({showCustomThemeModal:!0})}}),Object(h.jsx)("label",{htmlFor:"custom",children:"Custom"})]})]}),i?Object(h.jsx)("div",{className:"vertical-separator",style:u}):"",i?Object(h.jsx)("div",{className:"vertical-separator",style:u}):"",i?Object(h.jsxs)("div",{className:"custom-theme-modal",children:[Object(h.jsxs)("div",{className:"color-input-group",children:[Object(h.jsx)("label",{htmlFor:"main-color",children:Object(h.jsx)("span",{className:"color-input",id:"sp-main-color",style:{backgroundColor:r,borderColor:l}})}),Object(h.jsx)("input",{type:"color",id:"main-color",value:r,onChange:function(){return e.changeColor("main-color")}}),Object(h.jsx)("label",{htmlFor:"main-color",children:"Main"})]}),Object(h.jsxs)("div",{className:"color-input-group",children:[Object(h.jsx)("label",{htmlFor:"secondary-color",children:Object(h.jsx)("span",{className:"color-input",id:"sp-secondary-color",style:{backgroundColor:s,borderColor:l}})}),Object(h.jsx)("input",{type:"color",id:"secondary-color",value:s,onChange:function(){return e.changeColor("secondary-color")}}),Object(h.jsx)("label",{htmlFor:"secondary-color",children:"Secondary"})]}),Object(h.jsxs)("div",{className:"color-input-group",children:[Object(h.jsx)("label",{htmlFor:"border-color",children:Object(h.jsx)("span",{className:"color-input",id:"sp-border-color",style:{backgroundColor:n,borderColor:l}})}),Object(h.jsx)("input",{type:"color",id:"border-color",value:n,onChange:function(){return e.changeColor("border-color")}}),Object(h.jsx)("label",{htmlFor:"border-color",children:"Border"})]}),Object(h.jsxs)("div",{className:"color-input-group",children:[Object(h.jsx)("label",{htmlFor:"text-color",children:Object(h.jsx)("span",{className:"color-input",id:"sp-text-color",style:{backgroundColor:a,borderColor:l}})}),Object(h.jsx)("input",{type:"color",id:"text-color",value:a,onChange:function(){return e.changeColor("text-color")}}),Object(h.jsx)("label",{htmlFor:"text-color",children:"Text"})]}),Object(h.jsx)("div",{className:"color-input-group",children:Object(h.jsx)("button",{type:"button",className:"apply-button",style:d,onClick:function(){return e.changeTheme(2)},onMouseEnter:function(){return e.onMouseEnter("apply-button")},onMouseLeave:function(){return e.onMouseLeave("apply-button")},children:"Apply"})})]}):""]})}}]),o}(r.Component),p=(o(17),function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(e){var r;return Object(i.a)(this,o),(r=t.call(this,e)).state={states:[],colors:[],currentState:0,quantity:0},r.changeState=r.changeState.bind(Object(c.a)(r)),r.increase=r.increase.bind(Object(c.a)(r)),r.setStatesAndColors=r.setStatesAndColors.bind(Object(c.a)(r)),r}return Object(l.a)(o,[{key:"componentDidMount",value:function(){this.setStatesAndColors()}},{key:"setStatesAndColors",value:function(){var e=this.props,t=e.type,o=e.value,r=[],s=[],n=0,a=0;switch(t.toLowerCase()){case"daily":r=["Ausent","Here","Spoke"],s=["#a43333","#201e25","#33b033"];break;case"dual-state":r=["Pending","Done"],s=["#201e25","#33b033"];break;case"triple-state":r=["Pending","In progress","Done"],s=["#201e25","#29477a","#33b033"];break;default:s=["#d4942a"]}if("daily"===t.toLowerCase())switch(o){case"Ausent":n=0;break;case"Here":n=1;break;case"Spoke":n=2;break;default:n=-1}else if("dual-state"===t.toLowerCase()||"triple-state"===t.toLowerCase())switch(o){case"Pending":n=0;break;case"In progress":n=1;break;case"Done":n="dual-state"===t.toLowerCase()?1:2;break;default:n=-1}else a=o;this.setState({states:r,colors:s,currentState:n,quantity:a})}},{key:"changeState",value:function(){var e=this.state,t=e.states,o=e.currentState,r=this.props,s=r.name,n=r.type;o=o+1>=t.length?0:o+1,this.setState({currentState:o}),this.props.updateItemValue(s,t[o],n)}},{key:"increase",value:function(e){var t=this.state.quantity,o=this.props,r=o.name,s=o.type;this.setState({quantity:t+e}),this.props.updateItemValue(r,t,s)}},{key:"render",value:function(){var e=this,t=this.props,o=t.name,r=t.type,s=t.themeProps,n=this.state,a=n.states,i=n.colors,l=n.currentState,c=n.quantity,u={borderColor:s.borderColor,backgroundColor:i[l]},d={borderColor:s.borderColor},b={borderColor:s.borderColor},m={borderColor:s.borderColor};return"quantities"!==r.toLowerCase()?Object(h.jsxs)("div",{className:"item",style:u,onClick:this.changeState,children:[Object(h.jsx)("div",{className:"item-nombre",style:d,children:Object(h.jsx)("p",{unselectable:"on",children:o})}),Object(h.jsx)("div",{className:"item-state",children:Object(h.jsx)("p",{unselectable:"on",children:a[l]})})]}):Object(h.jsxs)("div",{className:"item-quantity",style:u,children:[Object(h.jsx)("div",{className:"decrease",style:b,onClick:function(){return e.increase(-100)},children:"<<<"}),Object(h.jsx)("div",{className:"decrease middle-decrease",style:b,onClick:function(){return e.increase(-10)},children:"<<"}),Object(h.jsx)("div",{className:"decrease",style:b,onClick:function(){return e.increase(-1)},children:"<"}),Object(h.jsxs)("div",{className:"item-info",style:m,children:[Object(h.jsx)("div",{className:"item-nombre",style:d,children:Object(h.jsx)("p",{unselectable:"on",children:c})}),Object(h.jsx)("div",{className:"item-state",children:Object(h.jsx)("p",{unselectable:"on",children:o})})]}),Object(h.jsx)("div",{className:"increase",style:b,onClick:function(){return e.increase(1)},children:">"}),Object(h.jsx)("div",{className:"increase middle-increase",style:b,onClick:function(){return e.increase(10)},children:">>"}),Object(h.jsx)("div",{className:"increase",style:b,onClick:function(){return e.increase(100)},children:">>>"})]})}}]),o}(r.Component)),j=(o(18),function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(e){var r;return Object(i.a)(this,o),(r=t.call(this,e)).getItems=r.getItems.bind(Object(c.a)(r)),r.exportAsJson=r.exportAsJson.bind(Object(c.a)(r)),r.onMouseAction=r.onMouseAction.bind(Object(c.a)(r)),r.onEditItems=r.onEditItems.bind(Object(c.a)(r)),r}return Object(l.a)(o,[{key:"getItems",value:function(){var e=this.props.list,t=this.props.themeProps,o=this.props.updateItemValue;if(void 0!==e&&void 0!==e.items){var r,s=[],n=Object(b.a)(e.items);try{for(n.s();!(r=n.n()).done;){var a=r.value;s.push(Object(h.jsx)(p,{name:a.name,value:a.value,type:e.type,themeProps:t,updateItemValue:o},a.key))}}catch(i){n.e(i)}finally{n.f()}return s}}},{key:"exportAsJson",value:function(){var e=this.props.list;console.log(e);var t,o=[],r=Object(b.a)(e.items);try{for(r.s();!(t=r.n()).done;){var s=t.value,n={name:s.name,value:s.value};o.push(n)}}catch(l){r.e(l)}finally{r.f()}e.items=o;var a=JSON.stringify(e),i=document.createElement("textarea");i.value=a,document.body.append(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),alert("List coppied to clipboard as JSON")}},{key:"onMouseAction",value:function(e,t){var o=this.props.themeProps,r=document.querySelector("."+t);"enter"===e?(r.style.backgroundColor=o.textColor,r.style.color=o.mainColor):(r.style.backgroundColor=o.mainColor,r.style.color=o.textColor)}},{key:"onEditItems",value:function(){alert("feature not ready yet!")}},{key:"render",value:function(){var e=this,t=this.props,o=t.themeProps,r=t.list,s={backgroundColor:o.mainColor,borderColor:o.borderColor,color:o.textColor},n={borderColor:o.borderColor,color:o.textColor},a={backgroundColor:o.mainColor,borderColor:o.borderColor,color:o.textColor},i={backgroundColor:o.mainColor,borderColor:o.borderColor,color:o.textColor};return Object(h.jsxs)("div",{className:"items",style:s,children:[Object(h.jsxs)("div",{className:"items-header",style:n,children:[Object(h.jsx)("div",{className:"items-title",children:Object(h.jsx)("p",{children:r.name+" > Items / "+r.type})}),Object(h.jsxs)("div",{className:"items-buttons",children:[Object(h.jsx)("div",{className:"edit-items-button",style:a,onClick:this.onEditItems,onMouseEnter:function(){return e.onMouseAction("enter","edit-items-button")},onMouseLeave:function(){return e.onMouseAction("leave","edit-items-button")},children:Object(h.jsx)("p",{children:"Edit list items"})}),Object(h.jsx)("div",{className:"export-json-button",style:i,onClick:this.exportAsJson,onMouseEnter:function(){return e.onMouseAction("enter","export-json-button")},onMouseLeave:function(){return e.onMouseAction("leave","export-json-button")},children:Object(h.jsx)("p",{children:"Export list as JSON"})})]})]}),Object(h.jsx)("div",{className:"items-list",children:this.getItems()})]})}}]),o}(r.Component)),v=(o(19),function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(e){var r;return Object(i.a)(this,o),(r=t.call(this,e)).deleteList=r.deleteList.bind(Object(c.a)(r)),r.onClick=r.onClick.bind(Object(c.a)(r)),r.onMouseAction=r.onMouseAction.bind(Object(c.a)(r)),r.buildClassName=r.buildClassName.bind(Object(c.a)(r)),r}return Object(l.a)(o,[{key:"onClick",value:function(){this.props.onClickList(this.props.name)}},{key:"deleteList",value:function(){this.props.deleteList(this.props.name)}},{key:"onMouseAction",value:function(e,t){var o=this.buildClassName(!1),r=this.props.themeProps,s=document.querySelectorAll(o)[t];"enter"===e?(s.style.backgroundColor=r.textColor,s.style.color=r.mainColor):(s.style.backgroundColor=r.mainColor,s.style.color=r.textColor)}},{key:"buildClassName",value:function(e){var t,o=this.props.name;for(t=e?o.replace(" ",""):"."+o.replace(" ","");-1!==t.indexOf(" ");)t=t.replace(" ","");return t.toLowerCase()}},{key:"render",value:function(){var e=this,t=this.props,o=t.themeProps,r=t.name,s={backgroundColor:o.mainColor,borderColor:o.borderColor,color:o.textColor},n={backgroundColor:o.mainColor,borderColor:o.borderColor,color:o.textColor},a=this.buildClassName(!0);return Object(h.jsxs)("div",{className:"lista",style:s,children:[Object(h.jsx)("div",{className:"button "+a,style:n,onClick:this.onClick,onMouseEnter:function(){return e.onMouseAction("enter",0)},onMouseLeave:function(){return e.onMouseAction("leave",0)},children:Object(h.jsx)("p",{unselectable:"on",children:r})}),Object(h.jsx)("div",{className:"button "+a,style:n,onClick:this.deleteList,onMouseEnter:function(){return e.onMouseAction("enter",1)},onMouseLeave:function(){return e.onMouseAction("leave",1)},children:Object(h.jsx)("p",{children:"(-)"})})]})}}]),o}(r.Component)),C=(o(20),function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(e){var r;return Object(i.a)(this,o),(r=t.call(this,e)).listLists=r.listLists.bind(Object(c.a)(r)),r.onMouseEnter=r.onMouseEnter.bind(Object(c.a)(r)),r.onMouseLeave=r.onMouseLeave.bind(Object(c.a)(r)),r}return Object(l.a)(o,[{key:"listLists",value:function(){var e=[];if(0!==this.props.lists.length){var t,o=Object(b.a)(this.props.lists);try{for(o.s();!(t=o.n()).done;){var r=t.value;e.push(Object(h.jsx)(v,{name:r.name,onClickList:this.props.onClickList,deleteList:this.props.deleteList,themeProps:this.props.themeProps},r.name))}}catch(s){o.e(s)}finally{o.f()}}return 0!==e.length?e:Object(h.jsx)("div",{className:"no-lists",children:Object(h.jsx)("p",{children:"There are no lists to show"})})}},{key:"onMouseEnter",value:function(){var e=document.querySelector(".nueva-lista"),t=this.props.themeProps;e.style.backgroundColor=t.textColor,e.style.color=t.mainColor}},{key:"onMouseLeave",value:function(){var e=document.querySelector(".nueva-lista"),t=this.props.themeProps;e.style.backgroundColor=t.mainColor,e.style.color=t.textColor}},{key:"render",value:function(){var e=this.props.themeProps,t={backgroundColor:e.mainColor,borderColor:e.borderColor,color:e.textColor},o={borderColor:e.borderColor,color:e.textColor},r={backgroundColor:e.mainColor,borderColor:e.borderColor,color:e.textColor};return Object(h.jsxs)("div",{className:"listas",style:t,children:[Object(h.jsx)("div",{className:"listas-header",style:o,children:Object(h.jsx)("p",{children:"Lists"})}),Object(h.jsx)("div",{className:"listado-listas",children:this.listLists()}),Object(h.jsx)("div",{className:"nueva-lista",style:r,onClick:this.props.newList,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,children:Object(h.jsx)("p",{children:"(+) New List"})})]})}}]),o}(r.Component)),y=function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"new-item",children:Object(h.jsx)("input",{type:"text"})})}}]),o}(r.Component),O=(o(21),function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(e){var r;return Object(i.a)(this,o),(r=t.call(this,e)).state={itemInputsAddRate:5,itemInputs:[]},r.createLista=r.createLista.bind(Object(c.a)(r)),r.createItemsInputs=r.createItemsInputs.bind(Object(c.a)(r)),r.addItemInput=r.addItemInput.bind(Object(c.a)(r)),r.onMouseEnter=r.onMouseEnter.bind(Object(c.a)(r)),r.onMouseLeave=r.onMouseLeave.bind(Object(c.a)(r)),r.importFromJSON=r.importFromJSON.bind(Object(c.a)(r)),r.overrideExistingList=r.overrideExistingList.bind(Object(c.a)(r)),r}return Object(l.a)(o,[{key:"componentDidMount",value:function(){this.createItemsInputs()}},{key:"createLista",value:function(){var e=document.querySelector("#nombre").value.trim();if(void 0!==e&&""!==e){var t=e.charAt(0);if(t>=0&&t<=9)alert("The first character of the name can't be a number");else{var o=document.querySelector("#type").value.trim(),r="";if(""!==o){"daily"===o.toLowerCase()?r="Ausent":"quantities"===o.toLowerCase()?r=0:"dual-state"!==o.toLowerCase()&&"triple-state"!==o.toLowerCase()||(r="Pending");var s,n=document.querySelectorAll(".new-item input"),a=[],i=Object(b.a)(n);try{for(i.s();!(s=i.n()).done;){var l=s.value;""!==l.value&&a.push({name:l.value.trim(),value:r})}}catch(d){i.e(d)}finally{i.f()}if(0!==a.length){var c=this.overrideExistingList(e);if(void 0!==c){if(!c)return}else c=!1;var u={name:e,type:o,items:a};this.props.createList(u,c)}else alert("Can't create a list with no items")}else alert("You must select a list type")}}else alert("Name can't be empty")}},{key:"overrideExistingList",value:function(e){var t,o,r=document.cookie,s=Object(b.a)(r.split(";"));try{for(s.s();!(o=s.n()).done;){o.value.split("=")[0].trim()===e&&(t=window.confirm("There is already a list with the same name.\nDo you want to override it's type and items?"))}}catch(n){s.e(n)}finally{s.f()}return t}},{key:"createItemsInputs",value:function(){for(var e=[],t=this.state.itemInputsAddRate,o=1;o<t+1;o++)e.push(Object(h.jsx)(y,{},o));this.setState({itemInputs:e})}},{key:"addItemInput",value:function(){for(var e=this.state.itemInputs,t=this.state.itemInputsAddRate,o=e.length,r=1;r<t+1;r++)e.push(Object(h.jsx)(y,{},o+r));this.setState({itemInputs:e})}},{key:"onMouseEnter",value:function(e){var t=this.props.themeProps,o=document.querySelector("."+e);o.style.backgroundColor=t.textColor,o.style.color=t.mainColor}},{key:"onMouseLeave",value:function(e){var t=this.props.themeProps,o=document.querySelector("."+e);o.style.backgroundColor=t.mainColor,o.style.color=t.textColor}},{key:"importFromJSON",value:function(){var e,t=document.querySelector("textarea#import-json").value;try{e=JSON.parse(t)}catch(r){return void alert('An unexpected error ocurred\nError detail:\n"'+String(r)+'"')}var o=this.overrideExistingList(e.name);if(void 0!==o){if(!o)return}else o=!1;this.props.createList(e,o)}},{key:"render",value:function(){var e=this,t=this.props,o=t.themeProps,r=t.cancelNewList,s=this.state.itemInputs,n={backgroundColor:o.mainColor,borderColor:o.borderColor,color:o.textColor},a={borderColor:o.borderColor,color:o.textColor},i={backgroundColor:o.mainColor,borderColor:o.borderColor,color:o.textColor},l={borderColor:o.borderColor};return Object(h.jsxs)("div",{className:"new-lista",style:n,children:[Object(h.jsx)("div",{className:"new-lista-header",style:a,children:Object(h.jsx)("p",{children:"New List"})}),Object(h.jsxs)("div",{className:"new-lista-form",children:[Object(h.jsxs)("div",{className:"label-input",children:[Object(h.jsx)("div",{className:"label",children:Object(h.jsx)("label",{htmlFor:"nombre",children:"Name"})}),Object(h.jsx)("div",{className:"input",children:Object(h.jsx)("input",{type:"text",id:"nombre",name:"nombre"})})]}),Object(h.jsxs)("div",{className:"label-input",children:[Object(h.jsx)("div",{className:"label",children:Object(h.jsx)("label",{htmlFor:"type",children:"Type"})}),Object(h.jsx)("div",{className:"input",children:Object(h.jsxs)("select",{name:"type",id:"type",children:[Object(h.jsx)("option",{value:"",children:"--- Select Type ---"}),Object(h.jsx)("option",{value:"Daily",children:"Daily (Ausent, Here, Spoke)"}),Object(h.jsx)("option",{value:"Dual-State",children:"Dual state list (Pending, Done)"}),Object(h.jsx)("option",{value:"Triple-State",children:"Triple state list (Pending, Current, Done)"}),Object(h.jsx)("option",{value:"Quantities",children:"Quantities (Item and quantity)"})]})})]}),Object(h.jsxs)("div",{className:"label-input",children:[Object(h.jsx)("div",{className:"label",children:Object(h.jsx)("p",{children:"Items"})}),Object(h.jsx)("div",{className:"input",children:s})]}),Object(h.jsxs)("div",{className:"label-input",children:[Object(h.jsx)("div",{className:"label"}),Object(h.jsx)("div",{className:"input",children:Object(h.jsx)("button",{style:i,className:"button-add-inputs",onClick:this.addItemInput,onMouseEnter:function(){return e.onMouseEnter("button-add-inputs")},onMouseLeave:function(){return e.onMouseLeave("button-add-inputs")},children:"(+) Item"})})]}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",className:"button-cancel",style:i,onClick:r,onMouseEnter:function(){return e.onMouseEnter("button-cancel")},onMouseLeave:function(){return e.onMouseLeave("button-cancel")},children:"Cancel"}),Object(h.jsx)("button",{type:"button",className:"button-add",style:i,onClick:this.createLista,onMouseEnter:function(){return e.onMouseEnter("button-add")},onMouseLeave:function(){return e.onMouseLeave("button-add")},children:"Add new list"})]}),Object(h.jsx)("div",{className:"horizontalSeparator",style:l}),Object(h.jsxs)("div",{className:"label-input",children:[Object(h.jsx)("div",{className:"label",children:Object(h.jsx)("label",{htmlFor:"import-json",children:"JSON"})}),Object(h.jsx)("div",{className:"input",children:Object(h.jsx)("textarea",{resizable:"true",id:"import-json",rows:"5",cols:"40"})})]}),Object(h.jsx)("div",{className:"buttons",children:Object(h.jsx)("button",{type:"button",className:"button-import",style:i,onClick:this.importFromJSON,onMouseEnter:function(){return e.onMouseEnter("button-import")},onMouseLeave:function(){return e.onMouseLeave("button-import")},children:"Import from JSON"})})]})]})}}]),o}(r.Component)),f=(o(22),function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(e){var r;return Object(i.a)(this,o),(r=t.call(this,e)).state={lists:[],currentList:{},showNewListComponent:!1,key:0},r.onClickList=r.onClickList.bind(Object(c.a)(r)),r.newList=r.newList.bind(Object(c.a)(r)),r.cancelNewList=r.cancelNewList.bind(Object(c.a)(r)),r.createList=r.createList.bind(Object(c.a)(r)),r.deleteList=r.deleteList.bind(Object(c.a)(r)),r.setLists=r.setLists.bind(Object(c.a)(r)),r.updateCookies=r.updateCookies.bind(Object(c.a)(r)),r.updateItemValue=r.updateItemValue.bind(Object(c.a)(r)),r}return Object(l.a)(o,[{key:"componentDidMount",value:function(){this.setLists()}},{key:"setLists",value:function(){var e=document.cookie,t=0;if(""!==e){var o,r=[],s=Object(b.a)(e.split(";"));try{for(s.s();!(o=s.n()).done;){var n=o.value,a=n.split("=")[0].trim();if("themeProps"!==a&&"customThemeProps"!==a){var i=n.split("=")[1].split(","),l=i[0];i.shift();var c,u=i,d=[],h=Object(b.a)(u);try{for(h.s();!(c=h.n()).done;){var m=c.value,p=void 0;p="daily"===l.toLowerCase()?{name:m.split(":")[0].trim(),value:"Ausent",key:t}:{name:m.split(":")[0].trim(),value:m.split(":")[1].trim(),key:t},t++,d.push(p)}}catch(j){h.e(j)}finally{h.f()}u=d,r.push({name:a,type:l,items:u})}}}catch(j){s.e(j)}finally{s.f()}this.setState({lists:r,key:t})}}},{key:"newList",value:function(){this.updateCookies(this.state.currentList),this.setState({showNewListComponent:!0})}},{key:"cancelNewList",value:function(){this.setState({showNewListComponent:!1})}},{key:"createList",value:function(e,t){var o,r=this.state,s=r.lists,n=r.key,a=Object(b.a)(e.items);try{for(a.s();!(o=a.n()).done;){o.value.key=n++}}catch(u){a.e(u)}finally{a.f()}if(t){var i,l=Object(b.a)(s);try{for(l.s();!(i=l.n()).done;){var c=i.value;c.name===e.name&&(c.type=e.type,c.items=e.items)}}catch(u){l.e(u)}finally{l.f()}}else s.push(e);this.setState((function(t){return{lists:s,currentList:e,showNewListComponent:!1,key:n}})),this.updateCookies(e)}},{key:"updateCookies",value:function(e){if(console.log(e),void 0!==e&&void 0!==e.name){for(var t=e.name+"="+e.type+",",o=0;o<e.items.length;o++){var r=e.items[o];"daily"===e.type.toLowerCase()?t+=r.name:t+=r.name+":"+r.value,o!==e.items.length-1?t+=",":t+=";"}console.log(t),t+="Path=/;Expires=Thu, 01 Jan "+((new Date).getFullYear()+1)+" 00:00:00 GMT;",console.log(t),console.log(document.cookie),document.cookie=t,console.log(document.cookie)}}},{key:"updateItemValue",value:function(e,t,o){var r,s=this.state,n=s.lists,a=s.currentList,i=Object(b.a)(n);try{for(i.s();!(r=i.n()).done;){var l=r.value;if(l.name===a.name){var c,u=Object(b.a)(l.items);try{for(u.s();!(c=u.n()).done;){var d=c.value;d.name===e&&(d.value=t)}}catch(h){u.e(h)}finally{u.f()}}}}catch(h){i.e(h)}finally{i.f()}this.setState({lists:n,currentList:a}),"daily"!==o.toLowerCase()&&this.updateCookies(a)}},{key:"onClickList",value:function(e){this.setState({currentList:{}});var t={};void 0!==this.state.currentList&&void 0!==this.state.currentList.name&&"daily"!==this.state.currentList.type.toLowerCase()&&this.updateCookies(this.state.currentList);var o,r=Object(b.a)(this.state.lists);try{for(r.s();!(o=r.n()).done;){var s=o.value;s.name===e&&(t=s)}}catch(n){r.e(n)}finally{r.f()}this.setState({currentList:t,showNewListComponent:!1})}},{key:"deleteList",value:function(e){var t,o=this.state.lists,r=this.state.currentList;void 0!==r&&e===r.name&&this.setState({currentList:{}});var s,n=Object(b.a)(o);try{for(n.s();!(s=n.n()).done;){var a=s.value;a.name===e&&(t=o.indexOf(a))}}catch(l){n.e(l)}finally{n.f()}var i=o[t];document.cookie=i.name+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",o.splice(t,1),this.setState({lists:o})}},{key:"render",value:function(){var e=this.props.themeProps,t=this.state,o=t.lists,r=t.currentList,s=t.showNewListComponent;return Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)(C,{lists:o,onClickList:this.onClickList,newList:this.newList,deleteList:this.deleteList,themeProps:e}),s?Object(h.jsx)(O,{cancelNewList:this.cancelNewList,createList:this.createList,themeProps:e}):void 0!==r.name?Object(h.jsx)(j,{list:r,themeProps:e,updateItemValue:this.updateItemValue}):""]})}}]),o}(r.Component)),x=(o(23),function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var e=this.props.themeProps,t={backgroundColor:e.mainColor,borderColor:e.borderColor},o={color:e.textColor};return Object(h.jsxs)("div",{className:"footer",style:t,children:[Object(h.jsx)("div",{className:"bug-report",children:Object(h.jsx)("a",{style:o,href:"mailto:list.helper.bug.report@gmail.com",children:"Report bug"})}),Object(h.jsx)("div",{className:"contact",children:Object(h.jsx)("a",{style:o,href:"mailto:list.helper.dev.contact@gmail.com",children:"Contact"})})]})}}]),o}(r.Component)),k=(o(24),function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(e){var r;return Object(i.a)(this,o),(r=t.call(this,e)).state={theme:0,mainColor:"",secondaryColor:"",borderColor:"",textColor:""},r.setTheme=r.setTheme.bind(Object(c.a)(r)),r}return Object(l.a)(o,[{key:"setTheme",value:function(e){var t,o,r,s,n;void 0===e?(t=0,o="#000",r="#fff",s="#383434",n="#fff"):(t=e.theme,o=e.mainColor,r=e.secondaryColor,s=e.borderColor,n=e.textColor),this.setState({theme:t,mainColor:o,secondaryColor:r,borderColor:s,textColor:n}),document.cookie="themeProps="+t+","+o+","+r+","+s+","+n+"; Path=/; Expires=Thu, 01 Jan 2022 00:00:01 GMT;",2===t&&(document.cookie="customThemeProps="+o+","+r+","+s+","+n+"; Path=/; Expires=Thu, 01 Jan 2022 00:00:01 GMT;")}},{key:"render",value:function(){var e=this.state,t=e.theme,o=e.mainColor,r=e.secondaryColor,s={backgroundColor:r},n={theme:t,mainColor:o,secondaryColor:r,borderColor:e.borderColor,textColor:e.textColor};return window.screen.width<720||window.innerWidth<720?(console.log("window screen width: "+window.screen.width),console.log("window innerWidth: "+window.innerWidth),Object(h.jsx)("div",{className:"app",style:s,children:Object(h.jsx)("h1",{children:"Sorry, we don't have support for this screen resolution yet. Try on a device with a width resolution greater than 720px."})})):Object(h.jsxs)("div",{className:"app",style:s,children:[Object(h.jsx)(m,{setTheme:this.setTheme,themeProps:n}),Object(h.jsx)(f,{themeProps:n}),Object(h.jsx)(x,{themeProps:n})]})}}]),o}(r.Component)),L=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,26)).then((function(t){var o=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;o(e),r(e),s(e),n(e),a(e)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),L()}],[[25,1,2]]]);
//# sourceMappingURL=main.dc1b6e26.chunk.js.map