import{_ as N,a as P,b as V,c as M,d as T,e as q,f as z,g as E,h as F,i as Q,j as R,k as U,l as $,m as A,n as G,o as H,p as W,q as X,r as Y,s as Z,t as __,u as i_,v as a_,w as t_,x as s_,y as e_,z as g_,A as c_,B as l_,C as p_,D as o_,E as n_,F as b_,G as m_,H as u_,I as v_,J as r_,K as d_,L as f_,M as h_,N as y_,O as w_,P as x_,Q as O_,R as C_,S as j_,T as k_,U as I_,V as S_,W as J_,X as D_,Y as K_,Z as B_,$ as L_,a0 as N_,a1 as P_,a2 as V_,a3 as M_,a4 as T_,a5 as q_,a6 as z_,a7 as E_,a8 as F_,a9 as Q_,aa as R_,ab as U_,ac as $_,ad as A_,ae as G_,af as H_,ag as W_,ah as X_,ai as Y_,aj as Z_,ak as _i,al as ii,am as ai,an as ti,ao as si,ap as ei,aq as gi,ar as ci,as as li,at as pi,au as oi,av as ni,aw as bi,ax as mi,ay as ui,az as vi,aA as ri,aB as di,aC as fi,aD as hi,aE as yi,aF as wi,aG as xi,aH as Oi,aI as Ci,aJ as ji,aK as ki,aL as Ii,aM as Si,aN as Ji,aO as Di,aP as Ki,aQ as Bi,aR as Li,aS as Ni,aT as Pi,aU as Vi,aV as Mi,aW as Ti,aX as qi,aY as zi,aZ as Ei,a_ as Fi,a$ as Qi,b0 as Ri}from"./胡桃1-10dd70e0.js";import{m as Ui,u as $i,d as Ai,s as Gi}from"./index-e9428aba.js";import{l as w,m as Hi,n as Wi,r as S,w as Xi,p as Yi,e as l,q as Zi,s as _a,d as ia,i as aa,u as ta,v as C,a as p,c as j,b as c,f as u,t as v,g as y,F as sa,h as ea,j as ga,x as ca}from"./index-0c0582e2.js";const la={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let r=[],pa=!1,k=w({},la);const oa=new Map;function J(i){return Hi(i)?i:{message:i}}function na(){const{instance:i,unmount:e}=Ui({setup(){const t=S(""),{open:d,state:a,close:o,toggle:g}=$i(),f=()=>{},n=()=>l(_a,Zi(a,{onClosed:f,"onUpdate:show":g}),null);return Xi(t,b=>{a.message=b}),Yi().render=n,{open:d,close:o,message:t}}});return i}function ba(){if(!r.length||pa){const i=na();r.push(i)}return r[r.length-1]}function ma(i={}){if(!Wi)return{};const e=ba(),t=J(i);return e.open(w({},k,oa.get(t.type||k.type),t)),e}const ua=i=>e=>ma(w({type:i},J(e))),I=ua("success"),va={class:"detail-view"},ra={class:"cover-box"},da={class:"message-box"},fa={class:"item-price"},ha={class:"item-title"},ya={class:"item-desc"},wa={class:"toolbar-box"},ka=ia({__name:"DetailView",setup(i){const e=aa("router"),t=_=>new URL(Object.assign({"/public/static/images/3D可变扇子/申鹤.png":N,"/public/static/images/3D可变扇子/申鹤1.png":P,"/public/static/images/3D可变扇子/申鹤2.png":V,"/public/static/images/3D可变扇子/申鹤3.png":M,"/public/static/images/3D可变扇子/申鹤4.png":T,"/public/static/images/banner/1.png":q,"/public/static/images/banner/2.png":z,"/public/static/images/banner/3.png":E,"/public/static/images/banner/4.png":F,"/public/static/images/双闪徽章58mm/宵宫.png":Q,"/public/static/images/双闪徽章58mm/申鹤.png":R,"/public/static/images/双闪徽章58mm/神里JK.png":U,"/public/static/images/双闪徽章58mm/纳西妲.png":$,"/public/static/images/双闪徽章75mm/宵宫.png":A,"/public/static/images/双闪徽章75mm/爱莉.png":G,"/public/static/images/双闪徽章75mm/申鹤.png":H,"/public/static/images/双闪徽章75mm/纳西妲.png":W,"/public/static/images/双闪徽章75mm/胡桃.png":X,"/public/static/images/手机支架/爱莉.png":Y,"/public/static/images/手机支架/申鹤.png":Z,"/public/static/images/手机支架/神里.png":__,"/public/static/images/手机支架/胡桃.png":i_,"/public/static/images/抱枕带枕芯/更多款式见米游铺1.png":a_,"/public/static/images/抱枕带枕芯/更多款式见米游铺2.png":t_,"/public/static/images/抱枕带枕芯/更多款式见米游铺3.png":s_,"/public/static/images/抱枕带枕芯/申鹤.png":e_,"/public/static/images/抱枕带枕芯/神里JK.png":g_,"/public/static/images/抱枕带枕芯/神里花时来信.png":c_,"/public/static/images/抱枕带枕芯/符玄.png":l_,"/public/static/images/抱枕带枕芯/纳西妲.png":p_,"/public/static/images/抱枕带枕芯/绮良良.png":o_,"/public/static/images/抱枕带枕芯/胡桃.png":n_,"/public/static/images/拍立得/原神套装.png":b_,"/public/static/images/拍立得/原神套装1.png":m_,"/public/static/images/拍立得/原神套装2.png":u_,"/public/static/images/拍立得/原神套装3.png":v_,"/public/static/images/拍立得/喵咕酱.png":r_,"/public/static/images/拍立得/爱莉.png":d_,"/public/static/images/挂画/更多款式见米游铺1.png":f_,"/public/static/images/挂画/更多款式见米游铺2.png":h_,"/public/static/images/挂画/更多款式见米游铺3.png":y_,"/public/static/images/挂画/爱莉.png":w_,"/public/static/images/挂画/珐露珊.png":x_,"/public/static/images/挂画/申鹤.png":O_,"/public/static/images/挂画/神里JK.png":C_,"/public/static/images/挂画/神里花时来信.png":j_,"/public/static/images/挂画/符玄.png":k_,"/public/static/images/挂画/纳西妲.png":I_,"/public/static/images/挂画/绮良良.png":S_,"/public/static/images/挂画/胡桃.png":J_,"/public/static/images/挂画/荧.png":D_,"/public/static/images/挂画/莱依拉.png":K_,"/public/static/images/明信片/原神套装共7张.png":B_,"/public/static/images/活动！！！/关注B站（喵咕君QvQ）领无料.png":L_,"/public/static/images/活动！！！/更多商品扫码前往米游社店铺.png":N_,"/public/static/images/活动！！！/满40刮奖必得奖品.png":P_,"/public/static/images/立牌/归终.png":V_,"/public/static/images/立牌/符玄.jpg":M_,"/public/static/images/立牌/纳西妲.png":T_,"/public/static/images/立牌/胡桃.jpg":q_,"/public/static/images/立牌/见米游铺.png":z_,"/public/static/images/色纸/刻晴.png":E_,"/public/static/images/色纸/喵咕酱.png":F_,"/public/static/images/色纸/妮露.png":Q_,"/public/static/images/色纸/宵宫.png":R_,"/public/static/images/色纸/少女.png":U_,"/public/static/images/色纸/归终.png":$_,"/public/static/images/色纸/爱莉.png":A_,"/public/static/images/色纸/珐露珊.png":G_,"/public/static/images/色纸/瑶瑶.png":H_,"/public/static/images/色纸/申鹤.png":W_,"/public/static/images/色纸/神子.png":X_,"/public/static/images/色纸/神里JK.png":Y_,"/public/static/images/色纸/神里花时来信.png":Z_,"/public/static/images/色纸/纳西妲.png":_i,"/public/static/images/色纸/胡桃.png":ii,"/public/static/images/色纸/胡桃1.jpg":ai,"/public/static/images/色纸/胡桃2.jpg":ti,"/public/static/images/色纸/荧.png":si,"/public/static/images/色纸/莱依拉.png":ei,"/public/static/images/色纸/菲谢尔.png":gi,"/public/static/images/覆膜徽章58mm/宵宫.png":ci,"/public/static/images/覆膜徽章58mm/归终.png":li,"/public/static/images/覆膜徽章58mm/爱莉.png":pi,"/public/static/images/覆膜徽章58mm/申鹤.png":oi,"/public/static/images/覆膜徽章58mm/白露.png":ni,"/public/static/images/覆膜徽章58mm/白露1.jpg":bi,"/public/static/images/覆膜徽章58mm/神子.png":mi,"/public/static/images/覆膜徽章58mm/神里JK.png":ui,"/public/static/images/覆膜徽章58mm/神里JK1.jpg":vi,"/public/static/images/覆膜徽章58mm/神里JK2.jpg":ri,"/public/static/images/覆膜徽章58mm/神里花时来信.png":di,"/public/static/images/覆膜徽章58mm/符玄.png":fi,"/public/static/images/覆膜徽章58mm/纳西妲.png":hi,"/public/static/images/覆膜徽章58mm/胡桃.png":yi,"/public/static/images/覆膜徽章58mm/胡桃1.png":wi,"/public/static/images/角色立牌/归终.png":xi,"/public/static/images/角色立牌/符玄.jpg":Oi,"/public/static/images/角色立牌/纳西妲.png":Ci,"/public/static/images/角色立牌/胡桃.jpg":ji,"/public/static/images/角色立牌/见米游铺.png":ki,"/public/static/images/透卡/宵宫.png":Ii,"/public/static/images/透卡/申鹤.png":Si,"/public/static/images/透卡/神里.png":Ji,"/public/static/images/透卡/符玄.png":Di,"/public/static/images/透卡/胡桃.png":Ki,"/public/static/images/钥匙扣/刻晴、荧款见米游铺.png":Bi,"/public/static/images/钥匙扣/爱莉.png":Li,"/public/static/images/钥匙扣/爱莉1.png":Ni,"/public/static/images/钥匙扣/申鹤.png":Pi,"/public/static/images/钥匙扣/申鹤1.png":Vi,"/public/static/images/钥匙扣/白露.png":Mi,"/public/static/images/钥匙扣/白露1.png":Ti,"/public/static/images/钥匙扣/神里.png":qi,"/public/static/images/钥匙扣/神里1.png":zi,"/public/static/images/钥匙扣/纳西妲.png":Ei,"/public/static/images/钥匙扣/纳西妲1.png":Fi,"/public/static/images/钥匙扣/胡桃.png":Qi,"/public/static/images/钥匙扣/胡桃1.png":Ri})[`/public/static/images/${_}`],self.location),d=ta(),a=C(()=>{let _;try{Ai.forEach(s=>{var m;if(_=(m=s.children)==null?void 0:m.find(h=>h.id===d.params.id),_)throw _.type=s.text,"break"})}catch{}return _}),o=localStorage.getItem("ordersList"),g=S(o?JSON.parse(o):[]),f=()=>{const _=g.value.findIndex(s=>s.id===a.value.id);_===-1?(I("添加成功"),g.value.push(a.value)):(I("取消成功"),g.value.splice(_,1)),localStorage.setItem("ordersList",JSON.stringify(g.value))},n=C(()=>g.value.find(_=>_.id===a.value.id)),b=()=>{e.push("/orders")},D=_=>{Gi({images:a.value.cover.map(s=>t(s)),startPosition:_})};return(_,s)=>{const m=p("van-image"),h=p("van-swipe-item"),K=p("van-swipe"),B=p("van-divider"),x=p("van-button");return y(),j("div",va,[c("div",ra,[l(K,{"lazy-render":""},{default:u(()=>[(y(!0),j(sa,null,ea(a.value.cover,(O,L)=>(y(),ga(h,{key:O},{default:u(()=>[l(m,{src:t(O),fit:"contain",onClick:xa=>D(L)},null,8,["src","onClick"])]),_:2},1024))),128))]),_:1})]),l(B),c("div",da,[c("div",fa,"¥"+v(a.value.price),1),c("div",ha,v(a.value.text),1),c("div",ya,v(a.value.type),1),l(x,{icon:n.value?"goods-collect":"goods-collect-o",type:"primary",round:"",onClick:f},{default:u(()=>[c("span",null,v(n.value?"取消该选购":"添加至选购"),1)]),_:1},8,["icon"])]),c("div",wa,[l(x,{type:"danger",block:"",round:"",onClick:b},{default:u(()=>[ca("查看选购")]),_:1})])])}}});export{ka as default};
