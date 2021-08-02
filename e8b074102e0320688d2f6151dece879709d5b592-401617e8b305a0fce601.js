"use strict";(self.webpackChunkvacaciones_cody=self.webpackChunkvacaciones_cody||[]).push([[822],{1496:function(e,t,r){var n=r(5318);t.Z=void 0;var a,i=n(r(1506)),o=n(r(5354)),s=n(r(7316)),d=n(r(7154)),l=n(r(7294)),u=n(r(5697)),c=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,d.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,r=e.fixed,n=g(t||r||[]);return n&&n.src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),v=function(e){var t=f(e),r=h(t);return m[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,S=b&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),r&&l.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function x(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function C(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function L(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function R(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),E.set(e,t)),function(){r.unobserve(e),E.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+o+s+r+n+t+i+a+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=l.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(z,(0,d.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?l.default.createElement("picture",null,a(n),s):s})),z=l.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,f=e.loading,p=e.draggable,h=e.ariaHidden,g=(0,s.default)(e,c);return l.default.createElement("img",(0,d.default)({"aria-hidden":h,sizes:r,srcSet:n,src:a},g,{onLoad:o,onError:u,ref:t,loading:f,draggable:p,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));z.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var O=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&v(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&S&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:v(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=v(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),(r=h(t))&&(m[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,c=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,S=e.itemProp,E=e.loading,x=e.draggable,R=h||m;if(!R)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,d.default)({opacity:k?1:0,transition:O?"opacity "+y+"ms":"none"},s),T="boolean"==typeof v?"lightgray":v,H={transitionDelay:y+"ms"},M=(0,d.default)({opacity:this.state.imgLoaded?0:1},O&&H,s,c),B={title:t,alt:this.state.isVisible?"":r,style:M,className:p,itemProp:S},U=this.state.isHydrated?g(R):R[0];if(h)return l.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:U.maxWidth?U.maxWidth+"px":null,maxHeight:U.maxHeight?U.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(U.srcSet)},l.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/U.aspectRatio+"%"}}),T&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&H)}),U.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:U.base64,spreadProps:B,imageVariants:R,generateSources:L}),U.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:U.tracedSVG,spreadProps:B,imageVariants:R,generateSources:C}),this.state.isVisible&&l.default.createElement("picture",null,w(R),l.default.createElement(z,{alt:r,title:t,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:r,title:t,loading:E},U,{imageVariants:R}))}}));if(m){var W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:U.width,height:U.height},i);return"inherit"===i.display&&delete W.display,l.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(U.srcSet)},T&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,width:U.width,opacity:this.state.imgLoaded?0:1,height:U.height},O&&H)}),U.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:U.base64,spreadProps:B,imageVariants:R,generateSources:L}),U.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:U.tracedSVG,spreadProps:B,imageVariants:R,generateSources:C}),this.state.isVisible&&l.default.createElement("picture",null,w(R),l.default.createElement(z,{alt:r,title:t,width:U.width,height:U.height,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:r,title:t,loading:E},U,{imageVariants:R}))}}))}return null},t}(l.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),T=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function H(e){return function(t,r,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");u.default.checkPropTypes(((a={})[r]=e,a),t,"prop",n)}}O.propTypes={resolutions:P,sizes:T,fixed:H(u.default.oneOfType([P,u.default.arrayOf(P)])),fluid:H(u.default.oneOfType([T,u.default.arrayOf(T)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var M=O;t.Z=M},5986:function(e,t,r){r.d(t,{Z:function(){return D}});var n=r(7294),a=r(7724),i=r(8894),o=r(9056),s=r(1793),d=r(8375),l=r(1951),u=r(9867),c=r(6764),f=r(2394),p=r(1854),h=r(8519);function g(){var e=(0,f.B)(1),t={lead:void 0,follow:void 0,crossfadeOpacity:!1,preserveFollowOpacity:!1},r=(0,a.pi)({},t),n={},i={},o=!1,l=null,u=0;function g(r,n){var i=t.lead,d=t.follow;o=!0,l=null;var u=!1,c=function(){u=!0,i&&i.scheduleRender(),d&&d.scheduleRender()},g=function(){o=!1,l=(0,s.$B)().timestamp};return n=n&&(0,h.ev)(n,"crossfade"),function(e,t,r){void 0===r&&(r={});var n=(0,p.i)(e)?e:(0,f.B)(e);return(0,h.b8)("",n,t,r),{stop:function(){return n.stop()}}}(e,r,(0,a.pi)((0,a.pi)({},n),{onUpdate:c,onComplete:function(){u?g():(e.set(r),s.ZP.read(g)),c()}}))}function y(){var r,a,o=(0,s.$B)().timestamp,l=t.lead,f=t.follow;if(o!==u&&l){u=o;var p=l.getLatestValues();Object.assign(n,p);var h=f?f.getLatestValues():t.prevValues;Object.assign(i,h);var g=e.get(),y=null!==(r=p.opacity)&&void 0!==r?r:1,w=null!==(a=null==h?void 0:h.opacity)&&void 0!==a?a:1;t.crossfadeOpacity&&f?(n.opacity=(0,d.C)(!1!==f.isVisible?0:w,y,m(g)),i.opacity=t.preserveFollowOpacity?w:(0,d.C)(w,0,v(g))):f||(n.opacity=(0,d.C)(w,y,g)),function(e,t,r,n,a,i){for(var o=0;o<S;o++){var s="border"+b[o]+"Radius",l=E(n,s),u=E(r,s);if((void 0!==l||void 0!==u)&&(l||(l=0),u||(u=0),"number"==typeof l&&"number"==typeof u)){var f=Math.max((0,d.C)(l,u,i),0);e[s]=t[s]=f}}if(n.rotate||r.rotate){var p=(0,d.C)(n.rotate||0,r.rotate||0,i);e.rotate=t.rotate=p}!a&&r.backgroundColor&&n.backgroundColor&&(e.backgroundColor=t.backgroundColor=(0,c.R)(n.backgroundColor,r.backgroundColor)(i))}(n,i,p,h||{},Boolean(f),g)}}return{isActive:function(){return n&&(o||(0,s.$B)().timestamp===l)},fromLead:function(e){return g(0,e)},toLead:function(n){var a=0;return t.prevValues||t.follow?r.lead===t.follow&&r.follow===t.lead&&(a=1-e.get()):a=1,e.set(a),g(1,n)},reset:function(){return e.set(1)},stop:function(){return e.stop()},getCrossfadeState:function(e){return y(),e===t.lead?n:e===t.follow?i:void 0},setOptions:function(e){r=t,t=e,n={},i={}},getLatestValues:function(){return n}}}var m=y(0,.5,l.Bn),v=y(.5,.95,l.GE);function y(e,t,r){return function(n){return n<e?0:n>t?1:r((0,u.Y)(e,t,n))}}var b=["TopLeft","TopRight","BottomLeft","BottomRight"],S=b.length;function E(e,t){var r;return null!==(r=e[t])&&void 0!==r?r:e.borderRadius}function w(){var e,t,r,n=new Set,s={leadIsExiting:!1},d=(0,a.pi)({},s),l=g(),u=!1;return{add:function(e){e.setCrossfader(l),n.add(e),r&&(e.prevDragCursor=r),s.lead||(s.lead=e)},remove:function(e){n.delete(e)},getLead:function(){return s.lead},updateSnapshot:function(){if(s.lead){e=l.isActive()?l.getLatestValues():s.lead.getLatestValues(),t=s.lead.prevViewportBox;var n=o.o.get(s.lead);n&&n.isDragging&&(r=n.cursorProgress)}},clearSnapshot:function(){r=t=void 0},updateLeadAndFollow:function(){var t,r,o;d=(0,a.pi)({},s);for(var c=Array.from(n),f=c.length;f--;f>=0){var p=c[f];if(r&&(null!=o||(o=p)),null!=r||(r=p),r&&o)break}s.lead=r,s.follow=o,s.leadIsExiting=(null===(t=s.lead)||void 0===t?void 0:t.presence)===i.z.Exiting,l.setOptions({lead:r,follow:o,prevValues:e,crossfadeOpacity:(null==o?void 0:o.isPresenceRoot)||(null==r?void 0:r.isPresenceRoot)}),s.lead===d.follow||d.lead===s.lead&&d.leadIsExiting===s.leadIsExiting||(u=!0)},animate:function(e,r){var n;if(void 0===r&&(r=!1),e===s.lead){r?e.pointTo(s.lead):e.setVisibility(!0);var a={},o=null===(n=s.follow)||void 0===n?void 0:n.getProjectionParent();if(o&&(a.prevParent=o),e.presence===i.z.Entering?a.originBox=s.follow?s.follow.prevViewportBox:t:e.presence===i.z.Exiting&&(a.targetBox=function(){var e;return null===(e=s.follow)||void 0===e?void 0:e.getLayoutState().layout}()),u){u=!1;var d=e.getDefaultTransition();e.presence===i.z.Entering?l.toLead(d):l.fromLead(d)}e.notifyLayoutReady(a)}else r?s.lead&&e.pointTo(s.lead):e.setVisibility(!1)}}}var x=r(4709),C=r(3750),L=r(1999);var R=r(9724),k=r(5302),I=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.children=new Set,t.stacks=new Map,t.hasMounted=!1,t.updateScheduled=!1,t.renderScheduled=!1,t.syncContext=(0,a.pi)((0,a.pi)({},(0,R.V)()),{syncUpdate:function(e){return t.scheduleUpdate(e)},forceUpdate:function(){t.syncContext=(0,a.pi)({},t.syncContext),t.scheduleUpdate(!0)},register:function(e){return t.addChild(e)},remove:function(e){return t.removeChild(e)}}),t}return(0,a.ZT)(t,e),t.prototype.componentDidMount=function(){this.hasMounted=!0},t.prototype.componentDidUpdate=function(){this.startLayoutAnimation()},t.prototype.shouldComponentUpdate=function(){return this.renderScheduled=!0,!0},t.prototype.startLayoutAnimation=function(){var e=this;this.renderScheduled=this.updateScheduled=!1;var t=this.props.type;this.children.forEach((function(e){e.isPresent?e.presence!==i.z.Entering&&(e.presence=e.presence===i.z.Exiting?i.z.Entering:i.z.Present):e.presence=i.z.Exiting})),this.updateStacks();var r={layoutReady:function(r){void 0!==r.getLayoutId()?e.getStack(r).animate(r,"crossfade"===t):r.notifyLayoutReady()},parent:this.context.visualElement};this.children.forEach((function(t){return e.syncContext.add(t)})),this.syncContext.flush(r),this.stacks.forEach((function(e){return e.clearSnapshot()}))},t.prototype.updateStacks=function(){this.stacks.forEach((function(e){return e.updateLeadAndFollow()}))},t.prototype.scheduleUpdate=function(e){void 0===e&&(e=!1),!e&&this.updateScheduled||(this.updateScheduled=!0,this.children.forEach((function(e){!function(e){for(var t=!1,r={},n=0;n<L.r$.length;n++){var a="rotate"+L.r$[n];e.hasValue(a)&&0!==e.getStaticValue(a)&&(t=!0,r[a]=e.getStaticValue(a),e.setStaticValue(a,0))}if(t){for(var a in e.syncRender(),r)e.setStaticValue(a,r[a]);e.scheduleRender()}}(e),e.shouldResetTransform()&&e.resetTransform()})),this.children.forEach(k.x7),this.stacks.forEach((function(e){return e.updateSnapshot()})),!e&&this.renderScheduled||(this.renderScheduled=!0,this.forceUpdate()))},t.prototype.addChild=function(e){this.children.add(e),this.addToStack(e),e.presence=this.hasMounted?i.z.Entering:i.z.Present},t.prototype.removeChild=function(e){this.scheduleUpdate(),this.children.delete(e),this.removeFromStack(e)},t.prototype.addToStack=function(e){var t=this.getStack(e);null==t||t.add(e)},t.prototype.removeFromStack=function(e){var t=this.getStack(e);null==t||t.remove(e)},t.prototype.getStack=function(e){var t=e.getLayoutId();if(void 0!==t)return!this.stacks.has(t)&&this.stacks.set(t,w()),this.stacks.get(t)},t.prototype.render=function(){return n.createElement(x.WH.Provider,{value:this.syncContext},this.props.children)},t.contextType=C.v,t}(n.Component),V=r(9922);var z=r(2267),O=r(9179),P=0;function T(){var e=P;return P++,e}var H=function(e){var t=e.children,r=e.initial,a=e.isPresent,i=e.onExitComplete,o=e.custom,s=e.presenceAffectsLayout,d=(0,O.h)(M),l=(0,O.h)(T),u=(0,n.useMemo)((function(){return{id:l,initial:r,isPresent:a,custom:o,onExitComplete:function(e){d.set(e,!0);var t=!0;d.forEach((function(e){e||(t=!1)})),t&&(null==i||i())},register:function(e){return d.set(e,!1),function(){return d.delete(e)}}}}),s?void 0:[a]);return(0,n.useMemo)((function(){d.forEach((function(e,t){return d.set(t,!1)}))}),[a]),n.useEffect((function(){!a&&!d.size&&(null==i||i())}),[a]),n.createElement(z.O.Provider,{value:u},t)};function M(){return new Map}function B(e){return e.key||""}var U=function(e){var t=e.children,r=e.custom,i=e.initial,o=void 0===i||i,s=e.onExitComplete,d=e.exitBeforeEnter,l=e.presenceAffectsLayout,u=void 0===l||l,c=function(){var e=(0,n.useRef)(!1),t=(0,a.CR)((0,n.useState)(0),2),r=t[0],i=t[1];return(0,V.z)((function(){return e.current=!0})),(0,n.useCallback)((function(){!e.current&&i(r+1)}),[r])}(),f=(0,n.useContext)(x.WH);(0,x.Md)(f)&&(c=f.forceUpdate);var p=(0,n.useRef)(!0),h=function(e){var t=[];return n.Children.forEach(e,(function(e){(0,n.isValidElement)(e)&&t.push(e)})),t}(t),g=(0,n.useRef)(h),m=(0,n.useRef)(new Map).current,v=(0,n.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var r=B(e);t.set(r,e)}))}(h,m),p.current)return p.current=!1,n.createElement(n.Fragment,null,h.map((function(e){return n.createElement(H,{key:B(e),isPresent:!0,initial:!!o&&void 0,presenceAffectsLayout:u},e)})));for(var y=(0,a.ev)([],(0,a.CR)(h)),b=g.current.map(B),S=h.map(B),E=b.length,w=0;w<E;w++){var C=b[w];-1===S.indexOf(C)?v.add(C):v.delete(C)}return d&&v.size&&(y=[]),v.forEach((function(e){if(-1===S.indexOf(e)){var t=m.get(e);if(t){var a=b.indexOf(e);y.splice(a,0,n.createElement(H,{key:B(t),isPresent:!1,onExitComplete:function(){m.delete(e),v.delete(e);var t=g.current.findIndex((function(t){return t.key===e}));g.current.splice(t,1),v.size||(g.current=h,c(),s&&s())},custom:r,presenceAffectsLayout:u},t))}}})),y=y.map((function(e){var t=e.key;return v.has(t)?e:n.createElement(H,{key:B(e),isPresent:!0,presenceAffectsLayout:u},e)})),g.current=y,n.createElement(n.Fragment,null,v.size?y:y.map((function(e){return(0,n.cloneElement)(e)})))},W=r(7097),j=r(9692),A=(0,j.ZP)(W.E.div).withConfig({displayName:"style__Container",componentId:"sc-1xeo1nw-0"})(["max-width:1000px;position:fixed;height:100vh;top:0;bottom:0;left:0;right:0;margin:auto;z-index:1;"]),N=r(5444),F=r(1496),Z=r(5916),q=(0,j.ZP)(F.Z).withConfig({displayName:"style__Img",componentId:"sc-1wvc7e5-0"})(["cursor:pointer;transition:",";&:hover{opacity:calc("," - 0.2);}"],Z.Z.transitions.global,Z.Z.opacity.global),_=function(e){return n.createElement(N.i1,{query:"1955692501",render:function(t){var r=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return r?n.createElement(q,{alt:e.alt,fluid:r.node.childImageSharp.fluid}):null}})},G=r(5378),D=function(e){var t=e.items,r=(0,n.useState)(null),a=r[0],i=r[1];return n.createElement(I,{type:"crossfade"},t.map((function(e){return n.createElement(W.E.div,{layoutId:e.id,onClick:function(){return i(e.id)}},n.createElement(_,{filename:e.filename,alt:e.alt}))})),n.createElement(U,null,a&&n.createElement(A,{onClick:function(){return i(null)},layoutId:a},n.createElement(G.Z,null,n.createElement(_,{filename:t.find((function(e){return e.id===a})).filename,alt:t.find((function(e){return e.id===a})).alt})))))}}}]);
//# sourceMappingURL=e8b074102e0320688d2f6151dece879709d5b592-401617e8b305a0fce601.js.map