import{_ as w,u as N,e as h}from"./events.05db819e.js";import{_ as T,o as m,c as r,a as e,t as c,b as _,p as S,e as R,F as g,r as v,n as b,g as x,h as u,v as f,f as l,i as y,j as B,k,w as L,T as E}from"./entry.6d8f4863.js";import"./vue.f36acd1f.7f9a0b13.js";import"./nuxt-link.40a7b7ad.js";const j=""+globalThis.__publicAssetsURL("images/ward.webp");const $=d=>(S("data-v-ce3c1978"),d=d(),R(),d),A={class:"bg-red-400 text-white flex flex-col md:flex-row justify-between"},V={class:"md:w-1/2 px-8 py-6 flex flex-col content-between"},F={class:"titles flex flex-col"},M={class:"uppercase text-lg md:text-2xl mb-2","data-aos":"fade-in","data-aos-delay":"300"},U={class:"text-3xl md:text-5xl","data-aos":"fade-left","data-aos-offset":"50"},q={class:"mt-4 md:mb-6 text-sm"},z={class:"text-sm","data-aos":"fade-in","data-aos-delay":"350"},D=$(()=>e("small",{class:"text-sm px-2","data-aos":"fade-in","data-aos-delay":"400"},"|",-1)),H={class:"text-sm","data-aos":"fade-in","data-aos-delay":"450"},I={class:"buttons space-x-2 mt-5 md:mt-10"},C=$(()=>e("div",{class:"md:w-1/2"},[e("img",{src:j,alt:"Ward Hayden & The Outliers (US) - press photo",class:"pb-4 md:py-8 ml-auto px-8 w-full md:w-auto"})],-1)),O={__name:"AppHero",props:["event"],setup(d){const a=d;return(p,t)=>{const s=w;return m(),r("div",A,[e("div",V,[e("div",F,[e("small",M,c(a.event.subtitle?a.event.subtitle:"Kommande Event"),1),e("h1",U,c(a.event.title),1)]),e("div",q,[e("time",z,c(a.event.date),1),D,e("small",H,c(a.event.location),1)]),e("div",I,[_(s,{text:"Biljetter",size:"lg",fill:!0,variant:"dark",link:a.event.ticketLink},null,8,["link"]),_(s,{text:"Mer info",size:"lg",variant:"light","internal-link":!0,link:"/events/"+a.event.slug},null,8,["link"])])]),C])}}},K=T(O,[["__scopeId","data-v-ce3c1978"]]),P={class:"text-lg font-bold"},W={class:"text-sm"},G=e("span",{class:"px-1"},"|",-1),J={class:"text-sm"},Q={class:"buttons flex space-x-2 float-right pr-4 mt-3"},X={class:"hidden md:table table-auto xl:table-fixed w-full"},Y=["data-aos-delay"],Z={class:"py-8 pl-4 w-2/6"},ee={class:"text-lg text-color font-bold"},te={class:"w-2/12"},se={class:"text-sm"},le={class:"w-1/6"},ae={class:"text-sm"},oe={class:"w-1/4"},ne={class:"buttons flex space-x-2 float-right pr-4"},ie={__name:"EventTable",props:["events"],setup(d){return(a,p)=>{const t=w;return m(),r("div",null,[(m(!0),r(g,null,v(d.events,s=>(m(),r("div",{class:b(["md:hidden row flex flex-col md:flex-row align-center justify-between w-full py-4 px-3",s.id%2!==0?"":"bg-layer-2"])},[e("h3",P,c(s.title),1),e("div",null,[e("time",W,c(s.date),1),G,e("small",J,c(s.location),1)]),e("div",Q,[_(t,{size:"lg",text:"Biljetter",fill:!0,link:s.ticketLink},null,8,["link"]),_(t,{size:"lg",variant:"light",text:"Mer info","internal-link":!0,link:"/events/"+s.slug,disabled:!s.published},null,8,["link","disabled"])])],2))),256)),e("table",X,[e("tbody",null,[(m(!0),r(g,null,v(d.events,(s,o)=>(m(),r("tr",{class:b(["py-6",o%2!==0?"":"bg-layer-2"]),"data-aos":"fade-up","data-aos-delay":(o+1)*200},[e("td",Z,[e("h3",ee,c(s.title),1)]),e("td",te,[e("time",se,c(s.date),1)]),e("td",le,[e("small",ae,c(s.location),1)]),e("td",oe,[e("div",ne,[_(t,{text:"Biljetter",fill:!0,link:s.ticketLink},null,8,["link"]),_(t,{variant:"light",text:"Mer info","internal-link":!0,link:"/events/"+s.slug,disabled:!s.published},null,8,["link","disabled"])])])],10,Y))),256))])])])}}},de=ie;const ce={class:"isolate px-6 py-24 sm:py-32 lg:px-8"},me=e("div",{class:"mx-auto max-w-2xl text-center"},[e("h2",{class:"text-3xl font-bold tracking-tight sm:text-4xl"}," Kontakta oss "),e("p",{class:"mt-2 text-lg leading-8"}," Har du några frågor om våra event, om Riff Raff Live! eller är ett band som vill spela? Tveka inte att kontakta oss! ")],-1),re=["onSubmit"],_e={class:"grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"},pe=e("label",{for:"first-name",class:"block text-sm font-semibold leading-6"},"Förnamn",-1),ue={class:"mt-2.5"},fe=e("label",{for:"last-name",class:"block text-sm font-semibold leading-6"},"Efternamn",-1),xe={class:"mt-2.5"},he={class:"sm:col-span-2"},ge=e("label",{for:"email",class:"block text-sm font-semibold leading-6"},"Email",-1),ve={class:"mt-2.5"},be={class:"sm:col-span-2"},ye=e("label",{for:"phone-number",class:"block text-sm font-semibold leading-6"},"Telefon nummer",-1),ke={class:"relative mt-2.5"},we={class:"sm:col-span-2"},$e=e("label",{for:"message",class:"block text-sm font-semibold leading-6"},"Meddelande",-1),Ne={class:"mt-2.5"},Te={key:0,class:"rounded-md bg-red-50 p-4 mt-5"},Se=e("div",{class:"flex"},[e("div",{class:"ml-3"},[e("p",{class:"text-sm font-medium text-green-800"},"Något gick fel, vänligen försök igen.")])],-1),Re=[Se],Be={key:1,class:"rounded-md bg-green-50 p-4 mt-5"},Le=e("div",{class:"flex"},[e("div",{class:"ml-3"},[e("p",{class:"text-sm font-medium text-green-800"},"Tack för ditt meddelande, vi återkommer så snart vi kan!")])],-1),Ee=[Le],je=e("div",{class:"mt-10"},[e("button",{type:"submit",class:"group relative inline-flex border focus:outline-none w-auto btn uppercase text-sm fill dark"},[e("span",{class:"inline-flex items-center justify-center self-stretch px-3 py-2 text-lg"}," Skicka ")])],-1),Ae={__name:"AppForm",setup(d){const a=x(!1),p=x(!1),t=x({firstName:"",surName:"",tel:"",email:"",message:""});async function s(){p.value=!1,p.value=!1;const o=new FormData;o.append("firstName",t.value.firstName),o.append("surName",t.value.surName),o.append("tel",t.value.tel),o.append("email",t.value.email),o.append("message",t.value.message),await $fetch("https://usebasin.com/f/a23d5bda0a91",{method:"POST",headers:{Accept:"application/json"},body:o}).then(()=>{a.value=!0}).catch(()=>{p.value=!0})}return(o,n)=>(m(),r("div",ce,[me,e("form",{onSubmit:B(s,["prevent"]),method:"POST",class:"mx-auto mt-16 max-w-xl sm:mt-20"},[e("div",_e,[e("div",null,[pe,e("div",ue,[u(e("input",{required:"","onUpdate:modelValue":n[0]||(n[0]=i=>l(t).firstName=i),type:"text",name:"first-name",id:"first-name",autocomplete:"given-name",class:"block form-bg w-full border-0 px-3.5 py-2 ring-0 focus:ring-0 text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"},null,512),[[f,l(t).firstName]])])]),e("div",null,[fe,e("div",xe,[u(e("input",{required:"","onUpdate:modelValue":n[1]||(n[1]=i=>l(t).surName=i),type:"text",name:"last-name",id:"last-name",autocomplete:"family-name",class:"block form-bg w-full border-0 px-3.5 py-2 ring-0 focus:ring-0 text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"},null,512),[[f,l(t).surName]])])]),e("div",he,[ge,e("div",ve,[u(e("input",{required:"",type:"email","onUpdate:modelValue":n[2]||(n[2]=i=>l(t).email=i),name:"email",id:"email",autocomplete:"email",class:"block form-bg w-full border-0 px-3.5 py-2 ring-0 focus:ring-0 text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"},null,512),[[f,l(t).email]])])]),e("div",be,[ye,e("div",ke,[u(e("input",{required:"",type:"tel","onUpdate:modelValue":n[3]||(n[3]=i=>l(t).tel=i),name:"phone-number",id:"phone-number",autocomplete:"tel",class:"block form-bg w-full border-0 px-3.5 py-2 ring-0 focus:ring-0 text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"},null,512),[[f,l(t).tel]])])]),e("div",we,[$e,e("div",Ne,[u(e("textarea",{required:"","onUpdate:modelValue":n[4]||(n[4]=i=>l(t).message=i),name:"message",id:"message",rows:"4",class:"block form-bg w-full border-0 px-3.5 py-2 ring-0 focus:ring-0 text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"},null,512),[[f,l(t).message]])])])]),l(p)?(m(),r("div",Te,Re)):y("",!0),l(a)?(m(),r("div",Be,Ee)):y("",!0),je],40,re)]))}},Ve=Ae;const Fe={id:"events"},Me={class:"upcoming mt-10 pb-10 px-3 lg:px-0"},Ue=e("h2",{class:"text-2xl font-bold mb-4"},"Kommande event",-1),Ie={__name:"index",setup(d){N({title:"Riff Raff Live!",ogTitle:"Riff Raff Live!",description:"Riff Raff Live events.",ogDescription:"Riff Raff Live events.",ogImage:"/images/logo.webp",twitterCard:"summary_large_image"});const a=k(()=>h.slice(0,1)[0]),p=k(()=>h.slice(1));return(t,s)=>{const o=K,n=de,i=Ve;return m(),r("div",null,[e("div",Fe,[_(E,null,{default:L(()=>[_(o,{event:l(a)},null,8,["event"])]),_:1}),e("div",Me,[Ue,_(n,{events:l(p)},null,8,["events"])]),_(i)])])}}};export{Ie as default};
