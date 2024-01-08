import{u as g,_ as v,o as l,c as o,a as t,t as a,m as k,n as u,b as r,F as _,r as p,f as y,g as f,h}from"./entry.67e5ff77.js";import{u as w}from"./vue.f36acd1f.0567299c.js";function $(s,i){const{title:c,titleTemplate:n,...e}=s;return w({title:c,titleTemplate:n,_flatMeta:e},{...i,transform(d){const m=g({...d._flatMeta});return delete d._flatMeta,{...d,meta:m}}})}const B=["href"],L={__name:"BaseButton",props:{text:String,size:{type:String,default:"md"},variant:{type:String,default:"dark"},fill:{type:Boolean,default:!1},link:String,disabled:Boolean},setup(s){return(i,c)=>(l(),o("a",{href:s.link,target:"_blank",class:u(["group relative inline-flex border focus:outline-none w-auto btn uppercase text-sm",s.fill?"fill":"",s.variant==="light"?"light":"dark",s.disabled||s.link==="#"?"disabled":""])},[t("span",k(i.$attrs,{class:["px-2 py-1 inline-flex items-center justify-center self-stretch",s.size==="lg"?"px-3 py-2 text-lg":""]}),a(s.text),17)],10,B))}},x=v(L,[["__scopeId","data-v-ccd7571d"]]),T=""+globalThis.__publicAssetsURL("images/ward.webp"),S={class:"hero bg-red-400 text-white flex flex-col md:flex-row justify-between"},j={class:"md:w-1/2 px-8 py-6 flex flex-col content-between"},H={class:"titles flex flex-col"},M={class:"uppercase text-lg md:text-2xl mb-2"},R={class:"text-3xl md:text-5xl"},O={class:"mt-4 md:mb-6 text-sm"},A={class:"text-sm"},E=t("small",{class:"text-sm px-2"},"|",-1),z={class:"text-sm"},W={class:"buttons space-x-2 mt-5 md:mt-10"},P=t("div",{class:"md:w-1/2"},[t("img",{src:T,alt:"Ward Hayden & The Outliers (US) - press photo",class:"pb-4 md:py-8 ml-auto px-8 w-full md:w-auto"})],-1),I={__name:"AppHero",props:["event"],setup(s){const i=s;return(c,n)=>{const e=x;return l(),o("div",S,[t("div",j,[t("div",H,[t("small",M,a(i.event.subtitle?i.event.subtitle:"Kommande Event"),1),t("h1",R,a(i.event.title),1)]),t("div",O,[t("time",A,a(i.event.date),1),E,t("small",z,a(i.event.location),1)]),t("div",W,[r(e,{text:"Biljetter",size:"lg",fill:!0,variant:"light",link:i.event.ticketLink},null,8,["link"]),r(e,{text:"Mer info",size:"lg",variant:"light",class:"bg-red-400",link:"#"})])]),P])}}},q=I,D={class:"text-lg font-bold"},F={class:"text-sm"},K=t("span",{class:"px-1"},"|",-1),U={class:"text-sm"},C={class:"buttons flex space-x-2 float-right pr-4 mt-3"},N={class:"hidden md:table table-auto xl:table-fixed w-full"},V={class:"py-8 pl-4 w-2/6"},G={class:"text-lg font-bold"},J={class:"w-2/12"},Q={class:"text-sm"},X={class:"w-1/6"},Y={class:"text-sm"},Z={class:"w-1/4"},tt={class:"buttons flex space-x-2 float-right pr-4"},et={__name:"EventTable",props:["events"],setup(s){return(i,c)=>{const n=x;return l(),o("div",null,[(l(!0),o(_,null,p(s.events,e=>(l(),o("div",{class:u(["md:hidden row flex flex-col md:flex-row align-center justify-between w-full py-4 px-3",e.id%2!==0?"":"bg-gray-200"])},[t("h3",D,a(e.title),1),t("div",null,[t("time",F,a(e.date),1),K,t("small",U,a(e.location),1)]),t("div",C,[r(n,{text:"Biljetter",fill:!0,link:e.ticketLink},null,8,["link"]),r(n,{text:"Mer info",disabled:""})])],2))),256)),t("table",N,[t("tbody",null,[(l(!0),o(_,null,p(s.events,e=>(l(),o("tr",{class:u(["py-6",e.id%2!==0?"":"bg-gray-200"])},[t("td",V,[t("h3",G,a(e.title),1)]),t("td",J,[t("time",Q,a(e.date),1)]),t("td",X,[t("small",Y,a(e.location),1)]),t("td",Z,[t("div",tt,[r(n,{text:"Biljetter",fill:!0,link:e.ticketLink},null,8,["link"]),r(n,{text:"Mer info",disabled:""})])])],2))),256))])])])}}},st=et,it={id:"events"},at={class:"upcoming mt-10 pb-10 px-3 lg:px-0"},nt=t("h2",{class:"text-2xl font-bold mb-4 text-gray-700"},"Kommande event",-1),rt={__name:"index",setup(s){$({title:"Riff Raff Live!",ogTitle:"Riff Raff Live!",description:"Riff Raff Live events.",ogDescription:"Riff Raff Live events.",ogImage:"/images/logo.webp",twitterCard:"summary_large_image"});const i=y([{id:1,title:"Ward Hayden & The Outliers (US)",subtitle:"Klubb Rootsy",date:"1 feb",location:"Gränden",img:"",body:"Oemotståndliga Ward Hayden & The Outliers gjorde en succéturné här våren 2023 och önskemålen, eller rent av kraven, att de ska komma tillbaka snart har varit många och högljudda. Så, i januari 2024 återvänder Ward Hayden och hans band! Med sin bitterljuva hybrid av traditionell country, klassisk rock 'n' roll och nutida Americana har de blivit publikfavoriter i Skandinavien. I samband med turnén släpps även Ward Hayden & The Outliers nya album. En platta där Hayden tagit ett stort kliv framåt som låtskrivare och där bandet vidgat sin musikaliska palett ytterligare. De medryckande upptempo-låtarna vi vant oss vid kompletteras nu med några storslagna ballader som tydligt visar att Ward Hayden & The Outliers vuxit till sig utan att förlora sin spontana charm.",ticketLink:"https://secure.tickster.com/en/e1wdtzwvpk3g0yr/products",published:!0},{id:2,title:"Our Man In The Field",date:"2 maj",location:"Plats: TBA",img:"",body:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",ticketLink:"#",published:!0},{id:3,title:"Trapper Schoepp",date:"2 mars",location:"Plats: TBA",img:"",body:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",ticketLink:"http://some.se",published:!0},{id:4,title:"Pink Stones",date:"24 april",location:"Plats: TBA",img:"",body:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",ticketLink:"#",published:!0}]),c=f(()=>i.value.slice(0,1)[0]),n=f(()=>i.value.slice(1,4));return(e,d)=>{const m=q,b=st;return l(),o("div",null,[t("div",it,[r(m,{event:h(c)},null,8,["event"]),t("div",at,[nt,r(b,{events:h(n)},null,8,["events"])])])])}}};export{rt as default};
