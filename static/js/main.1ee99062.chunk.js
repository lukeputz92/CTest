(this["webpackJsonpipic-ctest"]=this["webpackJsonpipic-ctest"]||[]).push([[0],{63:function(e,a,n){e.exports=n(96)},68:function(e,a,n){},69:function(e,a,n){},96:function(e,a,n){"use strict";n.r(a);var t=n(47),o=n(55),i=n(0),r=n.n(i),s=n(7),l=n.n(s),c=(n(68),n(14)),u=n(15),m=n(19),d=n(18),$=n(24),p=(n(69),n(48)),h=n.n(p),b=n(34),v=n(49),g=n.n(v),y=n(124),f=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(e){var t;return Object(c.a)(this,n),(t=a.call(this,e)).handleChange=t.handleChange.bind(Object($.a)(t)),t}return Object(u.a)(n,[{key:"handleChange",value:function(e){var a=e.target.value;this.props.onChange(this.props.name,a)}},{key:"render",value:function(){return r.a.createElement(y.a,{className:"answer",name:this.props.name,type:"text",onChange:this.handleChange})}}]),n}(r.a.Component),j=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(e){var t;return Object(c.a)(this,n),(t=a.call(this,e)).handleAnswerChange=function(e,a){t.setState({title:t.props.title,answers:Object(b.a)({},e,a)},(function(){return t.props.onChange(t.state)}))},t.state={},t}return Object(u.a)(n,[{key:"render",value:function(){var e=this,a=1;return r.a.createElement("div",{className:"task",style:{marginTop:"10px"}},r.a.createElement("h3",null,this.props.title),g()(this.props.text,"$",(function(n,t){return r.a.createElement(f,{key:a,name:"a".concat(a++),onChange:e.handleAnswerChange})})))}}]),n}(r.a.Component),q=n(126),C=n(127),x=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(e){var t;return Object(c.a)(this,n),(t=a.call(this,e)).onSubmit=function(e){var a=t.props.store;e.preventDefault(),console.log(a.getState());var n={data:JSON.stringify(a.getState())};h.a.send("gmail","ctest",n,"user_Tm7uxZYlkElBULmaxEBnx").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},t.handleChange=t.handleChange.bind(Object($.a)(t)),t}return Object(u.a)(n,[{key:"handleChange",value:function(e){var a=this.props.store;a.dispatch({type:"ADD_TASK",task:{title:e.title,answers:e.answers}}),console.log(a.getState())}},{key:"render",value:function(){var e=this,a=this.props.tasks.map((function(a){return r.a.createElement(j,{title:a.title,text:a.text,key:a.title,id:a.title,onChange:e.handleChange})}));return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(q.a,null,a,r.a.createElement(C.a,{variant:"contained",color:"primary",type:"submit",onClick:this.onSubmit,style:{marginTop:"10px"}},"Submit")))}}]),n}(r.a.Component),O=[{title:"Assigned Code",text:"$"},{title:"Descripcion de me mama Laura",text:"Mi personaje favorito es mi mam\xe1, su nombre es Lauriana de Jes\xfas Pinta.\n    Tiene cuar$ y ocho a\xf1$ de ed$ y tra$ de prof$ en el cen$ educativo \u201cFiscal Francia\u201d de ni$ .\n    Ella vi$ en Calvas c$ mi pa$ y mi her$ , a qui$ quiero y apr$ mucho.\n    A mi madre la adm$ porque e$ una per$ luchadora, respe$, solidaria, soci$ , etc.\n    Le gu$ el dep$ , en espe$ el basqu$ .\n    Est\xe1 siempre ale$ , es m$ amorosa y comuni$ , y trata de darme y ense\xf1arme lo mejor que tiene.\n    Los momentos que he compartido con ella han sido inolvidables. "},{title:"17 de agosto, Marbella",text:"Laura todav\xeda est\xe1 en la playa y yo estoy ya en la habitaci\xf3n del hotel. \n    No quiero sa$\n    hace mu$ calor y no \n    de$ tomar m$ el s$ .\n    Todas l$ ma\xf1anas va$ a l$ playa, \n    a u$ playa peq$ pero m$ bonita ce$ del hotel. \n    All\xed no h$ mucha ge$ . \n    Despu\xe9s com$ juntos en u$ bar. \n    Hay muc$ en esa zo$ . \n    \xa1C\xf3mo m$ gusta l$ comida de aq$ , \n    sobre to$ el pes$ ! \n    Por las tar$ vamos a$ centro de Marbella. \n    A veces volvemos muy pronto al hotel. Nos gusta mucho escuchar m\xfasica o leer un buen libro."},{title:"As\xed es el d\xeda a d\xeda de una cantante famosa",text:"Me levanto a las 8 y desayuno un panecillo con salm\xf3n ahumado. Mi hor$ suele\n    s$ fren\xe9tico, pe$ mi ma$ sabe l$ que hay que ha$ y pu$\n    repasarlo c$ ella. Me gu$ sorprenderme, a$ que nu$ miro mi\n    calen$ la no$ anterior. Me enc$ la sens$ de levan$ por\n    l$ ma\xf1ana y te$ que mi$ por la ven$ para desc$ en q$\n    ciudad es$ . Como norma$ paso la may$ del tiempo en el hotel, mi madre\n    no se preocupa demasiado. Pocas veces discutimos, porque quiero much\xedsimo a mi madre."},{title:"Perfil de alimentaci\xf3n de los argentinos",text:"El \xfaltimo censo realizado en la Rep\xfablica de Argentina contabiliza a su poblaci\xf3n en algo\n    m\xe1s de 40 millones de habitantes. El pa$ produce una cant$ suficiente pa$\n    alimentar a 442 millones de pers$ , sin emb$ , por u$ lado s$\n    observan indiv$ que pres$ d\xe9ficit de nutri$ en s$ alimentaci\xf3n, y\n    por ot$ lado, tam$ excesos. A los argentinos les so$ comida pero les\n    fa$ variedad. Hay homoge$ en l$ cocina y e$ la me$ de los\n    argentinos. Se cons$ pocos alim$ de bu$ calidad nutri$ , mientras\n    que el exceso de con$ de ot$ agrega grasas de mala calidad, sodio y az\xfacares."},{title:"Un cubano en Kiev, reci\xe9n llegado y sinti\xe9ndose agobiado",text:"Creo que este correo que les escrib\xed a mis padres fue el m\xe1s sentimental que he hecho en mi\n    vida. Yo ha$ salido ha$ dos d\xed$ de Cuba, y el$ no hab$ tenido\n    noti$ m\xedas, no sab$ d\xf3nde est$ , ni c\xf3$ iba, ni q$ hab\xeda\n    si$ de m$. Yo me sen$ muy tri$ , pero no po$ decirles\n    e$ . Empec\xe9 dici$ que to$ me iba bi$ y que ha$ salido\n    estu$ el vi$ , y s$ querer m$ l\xe1grimas empe$ a salir y no\n    paraban de rodar por mis mejillas mientras escrib\xeda. Sab\xeda que los estaba enga\xf1ando, pero\n    consideraba injusto preocuparlos; total, no resolver\xeda nada."}],k=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.store;return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(x,{store:e,tasks:O}))}}]),n}(r.a.Component),E=n(53);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=Object(E.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_TASK":var n=e.findIndex((function(e){return e.title===a.task.title}));return-1===n?[].concat(Object(o.a)(e),[a.task]):e.map((function(e){return e.title===a.task.title?{title:e.title,answers:Object(t.a)({},e.answers,{},a.task.answers)}:e}));default:return e}}));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,{store:w})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.1ee99062.chunk.js.map