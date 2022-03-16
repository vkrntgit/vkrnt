import{S as Je,i as Ye,s as de,e as b,k as v,t as r,c as f,m as R,a as B,h as s,d as e,b as D,g as i,F as p,G as Te}from"../../../chunks/vendor-86ba30b8.js";function ze(Fe){let C,I,j,S,Wl,x,P,V,M,K,H,T,_,Xl,U,G,N,k,Ql,q,A,F,J,Y,d,w,Zl,z,E,$l,L,y,cl,W,X,Q,Z,$,c,a,h,g,ll,el,tl,il,bl,fl,rl,O,al,sl,pl,ol,ul,ml,nl,vl,Rl,Bl,kl,wl,El,yl,Cl,Sl,_l,Ol,Dl,Il,jl,o,hl,gl,le,ee,te,ie,be,fe,re,se,pe,oe,ue,me,ne,ve,Re,Be,xl,Pl,Vl,Ml,Kl,u,ke,we,Ee,ye,Ce,Se,_e,Oe,De,Ie,je,xe,Pe,Ve,Me,Ke,Hl,Tl,Ul,Gl,Nl,ql,Al,Fl,Jl,Yl,dl,zl,Ll;return{c(){C=b("br"),I=b("br"),j=v(),S=b("h2"),Wl=r("Svelte + Svelte Kit notes"),x=r(`

I picked Svelte Kit in Jan 2022. Great framework to build node apps. I liked it so much that I moved this site from plain html+css site to Sveltei Kit. The framework is SEO friendly, pre-renders pages and allows rapid development of components and static pages. `),P=b("br"),V=v(),M=b("br"),K=v(),H=b("br"),T=v(),_=b("h3"),Xl=r("Here are a few basic instructions to get started on Svelte Kit"),U=r(`



How to start a Svelte project`),G=b("br"),N=v(),k=b("div"),Ql=r("npm init svelte@next "),q=b("name"),A=v(),F=b("br"),J=r(`
How to build and deploy`),Y=b("br"),d=v(),w=b("div"),Zl=r("npm install"),z=v(),E=b("div"),$l=r("npm run build"),L=v(),y=b("div"),cl=r("npm run dev&"),W=r(` (to run npm in backgroud)
`),X=b("br"),Q=b("br"),Z=r(`

In case you run without \u2018&\u2019 (in foreground), use right Ctrl and \u2018c\u2019 to terminate server and return to terminal prompt
`),$=b("br"),c=b("br"),a=r(`
Copy and push public folder to deploy to production`),h=b("br"),g=b("br"),ll=v(),el=b("br"),tl=b("br"),il=r(`


Save layout to src/routes/__layout.svelte
This file should have the header, main and footer tags with elements common to all pages.
Use < slot >  \xA0 < /slot > for content specific to each page.
In the individual pages, you don\u2019t need to code the common elements. Jump directly to components and text specific to that page.

\u2028Save css to src/styles/global.css
`),bl=b("br"),fl=b("br"),rl=v(),O=b("h3"),al=r("Containarize your sveltkit site"),sl=v(),pl=b("br"),ol=r(`Create a docker image of svelte kit code.
`),ul=b("br"),ml=b("br"),nl=r(`
Steps:`),vl=b("br"),Rl=r(`
1. Open package.json. Change adapter-auto to adapter-node`),Bl=b("br"),kl=r(`
2. Open package-lock.json. Change adapter-auto to adapter-node`),wl=b("br"),El=r(`
3. npm run build `),yl=b("br"),Cl=r(`
4.  node build `),Sl=b("br"),_l=r(`
5. Create Dockerfile `),Ol=b("br"),Dl=r(`
6. Enter `),Il=b("br"),jl=v(),o=b("div"),hl=r("FROM node:16 "),gl=b("br"),le=r(`
    WORKDIR /app `),ee=b("br"),te=r(`
    COPY package.json package-lock.json ./ `),ie=b("br"),be=r(`
    RUN npm ci `),fe=b("br"),re=r(`
    COPY . . `),se=b("br"),pe=r(`
    RUN npm build && npm prune --production `),oe=b("br"),ue=r(`
    ENV PORT 5050 `),me=b("br"),ne=r(`
    EXPOSE 5050 `),ve=b("br"),Re=r(`
    CMD ["node","build"] `),Be=b("br"),xl=r(` 
7. Create .dockerignore `),Pl=b("br"),Vl=r(`
8. Enter these files `),Ml=b("br"),Kl=v(),u=b("div"),ke=r(".git "),we=b("br"),Ee=r(`
    .svelte-kit`),ye=b("br"),Ce=r(`
    build `),Se=b("br"),_e=r(`
    node_modules `),Oe=b("br"),De=r(`
    .dockerignore `),Ie=b("br"),je=r(`
    .gitignore `),xe=b("br"),Pe=r(`
    Dockerfile `),Ve=b("br"),Me=r(`
    README.md `),Ke=b("br"),Hl=v(),Tl=b("br"),Ul=b("br"),Gl=b("br"),Nl=r(`
Good training on basics:`),ql=b("br"),Al=r(`
https://www.youtube.com/watch?v=ftiTVitDbx0&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=4
`),Fl=b("br"),Jl=b("br"),Yl=r(`

Other references:
https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
09 Feb 2022
`),dl=b("br"),zl=b("br"),Ll=b("br"),this.h()},l(l){C=f(l,"BR",{}),I=f(l,"BR",{}),j=R(l),S=f(l,"H2",{});var t=B(S);Wl=s(t,"Svelte + Svelte Kit notes"),t.forEach(e),x=s(l,`

I picked Svelte Kit in Jan 2022. Great framework to build node apps. I liked it so much that I moved this site from plain html+css site to Sveltei Kit. The framework is SEO friendly, pre-renders pages and allows rapid development of components and static pages. `),P=f(l,"BR",{}),V=R(l),M=f(l,"BR",{}),K=R(l),H=f(l,"BR",{}),T=R(l),_=f(l,"H3",{});var Ue=B(_);Xl=s(Ue,"Here are a few basic instructions to get started on Svelte Kit"),Ue.forEach(e),U=s(l,`



How to start a Svelte project`),G=f(l,"BR",{}),N=R(l),k=f(l,"DIV",{class:!0});var He=B(k);Ql=s(He,"npm init svelte@next "),q=f(He,"NAME",{}),B(q).forEach(e),He.forEach(e),A=R(l),F=f(l,"BR",{}),J=s(l,`
How to build and deploy`),Y=f(l,"BR",{}),d=R(l),w=f(l,"DIV",{class:!0});var Ge=B(w);Zl=s(Ge,"npm install"),Ge.forEach(e),z=R(l),E=f(l,"DIV",{class:!0});var Ne=B(E);$l=s(Ne,"npm run build"),Ne.forEach(e),L=R(l),y=f(l,"DIV",{class:!0});var qe=B(y);cl=s(qe,"npm run dev&"),qe.forEach(e),W=s(l,` (to run npm in backgroud)
`),X=f(l,"BR",{}),Q=f(l,"BR",{}),Z=s(l,`

In case you run without \u2018&\u2019 (in foreground), use right Ctrl and \u2018c\u2019 to terminate server and return to terminal prompt
`),$=f(l,"BR",{}),c=f(l,"BR",{}),a=s(l,`
Copy and push public folder to deploy to production`),h=f(l,"BR",{}),g=f(l,"BR",{}),ll=R(l),el=f(l,"BR",{}),tl=f(l,"BR",{}),il=s(l,`


Save layout to src/routes/__layout.svelte
This file should have the header, main and footer tags with elements common to all pages.
Use < slot >  \xA0 < /slot > for content specific to each page.
In the individual pages, you don\u2019t need to code the common elements. Jump directly to components and text specific to that page.

\u2028Save css to src/styles/global.css
`),bl=f(l,"BR",{}),fl=f(l,"BR",{}),rl=R(l),O=f(l,"H3",{});var Ae=B(O);al=s(Ae,"Containarize your sveltkit site"),Ae.forEach(e),sl=R(l),pl=f(l,"BR",{}),ol=s(l,`Create a docker image of svelte kit code.
`),ul=f(l,"BR",{}),ml=f(l,"BR",{}),nl=s(l,`
Steps:`),vl=f(l,"BR",{}),Rl=s(l,`
1. Open package.json. Change adapter-auto to adapter-node`),Bl=f(l,"BR",{}),kl=s(l,`
2. Open package-lock.json. Change adapter-auto to adapter-node`),wl=f(l,"BR",{}),El=s(l,`
3. npm run build `),yl=f(l,"BR",{}),Cl=s(l,`
4.  node build `),Sl=f(l,"BR",{}),_l=s(l,`
5. Create Dockerfile `),Ol=f(l,"BR",{}),Dl=s(l,`
6. Enter `),Il=f(l,"BR",{}),jl=R(l),o=f(l,"DIV",{class:!0});var m=B(o);hl=s(m,"FROM node:16 "),gl=f(m,"BR",{}),le=s(m,`
    WORKDIR /app `),ee=f(m,"BR",{}),te=s(m,`
    COPY package.json package-lock.json ./ `),ie=f(m,"BR",{}),be=s(m,`
    RUN npm ci `),fe=f(m,"BR",{}),re=s(m,`
    COPY . . `),se=f(m,"BR",{}),pe=s(m,`
    RUN npm build && npm prune --production `),oe=f(m,"BR",{}),ue=s(m,`
    ENV PORT 5050 `),me=f(m,"BR",{}),ne=s(m,`
    EXPOSE 5050 `),ve=f(m,"BR",{}),Re=s(m,`
    CMD ["node","build"] `),Be=f(m,"BR",{}),m.forEach(e),xl=s(l,` 
7. Create .dockerignore `),Pl=f(l,"BR",{}),Vl=s(l,`
8. Enter these files `),Ml=f(l,"BR",{}),Kl=R(l),u=f(l,"DIV",{class:!0});var n=B(u);ke=s(n,".git "),we=f(n,"BR",{}),Ee=s(n,`
    .svelte-kit`),ye=f(n,"BR",{}),Ce=s(n,`
    build `),Se=f(n,"BR",{}),_e=s(n,`
    node_modules `),Oe=f(n,"BR",{}),De=s(n,`
    .dockerignore `),Ie=f(n,"BR",{}),je=s(n,`
    .gitignore `),xe=f(n,"BR",{}),Pe=s(n,`
    Dockerfile `),Ve=f(n,"BR",{}),Me=s(n,`
    README.md `),Ke=f(n,"BR",{}),n.forEach(e),Hl=R(l),Tl=f(l,"BR",{}),Ul=f(l,"BR",{}),Gl=f(l,"BR",{}),Nl=s(l,`
Good training on basics:`),ql=f(l,"BR",{}),Al=s(l,`
https://www.youtube.com/watch?v=ftiTVitDbx0&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=4
`),Fl=f(l,"BR",{}),Jl=f(l,"BR",{}),Yl=s(l,`

Other references:
https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
09 Feb 2022
`),dl=f(l,"BR",{}),zl=f(l,"BR",{}),Ll=f(l,"BR",{}),this.h()},h(){D(k,"class","code"),D(w,"class","code"),D(E,"class","code"),D(y,"class","code"),D(o,"class","code"),D(u,"class","code")},m(l,t){i(l,C,t),i(l,I,t),i(l,j,t),i(l,S,t),p(S,Wl),i(l,x,t),i(l,P,t),i(l,V,t),i(l,M,t),i(l,K,t),i(l,H,t),i(l,T,t),i(l,_,t),p(_,Xl),i(l,U,t),i(l,G,t),i(l,N,t),i(l,k,t),p(k,Ql),p(k,q),i(l,A,t),i(l,F,t),i(l,J,t),i(l,Y,t),i(l,d,t),i(l,w,t),p(w,Zl),i(l,z,t),i(l,E,t),p(E,$l),i(l,L,t),i(l,y,t),p(y,cl),i(l,W,t),i(l,X,t),i(l,Q,t),i(l,Z,t),i(l,$,t),i(l,c,t),i(l,a,t),i(l,h,t),i(l,g,t),i(l,ll,t),i(l,el,t),i(l,tl,t),i(l,il,t),i(l,bl,t),i(l,fl,t),i(l,rl,t),i(l,O,t),p(O,al),i(l,sl,t),i(l,pl,t),i(l,ol,t),i(l,ul,t),i(l,ml,t),i(l,nl,t),i(l,vl,t),i(l,Rl,t),i(l,Bl,t),i(l,kl,t),i(l,wl,t),i(l,El,t),i(l,yl,t),i(l,Cl,t),i(l,Sl,t),i(l,_l,t),i(l,Ol,t),i(l,Dl,t),i(l,Il,t),i(l,jl,t),i(l,o,t),p(o,hl),p(o,gl),p(o,le),p(o,ee),p(o,te),p(o,ie),p(o,be),p(o,fe),p(o,re),p(o,se),p(o,pe),p(o,oe),p(o,ue),p(o,me),p(o,ne),p(o,ve),p(o,Re),p(o,Be),i(l,xl,t),i(l,Pl,t),i(l,Vl,t),i(l,Ml,t),i(l,Kl,t),i(l,u,t),p(u,ke),p(u,we),p(u,Ee),p(u,ye),p(u,Ce),p(u,Se),p(u,_e),p(u,Oe),p(u,De),p(u,Ie),p(u,je),p(u,xe),p(u,Pe),p(u,Ve),p(u,Me),p(u,Ke),i(l,Hl,t),i(l,Tl,t),i(l,Ul,t),i(l,Gl,t),i(l,Nl,t),i(l,ql,t),i(l,Al,t),i(l,Fl,t),i(l,Jl,t),i(l,Yl,t),i(l,dl,t),i(l,zl,t),i(l,Ll,t)},p:Te,i:Te,o:Te,d(l){l&&e(C),l&&e(I),l&&e(j),l&&e(S),l&&e(x),l&&e(P),l&&e(V),l&&e(M),l&&e(K),l&&e(H),l&&e(T),l&&e(_),l&&e(U),l&&e(G),l&&e(N),l&&e(k),l&&e(A),l&&e(F),l&&e(J),l&&e(Y),l&&e(d),l&&e(w),l&&e(z),l&&e(E),l&&e(L),l&&e(y),l&&e(W),l&&e(X),l&&e(Q),l&&e(Z),l&&e($),l&&e(c),l&&e(a),l&&e(h),l&&e(g),l&&e(ll),l&&e(el),l&&e(tl),l&&e(il),l&&e(bl),l&&e(fl),l&&e(rl),l&&e(O),l&&e(sl),l&&e(pl),l&&e(ol),l&&e(ul),l&&e(ml),l&&e(nl),l&&e(vl),l&&e(Rl),l&&e(Bl),l&&e(kl),l&&e(wl),l&&e(El),l&&e(yl),l&&e(Cl),l&&e(Sl),l&&e(_l),l&&e(Ol),l&&e(Dl),l&&e(Il),l&&e(jl),l&&e(o),l&&e(xl),l&&e(Pl),l&&e(Vl),l&&e(Ml),l&&e(Kl),l&&e(u),l&&e(Hl),l&&e(Tl),l&&e(Ul),l&&e(Gl),l&&e(Nl),l&&e(ql),l&&e(Al),l&&e(Fl),l&&e(Jl),l&&e(Yl),l&&e(dl),l&&e(zl),l&&e(Ll)}}}class We extends Je{constructor(C){super();Ye(this,C,null,ze,de,{})}}export{We as default};
