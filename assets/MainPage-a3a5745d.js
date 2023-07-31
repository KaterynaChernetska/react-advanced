import{j as e,u as d,a as n,b as u,g as o,L as x,P as m,S as j,r as v}from"./index-4c59b009.js";import{I as f,T as g,a as y}from"./index-c6ac1b8b.js";const N=({value:s,title:t,name:a,placeholder:l,testId:i,type:r,onChange:c})=>e.jsxs("label",{className:"trips-filter__search input",children:[e.jsx("span",{className:"visually-hidden",children:t}),e.jsx("input",{value:s,"data-test-id":i,name:a,type:r,placeholder:l,onChange:c})]}),h=s=>s.filter,T=()=>{const s=d(),{search:t,duration:a,level:l}=n(h),i=async r=>{const{name:c,value:p}=r.target;s(u({name:c,value:p})),await s(o({search:t,duration:a,level:l})).unwrap()};return e.jsxs("section",{className:"trips-filter",children:[e.jsx("h2",{className:"visually-hidden",children:"Trips filter"}),e.jsxs("form",{className:"trips-filter__form",autoComplete:"off",children:[e.jsx(N,{value:t,testId:"filter-search",name:"search",type:"search",placeholder:"search by title",title:"Search by name",onChange:i}),e.jsxs("label",{className:"select",children:[e.jsx("span",{className:"visually-hidden",children:"Search by duration"}),e.jsxs("select",{"data-test-id":"filter-duration",name:"duration",onChange:i,value:a,children:[e.jsx("option",{value:"",children:"duration"}),e.jsx("option",{value:"0_x_5",children:"< 5 days"}),e.jsx("option",{value:"5_x_10",children:"< 10 days"}),e.jsx("option",{value:"10_x",children:"≥ 10 days"})]})]}),e.jsxs("label",{className:"select",children:[e.jsx("span",{className:"visually-hidden",children:"Search by level"}),e.jsxs("select",{"data-test-id":"filter-level",name:"level",onChange:i,value:l,children:[e.jsx("option",{value:"",children:"level"}),e.jsx("option",{value:"easy",children:"easy"}),e.jsx("option",{value:"moderate",children:"moderate"}),e.jsx("option",{value:"difficult",children:"difficult"})]})]})]})]})};const _=({id:s,title:t,level:a,duration:l,price:i,image:r})=>e.jsxs("li",{"data-test-id":"trip-card",className:"trip-card",children:[e.jsx(f,{className:"image","data-test-id":"trip-card-image",src:r,alt:`${t} photo`}),e.jsxs("div",{className:"trip-card__content",children:[e.jsx(g,{title:t,duration:l,level:a,container:"card"}),e.jsx(y,{price:i,container:"card"})]}),e.jsx(x,{"data-test-id":"trip-card-link",to:`${m.Trip}/${s}`,className:"button",children:"Discover a trip"})]}),b=({filteredTrips:s,loading:t})=>e.jsxs("section",{className:"trips",children:[e.jsx("h2",{className:"visually-hidden",children:"Trips List"}),t?e.jsx(j,{}):e.jsx("ul",{className:"trip-list",children:s.length>0?s.map(a=>e.jsx(_,{id:a.id,title:a.title,level:a.level,duration:a.duration,price:a.price,image:a.image},a.id)):e.jsx("p",{className:"no-trips-text",children:"Sorry, there are no trips according your filter"})})]}),I=s=>s.trips.loading,L=s=>s.trips.trips,C=()=>{const s=d(),t=n(I),a=n(L),{search:l,duration:i,level:r}=n(h);return v.useEffect(()=>{s(o({search:l,duration:i,level:r}))},[s,l,r,i]),e.jsxs("main",{children:[e.jsx("h1",{className:"visually-hidden",children:"Travel App"}),e.jsx(T,{}),e.jsx(b,{filteredTrips:a,loading:t})]})};export{C as default};
