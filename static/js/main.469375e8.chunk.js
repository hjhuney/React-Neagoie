(window["webpackJsonpmonsters-rolodex"]=window["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(2),s=t.n(r),c=(t(13),t(3)),l=t(4),i=t(6),u=t(5),m=t(7),h=(t(14),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set1&size=180x180"),alt:"monster"}),o.a.createElement("h2",null," ",e.monster.name," "),o.a.createElement("p",null," ",e.monster.email," "))}),d=(t(15),function(e){return console.log(e),o.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return o.a.createElement(h,{key:e.id,monster:e})})))}),f=(t(16),function(e){var n=e.placeholder,t=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),p=(t(17),function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(i.a)(this,Object(u.a)(n).call(this))).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={monsters:[],searchField:""},e}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})}))}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null," Monsters Rolodex"),o.a.createElement(f,{placeholder:"search monsters",handleChange:this.handleChange}),o.a.createElement(d,{monsters:a}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.469375e8.chunk.js.map