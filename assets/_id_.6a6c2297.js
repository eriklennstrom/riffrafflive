import{e as r,u as c,_ as n}from"./events.f5771923.js";import{f as d,c as p,a as t,g as s,t as o,b as _,F as f,o as m}from"./entry.3e0d4130.js";import"./nuxt-link.029d019e.js";const u={class:"bg-red-400 text-white flex flex-col md:flex-row justify-between max-h-500"},h=["src","alt"],g={class:"py-6 px-4"},x={class:"text-3xl md:text-5xl"},b={class:"grid gap-4 md:grid-cols-5"},y={class:"col-span-3"},w={class:"p-5 bg-layer-2"},v={class:"whitespace-pre-line first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left"},k=["src"],B={class:"col-span-2 p-5 order-first md:order-none"},R=t("h2",{class:"text-xl font-bold"},"Information & Köp",-1),j={class:"mb-5"},L={class:"py-2"},N={__name:"[id]",setup(z){const l=d(),e=r.find(i=>i.slug===l.params.id);return c({title:e.title+" - Riff Raff Live!",ogTitle:e.title+" - Riff Raff Live!",description:e.body,ogDescription:e.body,ogImage:"/images/"+e.img,twitterCard:"/images/"+e.img}),(i,D)=>{const a=n;return m(),p(f,null,[t("div",u,[t("img",{src:"/images/"+s(e).img,alt:s(e).title+" - press photo",class:"object-cover p-2 w-full object-top"},null,8,h)]),t("div",g,[t("h1",x,o(s(e).title),1)]),t("div",b,[t("article",y,[t("div",w,[t("p",v,o(s(e).body),1)]),t("iframe",{class:"mt-3 mb-5",style:{"border-radius":"0px"},src:"https://open.spotify.com/embed/artist/"+s(e).spotify+"?utm_source=generator&theme=0",width:"100%",height:"352",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,8,k)]),t("aside",B,[R,t("ul",j,[t("li",L,[t("p",null,o(s(e).date),1)]),t("li",null,[t("p",null,o(s(e).location),1)])]),_(a,{class:"w-full",size:"lg",text:"Köp biljett",fill:!0,variant:"red",link:s(e).ticketLink},null,8,["link"])])])],64)}}};export{N as default};
