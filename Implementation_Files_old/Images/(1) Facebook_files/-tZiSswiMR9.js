/*!CK:773613086!*//*1448995720,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8c2RR"]); }

__d('ChatContentSearchResult.react',['Image.react','ReactComponentWithPureRenderMixin','React','cx'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=j.PropTypes,m=274,n=137,o=j.createClass({displayName:'ChatContentSearchResult',mixins:[i],propTypes:{isWide:l.bool.isRequired,onClick:l.func.isRequired,result:l.object.isRequired,src:l.string.isRequired},statics:{isWide:function(p){var q=p.media.preview;return q.width>q.height*1.2;},getScaledDimensions:function(p,q){var r=p.media.preview,s=r.height,t=r.width,u=(q?m:n)/t;s*=u;t*=u;return {height:s,width:t};}},render:function(){var p=o.getScaledDimensions(this.props.result,this.props.isWide);return (j.createElement(h,{className:"_358"+(this.props.isWide?' '+"_26n6":''),onClick:this._handleClick,src:this.props.src,style:p}));},_handleClick:function(p){p.stopPropagation();this.props.onClick(this.props.result);}});f.exports=o;},null);