(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Bash","image":"images/bash.png"},{"id":2,"name":"Github","image":"images/github.png"},{"id":3,"name":"JavaScript","image":"images/js.png"},{"id":4,"name":"Mongo","image":"images/mongo.png"},{"id":5,"name":"MySQL","image":"images/mysql.png"},{"id":6,"name":"Node","image":"images/node.png"},{"id":7,"name":"Postman","image":"images/postman.png"},{"id":8,"name":"Python","image":"images/python.png"},{"id":9,"name":"React","image":"images/react.png"},{"id":10,"name":"Robo3T","image":"images/robo.png"},{"id":11,"name":"Slack","image":"images/slack.png"},{"id":12,"name":"Visual Studio Code","image":"images/vscode.png"}]')},,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),s=t.n(c),i=t(7),o=t(4),m=t(5),l=t(8),g=t(6),u=t(9);t(15);var p=function(e){return r.a.createElement("div",{className:"card",onClick:function(){return e.pingImage(e.id)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})))};t(16);var d=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};t(17),t(18);var h=function(e){return r.a.createElement("div",{className:"score"},r.a.createElement("h1",null,"Your Score : ",r.a.createElement("span",null,e.score)," | Top Score : ",r.a.createElement("span",null,e.topScore)))};var f=function(e){var a="options";return a="Wrong!"===e.message?"incorrect":"Correct!"===e.message?"correct":"options",r.a.createElement("div",{className:"topHeader"},r.a.createElement("h1",{className:"title"},r.a.createElement("a",{href:"/"},"Clicky Game!")),r.a.createElement("h2",null,e.message.split("\n").map((function(e,t){return r.a.createElement("span",{className:a,key:t},e,r.a.createElement("br",null))}))),r.a.createElement(h,{score:e.score,topScore:e.topScore}))},E=t(1),k=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={lastClicked:[],score:0,topScore:0,headerMessage:"Click the images to score points, \n but don't click the same image twice!"},t.pingImage=function(e){var a=e;t.state.lastClicked.some((function(e){return e===a}))?t.handleIncorrect():(t.setState({lastClicked:[].concat(Object(i.a)(t.state.lastClicked),[a]),score:t.state.score+1,headerMessage:"Correct!"}),t.state.score>=t.state.topScore&&t.setState({topScore:t.state.score+1}),t.shuffleImages())},t.shuffleImages=function(){E.sort((function(){return Math.random()-.5}))},t.handleIncorrect=function(){t.shuffleImages(),t.setState({lastClicked:[],score:0,headerMessage:"Wrong!"})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{score:this.state.score,topScore:this.state.topScore,message:this.state.headerMessage}),r.a.createElement(d,null,E.map((function(a){return r.a.createElement(p,{pingImage:e.pingImage,id:a.id,key:a.id,name:a.name,image:a.image})}))))}}]),a}(n.Component);t(19);s.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.c51b1218.chunk.js.map