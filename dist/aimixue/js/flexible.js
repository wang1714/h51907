!function(i,e){var t,a=i.document,r=a.documentElement,n=a.querySelector('meta[name="viewport"]'),o=a.querySelector('meta[name="flexible"]'),l=0,m=0,s=e.flexible||(e.flexible={});if(n){console.warn("将根据已有的meta标签来设置缩放比例");var d=n.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(m=parseFloat(d[1]),l=parseInt(1/m))}else if(o){var p=o.getAttribute("content");if(p){var c=p.match(/initial\-dpr=([\d\.]+)/),u=p.match(/maximum\-dpr=([\d\.]+)/);c&&(l=parseFloat(c[1]),m=parseFloat((1/l).toFixed(2))),u&&(l=parseFloat(u[1]),m=parseFloat((1/l).toFixed(2)))}}if(!l&&!m){i.navigator.appVersion.match(/android/gi);var f=i.navigator.appVersion.match(/iphone/gi),v=i.devicePixelRatio;m=1/(l=f?3<=v&&(!l||3<=l)?3:2<=v&&(!l||2<=l)?2:1:1)}if(r.setAttribute("data-dpr",l),!n)if((n=a.createElement("meta")).setAttribute("name","viewport"),n.setAttribute("content","initial-scale="+m+", maximum-scale="+m+", minimum-scale="+m+", user-scalable=no"),r.firstElementChild)r.firstElementChild.appendChild(n);else{var h=a.createElement("div");h.appendChild(n),a.write(h.innerHTML)}function x(){var e=r.getBoundingClientRect().width;640<e/l&&(e=640*l);var t=e/6.4;r.style.fontSize=t+"px",s.rem=i.rem=t}i.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(x,300)},!1),i.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(t),t=setTimeout(x,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*l+"px":a.addEventListener("DOMContentLoaded",function(e){a.body.style.fontSize=12*l+"px"},!1),x(),s.dpr=i.dpr=l,s.refreshRem=x,s.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},s.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}));