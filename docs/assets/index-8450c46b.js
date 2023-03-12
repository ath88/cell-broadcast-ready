(function(){const O=document.createElement("link").relList;if(O&&O.supports&&O.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const _ of m.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&d(_)}).observe(document,{childList:!0,subtree:!0});function x(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(u){if(u.ep)return;u.ep=!0;const m=x(u);fetch(u.href,m)}})();var Oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F={},_i={get exports(){return F},set exports(N){F=N}};(function(N,O){(function(x,d){var u="1.0.34",m="",_="?",G="function",C="undefined",H="object",U="string",ai="major",e="model",r="name",i="type",o="vendor",a="version",f="architecture",R="console",b="mobile",n="tablet",p="smarttv",A="wearable",ti="embedded",W=350,Z="Amazon",M="Apple",si="ASUS",ni="BlackBerry",S="Browser",L="Chrome",ki="Edge",B="Firefox",I="Google",bi="Huawei",X="LG",K="Microsoft",li="Motorola",D="Opera",J="Samsung",wi="Sharp",V="Sony",Q="Xiaomi",$="Zebra",ci="Facebook",di="Chromium OS",ui="Mac OS",xi=function(l,w){var s={};for(var c in l)w[c]&&w[c].length%2===0?s[c]=w[c].concat(l[c]):s[c]=l[c];return s},Y=function(l){for(var w={},s=0;s<l.length;s++)w[l[s].toUpperCase()]=l[s];return w},mi=function(l,w){return typeof l===U?P(w).indexOf(P(l))!==-1:!1},P=function(l){return l.toLowerCase()},yi=function(l){return typeof l===U?l.replace(/[^\d\.]/g,m).split(".")[0]:d},ii=function(l,w){if(typeof l===U)return l=l.replace(/^\s\s*/,m),typeof w===C?l:l.substring(0,W)},q=function(l,w){for(var s=0,c,y,v,t,z,g;s<w.length&&!z;){var oi=w[s],hi=w[s+1];for(c=y=0;c<oi.length&&!z&&oi[c];)if(z=oi[c++].exec(l),z)for(v=0;v<hi.length;v++)g=z[++y],t=hi[v],typeof t===H&&t.length>0?t.length===2?typeof t[1]==G?this[t[0]]=t[1].call(this,g):this[t[0]]=t[1]:t.length===3?typeof t[1]===G&&!(t[1].exec&&t[1].test)?this[t[0]]=g?t[1].call(this,g,t[2]):d:this[t[0]]=g?g.replace(t[1],t[2]):d:t.length===4&&(this[t[0]]=g?t[3].call(this,g.replace(t[1],t[2])):d):this[t]=g||d;s+=2}},ei=function(l,w){for(var s in w)if(typeof w[s]===H&&w[s].length>0){for(var c=0;c<w[s].length;c++)if(mi(w[s][c],l))return s===_?d:s}else if(mi(w[s],l))return s===_?d:s;return l},Ei={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},pi={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},fi={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[a,[r,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[a,[r,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[r,a],[/opios[\/ ]+([\w\.]+)/i],[a,[r,D+" Mini"]],[/\bopr\/([\w\.]+)/i],[a,[r,D]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[r,a],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[a,[r,"UC"+S]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[a,[r,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[a,[r,"WeChat"]],[/konqueror\/([\w\.]+)/i],[a,[r,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[a,[r,"IE"]],[/yabrowser\/([\w\.]+)/i],[a,[r,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[r,/(.+)/,"$1 Secure "+S],a],[/\bfocus\/([\w\.]+)/i],[a,[r,B+" Focus"]],[/\bopt\/([\w\.]+)/i],[a,[r,D+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[a,[r,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[a,[r,"Dolphin"]],[/coast\/([\w\.]+)/i],[a,[r,D+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[a,[r,"MIUI "+S]],[/fxios\/([-\w\.]+)/i],[a,[r,B]],[/\bqihu|(qi?ho?o?|360)browser/i],[[r,"360 "+S]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[r,/(.+)/,"$1 "+S],a],[/(comodo_dragon)\/([\w\.]+)/i],[[r,/_/g," "],a],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[r,a],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[r],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[r,ci],a],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[r,a],[/\bgsa\/([\w\.]+) .*safari\//i],[a,[r,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[a,[r,L+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[r,L+" WebView"],a],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[a,[r,"Android "+S]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[r,a],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[a,[r,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[a,r],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[r,[a,ei,Ei]],[/(webkit|khtml)\/([\w\.]+)/i],[r,a],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[r,"Netscape"],a],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[a,[r,B+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[r,a],[/(cobalt)\/([\w\.]+)/i],[r,[a,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,P]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,m,P]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,P]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[e,[o,J],[i,n]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[e,[o,J],[i,b]],[/\((ip(?:hone|od)[\w ]*);/i],[e,[o,M],[i,b]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[e,[o,M],[i,n]],[/(macintosh);/i],[e,[o,M]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[e,[o,wi],[i,b]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[e,[o,bi],[i,n]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[e,[o,bi],[i,b]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[e,/_/g," "],[o,Q],[i,b]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[e,/_/g," "],[o,Q],[i,n]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[e,[o,"OPPO"],[i,b]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[e,[o,"Vivo"],[i,b]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[e,[o,"Realme"],[i,b]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[e,[o,li],[i,b]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[e,[o,li],[i,n]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[e,[o,X],[i,n]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[e,[o,X],[i,b]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[e,[o,"Lenovo"],[i,n]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[e,/_/g," "],[o,"Nokia"],[i,b]],[/(pixel c)\b/i],[e,[o,I],[i,n]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[e,[o,I],[i,b]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[o,V],[i,b]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[e,"Xperia Tablet"],[o,V],[i,n]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[e,[o,"OnePlus"],[i,b]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[e,[o,Z],[i,n]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[e,/(.+)/g,"Fire Phone $1"],[o,Z],[i,b]],[/(playbook);[-\w\),; ]+(rim)/i],[e,o,[i,n]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[e,[o,ni],[i,b]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[e,[o,si],[i,n]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[e,[o,si],[i,b]],[/(nexus 9)/i],[e,[o,"HTC"],[i,n]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[o,[e,/_/g," "],[i,b]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[e,[o,"Acer"],[i,n]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[e,[o,"Meizu"],[i,b]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[o,e,[i,b]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[o,e,[i,n]],[/(surface duo)/i],[e,[o,K],[i,n]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[e,[o,"Fairphone"],[i,b]],[/(u304aa)/i],[e,[o,"AT&T"],[i,b]],[/\bsie-(\w*)/i],[e,[o,"Siemens"],[i,b]],[/\b(rct\w+) b/i],[e,[o,"RCA"],[i,n]],[/\b(venue[\d ]{2,7}) b/i],[e,[o,"Dell"],[i,n]],[/\b(q(?:mv|ta)\w+) b/i],[e,[o,"Verizon"],[i,n]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[e,[o,"Barnes & Noble"],[i,n]],[/\b(tm\d{3}\w+) b/i],[e,[o,"NuVision"],[i,n]],[/\b(k88) b/i],[e,[o,"ZTE"],[i,n]],[/\b(nx\d{3}j) b/i],[e,[o,"ZTE"],[i,b]],[/\b(gen\d{3}) b.+49h/i],[e,[o,"Swiss"],[i,b]],[/\b(zur\d{3}) b/i],[e,[o,"Swiss"],[i,n]],[/\b((zeki)?tb.*\b) b/i],[e,[o,"Zeki"],[i,n]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[o,"Dragon Touch"],e,[i,n]],[/\b(ns-?\w{0,9}) b/i],[e,[o,"Insignia"],[i,n]],[/\b((nxa|next)-?\w{0,9}) b/i],[e,[o,"NextBook"],[i,n]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[o,"Voice"],e,[i,b]],[/\b(lvtel\-)?(v1[12]) b/i],[[o,"LvTel"],e,[i,b]],[/\b(ph-1) /i],[e,[o,"Essential"],[i,b]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[e,[o,"Envizen"],[i,n]],[/\b(trio[-\w\. ]+) b/i],[e,[o,"MachSpeed"],[i,n]],[/\btu_(1491) b/i],[e,[o,"Rotor"],[i,n]],[/(shield[\w ]+) b/i],[e,[o,"Nvidia"],[i,n]],[/(sprint) (\w+)/i],[o,e,[i,b]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[o,K],[i,b]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[e,[o,$],[i,n]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[e,[o,$],[i,b]],[/smart-tv.+(samsung)/i],[o,[i,p]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[o,J],[i,p]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[o,X],[i,p]],[/(apple) ?tv/i],[o,[e,M+" TV"],[i,p]],[/crkey/i],[[e,L+"cast"],[o,I],[i,p]],[/droid.+aft(\w)( bui|\))/i],[e,[o,Z],[i,p]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[e,[o,wi],[i,p]],[/(bravia[\w ]+)( bui|\))/i],[e,[o,V],[i,p]],[/(mitv-\w{5}) bui/i],[e,[o,Q],[i,p]],[/Hbbtv.*(technisat) (.*);/i],[o,e,[i,p]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[o,ii],[e,ii],[i,p]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,p]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[o,e,[i,R]],[/droid.+; (shield) bui/i],[e,[o,"Nvidia"],[i,R]],[/(playstation [345portablevi]+)/i],[e,[o,V],[i,R]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[e,[o,K],[i,R]],[/((pebble))app/i],[o,e,[i,A]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[e,[o,M],[i,A]],[/droid.+; (glass) \d/i],[e,[o,I],[i,A]],[/droid.+; (wt63?0{2,3})\)/i],[e,[o,$],[i,A]],[/(quest( 2| pro)?)/i],[e,[o,ci],[i,A]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[o,[i,ti]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[e,[i,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[e,[i,n]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,n]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,b]],[/(android[-\w\. ]{0,9});.+buil/i],[e,[o,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[a,[r,ki+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[a,[r,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[r,a],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[a,r]],os:[[/microsoft (windows) (vista|xp)/i],[r,a],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[r,[a,ei,pi]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[r,"Windows"],[a,ei,pi]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[a,/_/g,"."],[r,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[r,ui],[a,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[a,r],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[r,a],[/\(bb(10);/i],[a,[r,ni]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[a,[r,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[a,[r,B+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[a,[r,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[a,[r,"watchOS"]],[/crkey\/([\d\.]+)/i],[a,[r,L+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[r,di],a],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[r,a],[/(sunos) ?([\w\.\d]*)/i],[[r,"Solaris"],a],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[r,a]]},h=function(l,w){if(typeof l===H&&(w=l,l=d),!(this instanceof h))return new h(l,w).getResult();var s=typeof x!==C&&x.navigator?x.navigator:d,c=l||(s&&s.userAgent?s.userAgent:m),y=s&&s.userAgentData?s.userAgentData:d,v=w?xi(fi,w):fi;return this.getBrowser=function(){var t={};return t[r]=d,t[a]=d,q.call(t,c,v.browser),t[ai]=yi(t[a]),s&&s.brave&&typeof s.brave.isBrave==G&&(t[r]="Brave"),t},this.getCPU=function(){var t={};return t[f]=d,q.call(t,c,v.cpu),t},this.getDevice=function(){var t={};return t[o]=d,t[e]=d,t[i]=d,q.call(t,c,v.device),!t[i]&&y&&y.mobile&&(t[i]=b),t[e]=="Macintosh"&&s&&typeof s.standalone!==C&&s.maxTouchPoints&&s.maxTouchPoints>2&&(t[e]="iPad",t[i]=n),t},this.getEngine=function(){var t={};return t[r]=d,t[a]=d,q.call(t,c,v.engine),t},this.getOS=function(){var t={};return t[r]=d,t[a]=d,q.call(t,c,v.os),!t[r]&&y&&y.platform!="Unknown"&&(t[r]=y.platform.replace(/chrome os/i,di).replace(/macos/i,ui)),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return c},this.setUA=function(t){return c=typeof t===U&&t.length>W?ii(t,W):t,this},this.setUA(c),this};h.VERSION=u,h.BROWSER=Y([r,a,ai]),h.CPU=Y([f]),h.DEVICE=Y([e,o,i,R,b,p,n,A,ti]),h.ENGINE=h.OS=Y([r,a]),N.exports&&(O=N.exports=h),O.UAParser=h;var T=typeof x!==C&&(x.jQuery||x.Zepto);if(T&&!T.ua){var j=new h;T.ua=j.getResult(),T.ua.get=function(){return j.getUA()},T.ua.set=function(l){j.setUA(l);var w=j.getResult();for(var s in w)T.ua[s]=w[s]}}})(typeof window=="object"?window:Oi)})(_i,F);const Ai=F;const Si=new Ai,vi=Si.getResult(),k=vi.os;let gi=k.name;k.version&&(gi+=` ${k.version}`);let E,ri;k.name==="Android"&&(Number(k.version),k.version>=6&&(E="Your device is not ready."),k.version>=6&&(E="Your device might be ready."),k.version>=9&&(E="Your device is probably ready."),k.version>=11&&(E="Your device is ready!"));k.name;E||(ri="Your device was not recognized. Perhaps you are using a desktop device? Visit this site with your mobile device.");document.querySelector("#content").innerHTML=`
  <div id="headers">
    <p>
      Your operating system is
    </p>
    <h1>
      ${gi}
    </h1>
    ${E?`
    <h2>
      ${E}
    </h2>
    `:""}
    ${ri?`
    <h4>
      ${ri}
    </h4>
    `:""}
  </div>
  <div>
    <div id="data">${JSON.stringify(vi,null,4)}</div>
  </div>
`;