// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","dojox/gfx","dojo/_base/lang"],function(m,d,k,l){function e(b){var a=b.colors;b=b.hasStops;var c=a.length,h=b?1/c:1/(c-1),g=[];if(Array.isArray(a)&&a[0]&&"offset"in a[0]&&"color"in a[0])return a;for(var d=0,f=0;f<c;f++){var e=a[c-1-f];g.push({offset:f*h,color:e});b&&(d=(f+1)*h,g.push({offset:d,color:e}))}return g}d.createColorRamp=function(b){var a=b.node,c=b.width,d=b.height;b=e(b);a=k.createSurface(a,c,d);c=l.mixin(a.getDimensions(),{x:0,y:0});return a.createRect(c).setFill({type:"linear",
x1:0,y1:0,x2:0,y2:d,colors:b})};d.updateColorRamp=function(b){var a=b.ramp,c=a.getFill();c.colors=e(b);a.setFill(c);return a}});