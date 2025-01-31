"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[4778],{1861:(e,t,s)=>{s.r(t),s.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"type":"api","id":"add-user","title":"Add User","description":"","slug":"/add-user","frontMatter":{},"api":{"tags":["Users"],"description":"Add a new user to the database.","operationId":"add_user_api_v1_users__post","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"username":{"type":"string","title":"Username"},"password":{"type":"string","title":"Password"}},"type":"object","required":["username","password"],"title":"UserCreate"}}}},"responses":{"201":{"description":"Successful Response","content":{"application/json":{"schema":{"properties":{"id":{"type":"string","format":"uuid","title":"Id"},"username":{"type":"string","title":"Username"},"profile_image":{"anyOf":[{"type":"string"}],"title":"Profile Image","nullable":true},"store_api_key":{"anyOf":[{"type":"string"}],"title":"Store Api Key","nullable":true},"is_active":{"type":"boolean","title":"Is Active"},"is_superuser":{"type":"boolean","title":"Is Superuser"},"create_at":{"type":"string","format":"date-time","title":"Create At"},"updated_at":{"type":"string","format":"date-time","title":"Updated At"},"last_login_at":{"anyOf":[{"type":"string","format":"date-time"}],"title":"Last Login At","nullable":true}},"type":"object","required":["username","profile_image","store_api_key","is_active","is_superuser","create_at","updated_at","last_login_at"],"title":"UserRead"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"method":"post","path":"/api/v1/users/","parameters":[],"securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"jsonRequestBodyExample":{"username":"string","password":"string"},"info":{"title":"Langflow","version":"1.1.1"},"postman":{"name":"Add User","description":{"content":"Add a new user to the database.","type":"text/plain"},"url":{"path":["api","v1","users",""],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"},{"key":"Accept","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n  \\"username\\": \\"<string>\\",\\n  \\"password\\": \\"<string>\\"\\n}","options":{"raw":{"language":"json"}}}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/add-user","previous":{"title":"Read Basic Examples","permalink":"/api/read-basic-examples"},"next":{"title":"Read All Users","permalink":"/api/read-all-users"}}');var r=s(74848),n=s(28453);const a={},l="Add User",d=[];function o(e){const t={h1:"h1",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"add-user",children:"Add User"})}),"\n",(0,r.jsx)(t.p,{children:"Add a new user to the database."}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Request Body "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,r.jsx)("div",{})]})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"username"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Username"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"password"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Password"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})]})]}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)("code",{children:"201"})}),(0,r.jsx)("div",{children:(0,r.jsx)(t.p,{children:"Successful Response"})})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Schema "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{})]})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"id"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"username"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Username"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"profile_image"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Profile Image"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"store_api_key"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Store Api Key"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"is_active"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Is Active"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"is_superuser"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Is Superuser"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"create_at"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" date-time"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"updated_at"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" date-time"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"last_login_at"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Last Login At"})]})})]})]})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)("code",{children:"422"})}),(0,r.jsx)("div",{children:(0,r.jsx)(t.p,{children:"Validation Error"})})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Schema "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{})]})})}),(0,r.jsx)("tbody",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"detail"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"loc"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"msg"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"type"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>l});var i=s(96540);const r={},n=i.createContext(r);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);