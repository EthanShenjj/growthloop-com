# How it works

Deep mode: what the site's JavaScript is made of and what its start page did while we watched.

## Its JavaScript

Analysed 31 script(s) from https://www.growthloop.com/: 26 module(s), 76 endpoint(s), 8 route(s), bundled with tsc.

Evidence ev_a03dd85c7b93ec52a49e03e4a6e7547a9d42533dbcc5d4fb453d1f2a914824cc.

```json
{
  "api_operations": [],
  "app_kind": "unknown",
  "bundlers": [
    "tsc"
  ],
  "edges": [
    {
      "from": "event:js.hsforms.net/forms/v2.js#Oe.getWindow():pageshow",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#Oe.getWindow().addEventListener(pageshow)@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#T.port1:message",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#x@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#_:popstate",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#_.onpopstate@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#a:readystatechange",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#i@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#e.current:input",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#e.current.addEventListener(input)@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#e.document:DOMContentLoaded",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#t@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#e.signal:abort",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#m@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#e:click",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#ma@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#e:onAnalyticEvent",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#e.on(onAnalyticEvent)@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#e:onFormError",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#e.on(onFormError)@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#e:onFormReady",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#e.on(onFormReady)@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#e:onRenderError",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#e.on(onRenderError)@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#e:onRenderError",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#i@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#e:unhandledrejection",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#n@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#i:error",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#b@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#i:error",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#e@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#r:ce",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#h@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#r:click",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#ma@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#r:error",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#n@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#r:load",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#r.onload@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#s:load",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#s.onload@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#t:click",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#ma@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#t:error",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#t.onerror@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#t:readystatechange",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#t.onreadystatechange@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#window:DOMContentLoaded",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#window.addEventListener(DOMContentLoaded)@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#window:message",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#window.addEventListener(message)@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#y:abort",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#y.onabort@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#y:error",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#y.onerror@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#y:loadend",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#S@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#y:readystatechange",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#y.onreadystatechange@2"
    },
    {
      "from": "event:js.hsforms.net/forms/v2.js#y:timeout",
      "kind": "handled-by",
      "to": "fn:js.hsforms.net/forms/v2.js#y.ontimeout@2"
    },
    {
      "from": "event:snap.licdn.com/li.lms-analytics/insight.min.js#o:readystatechange",
      "kind": "handled-by",
      "to": "fn:snap.licdn.com/li.lms-analytics/insight.min.js#o.onreadystatechange@3"
    },
    {
      "from": "event:snap.licdn.com/li.lms-analytics/insight.min.js#u:error",
      "kind": "handled-by",
      "to": "fn:snap.licdn.com/li.lms-analytics/insight.min.js#u.onerror@3"
    },
    {
      "from": "event:snap.licdn.com/li.lms-analytics/insight.min.js#u:load",
      "kind": "handled-by",
      "to": "fn:snap.licdn.com/li.lms-analytics/insight.min.js#u.onload@3"
    },
    {
      "from": "event:www.googletagmanager.com/gtm.js#A:securitypolicyviolation",
      "kind": "handled-by",
      "to": "fn:www.googletagmanager.com/gtm.js#A.addEventListener(securitypolicyviolation)@808"
    },
    {
      "from": "event:www.googletagmanager.com/gtm.js#b:updatefound",
      "kind": "handled-by",
      "to": "fn:www.googletagmanager.com/gtm.js#b.addEventListener(updatefound)@668"
    },
    {
      "from": "event:www.googletagmanager.com/gtm.js#c.m:error",
      "kind": "handled-by",
      "to": "fn:www.googletagmanager.com/gtm.js#c.m.onerror@225"
    },
    {
      "from": "event:www.googletagmanager.com/gtm.js#c.m:error",
      "kind": "handled-by",
      "to": "fn:www.googletagmanager.com/gtm.js#p@921"
    },
    {
      "from": "event:www.googletagmanager.com/gtm.js#d.contentWindow:load",
      "kind": "handled-by",
      "to": "fn:www.googletagmanager.com/gtm.js#d.contentWindow.addEventListener(load)@955"
    },
    {
      "from": "event:www.googletagmanager.com/gtm.js#d.contentWindow:message",
      "kind": "handled-by",
      "to": "fn:www.googletagmanager.com/gtm.js#d.contentWindow.addEventListener(message)@955"
    },
    {
      "from": "event:www.googletagmanager.com/gtm.js#d:statechange",
      "kind": "handled-by",
      "to": "fn:www.googletagmanager.com/gtm.js#d.addEventListener(statechange)@667"
    },
    {
      "from": "event:www.googletagmanager.com/gtm.js#e:error",
      "kind": "handled-by",
      "to": "fn:www.googletagmanager.com/gtm.js#e.onerror@288"
    },
    {
      "from": "event:www.googletagmanager.com/gtm.js#e:load",
      "kind": "handled-by",
      "to": "fn:www.googletagmanager.com/gtm.js#e.addEventListener(load)@954"
    },
    {
      "from": "event:www.googletagmanager.com/gtm.js#e:load",
      "kind": "handled-by",
      "to": "fn:www.googletagmanager.com/gtm.js#e.onload@288"
    },
    {
      "from": "event:www.googletagmanager.com/gtm.js#f:error",
      "kind": "handled-by",
      "to": "fn:www.googletagmanager.com/gtm.js#c@223"
    },
    {
      "from": "event:www.googletagmanager.com/gtm.js#f:load",
      "kind": "handled-by",
      "to": "fn:www.googletagmanager.com/gtm.js#b@230"
    },
    {
      "from": "event:www.googletagmanager.com/gtm.js#g:load",
      "kind": "handled-by",
      "to": "fn:www.googletagmanager.com/gtm.js#b@230"
    },
    {
      "from": "event:www.googletagmanager.com/gtm.js#g:load",
      "kind": "handled-by",
      "to": "fn:www.googletagmanager.com/gtm.js#f@212"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/342e825c0c8504b4.js#window:resize",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/342e825c0c8504b4.js#e@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5620bb1d7debd949.js#o:ce",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5620bb1d7debd949.js#y@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5d6a83780775f2d0.js#h:scroll",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5d6a83780775f2d0.js#t@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5d6a83780775f2d0.js#r:change",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5d6a83780775f2d0.js#iT@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#S:focusin",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#e@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#S:focusout",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#n@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#S:focusout",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#t@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#a:focusin",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#e@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#a:focusout",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#e@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#document:keydown",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#e@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#e:keydown",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#n@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#e:pointerdown",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#t@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#e:scroll",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#t@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#f:compositionend",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#u@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#f:compositionstart",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#s@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#f:touchend",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#q@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#o:focusout",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#t@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#o:pointerdown",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#e@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#o:resize",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#d@12"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#t:keydown",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#e@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#t:pointerdown",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#e@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#w:openchange",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#n@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#window:storage",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/5fa8a04c1f91afac.js#window.addEventListener(storage)@12"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#document:pointerdown",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#document.addEventListener(pointerdown)@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#e.Y:audioprocess",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#e.Y.onaudioprocess@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#e.event:destroy",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#n.destroy@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#e:mounted",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#t@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#e:move",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#t@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#i:readystatechange",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#i.onreadystatechange@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#n:change",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#t@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#n:load",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#n.onload@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#n:move",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#n.on(move)@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#o.Y:audioprocess",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#o.Y.onaudioprocess@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#r:error",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#n@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#r:load",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#r.onload@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#t:mousedown",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#_@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#t:mousemove",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#_@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#t:mouseout",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#_@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#t:mouseover",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#_@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#t:mouseup",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#_@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#t:touchend",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#_@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#t:touchmove",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#_@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#t:touchstart",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#_@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#window:resize",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#e@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#window:scroll",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/70ed5799f9dce017.js#W@3"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/85da677ef52f7a86.js#e:abort",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/85da677ef52f7a86.js#e.addEventListener(abort)@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/85da677ef52f7a86.js#u:abort",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/85da677ef52f7a86.js#a@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/85da677ef52f7a86.js#window:pagehide",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/85da677ef52f7a86.js#window.addEventListener(pagehide)@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/85da677ef52f7a86.js#window:pageshow",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/85da677ef52f7a86.js#window.addEventListener(pageshow)@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/9afabf96a8e72b94.js#e:error",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/9afabf96a8e72b94.js#e.onerror@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/9afabf96a8e72b94.js#e:load",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/9afabf96a8e72b94.js#e.onload@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/9afabf96a8e72b94.js#e:readystatechange",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/9afabf96a8e72b94.js#e.onreadystatechange@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/9f6a4cca1495c9a3.js#a:loadingdone",
      "kind": "handled-by",
      "to": "fn:www.growthloop.com/_next/static/chunks/9f6a4cca1495c9a3.js#this._split@1"
    },
    {
      "from": "event:www.growthloop.com/_next/static/chunks/a95c
```

