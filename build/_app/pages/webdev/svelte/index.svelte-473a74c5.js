import{S as vn,i as fn,s as Rn,e as n,k as i,t as a,c as r,a as p,m as s,h as o,d as b,b as f,g as gn,F as e,H as Zl}from"../../../chunks/vendor-62c3b85b.js";function Bn(un){let t,N,M,V,S,K,P,A,U,E,G,J,L,W,R,Y,j,q,F,z,X,$,g,Q,Z,B,ee,te,y,le,ne,re,ae,oe,ie,se,de,ce,be,he,pe,me,ue,ve,fe,C,Re,ge,Be,ye,ke,_e,we,Se,Ee,Ce,Ie,I,He,Oe,De,Te,xe,je,k,Ne,Me,Ve,Ke,Pe,Ae,H,Ue,Ge,Je,Le,We,Ye,qe,Fe,ze,Xe,$e,Qe,Ze,et,tt,lt,nt,rt,at,d,ot,it,st,dt,ct,bt,ht,pt,mt,ut,vt,ft,Rt,gt,Bt,yt,kt,_t,wt,St,Et,Ct,It,c,Ht,Ot,Dt,Tt,xt,jt,Nt,Mt,Vt,Kt,Pt,At,Ut,Gt,Jt,Lt,Wt,Yt,qt,Ft,zt,O,Xt,$t,Qt,Zt,el,tl,ll,nl,D,rl,al,ol,il,sl,dl,cl,h,bl,hl,pl,ml,ul,vl,fl,Rl,gl,Bl,yl,kl,_l,wl,Sl,El,Cl,Il,Hl,Ol,T,Dl,Tl,xl,jl,_,Nl,Ml,Vl,Kl,Pl,Al,w,Ul,Gl,Jl,Ll,Wl,Yl,ql,Fl,zl,Xl,$l;return{c(){t=n("main"),N=n("br"),M=n("br"),V=i(),S=n("h2"),K=a("Svelte + Svelte Kit notes"),P=a(`
I picked Svelte Kit in Jan 2022. Great framework to build node apps. I liked it so much that I moved this site from plain html+css site to Sveltei Kit. The framework is SEO friendly, pre-renders pages and allows rapid development of components and static pages. `),A=n("br"),U=i(),E=n("h3"),G=a("Here are a few basic instructions to get started on Svelte Kit"),J=a(`
How to start a Svelte project`),L=n("br"),W=i(),R=n("div"),Y=a("npm init svelte@next "),j=n("name"),q=i(),F=n("br"),z=a(`
How to build and deploy`),X=n("br"),$=i(),g=n("div"),Q=a("npm install"),Z=i(),B=n("div"),ee=a("npm run build"),te=i(),y=n("div"),le=a("npm run dev&"),ne=a(` (to run npm in backgroud)
`),re=n("br"),ae=i(),oe=n("br"),ie=a(`

In case you run without \u2018&\u2019 (in foreground), use CMD and 'c' (or on Windows, right Ctrl and \u2018c\u2019) to terminate server and return to terminal prompt
`),se=n("br"),de=i(),ce=n("br"),be=a(`
Copy and push public folder to deploy to production.
`),he=n("br"),pe=i(),me=n("br"),ue=i(),ve=n("br"),fe=i(),C=n("h3"),Re=a("Sveltekit: How to create a common header, footer and page layout"),ge=a(`
Save the styling and header, footer tags  to src/routes/__layout.svelte `),Be=n("br"),ye=a(`
This file should have the header, main and footer tags with elements common to all pages.
Use < slot >  \xA0 < /slot > for content specific to each page.`),ke=n("br"),_e=n("br"),we=a(`
In the individual site pages, you don\u2019t need to code the common elements. Jump directly to components and text specific to that page. The styling defined in __layout is automatically applied. `),Se=n("br"),Ee=n("br"),Ce=n("br"),Ie=i(),I=n("h3"),He=a("Sveltekit: Creating common stylesheet."),Oe=a(`
\u2028Save css to src/styles/global.css `),De=n("br"),Te=a(`
Now open the __layout file and add the following line in the script tag:`),xe=n("br"),je=i(),k=n("div"),Ne=a("import '../style/global.css'"),Me=i(),Ve=n("br"),Ke=i(),Pe=n("br"),Ae=i(),H=n("h3"),Ue=a("Containarize your sveltkit site"),Ge=a(`
Create a docker image of svelte kit code.
`),Je=n("br"),Le=n("br"),We=a(`
Steps:`),Ye=n("br"),qe=a(`
1. Open package.json. Change adapter-auto to adapter-node`),Fe=n("br"),ze=a(`
2. Open package-lock.json. Change adapter-auto to adapter-node`),Xe=n("br"),$e=a(`
3. npm run build `),Qe=n("br"),Ze=a(`
4.  node build `),et=n("br"),tt=a(`
5. Create Dockerfile `),lt=n("br"),nt=a(`
6. Enter `),rt=n("br"),at=i(),d=n("div"),ot=a("FROM node:16 "),it=n("br"),st=a(`
    WORKDIR /app `),dt=n("br"),ct=a(`
    COPY package.json package-lock.json ./ `),bt=n("br"),ht=a(`
    RUN npm ci `),pt=n("br"),mt=a(`
    COPY . . `),ut=n("br"),vt=a(`
    RUN npm build && npm prune --production `),ft=n("br"),Rt=a(`
    ENV PORT 5050 `),gt=n("br"),Bt=a(`
    EXPOSE 5050 `),yt=n("br"),kt=a(`
    CMD ["node","build"] `),_t=n("br"),wt=a(` 
7. Create .dockerignore `),St=n("br"),Et=a(`
8. Enter these files `),Ct=n("br"),It=i(),c=n("div"),Ht=a(".git "),Ot=n("br"),Dt=a(`
    .svelte-kit`),Tt=n("br"),xt=a(`
    build `),jt=n("br"),Nt=a(`
    node_modules `),Mt=n("br"),Vt=a(`
    .dockerignore `),Kt=n("br"),Pt=a(`
    .gitignore `),At=n("br"),Ut=a(`
    Dockerfile `),Gt=n("br"),Jt=a(`
    README.md `),Lt=n("br"),Wt=i(),Yt=n("br"),qt=i(),Ft=n("br"),zt=i(),O=n("h3"),Xt=a("Sveltekit: How to make an exception to the standard layout defined in __layout.svelte"),$t=a(`
If you want a page to take on a skin that is different from the standard layout, create a page __layout.reset.svelte in the folder of the page. This applies the reset layout instead of the standard layout defined in __layout.svelte.
`),Qt=n("br"),Zt=i(),el=n("br"),tl=i(),ll=n("br"),nl=i(),D=n("h3"),rl=a("Sveltekit: How to define a component that can be accessed by any page"),al=a(`
Save your components in the lib folder. Let's say you are creating a component called 'title' that can be called from any page. To create this component, create a file named title.svelte in the lib folder. Insert script, div and style in the file to shape the component. `),ol=n("br"),il=n("br"),sl=a(`
Here's how to call the component in any page:`),dl=n("br"),cl=i(),h=n("div"),bl=a("< script > "),hl=n("br"),pl=a(`
        import Title from '$lib/title.svelte' `),ml=n("br"),ul=a(`
    < /script > `),vl=n("br"),fl=i(),Rl=n("br"),gl=n("br"),Bl=a(`
   < header >`),yl=n("br"),kl=a(`
        < Title title='my title text' >`),_l=n("br"),wl=a(`
   < /header >`),Sl=n("br"),El=i(),Cl=n("br"),Il=i(),Hl=n("br"),Ol=i(),T=n("h3"),Dl=a("Sveltekit reference material:"),Tl=a(`
Good training on basics:`),xl=n("br"),jl=i(),_=n("a"),Nl=a("The Net Ninja"),Ml=i(),Vl=n("br"),Kl=i(),Pl=n("br"),Al=a(`
Other references:
`),w=n("a"),Ul=a("Building a blog with Sveltekit"),Gl=i(),Jl=n("br"),Ll=i(),Wl=n("br"),Yl=i(),ql=n("br"),Fl=i(),zl=n("br"),Xl=i(),$l=n("br"),this.h()},l(x){t=r(x,"MAIN",{});var l=p(t);N=r(l,"BR",{}),M=r(l,"BR",{}),V=s(l),S=r(l,"H2",{});var en=p(S);K=o(en,"Svelte + Svelte Kit notes"),en.forEach(b),P=o(l,`
I picked Svelte Kit in Jan 2022. Great framework to build node apps. I liked it so much that I moved this site from plain html+css site to Sveltei Kit. The framework is SEO friendly, pre-renders pages and allows rapid development of components and static pages. `),A=r(l,"BR",{}),U=s(l),E=r(l,"H3",{});var tn=p(E);G=o(tn,"Here are a few basic instructions to get started on Svelte Kit"),tn.forEach(b),J=o(l,`
How to start a Svelte project`),L=r(l,"BR",{}),W=s(l),R=r(l,"DIV",{class:!0});var Ql=p(R);Y=o(Ql,"npm init svelte@next "),j=r(Ql,"NAME",{}),p(j).forEach(b),Ql.forEach(b),q=s(l),F=r(l,"BR",{}),z=o(l,`
How to build and deploy`),X=r(l,"BR",{}),$=s(l),g=r(l,"DIV",{class:!0});var ln=p(g);Q=o(ln,"npm install"),ln.forEach(b),Z=s(l),B=r(l,"DIV",{class:!0});var nn=p(B);ee=o(nn,"npm run build"),nn.forEach(b),te=s(l),y=r(l,"DIV",{class:!0});var rn=p(y);le=o(rn,"npm run dev&"),rn.forEach(b),ne=o(l,` (to run npm in backgroud)
`),re=r(l,"BR",{}),ae=s(l),oe=r(l,"BR",{}),ie=o(l,`

In case you run without \u2018&\u2019 (in foreground), use CMD and 'c' (or on Windows, right Ctrl and \u2018c\u2019) to terminate server and return to terminal prompt
`),se=r(l,"BR",{}),de=s(l),ce=r(l,"BR",{}),be=o(l,`
Copy and push public folder to deploy to production.
`),he=r(l,"BR",{}),pe=s(l),me=r(l,"BR",{}),ue=s(l),ve=r(l,"BR",{}),fe=s(l),C=r(l,"H3",{});var an=p(C);Re=o(an,"Sveltekit: How to create a common header, footer and page layout"),an.forEach(b),ge=o(l,`
Save the styling and header, footer tags  to src/routes/__layout.svelte `),Be=r(l,"BR",{}),ye=o(l,`
This file should have the header, main and footer tags with elements common to all pages.
Use < slot >  \xA0 < /slot > for content specific to each page.`),ke=r(l,"BR",{}),_e=r(l,"BR",{}),we=o(l,`
In the individual site pages, you don\u2019t need to code the common elements. Jump directly to components and text specific to that page. The styling defined in __layout is automatically applied. `),Se=r(l,"BR",{}),Ee=r(l,"BR",{}),Ce=r(l,"BR",{}),Ie=s(l),I=r(l,"H3",{});var on=p(I);He=o(on,"Sveltekit: Creating common stylesheet."),on.forEach(b),Oe=o(l,`
\u2028Save css to src/styles/global.css `),De=r(l,"BR",{}),Te=o(l,`
Now open the __layout file and add the following line in the script tag:`),xe=r(l,"BR",{}),je=s(l),k=r(l,"DIV",{class:!0});var sn=p(k);Ne=o(sn,"import '../style/global.css'"),sn.forEach(b),Me=s(l),Ve=r(l,"BR",{}),Ke=s(l),Pe=r(l,"BR",{}),Ae=s(l),H=r(l,"H3",{});var dn=p(H);Ue=o(dn,"Containarize your sveltkit site"),dn.forEach(b),Ge=o(l,`
Create a docker image of svelte kit code.
`),Je=r(l,"BR",{}),Le=r(l,"BR",{}),We=o(l,`
Steps:`),Ye=r(l,"BR",{}),qe=o(l,`
1. Open package.json. Change adapter-auto to adapter-node`),Fe=r(l,"BR",{}),ze=o(l,`
2. Open package-lock.json. Change adapter-auto to adapter-node`),Xe=r(l,"BR",{}),$e=o(l,`
3. npm run build `),Qe=r(l,"BR",{}),Ze=o(l,`
4.  node build `),et=r(l,"BR",{}),tt=o(l,`
5. Create Dockerfile `),lt=r(l,"BR",{}),nt=o(l,`
6. Enter `),rt=r(l,"BR",{}),at=s(l),d=r(l,"DIV",{class:!0});var m=p(d);ot=o(m,"FROM node:16 "),it=r(m,"BR",{}),st=o(m,`
    WORKDIR /app `),dt=r(m,"BR",{}),ct=o(m,`
    COPY package.json package-lock.json ./ `),bt=r(m,"BR",{}),ht=o(m,`
    RUN npm ci `),pt=r(m,"BR",{}),mt=o(m,`
    COPY . . `),ut=r(m,"BR",{}),vt=o(m,`
    RUN npm build && npm prune --production `),ft=r(m,"BR",{}),Rt=o(m,`
    ENV PORT 5050 `),gt=r(m,"BR",{}),Bt=o(m,`
    EXPOSE 5050 `),yt=r(m,"BR",{}),kt=o(m,`
    CMD ["node","build"] `),_t=r(m,"BR",{}),m.forEach(b),wt=o(l,` 
7. Create .dockerignore `),St=r(l,"BR",{}),Et=o(l,`
8. Enter these files `),Ct=r(l,"BR",{}),It=s(l),c=r(l,"DIV",{class:!0});var u=p(c);Ht=o(u,".git "),Ot=r(u,"BR",{}),Dt=o(u,`
    .svelte-kit`),Tt=r(u,"BR",{}),xt=o(u,`
    build `),jt=r(u,"BR",{}),Nt=o(u,`
    node_modules `),Mt=r(u,"BR",{}),Vt=o(u,`
    .dockerignore `),Kt=r(u,"BR",{}),Pt=o(u,`
    .gitignore `),At=r(u,"BR",{}),Ut=o(u,`
    Dockerfile `),Gt=r(u,"BR",{}),Jt=o(u,`
    README.md `),Lt=r(u,"BR",{}),u.forEach(b),Wt=s(l),Yt=r(l,"BR",{}),qt=s(l),Ft=r(l,"BR",{}),zt=s(l),O=r(l,"H3",{});var cn=p(O);Xt=o(cn,"Sveltekit: How to make an exception to the standard layout defined in __layout.svelte"),cn.forEach(b),$t=o(l,`
If you want a page to take on a skin that is different from the standard layout, create a page __layout.reset.svelte in the folder of the page. This applies the reset layout instead of the standard layout defined in __layout.svelte.
`),Qt=r(l,"BR",{}),Zt=s(l),el=r(l,"BR",{}),tl=s(l),ll=r(l,"BR",{}),nl=s(l),D=r(l,"H3",{});var bn=p(D);rl=o(bn,"Sveltekit: How to define a component that can be accessed by any page"),bn.forEach(b),al=o(l,`
Save your components in the lib folder. Let's say you are creating a component called 'title' that can be called from any page. To create this component, create a file named title.svelte in the lib folder. Insert script, div and style in the file to shape the component. `),ol=r(l,"BR",{}),il=r(l,"BR",{}),sl=o(l,`
Here's how to call the component in any page:`),dl=r(l,"BR",{}),cl=s(l),h=r(l,"DIV",{class:!0});var v=p(h);bl=o(v,"< script > "),hl=r(v,"BR",{}),pl=o(v,`
        import Title from '$lib/title.svelte' `),ml=r(v,"BR",{}),ul=o(v,`
    < /script > `),vl=r(v,"BR",{}),fl=s(v),Rl=r(v,"BR",{}),gl=r(v,"BR",{}),Bl=o(v,`
   < header >`),yl=r(v,"BR",{}),kl=o(v,`
        < Title title='my title text' >`),_l=r(v,"BR",{}),wl=o(v,`
   < /header >`),Sl=r(v,"BR",{}),v.forEach(b),El=s(l),Cl=r(l,"BR",{}),Il=s(l),Hl=r(l,"BR",{}),Ol=s(l),T=r(l,"H3",{});var hn=p(T);Dl=o(hn,"Sveltekit reference material:"),hn.forEach(b),Tl=o(l,`
Good training on basics:`),xl=r(l,"BR",{}),jl=s(l),_=r(l,"A",{href:!0});var pn=p(_);Nl=o(pn,"The Net Ninja"),pn.forEach(b),Ml=s(l),Vl=r(l,"BR",{}),Kl=s(l),Pl=r(l,"BR",{}),Al=o(l,`
Other references:
`),w=r(l,"A",{href:!0});var mn=p(w);Ul=o(mn,"Building a blog with Sveltekit"),mn.forEach(b),Gl=s(l),Jl=r(l,"BR",{}),Ll=s(l),Wl=r(l,"BR",{}),Yl=s(l),ql=r(l,"BR",{}),Fl=s(l),zl=r(l,"BR",{}),Xl=s(l),$l=r(l,"BR",{}),l.forEach(b),this.h()},h(){f(R,"class","code"),f(g,"class","code"),f(B,"class","code"),f(y,"class","code"),f(k,"class","code"),f(d,"class","code"),f(c,"class","code"),f(h,"class","code"),f(_,"href","https://www.youtube.com/watch?v=9OlLxkaeVvw&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=1"),f(w,"href","https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog")},m(x,l){gn(x,t,l),e(t,N),e(t,M),e(t,V),e(t,S),e(S,K),e(t,P),e(t,A),e(t,U),e(t,E),e(E,G),e(t,J),e(t,L),e(t,W),e(t,R),e(R,Y),e(R,j),e(t,q),e(t,F),e(t,z),e(t,X),e(t,$),e(t,g),e(g,Q),e(t,Z),e(t,B),e(B,ee),e(t,te),e(t,y),e(y,le),e(t,ne),e(t,re),e(t,ae),e(t,oe),e(t,ie),e(t,se),e(t,de),e(t,ce),e(t,be),e(t,he),e(t,pe),e(t,me),e(t,ue),e(t,ve),e(t,fe),e(t,C),e(C,Re),e(t,ge),e(t,Be),e(t,ye),e(t,ke),e(t,_e),e(t,we),e(t,Se),e(t,Ee),e(t,Ce),e(t,Ie),e(t,I),e(I,He),e(t,Oe),e(t,De),e(t,Te),e(t,xe),e(t,je),e(t,k),e(k,Ne),e(t,Me),e(t,Ve),e(t,Ke),e(t,Pe),e(t,Ae),e(t,H),e(H,Ue),e(t,Ge),e(t,Je),e(t,Le),e(t,We),e(t,Ye),e(t,qe),e(t,Fe),e(t,ze),e(t,Xe),e(t,$e),e(t,Qe),e(t,Ze),e(t,et),e(t,tt),e(t,lt),e(t,nt),e(t,rt),e(t,at),e(t,d),e(d,ot),e(d,it),e(d,st),e(d,dt),e(d,ct),e(d,bt),e(d,ht),e(d,pt),e(d,mt),e(d,ut),e(d,vt),e(d,ft),e(d,Rt),e(d,gt),e(d,Bt),e(d,yt),e(d,kt),e(d,_t),e(t,wt),e(t,St),e(t,Et),e(t,Ct),e(t,It),e(t,c),e(c,Ht),e(c,Ot),e(c,Dt),e(c,Tt),e(c,xt),e(c,jt),e(c,Nt),e(c,Mt),e(c,Vt),e(c,Kt),e(c,Pt),e(c,At),e(c,Ut),e(c,Gt),e(c,Jt),e(c,Lt),e(t,Wt),e(t,Yt),e(t,qt),e(t,Ft),e(t,zt),e(t,O),e(O,Xt),e(t,$t),e(t,Qt),e(t,Zt),e(t,el),e(t,tl),e(t,ll),e(t,nl),e(t,D),e(D,rl),e(t,al),e(t,ol),e(t,il),e(t,sl),e(t,dl),e(t,cl),e(t,h),e(h,bl),e(h,hl),e(h,pl),e(h,ml),e(h,ul),e(h,vl),e(h,fl),e(h,Rl),e(h,gl),e(h,Bl),e(h,yl),e(h,kl),e(h,_l),e(h,wl),e(h,Sl),e(t,El),e(t,Cl),e(t,Il),e(t,Hl),e(t,Ol),e(t,T),e(T,Dl),e(t,Tl),e(t,xl),e(t,jl),e(t,_),e(_,Nl),e(t,Ml),e(t,Vl),e(t,Kl),e(t,Pl),e(t,Al),e(t,w),e(w,Ul),e(t,Gl),e(t,Jl),e(t,Ll),e(t,Wl),e(t,Yl),e(t,ql),e(t,Fl),e(t,zl),e(t,Xl),e(t,$l)},p:Zl,i:Zl,o:Zl,d(x){x&&b(t)}}}class kn extends vn{constructor(t){super();fn(this,t,null,Bn,Rn,{})}}export{kn as default};
