import{e as x,u as f,r as l,j as a,N as I,h as j,f as w,P as e,L as v}from"./index-4c59b009.js";import{I as c}from"./index-4940d321.js";const N=()=>{const i=x(),m=f(),[o,r]=l.useState(""),[t,u]=l.useState(""),d=s=>{r(s.target.value)},g=s=>{u(s.target.value)},h=async s=>{if(s.preventDefault(),t.length<3||t.length>20)return I.Notify.warning("Password must contain at least 3 characters and a maximum of 20 characters");const p=await m(j({email:o,password:t})),n=w(p);n!=null&&n.token&&i(e.Index),r(""),u(""),i(e.Index)};return a.jsxs("form",{className:"sign-in-form",autoComplete:"off",onSubmit:h,children:[a.jsx("h2",{className:"sign-in-form__title",children:"Sign In"}),a.jsx(c,{heading:"Email",testId:"auth-email",name:"email",type:"email",required:!0,value:o,onChange:d}),a.jsx(c,{name:"password",testId:"auth-password",type:"password",heading:"Password",value:t,onChange:g,required:!0}),a.jsx("button",{"data-test-id":"auth-submit",className:"button",type:"submit",children:"Sign In"})]})};const y=()=>a.jsxs("main",{className:"sign-in-page",children:[a.jsx("h1",{className:"visually-hidden",children:"Travel App"}),a.jsx(N,{}),a.jsxs("span",{children:["Don't have an account?"," ",a.jsx(v,{"data-test-id":"auth-sign-up-link",to:e.SignUp,className:"sign-in-form__link",children:"Sign Up"})]})]});export{y as default};