## Ten seconds of it

Watched https://www.growthloop.com/ for 10000ms: 31 request outline(s), 5 console entr(y/ies).

Evidence ev_efdd15e080d66ce80e2354f6264b05b8b9610f585d0a61bab6f1131d5269ac18.

```json
{
  "accessibility": null,
  "console": {
    "count": 5,
    "entries": [
      {
        "level": "log",
        "source": "console-api"
      },
      {
        "level": "log",
        "source": "console-api"
      },
      {
        "level": "log",
        "source": "console-api"
      },
      {
        "level": "log",
        "source": "console-api"
      },
      {
        "level": "log",
        "source": "console-api"
      }
    ],
    "has_text": false
  },
  "dom": {
    "attribute_names": [
      "accept-charset",
      "action",
      "alt",
      "aria-atomic",
      "aria-busy",
      "aria-controls",
      "aria-hidden",
      "aria-label",
      "aria-live",
      "aria-roledescription",
      "aria-selected",
      "as",
      "async",
      "autocomplete",
      "charset",
      "class",
      "clip-rule",
      "content",
      "crossorigin",
      "d",
      "data-ads-env",
      "data-ads-portal-id",
      "data-base-ui-focusable",
      "data-base-ui-portal",
      "data-closed",
      "data-cookieconsent",
      "data-form-id",
      "data-hs-cf-bound",
      "data-hs-forms-root",
      "data-hs-ignore",
      "data-hsjs-env",
      "data-hsjs-hublet",
      "data-hsjs-portal",
      "data-hubspot-rendered",
      "data-hubspot-styled-components",
      "data-instance-id",
      "data-leadin-env",
      "data-leadin-portal-id",
      "data-lenis-prevent",
      "data-list-block",
      "data-loader",
      "data-nimg",
      "data-nosnippet",
      "data-nscript",
      "data-open",
      "data-portal-id",
      "data-precedence",
      "data-settings",
      "data-svg-origin",
      "data-test-id",
      "data-theme",
      "data-type",
      "decoding",
      "defer",
      "dir",
      "draggable",
      "enctype",
      "fetchpriority",
      "fill",
      "fill-rule",
      "filter",
      "focusable",
      "for",
      "gradientunits",
      "height",
      "hidden",
      "href",
      "id",
      "imagesizes",
      "imagesrcset",
      "inputmode",
      "label",
      "lang",
      "loading",
      "method",
      "name",
      "nomodule",
      "novalidate",
      "offset",
      "owner",
      "placeholder",
      "property",
      "r",
      "rel",
      "required",
      "role",
      "rx",
      "sizes",
      "src",
      "srcset",
      "stop-color",
      "stop-opacity",
      "stroke",
      "stroke-opacity",
      "stroke-width",
      "style",
      "tabindex",
      "target",
      "text",
      "title",
      "transform",
      "type",
      "value",
      "viewbox",
      "width",
      "x",
      "x1",
      "x2",
      "xmlns",
      "y",
      "y1",
      "y2"
    ],
    "elements_by_name": {
      "a": 227,
      "b": 14,
      "body": 3,
      "button": 75,
      "circle": 18,
      "defs": 2,
      "div": 773,
      "figcaption": 14,
      "figure": 14,
      "footer": 1,
      "form": 1,
      "g": 9,
      "h1": 1,
      "h2": 10,
      "h3": 9,
      "h4": 27,
      "h5": 3,
      "head": 3,
      "html": 3,
      "iframe": 2,
      "img": 416,
      "input": 3,
      "label": 1,
      "li": 75,
      "lineargradient": 2,
      "link": 86,
      "main": 1,
      "meta": 25,
      "nav": 1,
      "next-route-announcer": 1,
      "noscript": 1,
      "p": 146,
      "path": 287,
      "picture": 139,
      "rect": 11,
      "script": 69,
      "section": 19,
      "span": 528,
      "stop": 4,
      "style": 2,
      "svg": 269,
      "title": 1,
      "ul": 15
    },
    "text_nodes": 518,
    "total_nodes": 3840,
    "truncated": false
  },
  "dropped_events": 0,
  "frame_origins": [
    "about:blank",
    "https://www.growthloop.com"
  ],
  "network": {
    "request_count": 31,
    "requests": [
      {
        "initiator": "script",
        "method": "GET",
        "mime_type": "text/javascript",
        "response_headers": {
          "credentials_present": [],
          "kept": {
            "access-control-allow-credentials": {
              "value_length": 5
            },
            "access-control-allow-headers": {
              "value_length": 682
            },
            "access-control-allow-methods": {
              "value_length": 16
            },
            "access-control-allow-origin": {
              "value_length": 1
            },
            "access-control-expose-headers": {
              "value_length": 85
            },
            "access-control-max-age": {
              "value_length": 6
            },
            "cache-control": "max-age=300, public",
            "cf-cache-status": {
              "value_length": 11
            },
            "cf-ray": {
              "value_length": 20
            },
            "content-encoding": "gzip",
            "content-type": "text/javascript; charset=UTF-8",
            "date": {
              "value_length": 29
            },
            "etag": {
              "value_length": 34
            },
            "expires": {
              "value_length": 29
            },
            "last-modified": {
              "value_length": 29
            },
            "server": {
              "value_length": 10
            },
            "server-timing": {
              "value_length": 45
            },
            "timing-allow-origin": {
              "value_length": 1
            },
            "vary": {
              "value_length": 15
            },
            "x-amz-id-2": {
              "value_length": 76
            },
            "x-amz-request-id": {
              "value_length": 16
            },
            "x-amz-server-side-encryption": {
              "value_length": 6
            },
            "x-amz-version-id": {
              "value_length": 32
            }
          }
        },
        "status": 200,
        "type": "Script",
        "url": "https://js.hs-banner.com/v2/44079772/banner.js"
      },
      {
        "initiator": "script",
        "method": "GET",
        "mime_type": "text/javascript",
        "response_headers": {
          "credentials_present": [],
          "kept": {
            "access-control-allow-credentials": {
              "value_length": 5
            },
            "cache-control": "max-age=300, public",
            "cf-cache-status": {
              "value_length": 4
            },
            "cf-ray": {
              "value_length": 20
            },
            "content-encoding": "gzip",
            "content-type": "text/javascript",
            "date": {
              "value_length": 29
            },
            "etag": {
              "value_length": 36
            },
            "expires": {
              "value_length": 29
            },
            "last-modified": {
              "value_length": 29
            },
            "server": {
              "value_length": 10
            },
            "server-timing": {
              "value_length": 45
            },
            "vary": {
              "value_length": 23
            },
            "x-amz-id-2": {
              "value_length": 96
            },
            "x-amz-request-id": {
              "value_length": 16
            },
            "x-amz-server-side-encryption": {
              "value_length": 6
            },
            "x-amz-version-id": {
              "value_length": 4
            }
          }
        },
        "status": 200,
        "type": "Script",
        "url": "https://js.hs-analytics.net/analytics/1794234000000/44079772.js"
      },
      {
        "initiator": "script",
        "method": "GET",
        "mime_type": "application/javascript",
        "response_headers": {
          "credentials_present": [],
          "kept": {
            "age": {
              "value_length": 3
            },
            "cache-control": "max-age=600",
            "cache-tag": {
              "value_length": 63
            },
            "cf-cache-status": {
              "value_length": 3
            },
            "cf-ray": {
              "value_length": 20
            },
            "content-encoding": "gzip",
            "content-security-policy-report-only": "frame-ancestors 'self'; report-uri https://send.hsbrowserreports.com/csp/report?resource=adsscriptloaderstatic/static-1.3445/bundles/pixels-release.js&cfRay=a56660c8783faad8-KIX",
            "content-type": "application/javascript; charset=utf-8",
            "date": {
              "value_length": 29
            },
            "etag": {
              "value_length": 36
            },
            "last-modified": {
              "value_length": 29
            },
            "server": {
              "value_length": 10
            },
            "server-timing": {
              "value_length": 45
            },
            "vary": {
              "value_length": 15
            },
            "via": {
              "value_length": 64
            },
            "x-amz-cf-id": {
              "value_length": 56
            },
            "x-amz-cf-pop": {
              "value_length": 8
            },
            "x-amz-replication-status": {
              "value_length": 9
            },
            "x-amz-server-side-encryption": {
              "value_length": 6
            },
            "x-amz-version-id": {
              "value_length": 32
            },
            "x-cache": {
              "value_length": 19
            },
            "x-content-type-options": "nosniff",
            "x-hs-cache-status": {
              "value_length": 3
            },
            "x-hs-target-asset": {
              "value_length": 61
            }
          }
        },
        "status": 200,
        "type": "Script",
        "url": "https://js.hsadspixel.net/pixels.js"
      },
      {
        "initiator": "script",
        "method": "GET",
        "mime_type": "application/javascript",
        "response_headers": {
          "credentials_present": [],
          "kept": {
            "access-control-allow-methods": {
              "value_length": 3
            },
            "access-control-allow-origin": {
              "value_length": 1
            },
            "access-control-max-age": {
              "value_length": 4
            },
            "age": {
              "value_length": 3
            },
            "cache-control": "s-maxage=600, max-age=300",
            "cache-tag": {
              "value_length": 62
            },
            "cf-cache-status": {
              "value_length": 3
            },
            "cf-ray": {
              "value_length": 20
            },
            "content-encoding": "gzip",
            "content-security-policy-report-only": "frame-ancestors 'self'; report-uri https://send.hsbrowserreports.com/csp/report?resource=collected-forms-embed-js/static-1.5278/bundles/project.js&cfRay=a55b3dcb0fda4789-IAD",
            "content-type": "application/javascript; charset=utf-8",
            "date": {
              "value_length": 29
            },
            "etag": {
              "value_length": 36
            },
            "last-modified": {
              "value_length": 29
            },
            "server": {
              "value_length": 10
            },
            "server-timing": {
              "value_length": 45
            },
            "vary": {
              "value_length": 83
            },
            "via": {
              "value_length": 64
            },
            "x-amz-cf-id": {
              "value_length": 56
            },
            "x-amz-cf-pop": {
              "value_length": 8
            },
            "x-amz-replication-status": {
              "value_length": 9
            },
            "x-amz-server-side-encryption": {
              "value_length": 6
            },
            "x-amz-version-id": {
              "value_length": 32
            },
            "x-cache": {
              "value_length": 20
            },
            "x-content-type-options": "nosniff",
            "x-hs-cache-status": {
              "value_length": 4
            },
            "x-hs-target-asset": {
              "value_length": 57
            }
          }
        },
        "status": 200,
        "type": "Script",
        "url": "https://js.hscollectedforms.net/collectedforms.js"
      },
      {
        "initiator": "parser",
        "method": "GET",
        "mime_type": "application/javascript",
        "response_headers": {
          "credentials_present": [],
          "kept": {
            "content-length": "36122",
            "content-type": "application/javascript",
            "date": {
              "value_length": 29
            },
            "nel": {
              "value_length": 115
            },
            "report-to": {
              "value_length": 208
            },
            "reporting-endpoints": {
              "value_length": 149
            },
            "server": {
              "value_length": 6
            },
            "via": {
              "value_length": 17
            }
          }
        },
        "status": 200,
        "type": "Script",
        "url": "https://api.knock2.ai/install/growthloop_com/"
      },
      {
        "initiator": "script",
        "method": "GET",
        "mime_type": "application/json",
        "response_headers": {
          "credentials_present": [],
          "kept": {
            "access-control-allow-headers": {
              "value_length": 1
            },
            "access-control-allow-methods": {
              "value_length": 44
            },
            "access-control-allow-origin": {
              "value_length": 26
            },
            "access-control-max-age": {
              "value_length": 3
            },
            "cache-control": "max-age=0",
            "cf-cache-status": {
              "value_length": 7
            },
            "cf-ray": {
              "value_length": 20
            },
            "content-encoding": "br",
            "content-type": "application/json;charset=utf-8",
            "date": {
              "value_length": 29
            },
            "server": {
              "value_length": 10
            },
            "server-timing": {
              "value_length": 81
            },
            "vary": {
              "value_length": 15
            },
            "x-content-type-options": "nosniff",
            "x-hubspot-correlation-id": {
              "value_length": 36
            },
            "x-robots-tag": {
              "value_length": 4
            }
          }
        },
        "status": 200,
        "type": "XHR",
        "url": "https://forms.hscollectedforms.net/collected-forms/v1/config/json?portalId=44079772&utk=57ee5b4f90b9eb5c9310ea3d1a963543"
      },
      {
        "initiator": "parser",
        "method": "GET",
        "mime_type": "image/gif",
        "response_headers": {
          "credentials_present": [],
          "kept": {
            "access-control-allow-credentials": {
              "value_length": 5
            },
            "access-control-expose-headers": {
              "value_length": 15
            },
            "alt-svc": {
              "value_length": 19
            },
            "cache-control": "max-age=0, no-cache, no-store",
            "cf-cache-status": {
              "value_length": 7
            },
            "cf-ray": {
              "value_length": 20
            },
            "connection": {
              "value_length": 10
            },
            "content-length": "35",
            "content-type": "image/gif",
            "date": {
              "value_length": 29
            },
            "server": {
              "value_length": 10
            },
            "server-timing": {
              "value_length": 81
            },
            "strict-transport-security": "max-age=31536000; includeSubDomains; preload",
            "vary": {
              "value_length": 6
            },
            "x-content-type-options": "nosniff",
            "x-hubspot-correlation-id": {
              "value_length": 36
            },
            "x-robots-tag": {
              "value_length": 4
            }
          }
        },
        "status": 200,
        "type": "Image",
        "url": "https://forms-na1.hsforms.com/embed/v3/counters.gif?key=forms-embed-v2-DEFINITION_SUCCESS&count=1"
      },
      {
        "initiator": "parser",
        "method": "GET",
        "mime_type": "image/gif",
        "response_headers": {
          "credentials_present": [],
          "kept": {
            "access-control-allow-credentials": {
              "value_length": 5
            },
            "access-control-expose-headers": {
              "value_length": 15
            },
            "alt-svc": {
              "value_length": 19
            },
            "cache-control": "max-age=0, no-cache, no-store",
            "cf-cache-status": {
              "value_length": 7
            },
            "cf-ray": {
              "value_length": 20
            },
            "connection": {
              "value_length": 10
            },
            "content-length": "35",
            "content-type": "image/gif",
            "date": {
              "value_length": 29
            },
            "server": {
              "value_length": 10
            },
            "server-timing": {
              "value_length": 81
            },
            "strict-transport-security": "max-age=31536000; includeSubDomains; preload",
            "vary": {
              "value_length": 6
            },
            "x-content-type-options": "nosniff",
            "x-hubspot-correlation-id": {
              "value_length": 36
            },
            "x-robots-tag": {
              "value_length": 4
            }
          }
        },
        "status": 200,
        "type": "Image",
        "url": "https://forms-na1.hsforms.com/embed/v3/counters.gif?key=forms-embed-v2-RENDER_SUCCESS&count=1"
      },
      {
        "initiator": "parser",
        "method": "GET",
        "mime_type": "image/gif",
        "response_headers": {
          "credentials_present": [],
          "kept": {
            "access-control-allow-credentials": {
              "value_length": 5
            },
            "access-control-expose-headers": {
              "value_length": 15
            },
            "alt-svc": {
              "value_length": 19
            },
            "cache-control": "max-age=0, no-cache, no-store",
            "cf-cache-status": {
              "value_length": 7
            },
            "cf-ray": {
              "value_length": 20
            },
            "connection": {
              "value_length": 10
            },
            "content-length": "35",
            "content-type": "image/gif",
            "date": {
              "value_length": 29
            },
            "server": {
              "value_length": 10
            },
            "server-timing": {
              "value_length": 81
            },
            "strict-transport-security": "max-age=31536000; includeSubDomains; preload",
            "vary": {
              "value_length": 6
            },
            "x-content-type-options": "nosniff",
            "x-hubspot-correlation-id": {
              "value_length": 36
            },
            "x-robots-tag": {
              "value_length": 4
            }
          }
        },
        "status": 200,
        "type": "Image",
        "url": "https://forms.hsforms.com/embed/v3/counters.gif?key=collected-forms-embed-js-form-bind&count=1"
      },
      {
        "initiator": "script",
        "method": "GET",
        "mime_type": "application/json",
        "response_headers": {
          "credentials_present": [],
          "kept": {
            "access-control-allow-credentials": {
              "value_length": 5
            },
            "access-control-allow-headers": {
              "value_length": 1
            },
            "access-control-allow-methods": {
              "value_length": 44
            },
            "access-control-allow-origin": {
              "value_length": 2
```
