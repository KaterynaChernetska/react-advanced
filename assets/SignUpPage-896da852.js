import{e as N,u as j,r as n,j as a,P as o,N as v,s as S,f as I,L as U}from"./index-da287f64.js";import{I as i}from"./index-83eed51f.js";const y=()=>{const r=N(),d=j(),[u,l]=n.useState(""),[m,c]=n.useState(""),[s,p]=n.useState(""),g=e=>{c(e.target.value)},h=e=>{l(e.target.value)},f=e=>{p(e.target.value)},x=async e=>{if(e.preventDefault(),s.length<3||s.length>20)return r(o.SignUp),v.Notify.warning("Password must contain at least 3 characters and a maximum of 20 characters");const w=await d(S({fullName:u,email:m,password:s})),t=I(w);t!=null&&t.token&&r(o.Index),l(""),c(""),p("")};return a.jsxs("form",{className:"sign-up-form",onSubmit:x,autoComplete:"off",children:[a.jsx("h2",{className:"sign-up-form__title",children:"Sign Up"}),a.jsx(i,{heading:"Full name",testId:"auth-full-name",name:"full-name",type:"text",required:!0,value:u,onChange:h}),a.jsx(i,{heading:"Email",testId:"auth-email",name:"email",type:"email",required:!0,value:m,onChange:g}),a.jsx(i,{name:"password",testId:"auth-password",type:"password",heading:"Password",value:s,autoComplete:"new-password",onChange:f,required:!0}),a.jsx("button",{"data-test-id":"auth-submit",className:"button",type:"submit",children:"Sign Up"})]})};const F=()=>a.jsxs("main",{className:"sign-in-page",children:[a.jsx("h1",{className:"visually-hidden",children:"Travel App"}),a.jsx(y,{}),a.jsxs("span",{children:["Already have an account?"," ",a.jsx(U,{"data-test-id":"auth-sign-in-link",to:o.SignIn,className:"sign-up-form__link",children:"Sign In"})]})]});export{F as default};