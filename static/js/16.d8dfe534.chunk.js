(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{495:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},498:function(e,a,t){"use strict";var n=t(18),l=t(48),r=t(2),c=t.n(r),o=t(61),s=t.n(o),i=t(492),u=t.n(i),m=t(493),p={tag:m.p,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool},d=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,o=e.tag,s=e.form,i=Object(l.a)(e,["className","cssModule","noGutters","tag","form"]),p=Object(m.l)(u()(a,r?"no-gutters":null,s?"form-row":"row"),t);return c.a.createElement(o,Object(n.a)({},i,{className:p}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},499:function(e,a,t){"use strict";var n=t(18),l=t(48),r=t(495),c=t.n(r),o=t(2),s=t.n(o),i=t(61),u=t.n(i),m=t(492),p=t.n(m),d=t(493),f=u.a.oneOfType([u.a.number,u.a.string]),g=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:f,offset:f})]),b={tag:d.p,xs:g,sm:g,md:g,lg:g,xl:g,className:u.a.string,cssModule:u.a.object,widths:u.a.array},E={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,o=e.tag,i=Object(l.a)(e,["className","cssModule","widths","tag"]),u=[];r.forEach((function(a,n){var l=e[a];if(delete i[a],l||""===l){var r=!n;if(c()(l)){var o,s=r?"-":"-"+a+"-",m=v(r,a,l.size);u.push(Object(d.l)(p()(((o={})[m]=l.size||""===l.size,o["order"+s+l.order]=l.order||0===l.order,o["offset"+s+l.offset]=l.offset||0===l.offset,o)),t))}else{var f=v(r,a,l);u.push(f)}}})),u.length||u.push("col");var m=Object(d.l)(p()(a,u),t);return s.a.createElement(o,Object(n.a)({},i,{className:m}))};h.propTypes=b,h.defaultProps=E,a.a=h},502:function(e,a,t){"use strict";var n=t(18),l=t(48),r=t(2),c=t.n(r),o=t(61),s=t.n(o),i=t(492),u=t.n(i),m=t(493),p={tag:m.p,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},d=function(e){var a=e.className,t=e.cssModule,r=e.color,o=e.body,s=e.inverse,i=e.outline,p=e.tag,d=e.innerRef,f=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(m.l)(u()(a,"card",!!s&&"text-white",!!o&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return c.a.createElement(p,Object(n.a)({},f,{className:g,ref:d}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},503:function(e,a,t){"use strict";var n=t(18),l=t(48),r=t(2),c=t.n(r),o=t(61),s=t.n(o),i=t(492),u=t.n(i),m=t(493),p={tag:m.p,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},d=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,o=e.tag,s=Object(l.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.l)(u()(a,"card-body"),t);return c.a.createElement(o,Object(n.a)({},s,{className:i,ref:r}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},504:function(e,a,t){"use strict";var n=t(18),l=t(48),r=t(2),c=t.n(r),o=t(61),s=t.n(o),i=t(492),u=t.n(i),m=t(493),p={tag:m.p,className:s.a.string,cssModule:s.a.object},d=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(l.a)(e,["className","cssModule","tag"]),s=Object(m.l)(u()(a,"card-header"),t);return c.a.createElement(r,Object(n.a)({},o,{className:s}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},513:function(e,a,t){"use strict";function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(a){var t=this.constructor.getDerivedStateFromProps(e,a);return null!==t&&void 0!==t?t:null}.bind(this))}function r(e,a){try{var t=this.props,n=this.state;this.props=e,this.state=a,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,n)}finally{this.props=t,this.state=n}}function c(e){var a=e.prototype;if(!a||!a.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate)return e;var t=null,c=null,o=null;if("function"===typeof a.componentWillMount?t="componentWillMount":"function"===typeof a.UNSAFE_componentWillMount&&(t="UNSAFE_componentWillMount"),"function"===typeof a.componentWillReceiveProps?c="componentWillReceiveProps":"function"===typeof a.UNSAFE_componentWillReceiveProps&&(c="UNSAFE_componentWillReceiveProps"),"function"===typeof a.componentWillUpdate?o="componentWillUpdate":"function"===typeof a.UNSAFE_componentWillUpdate&&(o="UNSAFE_componentWillUpdate"),null!==t||null!==c||null!==o){var s=e.displayName||e.name,i="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+s+" uses "+i+" but also contains the following legacy lifecycles:"+(null!==t?"\n  "+t:"")+(null!==c?"\n  "+c:"")+(null!==o?"\n  "+o:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(a.componentWillMount=n,a.componentWillReceiveProps=l),"function"===typeof a.getSnapshotBeforeUpdate){if("function"!==typeof a.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");a.componentWillUpdate=r;var u=a.componentDidUpdate;a.componentDidUpdate=function(e,a,t){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:t;u.call(this,e,a,n)}}return e}t.r(a),t.d(a,"polyfill",(function(){return c})),n.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0},514:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(2),l=t.n(n).a.createContext({})},561:function(e,a,t){"use strict";var n=t(18),l=t(36),r=t(2),c=t.n(r),o=t(513),s=t(61),i=t.n(s),u=t(492),m=t.n(u),p=t(514),d=t(493),f={tag:d.p,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(l.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.tag,r=Object(d.m)(this.props,Object.keys(f)),o=Object(d.l)(m()("tab-content",a),t);return c.a.createElement(p.a.Provider,{value:{activeTabId:this.state.activeTab}},c.a.createElement(l,Object(n.a)({},r,{className:o})))},a}(r.Component);Object(o.polyfill)(g),a.a=g,g.propTypes=f,g.defaultProps={tag:"div"}},562:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t(18),l=t(48),r=t(2),c=t.n(r),o=t(61),s=t.n(o),i=t(492),u=t.n(i),m=t(514),p=t(493),d={tag:p.p,className:s.a.string,cssModule:s.a.object,tabId:s.a.any};function f(e){var a=e.className,t=e.cssModule,r=e.tabId,o=e.tag,s=Object(l.a)(e,["className","cssModule","tabId","tag"]),i=function(e){return Object(p.l)(u()("tab-pane",a,{active:r===e}),t)};return c.a.createElement(m.a.Consumer,null,(function(e){var a=e.activeTabId;return c.a.createElement(o,Object(n.a)({},s,{className:i(a)}))}))}f.propTypes=d,f.defaultProps={tag:"div"}},594:function(e,a,t){"use strict";var n=t(18),l=t(48),r=t(2),c=t.n(r),o=t(61),s=t.n(o),i=t(492),u=t.n(i),m=t(493),p={tag:m.p,flush:s.a.bool,className:s.a.string,cssModule:s.a.object},d=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=e.flush,s=Object(l.a)(e,["className","cssModule","tag","flush"]),i=Object(m.l)(u()(a,"list-group",!!o&&"list-group-flush"),t);return c.a.createElement(r,Object(n.a)({},s,{className:i}))};d.propTypes=p,d.defaultProps={tag:"ul"},a.a=d},595:function(e,a,t){"use strict";var n=t(18),l=t(48),r=t(2),c=t.n(r),o=t(61),s=t.n(o),i=t(492),u=t.n(i),m=t(493),p={tag:m.p,active:s.a.bool,disabled:s.a.bool,color:s.a.string,action:s.a.bool,className:s.a.any,cssModule:s.a.object},d=function(e){e.preventDefault()},f=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=e.active,s=e.disabled,i=e.action,p=e.color,f=Object(l.a)(e,["className","cssModule","tag","active","disabled","action","color"]),g=Object(m.l)(u()(a,!!o&&"active",!!s&&"disabled",!!i&&"list-group-item-action",!!p&&"list-group-item-"+p,"list-group-item"),t);return s&&(f.onClick=d),c.a.createElement(r,Object(n.a)({},f,{className:g}))};f.propTypes=p,f.defaultProps={tag:"li"},a.a=f},754:function(e,a,t){"use strict";t.r(a);var n=t(148),l=t(149),r=t(151),c=t(150),o=t(153),s=t(152),i=t(2),u=t.n(i),m=t(498),p=t(499),d=t(502),f=t(504),g=t(503),b=t(594),E=t(595),v=t(707),h=t(18),j=t(48),y=t(61),N=t.n(y),M=t(492),O=t.n(M),T=t(493),x={tag:T.p,className:N.a.any,cssModule:N.a.object},P=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(j.a)(e,["className","cssModule","tag"]),r=Object(T.l)(O()(a,"list-group-item-heading"),t);return u.a.createElement(n,Object(h.a)({},l,{className:r}))};P.propTypes=x,P.defaultProps={tag:"h5"};var D=P,S={tag:T.p,className:N.a.any,cssModule:N.a.object},w=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(j.a)(e,["className","cssModule","tag"]),r=Object(T.l)(O()(a,"list-group-item-text"),t);return u.a.createElement(n,Object(h.a)({},l,{className:r}))};w.propTypes=S,w.defaultProps={tag:"p"};var U=w,C=t(561),_=t(562),q=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).toggle=t.toggle.bind(Object(o.a)(t)),t.state={activeTab:1},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(m.a,null,u.a.createElement(p.a,{sm:"12",xl:"6"},u.a.createElement(d.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/listgroup/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(g.a,null,u.a.createElement(b.a,null,u.a.createElement(E.a,null,"Cras justo odio"),u.a.createElement(E.a,null,"Dapibus ac facilisis in"),u.a.createElement(E.a,null,"Morbi leo risus"),u.a.createElement(E.a,null,"Porta ac consectetur ac"),u.a.createElement(E.a,null,"Vestibulum at eros"))))),u.a.createElement(p.a,{sm:"12",xl:"6"},u.a.createElement(d.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group"),u.a.createElement("small",null," tags")),u.a.createElement(g.a,null,u.a.createElement(b.a,null,u.a.createElement(E.a,{className:"justify-content-between"},"Cras justo odio ",u.a.createElement(v.a,{className:"float-right",pill:!0},"14")),u.a.createElement(E.a,{className:"justify-content-between"},"Dapibus ac facilisis in ",u.a.createElement(v.a,{className:"float-right",pill:!0},"2")),u.a.createElement(E.a,{className:"justify-content-between"},"Morbi leo risus ",u.a.createElement(v.a,{className:"float-right",pill:!0,color:"warning"},"1"))))))),u.a.createElement(m.a,null,u.a.createElement(p.a,{sm:"12",xl:"6"},u.a.createElement(d.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group"),u.a.createElement("small",null," disabled items")),u.a.createElement(g.a,null,u.a.createElement(b.a,null,u.a.createElement(E.a,{disabled:!0,tag:"a",href:"#"},"Cras justo odio"),u.a.createElement(E.a,{tag:"a",href:"#"},"Dapibus ac facilisis in"),u.a.createElement(E.a,{disabled:!0,tag:"a",href:"#"},"Morbi leo risus"),u.a.createElement(E.a,{tag:"a",href:"#"},"Porta ac consectetur ac"),u.a.createElement(E.a,{tag:"a",href:"#"},"Vestibulum at eros"))))),u.a.createElement(p.a,{sm:"12",xl:"6"},u.a.createElement(d.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group"),u.a.createElement("small",null," contextual classes")),u.a.createElement(g.a,null,u.a.createElement(b.a,null,u.a.createElement(E.a,{action:!0,color:"success"},"Cras justo odio"),u.a.createElement(E.a,{action:!0,color:"info"},"Dapibus ac facilisis in"),u.a.createElement(E.a,{action:!0,color:"warning"},"Morbi leo risus"),u.a.createElement(E.a,{action:!0,color:"danger"},"Porta ac consectetur ac")))))),u.a.createElement(m.a,null,u.a.createElement(p.a,{sm:"12",xl:"6"},u.a.createElement(d.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group"),u.a.createElement("small",null," anchors")),u.a.createElement(g.a,null,u.a.createElement("p",null,"Be sure to ",u.a.createElement("strong",null,"not use the standard ",u.a.createElement("code",null,".btn")," classes here"),"."),u.a.createElement(b.a,null,u.a.createElement(E.a,{active:!0,tag:"a",href:"#",action:!0},"Cras justo odio"),u.a.createElement(E.a,{tag:"a",href:"#",action:!0},"Dapibus ac facilisis in"),u.a.createElement(E.a,{tag:"a",href:"#",action:!0},"Morbi leo risus"),u.a.createElement(E.a,{tag:"a",href:"#",action:!0},"Porta ac consectetur ac"),u.a.createElement(E.a,{disabled:!0,tag:"a",href:"#",action:!0},"Vestibulum at eros")),u.a.createElement("p",null)))),u.a.createElement(p.a,{sm:"12",xl:"6"},u.a.createElement(d.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group"),u.a.createElement("small",null," buttons")),u.a.createElement(g.a,null,u.a.createElement(b.a,null,u.a.createElement(E.a,{active:!0,tag:"button",action:!0},"Cras justo odio"),u.a.createElement(E.a,{tag:"button",action:!0},"Dapibus ac facilisis in"),u.a.createElement(E.a,{tag:"button",action:!0},"Morbi leo risus"),u.a.createElement(E.a,{tag:"button",action:!0},"Porta ac consectetur ac"),u.a.createElement(E.a,{disabled:!0,tag:"button",action:!0},"Vestibulum at eros")))))),u.a.createElement(m.a,null,u.a.createElement(p.a,{sm:"12",xl:"6"},u.a.createElement(d.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group"),u.a.createElement("small",null," custom content")),u.a.createElement(g.a,null,u.a.createElement(b.a,null,u.a.createElement(E.a,{active:!0,action:!0},u.a.createElement(D,null,"List group item heading"),u.a.createElement(U,null,"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")),u.a.createElement(E.a,{action:!0},u.a.createElement(D,null,"List group item heading"),u.a.createElement(U,null,"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")),u.a.createElement(E.a,{action:!0},u.a.createElement(D,null,"List group item heading"),u.a.createElement(U,null,"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."))))))),u.a.createElement(m.a,null,u.a.createElement(p.a,null,u.a.createElement(d.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group")," ",u.a.createElement("small",null,"with TabPanes"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement(v.a,null,"NEW"))),u.a.createElement(g.a,null,u.a.createElement(m.a,null,u.a.createElement(p.a,{xs:"4"},u.a.createElement(b.a,{id:"list-tab",role:"tablist"},u.a.createElement(E.a,{onClick:function(){return e.toggle(0)},action:!0,active:0===this.state.activeTab},"Home"),u.a.createElement(E.a,{onClick:function(){return e.toggle(1)},action:!0,active:1===this.state.activeTab},"Profile"),u.a.createElement(E.a,{onClick:function(){return e.toggle(2)},action:!0,active:2===this.state.activeTab},"Messages"),u.a.createElement(E.a,{onClick:function(){return e.toggle(3)},action:!0,active:3===this.state.activeTab},"Settings"))),u.a.createElement(p.a,{xs:"8"},u.a.createElement(C.a,{activeTab:this.state.activeTab},u.a.createElement(_.a,{tabId:0},u.a.createElement("p",null,"Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.")),u.a.createElement(_.a,{tabId:1},u.a.createElement("p",null,"Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.")),u.a.createElement(_.a,{tabId:2},u.a.createElement("p",null,"Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla laborum elit adipisicing pariatur cillum.")),u.a.createElement(_.a,{tabId:3},u.a.createElement("p",null,"Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor eiusmod eu pariatur culpa mollit in irure."))))))))))}}]),a}(i.Component);a.default=q}}]);
//# sourceMappingURL=16.d8dfe534.chunk.js.map