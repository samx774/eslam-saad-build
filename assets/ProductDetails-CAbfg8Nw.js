import{r as l,T as L,a as E,b as z,f as I,c as O,h as S,j as e,L as W,I as P,i as R,e as T,M as b,k as y}from"./index-Ckp_yozi.js";function q(){var p,u,h,g,f,w,j,N,v;const[a,c]=l.useState(!1);let{arLang:C}=l.useContext(L);const{t:o}=E("global"),{data:s,isLoading:k,error:M}=z(({productDetails:t})=>t);console.log(s==null?void 0:s.data);let{id:d}=I();const D=O(),r=l.useRef(null),x=()=>{window.innerWidth<=1024&&a===!1&&y.to(".mobileDetails",{y:0,overflow:"scroll",duration:.6,ease:"power1.inOut",onComplete:()=>c(!0)})},m=()=>{window.innerWidth<=1024&&y.to(".mobileDetails",{y:"92%",duration:.6,ease:"power1.inOut",overflow:"hidden",onComplete:()=>c(!1)})};return l.useEffect(()=>{window.scrollTo(0,0);const t=n=>{window.innerWidth<=1024&&r.current&&!r.current.contains(n.target)&&m()},i=()=>{window.innerWidth>1024&&x()};return document.addEventListener("mousedown",t),window.addEventListener("resize",i),()=>{document.removeEventListener("mousedown",t),window.removeEventListener("resize",i)}},[]),l.useEffect(()=>{D(S(d))},[C]),e.jsx(e.Fragment,{children:e.jsx("main",{children:k?e.jsx(W,{}):e.jsx("section",{className:"py-20 font-main",children:e.jsxs("div",{className:"grid gap-5 grid-cols-1 lg:grid-cols-2",children:[e.jsx("div",{className:"grid lg:grid-cols-2 gap-1 ",children:(u=(p=s==null?void 0:s.data)==null?void 0:p.Images)==null?void 0:u.map((t,i)=>{var n;return e.jsx("img",{className:"w-full",src:t,alt:(n=s==null?void 0:s.data)==null?void 0:n.Name},i)})}),e.jsx("div",{className:"",children:e.jsx("div",{ref:r,className:"lg:sticky h-[80vh] lg:h-auto overflow-hidden rounded-t-[25px] mobileDetails bg-black fixed z-50 w-full bottom-0 lg:top-0 lg:pt-10",children:e.jsxs("div",{className:"px-4",children:[a?e.jsx("div",{onClick:m,className:"h-[50px] sticky top-0 cursor-pointer bg-black flex lg:hidden items-center justify-center",children:e.jsx(P,{className:"text-white text-[40px]"})}):e.jsx("div",{onClick:x,className:"h-[50px] sticky top-0 cursor-pointer bg-black flex lg:hidden items-center justify-center",children:e.jsx(R,{className:"text-white text-[40px]"})}),e.jsx("h2",{className:"font-secondary text-white font-bold text-[30px] lg:text-[48px]",children:(h=s==null?void 0:s.data)==null?void 0:h.Name}),e.jsx("p",{className:" text-[#C8C7C7] font-medium lg:text-[20px] py-3  lg:py-10 leading-10 lg:w-2/3",children:(g=s==null?void 0:s.data)==null?void 0:g.Description}),e.jsx("h4",{className:"mt-3 lg:mt-10 text-[#C8C7C7] text-[20px]",children:(f=s==null?void 0:s.data)==null?void 0:f.MaterialName}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-5 text-[18px] font-medium text-white",children:o("custom-text.sizeProducts")}),e.jsx("div",{className:"flex gap-x-6 font-secondary items-center",children:(j=(w=s==null?void 0:s.data)==null?void 0:w.Sizes)==null?void 0:j.map((t,i)=>e.jsx("label",{className:"flex group items-center justify-center cursor-pointer",children:e.jsx("p",{className:"text-white border border-white px-4 py-2 font-bold rounded-md",children:t})}))})]}),e.jsxs("div",{className:"py-2 lg:py-5",children:[e.jsx("p",{className:"mb-5 text-[18px] font-medium text-white",children:o("custom-text.colors")}),e.jsx("div",{className:"flex gap-x-6 font-secondary items-center",children:(v=(N=s==null?void 0:s.data)==null?void 0:N.Colors)==null?void 0:v.map((t,i)=>e.jsx("div",{className:"w-10 h-10 rounded-full",style:{backgroundColor:t}}))})]}),e.jsxs("div",{className:"grid py-4 gap-4 lg:grid-cols-2",children:[e.jsx(T,{to:`/gallery/product/request/${d}`,children:e.jsx(b,{className:"w-full",text:o("placeholders.submit")})}),e.jsx(b,{text:o("custom-text.3d"),outline:!0})]})]})})})]})})})})}export{q as default};
