import{c as U,e as j,f as B}from"./chunk-ZVYX4MB3.js";import"./chunk-DKVITRV6.js";import"./chunk-KUHKEGBL.js";import"./chunk-3PIWRAOL.js";import"./chunk-M3BEO55A.js";import{E as b,J as O,P as S,Q as I,R as w,S as E,U as A,Ua as F,V as z,b as P,i as y,qa as D,va as q,ya as H}from"./chunk-4NEHCUZ2.js";import"./chunk-6XXA7HXI.js";import{j as k}from"./chunk-FKMTSCBK.js";import{$b as c,Cb as C,Hb as l,Mb as h,Qb as i,Rb as a,Sb as p,Tb as x,Ub as M,cc as T,hb as _,kb as o,kc as d,lc as g,pc as v,qa as f,ua as u}from"./chunk-3DR3CJRN.js";function G(t,s){t&1&&p(0,"mat-progress-bar",1)}function L(t,s){t&1&&(i(0,"p"),d(1,"Not found!"),a())}function N(t,s){if(t&1&&(i(0,"mat-card",2)(1,"mat-card-header")(2,"mat-icon",3),d(3),a(),i(4,"mat-card-title")(5,"h2"),d(6),a(),i(7,"a",4),p(8,"mat-icon",5),a()(),i(9,"mat-card-subtitle"),p(10,"app-torrent-chips",6),a()(),i(11,"mat-card-content"),p(12,"app-torrent-content",7),a()()),t&2){let n,e,m=c().$implicit,r=c();o(2),l("matTooltip",m("content_types.singular."+((n=r.torrentContent.contentType)!==null&&n!==void 0?n:"null"))),o(),g((e=(e=r.contentTypeInfo(r.torrentContent.contentType))==null?null:e.icon)!==null&&e!==void 0?e:"question_mark"),o(3),g(r.torrentContent.torrent.name),o(),T("href",r.torrentContent.torrent.magnetUri,_),o(3),l("torrentContent",r.torrentContent),o(2),l("torrentContent",r.torrentContent)("heading",!1)}}function Q(t,s){if(t&1&&(x(0),C(1,G,1,0,"mat-progress-bar",1)(2,L,2,0,"p")(3,N,13,7,"mat-card",2),M()),t&2){let n=c();o(),h(n.loading?1:n.found?3:2)}}var mt=(()=>{class t{constructor(){this.route=f(k),this.apollo=f(y),this.loading=!0,this.found=!1,this.contentTypeInfo=U}ngOnInit(){this.loading=!0,this.route.paramMap.subscribe(n=>{this.apollo.query({query:b,variables:{input:{infoHashes:[n.get("infoHash")]}},fetchPolicy:"no-cache"}).subscribe(e=>{let m=e.data.torrentContent.search.items;this.torrentContent=m[0],this.found=m.length>0,this.loading=!1})})}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-torrent-permalink"]],standalone:!0,features:[v],decls:1,vars:0,consts:[[4,"transloco"],["mode","indeterminate"],[1,"torrent-permalink"],["matCardAvatar","",3,"matTooltip"],[1,"magnet-link",3,"href"],["svgIcon","magnet"],[3,"torrentContent"],[3,"torrentContent","heading"]],template:function(e,m){e&1&&C(0,Q,4,1,"ng-container",0)},dependencies:[F,S,z,w,A,E,I,D,q,H,P,O,B,j],styles:[".torrent-permalink[_ngcontent-%COMP%]{max-width:900px;margin:20px auto}.torrent-permalink[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:24px;word-break:break-word;overflow-wrap:break-word;padding-right:80px}.torrent-permalink[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   .magnet-link[_ngcontent-%COMP%]{position:absolute;right:20px;top:20px}.torrent-permalink[_ngcontent-%COMP%]   .mat-mdc-card-avatar[_ngcontent-%COMP%]{font-size:44px;margin-top:-10px;border-radius:0;overflow:visible}.torrent-permalink[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{margin:16px 0 14px -56px;font-size:6px}"]})}}return t})();export{mt as TorrentPermalinkComponent};