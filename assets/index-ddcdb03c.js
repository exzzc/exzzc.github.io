import{x as p,y as n,z as x,k as c,m as g,e as s,p as m,A as v}from"./index-967f395c.js";function z(){const e=n({show:!1}),r=d=>{e.show=d},t=d=>{c(e,d,{transitionAppear:!0}),r(!0)},i=()=>r(!1);return x({open:t,close:i,toggle:r}),{open:t,close:i,state:e,toggle:r}}function a(e){const r=p(e),t=document.createElement("div");return document.body.appendChild(t),{instance:r.mount(t),unmount(){r.unmount(),document.body.removeChild(t)}}}let o;const h={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function l(){({instance:o}=a({setup(){const{state:e,toggle:r}=z(),t=()=>{e.images=[]};return()=>s(v,m(e,{onClosed:t,"onUpdate:show":r}),null)}}))}const f=(e,r=0)=>{if(g)return o||l(),e=Array.isArray(e)?{images:e,startPosition:r}:e,o.open(c({},h,e)),o},b=["banner/1.png","banner/2.png","banner/3.png"],j=[{id:"fmhz58mm",text:"覆膜徽章58mm",order:2,children:[{id:"fmhz58mm-001",text:"爱莉",cover:["覆膜徽章58mm/爱莉.png"],order:1,price:10},{id:"fmhz58mm-008",text:"白露",cover:["覆膜徽章58mm/白露.JPG"],order:1,price:10},{id:"fmhz58mm-002",text:"符玄",cover:["覆膜徽章58mm/符玄.JPG"],order:2,price:10},{id:"fmhz58mm-003",text:"胡桃",cover:["覆膜徽章58mm/胡桃.JPG"],order:3,price:10},{id:"fmhz58mm-004",text:"纳西妲",cover:["覆膜徽章58mm/纳西妲.png"],order:4,price:10},{id:"fmhz58mm-005",text:"申鹤",cover:["覆膜徽章58mm/申鹤.JPG"],order:5,price:10},{id:"fmhz58mm-006",text:"神里JK",cover:["覆膜徽章58mm/神里JK.JPG"],order:6,price:10},{id:"fmhz58mm-007",text:"宵宫",cover:["覆膜徽章58mm/宵宫.png"],order:7,price:10}]},{id:"sshz75mm",text:"双闪徽章75mm",order:2,children:[{id:"fmhz75mm-001",text:"胡桃",cover:["双闪徽章75mm/胡桃.JPG"],order:1,price:16},{id:"fmhz75mm-002",text:"申鹤",cover:["双闪徽章75mm/申鹤.JPG"],order:2,price:16},{id:"fmhz75mm-003",text:"爱莉",cover:["双闪徽章75mm/爱莉.png"],order:3,price:16},{id:"fmhz75mm-004",text:"宵宫",cover:["双闪徽章75mm/宵宫.png"],order:4,price:16},{id:"fmhz75mm-005",text:"纳西妲",cover:["双闪徽章75mm/纳西妲.png"],order:5,price:16}]},{id:"tk",text:"透卡",order:3,children:[{id:"tk-001",text:"宵宫",cover:["透卡/宵宫.png"],order:1,price:7},{id:"tk-002",text:"符玄",cover:["透卡/符玄.png"],order:2,price:7},{id:"tk-003",text:"胡桃",cover:["透卡/胡桃.png"],order:3,price:7},{id:"tk-004",text:"申鹤",cover:["透卡/申鹤.png"],order:4,price:7},{id:"tk-005",text:"神里",cover:["透卡/神里.png"],order:5,price:7}]},{id:"mxp",text:"明信片",order:4,children:[{id:"mxp-001",text:"原神套装",cover:["明信片/原神套装共7张.png"],order:1,price:15}]},{id:"bzdzx",text:"抱枕带枕芯",order:5,children:[{id:"bzdzx-001",text:"符玄",cover:["抱枕带枕芯/符玄.png"],order:1,price:50},{id:"bzdzx-002",text:"胡桃",cover:["抱枕带枕芯/胡桃.png"],order:2,price:50},{id:"bzdzx-003",text:"纳西妲",cover:["抱枕带枕芯/纳西妲.png"],order:3,price:50},{id:"bzdzx-004",text:"绮良良",cover:["抱枕带枕芯/绮良良.png"],order:1,price:50},{id:"bzdzx-005",text:"申鹤",cover:["抱枕带枕芯/申鹤.png"],order:1,price:50},{id:"bzdzx-006",text:"神里JK",cover:["抱枕带枕芯/神里JK.png"],order:1,price:50},{id:"bzdzx-007",text:"神里花时来信",cover:["抱枕带枕芯/神里花时来信.png"],order:1,price:50},{id:"bzdzx-008",text:"更多款式见米游铺",cover:["抱枕带枕芯/更多款式见米游铺1.png"],order:1,price:30},{id:"bzdzx-009",text:"更多款式见米游铺",cover:["抱枕带枕芯/更多款式见米游铺2.png"],order:1,price:30},{id:"bzdzx-010",text:"更多款式见米游铺",cover:["抱枕带枕芯/更多款式见米游铺3.png"],order:1,price:30}]},{id:"gh",text:"挂画",order:6,children:[{id:"gh-001",text:"爱莉",cover:["挂画/爱莉.png"],order:1,price:42},{id:"gh-002",text:"珐露珊",cover:["挂画/珐露珊.png"],order:5,price:42},{id:"gh-003",text:"符玄",cover:["挂画/符玄.jpg"],order:1,price:42},{id:"gh-004",text:"胡桃",cover:["挂画/胡桃.png"],order:1,price:42},{id:"gh-005",text:"莱依拉",cover:["挂画/莱依拉.png"],order:4,price:42},{id:"gh-006",text:"纳西妲",cover:["挂画/纳西妲.jpg"],order:1,price:42},{id:"gh-007",text:"绮良良",cover:["挂画/绮良良.jpg"],order:2,price:42},{id:"gh-008",text:"申鹤",cover:["挂画/申鹤.png"],order:1,price:42},{id:"gh-009",text:"神里JK",cover:["挂画/神里JK.jpg"],order:1,price:42},{id:"gh-010",text:"神里花时来信",cover:["挂画/神里花时来信.jpg"],order:1,price:42},{id:"gh-011",text:"更多款式见米游铺",cover:["挂画/更多款式见米游铺1.png"],order:5,price:42},{id:"gh-012",text:"更多款式见米游铺",cover:["挂画/更多款式见米游铺2.png"],order:5,price:42},{id:"gh-013",text:"更多款式见米游铺",cover:["挂画/更多款式见米游铺3.png"],order:1,price:42}]},{id:"pld",text:"拍立得",order:7,children:[{id:"pld-001",text:"爱莉",cover:["拍立得/爱莉.png"],order:1,price:4},{id:"pld-002",text:"喵咕酱",cover:["拍立得/喵咕酱.png"],order:1,price:4},{id:"pld-003",text:"原神套装",cover:["拍立得/原神套装.png"],order:1,price:10}]},{id:"sz",text:"色纸",order:8,children:[{id:"sz-001",text:"爱莉",cover:["色纸/爱莉.png"],order:1,price:20},{id:"sz-002",text:"珐露珊",cover:["色纸/珐露珊.png"],order:5,price:20},{id:"sz-003",text:"菲谢尔",cover:["色纸/珐露珊.png"],order:4,price:20},{id:"sz-004",text:"归终",cover:["色纸/归终.png"],order:1,price:20},{id:"sz-005",text:"胡桃",cover:["色纸/胡桃.png"],order:1,price:20},{id:"sz-006",text:"刻晴",cover:["色纸/刻晴.png"],order:2,price:20},{id:"sz-007",text:"莱依拉",cover:["色纸/莱依拉.png"],order:3,price:20},{id:"sz-008",text:"喵咕酱",cover:["色纸/喵咕酱.png"],order:2,price:20},{id:"sz-009",text:"纳西妲",cover:["色纸/纳西妲.png"],order:1,price:20},{id:"sz-010",text:"妮露",cover:["色纸/妮露.png"],order:2,price:20},{id:"sz-011",text:"少女",cover:["色纸/少女.png"],order:2,price:20},{id:"sz-012",text:"申鹤",cover:["色纸/申鹤.png"],order:1,price:20},{id:"sz-013",text:"神里JK",cover:["色纸/神里JK.png"],order:1,price:20},{id:"sz-014",text:"神子",cover:["色纸/神子.png"],order:3,price:20},{id:"sz-015",text:"宵宫",cover:["色纸/宵宫.png"],order:2,price:20},{id:"sz-016",text:"荧",cover:["色纸/荧.png"],order:3,price:20},{id:"sz-017",text:"神里花时来信",cover:["色纸/神里花时来信.jpg"],order:1,price:20}]},{id:"ysk",text:"钥匙扣",order:9,children:[{id:"ysk-001",text:"爱莉",cover:["钥匙扣/爱莉.png"],order:1,price:18},{id:"ysk-002",text:"白露",cover:["钥匙扣/白露.png"],order:3,price:18},{id:"ysk-003",text:"胡桃",cover:["钥匙扣/胡桃.png"],order:1,price:18},{id:"ysk-004",text:"纳西妲",cover:["钥匙扣/纳西妲.png"],order:1,price:18},{id:"ysk-005",text:"申鹤",cover:["钥匙扣/申鹤.png"],order:1,price:18},{id:"ysk-006",text:"神里",cover:["钥匙扣/神里.png"],order:1,price:18},{id:"ysk-007",text:"刻晴、荧款见米游铺",cover:["钥匙扣/刻晴、荧款见米游铺.png"],order:2,price:18}]},{id:"sjzj",text:"手机支架",order:10,children:[{id:"sjzj-001",text:"爱莉",cover:["手机支架/爱莉.jpg"],order:2,price:25},{id:"sjzj-002",text:"胡桃",cover:["手机支架/胡桃.png"],order:1,price:25},{id:"sjzj-003",text:"申鹤",cover:["手机支架/申鹤.jpg"],order:2,price:25},{id:"sjzj-004",text:"神里",cover:["手机支架/神里.png"],order:1,price:25}]},{id:"lp-011",text:"立牌",order:11,children:[{id:"lp-001",text:"符玄",cover:["立牌/符玄.jpg"],order:2,price:35},{id:"lp-002",text:"归终",cover:["立牌/归终.png"],order:1,price:35},{id:"lp-003",text:"胡桃",cover:["立牌/胡桃.jpg"],order:2,price:35},{id:"lp-004",text:"纳西妲",cover:["立牌/纳西妲.png"],order:1,price:35},{id:"lp-005",text:"其他款式见米游铺",cover:["立牌/见米游铺.png"],order:2,price:40}]},{id:"3dkbsz",text:"3D可变扇子",order:12,children:[{id:"3dkbsz-001",text:"申鹤",cover:["3D可变扇子/申鹤.png"],order:1,price:15}]},{id:"hd!!!",text:"活动！！！",order:1,children:[{id:"hd!!!-001",text:"关注B站（喵咕君QvQ）领无料",cover:["活动！！！/关注B站（喵咕君QvQ）领无料.png"],order:1,price:0},{id:"hd!!!-002",text:"满40刮奖必得奖品",cover:["活动！！！/满40刮奖必得奖品.png"],order:2,price:0},{id:"hd!!!-003",text:"更多商品扫码前往米游社店铺",cover:["活动！！！/更多商品扫码前往米游社店铺.png"],order:3,price:0}]}];export{b,j as d,a as m,f as s,z as u};
