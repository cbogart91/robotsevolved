(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{34:function(t,e,n){t.exports=n(62)},39:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(29),i=n.n(o),c=(n(39),n(3)),l=n(4),s=n(6),u=n(5),f=n(2),p=n(10),h=n.n(p),m=n(33),d="UP",g={yellow:{UP:"/static/images/yellow_up.png",DOWN:"/static/images/yellow_down.png",LEFT:"/static/images/yellow_left.png",RIGHT:"/static/images/yellow_right.png"},red:{UP:"/static/images/red_up.png",DOWN:"/static/images/red_down.png",LEFT:"/static/images/red_left.png",RIGHT:"/static/images/red_right.png"},green:{UP:"/static/images/green_up.png",DOWN:"/static/images/green_down.png",LEFT:"/static/images/green_left.png",RIGHT:"/static/images/green_right.png"},blue:{UP:"/static/images/blue_up.png",DOWN:"/static/images/blue_down.png",LEFT:"/static/images/blue_left.png",RIGHT:"/static/images/blue_right.png"}};function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var y=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(v()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){return Object(c.a)(this,r),n.call(this,t)}return Object(l.a)(r,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{width:"15%",float:"left"}},a.a.createElement("h3",null,"Moves:"),this.props.moveHistory.map((function(e){return a.a.createElement("img",{src:g[t.props.playerState[e.robot].colorSignifier][e.dir]})})))}}]),r}(a.a.Component);function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var E=function(t){var e=t.dimension,n=t.position,r=e+"px";return{width:r,height:r,backgroundColor:"#807878",position:"absolute",top:n.top+"px",left:n.left+"px",transition:"all 0.1s ease"}},x=function(t){var e=t.dimension,n=(t.position,e-4+"px");return{width:n,height:n,backgroundColor:"#c4a1a1",position:"absolute",top:"2px",left:"2px",transition:"all 0.1s ease"}},R=function(t){var e=t.dimension,n=(t.position,(e-4)/2+"px");return{width:n,height:n,backgroundColor:"#e1e1e1",position:"absolute",top:(e-4)/4+"px",left:(e-4)/4+"px",transition:"all 0.1s ease"}},S=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(b()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(){var t;Object(c.a)(this,r);for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return(t=n.call.apply(n,[this].concat(a))).handleClick=function(){t.props.handlePlayerMovementFromMouse(t.props.position)},t}return Object(l.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{onClick:this.handleClick,style:E(this.props)},a.a.createElement("div",{style:x(this.props)},a.a.createElement("div",{style:R(this.props)})))}}]),r}(a.a.Component),w=function(t,e){return{width:t+"px",height:e+"px",border:"1px solid black",position:"relative",margin:"25px auto",overflow:"hidden",float:"left",marginRight:"30px"}},O=function(t){var e=t.width,n=t.height,r=t.children;return a.a.createElement("div",{style:w(e,n)},r)};function j(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var k=function(t){var e=t.dimension,n=t.position,r=e+"px";return{width:r,height:r,position:"absolute",top:n.top+"px",left:n.left+"px",transition:"all 0.1s ease"}},C=function(t){var e=t.dimension-4+"px";return{width:e,height:e,position:"absolute",top:"2px",left:"2px",transition:"all 0.1s ease"}},P=function(t){var e=t.dimension,n=t.color,r=e-4-8+"px",a=void 0,o="none";return t.index===t.selected&&(a="#ffd700",o="solid"),{width:r,height:r,backgroundColor:n,borderStyle:o,borderColor:a,position:"absolute",borderRadius:"50%",top:"4px",left:"4px",transition:"all 0.1s ease"}},D=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(j()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(){var t;Object(c.a)(this,r);for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return(t=n.call.apply(n,[this].concat(a))).handleKeyDown=function(e){var n;switch(e.keyCode){case 37:n={top:0,left:-40,dir:"LEFT"};break;case 38:n={top:-40,left:0,dir:d};break;case 39:n={top:0,left:40,dir:"RIGHT"};break;case 40:n={top:40,left:0,dir:"DOWN"};break;case 9:return void t.props.tabSelector();default:return}t.props.handlePlayerMovement(n)},t.handleClick=function(){t.props.onClick(t.props.index)},t}return Object(l.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{onClick:this.handleClick,style:k(this.props)},a.a.createElement("div",{style:C(this.props)},a.a.createElement("div",{style:P(this.props)})))}},{key:"componentDidMount",value:function(){window.onkeydown=this.handleKeyDown}}]),r}(a.a.Component),M=function(t){var e=t.orientation,n=t.dimension,r=t.position;if("horizontal"==e)var a=n+"px",o="8px";else a="8px",o=n+"px";return{width:a,height:o,backgroundColor:"black",position:"absolute",top:r.top+"px",left:r.left+"px",transition:"all 0.1s ease"}},z=function(t){return a.a.createElement("div",{style:M(t)})},H=function(t){var e=t.dimension,n=t.position,r=e+"px";return{width:r,height:r,position:"absolute",top:n.top+"px",left:n.left+"px",transition:"all 0.1s ease"}},I=function(t){return a.a.createElement("img",{src:"/static/images/swirl.png",style:H(t)})},B=function(t,e,n){var r="block";return!1===n&&(r="none"),{display:r,width:t+"px",height:e+"px",position:"relative",overflow:"hidden",float:"left",marginRight:"30px",margin:"auto"}},G=function(t,e){return{display:"flex",width:t+"px",height:e+"px",position:"absolute",overflow:"hidden",float:"center",marginRight:"30px",margin:"auto",justifyContent:"center",alignItems:"center"}},T=function(t,e){return{backgroundColor:"black",opacity:.5,width:t+"px",height:e+"px",position:"absolute",overflow:"hidden",float:"left",marginRight:"30px",margin:"auto"}},L=function(t){var e=t.width,n=t.height,r=t.visible,o=t.children;return a.a.createElement("div",{style:B(e,n,r)},a.a.createElement("div",{style:T(e,n)}),a.a.createElement("div",{style:G(e,n)},o))},W=function(t){var e=t.dir,n=t.position,r=t.endPosition,a=t.color,o=0,i=0,c=0,l=0;return void 0!==n&&void 0!==r&&("LEFT"===e?(c=r.top,l=r.left,o=n.left-r.left+"px",i="4px"):"RIGHT"===e?(c=n.top,l=n.left,o=r.left-n.left+"px",i="4px"):e===d?(c=r.top,l=r.left,o="4px",i=n.top-r.top+"px"):(c=n.top,l=n.left,o="4px",i=r.top-n.top+"px")),{width:o,height:i,backgroundColor:a,position:"absolute",top:(c+=18)+"px",left:(l+=18)+"px",transition:"all 0.1s ease"}},_=function(t){return a.a.createElement("div",{style:W(t)})},F=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t};function N(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var Y=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(N()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){return Object(c.a)(this,r),n.call(this,t)}return Object(l.a)(r,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{style:{color:"white"}},"You Win! with ",this.props.numMoves," Moves!"),a.a.createElement("input",{style:{marginRight:"5px",marginTop:"15px",marginBottom:"15px",float:"left"},id:"namesubmitHS",type:"text",placeholder:"Username"}),a.a.createElement("form",{onSubmit:this.props.submitAnswer,style:{marginRight:"5px",marginTop:"15px",marginBottom:"15px",float:"left"}},a.a.createElement("button",{type:"submit"},"Submit Highscore ")))}}]),r}(a.a.Component);function A(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var U=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(A()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){return Object(c.a)(this,r),n.call(this,t)}return Object(l.a)(r,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.props.submitPuzzle,style:{marginRight:"5px",marginTop:"15px",marginBottom:"15px",float:"left"}},a.a.createElement("button",{type:"submit"},"Create Puzzle")),a.a.createElement("input",{style:{marginRight:"5px",marginTop:"15px",marginBottom:"15px",float:"left"},id:"namesubmit",type:"text",placeholder:"Name Of Puzzle?"}))}}]),r}(a.a.Component),J=function(t){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:t.resetPuzzle,style:{marginRight:"5px",marginTop:"15px",marginBottom:"15px"}},a.a.createElement("button",{type:"submit"},"Reset")))};function V(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var K=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(V()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){var e;return Object(c.a)(this,r),(e=n.call(this,t)).createBoardHandler=function(t){t.preventDefault();var n=parseInt(document.getElementById("boardWidthInput").value),r=parseInt(document.getElementById("boardHeightInput").value),a=parseInt(document.getElementById("boardRandomPercent").value);n>36?n=36:n<4&&(n=4),r>36?r=36:r<4&&(r=4),a<0?a=0:a>100&&(a=100),e.props.createBoard(n,r,(100-a)/100)},e}return Object(l.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{style:{marginRight:"5px",marginTop:"15px",marginBottom:"15px",float:"left"}},a.a.createElement("label",{for:"boardWidthInput"},"Board Width 4-36",a.a.createElement("input",{id:"boardWidthInput",type:"number",min:"4",max:"36"})),a.a.createElement("br",null),a.a.createElement("label",{for:"boardHeightInput"},"Board Height 4-36",a.a.createElement("input",{id:"boardHeightInput",type:"number",min:"4",max:"36"})),a.a.createElement("br",null),a.a.createElement("label",{for:"boardRandomPercent"},"% chance a Wall Spawns",a.a.createElement("input",{id:"boardRandomPercent",type:"number",min:"0",max:"100"})),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("form",{onClick:this.createBoardHandler,style:{marginRight:"5px",marginTop:"15px",marginBottom:"15px",float:"left"}},a.a.createElement("button",{type:"submit"},"Create New Board"))))}}]),r}(a.a.Component);function $(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var q=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if($()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){var e;return Object(c.a)(this,r),(e=n.call(this,t)).isCreateMode=function(t){return"Yes"==t?a.a.createElement(K,{createBoard:e.props.createBoard,width:e.props.width,height:e.props.height,percent:e.props.percent}):null},e}return Object(l.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{style:{marginRight:"10px",float:"left",width:"15%",opacity:1}},a.a.createElement("div",null,"http://"+window.location.host+"/play/"+this.props.uri),a.a.createElement(J,{resetPuzzle:this.props.resetPuzzle}),this.isCreateMode(this.props.createMode))}}]),r}(a.a.Component),Q=function(t){var e=t.highscores;return a.a.createElement("div",{style:{marginleft:"15px",float:"left"}},"All Highscores:",e.map((function(t){return function(t){return a.a.createElement("div",{style:{marginBottom:"20px",marginTop:"10px"}},"By: "+t.comment,a.a.createElement("div",null,"Moves: "+t.numMoves))}(t)})))};function X(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var Z=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(X()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){return Object(c.a)(this,r),n.call(this,t)}return Object(l.a)(r,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{id:"DisplayView",style:{marginRight:"10px",float:"center",width:"15%",opacity:1,justifyContent:"center",alignItems:"center"}},this.props.playerState.map((function(e){return t.props.checkwin(e)})),a.a.createElement(J,{resetPuzzle:this.props.resetPuzzle}))}}]),r}(a.a.Component);function tt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var et=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(tt()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){var e;return Object(c.a)(this,r),(e=n.call(this,t)).handleClick=function(t){e.props.onClick()},e}return Object(l.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{style:{marginRight:"5px",marginTop:"15px",marginBottom:"15px",float:"left"}},"Toggle Line Indicators:",a.a.createElement("label",{class:"switch"},a.a.createElement("input",{id:"toggleLineIndicators",onClick:this.handleClick,type:"checkbox",class:"real-checkbox"}),a.a.createElement("span",{class:"slider round"})))}}]),r}(a.a.Component),nt=function(t,e,n,r,a){var o=e.left,i=e.top,c=!1;t.map((function(t){t.top==i-4&&t.left==o-40&&(c=!0)}));var l=n.top==i&&n.left==o-44;return!(c&&l)},rt=function(t,e,n,r,a){var o=e.left,i=e.top,c=!1;n.map((function(t){t.top==i-44&&t.left==o&&(c=!0)}));var l=!1,s=!1;return t.map((function(t){t.top==i-40&&t.left==o-4&&(l=!0),t.top==i-40&&t.left==o+36&&(s=!0)})),!(c&&(l||s)||l&&s)},at=function(t,e,n){var r,a,o=0;do{o=0,r=Math.floor(Math.random()*Math.floor(n/40)),a=Math.floor(Math.random()*Math.floor(e/40)),t.map((function(t){40*r==t.top&&40*a==t.left&&(o=1)}))}while(1==o);return{top:40*r,left:40*a}},ot=function(t,e,n){for(var r=[],a=[{top:0,left:-4}],o=[],i=[],c={top:40*Math.floor(Math.random()*Math.floor(e/40)),left:40*Math.floor(Math.random()*Math.floor(t/40))},l=[c],s=0;s<5;s++)l.push(at(l,t,e));var u=F(l[1],{color:"#4169e1",colorSignifier:"blue"}),f=F(l[2],{color:"#228b22",colorSignifier:"green"}),p=F(l[3],{color:"#b22222",colorSignifier:"red"}),h=F(l[4],{color:"#ff8c00",colorSignifier:"yellow"});i.push(u),i.push(f),i.push(p),i.push(h);for(s=0;s<t;s+=40)for(var m=0;m<e;m+=40)r.push({top:m,left:s});for(m=0;m<e;m+=40)for(s=0;s<t;s+=40)s<1?a.push({top:m,left:s-4}):s==t-40&&a.push({top:m,left:s+36}),m<1?o.push({top:m-4,left:s}):m==e-40&&o.push({top:m+36,left:s});for(m=0;m<e;m+=40)for(s=0;s<t;s+=40)s>1&&s!=t-40&&Math.random()>n&&nt(o,{top:m,left:s},a[a.length-1])&&a.push({top:m,left:s-4}),m>1&&m!=e-40&&Math.random()>n&&rt(a,{top:m,left:s},o)&&o.push({top:m-4,left:s});return{playerState:i,gameWon:!1,boardState:r,wallHorizontal:o,wallVerticle:a,goal:c,playerStart:i.slice()}};function it(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}window.addEventListener("keydown",(function(t){[32,37,38,39,40,9].indexOf(t.keyCode)>-1&&t.preventDefault()}),!1);var ct=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(it()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){var e;if(Object(c.a)(this,r),(e=n.call(this,t)).updateHighscores=function(){h.a.get("/updatehighscores?uri="+e.state.uri).then((function(t){e.setState({highscores:JSON.parse(t.data.highscores)})}))},e.componentDidMount=function(){if("Yes"===e.props.loadedGame){var t=setInterval(e.updateHighscores,2e3);e.setState({IntervalId:t})}},e.componentWillUnmount=function(){"Yes"===e.props.loadedGame&&clearInterval(e.state.IntervalId)},e.robotSelect=function(t){e.setState({robotSelected:t})},e.submitPuzzle=function(t){t.preventDefault();var n=document.getElementById("namesubmit").value,r=e.state;r.playerState=e.state.playerStart.slice(),r.moveHistory=[],r.createMode="No",h.a.post("/submitpuzzle",F({puzzledata:r},{name:n})).then((function(t){e.setState({uri:t.data.uri,gameWon:!1}),e.props.history.push("/play/"+t.data.uri)}))},e.toggleLineIndicators=function(){0===e.state.ColoredLineDirections.length?e.setState({ColoredLineDirections:["LEFT","RIGHT",d,"DOWN"]}):e.setState({ColoredLineDirections:[]})},e.submitAnswer=function(t){t.preventDefault(),console.log(e.state.uri),h.a.post("/submithighscore",{highscore:e.state.moveHistory.length,name:document.getElementById("namesubmitHS").value,uri:e.state.uri}).then((function(t){e.setState({gameWon:!1})})),e.resetPuzzle()},e.resetPuzzle=function(t){"undefined"!==typeof t&&t.preventDefault(),e.setState({playerState:e.state.playerStart.slice(),moveHistory:[],gameWon:!1})},e.tabSelector=function(){if(!1===e.state.gameWon){var t=e.state.robotSelected+1;t%=4,e.setState({robotSelected:t})}},e.createBoard=function(t,n,r){console.log(t),console.log(n),console.log(r);var a=ot(40*t,40*n,r);e.setState(F({width:t,height:n,percent:r},a))},e.handleCollision=function(t,n,r){var a,o=e.state.playerState[n].left,i=e.state.playerState[n].top;switch(t.dir){case d:var c=0;e.state.wallHorizontal.map((function(t){t.left===o&&t.top<i&&t.top>c&&(c=t.top+4)})),e.state.playerState.map((function(t){t.left===o&&t.top<i&&t.top>c-4&&(c=t.top+40)})),a={top:c,left:o,color:r};break;case"RIGHT":c=40*e.state.width-40;e.state.wallVerticle.map((function(t){t.top===i&&t.left>o&&t.left<c&&(c=t.left-36)})),e.state.playerState.map((function(t){t.top===i&&t.left>o&&t.left<c+36&&(c=t.left-40)})),a={top:i,left:c,color:r};break;case"LEFT":c=0;e.state.wallVerticle.map((function(t){t.top===i&&t.left<o&&t.left>c&&(c=t.left+4)})),e.state.playerState.map((function(t){t.top===i&&t.left<o&&t.left>c-4&&(c=t.left+40)})),a={top:i,left:c,color:r};break;case"DOWN":c=40*e.state.width-40;e.state.wallHorizontal.map((function(t){t.left===o&&t.top>i&&t.top<c&&(c=t.top-36)})),e.state.playerState.map((function(t){t.left===o&&t.top>i&&t.top<c+36&&(c=t.top-40)})),a={top:c,left:o,color:r};break;default:return}return a},e.checkwin=function(t){return t.top===e.state.goal.top&&t.left===e.state.goal.left?(!1===e.state.gameWon&&e.setState({gameWon:!0}),"No"===e.state.createMode?a.a.createElement(Y,{numMoves:e.state.moveHistory.length,submitAnswer:e.submitAnswer}):a.a.createElement(U,{submitPuzzle:e.submitPuzzle})):""},e.handlePlayerMovement=function(t){if(void 0!==t.dir&&!1===e.state.gameWon){var n=e.handleCollision(t,e.state.robotSelected,e.state.playerState[e.state.robotSelected].color),r=e.state.playerState,a=e.state.moveHistory;(n=F(n,{colorSignifier:r[e.state.robotSelected].colorSignifier})).top===r[e.state.robotSelected].top&&n.left===r[e.state.robotSelected].left||a.push({dir:t.dir,robot:e.state.robotSelected,colorSignifier:r[e.state.robotSelected].colorSignifier}),r[e.state.robotSelected]=n,e.setState({playerState:r,moveHistory:a}),e.checkwin(n)}},e.handlePlayerMovementFromMouse=function(t){var n,r=e.state.playerState[e.state.robotSelected];n=t.top===r.top&&t.left<r.left?{top:0,left:-40,dir:"LEFT"}:t.top===r.top&&t.left>r.left?{top:0,left:40,dir:"RIGHT"}:t.top<r.top&&t.left===r.left?{top:-40,left:0,dir:d}:t.top>r.top&&t.left===r.left?{top:40,left:0,dir:"DOWN"}:{top:0,left:0,dir:void 0},e.handlePlayerMovement(n)},"Yes"===e.props.loadedGame)e.state=JSON.parse(e.props.gamedata),e.state.highscores=e.props.highscores,e.state.uri=e.props.uri,e.state.gameWon=!1,e.state.ColoredLineDirections=[];else{var o=ot(40*e.props.settingsWidth,40*e.props.settingsHeight,.9);e.state=F({robotSelected:0,moveHistory:[],uri:"",createMode:"Yes",highscores:[],ColoredLineDirections:[],width:e.props.settingsWidth,height:e.props.settingsHeight,percentWall:e.props.settingsPercent},o)}return e}return Object(l.a)(r,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{id:"GameMain",style:{width:"100%"}},a.a.createElement(q,{uri:this.state.uri,resetPuzzle:this.resetPuzzle,createBoard:this.createBoard,width:this.state.width,height:this.state.height,percent:this.state.percent,createMode:this.state.createMode}),a.a.createElement(O,{width:40*this.state.width,height:40*this.state.height},this.state.boardState.map((function(e){return a.a.createElement(S,{dimension:40,position:{top:e.top,left:e.left},handlePlayerMovementFromMouse:t.handlePlayerMovementFromMouse})})),a.a.createElement(I,{dimension:40,position:this.state.goal}),this.state.ColoredLineDirections.map((function(e){return a.a.createElement(_,{dir:e,position:{top:t.state.playerState[t.state.robotSelected].top,left:t.state.playerState[t.state.robotSelected].left},endPosition:t.handleCollision({dir:e},t.state.robotSelected,t.state.playerState[t.state.robotSelected].color),color:"red"})})),this.state.playerState.map((function(e,n){return a.a.createElement(D,{dimension:40,position:{top:e.top,left:e.left},color:e.color,selected:t.state.robotSelected,index:n,onClick:t.robotSelect,handlePlayerMovement:t.handlePlayerMovement,tabSelector:t.tabSelector})})),this.state.wallHorizontal.map((function(t){return a.a.createElement(z,{orientation:"horizontal",dimension:40,position:{top:t.top,left:t.left}})})),this.state.wallVerticle.map((function(t){return a.a.createElement(z,{orientation:"verticle",dimension:40,position:{top:t.top,left:t.left}})})),a.a.createElement(L,{width:40*this.state.width,height:40*this.state.height,visible:this.state.gameWon},a.a.createElement(Z,{playerState:this.state.playerState,resetPuzzle:this.resetPuzzle,highscores:this.state.highscores,checkwin:this.checkwin}))),a.a.createElement(y,{moveHistory:this.state.moveHistory,playerState:this.state.playerState}),a.a.createElement(Q,{highscores:this.state.highscores}),a.a.createElement(et,{onClick:this.toggleLineIndicators}))}}]),r}(a.a.Component),lt=Object(m.a)(ct);function st(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var ut=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(st()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){var e;return Object(c.a)(this,r),(e=n.call(this,t)).state={settingsWidth:16,settingsHeight:16,settingsPercent:.9},e}return Object(l.a)(r,[{key:"render",value:function(){return a.a.createElement(lt,{loadedGame:"No",settingsWidth:this.state.settingsWidth,settingsHeight:this.state.settingsHeight,settingsPercent:this.state.settingsPercent})}}]),r}(a.a.Component);function ft(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var pt=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(ft()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){var e;return Object(c.a)(this,r),(e=n.call(this,t)).handleGameClick=function(){e.props.handleGameClick(e.props.game.puzzledata,e.props.highscores,e.props.game.uri)},e}return Object(l.a)(r,[{key:"render",value:function(){var t=this.props.highscore;return"undefined"===typeof t&&(t={comment:"",numMoves:""}),a.a.createElement("div",{style:{marginRight:"25px",marginTop:"25px",marginBottom:"50px",marginLeft:"50px",paddingRight:"25px",paddingLeft:"25px",paddingTop:"25px",paddingBottom:"25px",float:"left"}},a.a.createElement("div",null,a.a.createElement("h2",{onClick:this.handleGameClick},this.props.game.name)),a.a.createElement("div",{style:{marginRight:"5px",marginTop:"15px",marginBottom:"15px"}},a.a.createElement("h4",null,"Highscore:"),a.a.createElement("div",null,a.a.createElement("div",null,t.comment),a.a.createElement("div",null,t.numMoves))))}}]),r}(a.a.Component);function ht(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var mt=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(ht()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){return Object(c.a)(this,r),n.call(this,t)}return Object(l.a)(r,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.props.submitSearch,style:{marginRight:"5px",marginTop:"15px",marginBottom:"15px",float:"left"}},a.a.createElement("button",{type:"submit"},"Search")),a.a.createElement("input",{style:{marginRight:"5px",marginTop:"15px",marginBottom:"15px",float:"left"},id:"searchBarFindGame",type:"text",placeholder:"Search"}))}}]),r}(a.a.Component);function dt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var gt=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(dt()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){var e;Object(c.a)(this,r),(e=n.call(this,t)).handleGameClick=function(t,n,r){e.props.handleGameClick(t,n,r)},e.handleSearchSubmit=function(t){t.preventDefault();var n=document.getElementById("searchBarFindGame").value;h.a.post("/search",{search:n}).then((function(t){console.log(t),e.setState({highscoreslist:JSON.parse(t.data.highscoreslist),gameslist:JSON.parse(t.data.gameslist)})}))};var a=window.gameslist,o=window.highscoreslist;return e.state={gameslist:a,highscoreslist:o},e}return Object(l.a)(r,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{id:"GameMain"},a.a.createElement(mt,{submitSearch:this.handleSearchSubmit}),this.state.gameslist.map((function(e,n){return a.a.createElement(pt,{handleGameClick:t.handleGameClick,game:e,highscores:t.state.highscoreslist[n],highscore:t.state.highscoreslist[n][0]})})))}}]),r}(a.a.Component);function vt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var yt=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(vt()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){return Object(c.a)(this,r),n.call(this,t)}return Object(l.a)(r,[{key:"render",value:function(){return a.a.createElement(lt,{loadedGame:"Yes",gamedata:this.props.gamedata,highscores:this.props.highscores,uri:this.props.uri})}}]),r}(a.a.Component);n(61);function bt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var Et=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(bt()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){var e;return Object(c.a)(this,r),(e=n.call(this,t)).loginGoogle=function(t){t.preventDefault(),window.location.href="/login/google"},e}return Object(l.a)(r,[{key:"render",value:function(){return this.props.show?a.a.createElement("div",{class:"modal",id:"modal"},a.a.createElement("h2",null,"Login to Robits!"),a.a.createElement("img",{onClick:this.loginGoogle,src:"/static/images/btn_google_signin_light_normal_web@2x.png"}),a.a.createElement("button",{class:"toggle-button",onClick:this.props.closeLoginModal},"close")):null}}]),r}(a.a.Component);function xt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var Rt=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(xt()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(){return Object(c.a)(this,r),n.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return"No"==window.loggedin?null:a.a.createElement("div",null,a.a.createElement("div",{class:"dasher"},a.a.createElement("img",{src:window.userInfo.profilePicture,style:{borderRadius:"50%",height:"50px",width:"50px"}})),a.a.createElement("div",null,window.userInfo.username))}}]),r}(a.a.Component);function St(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var wt=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(St()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){var e;return Object(c.a)(this,r),(e=n.call(this,t)).handleClick=function(t){return"Yes"==window.loggedin?e.props.onClick("Logout"):e.props.onClick("Sign in")},e}return Object(l.a)(r,[{key:"render",value:function(){if("Yes"==window.loggedin)var t="Logout";else t="Sign in";return a.a.createElement("a",{onClick:this.handleClick,class:"signin button button-empty"},t)}}]),r}(a.a.Component);function Ot(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var jt=function(t){Object(s.a)(r,t);var e,n=(e=r,function(){var t,n=Object(f.a)(e);if(Ot()){var r=Object(f.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function r(t){var e;return Object(c.a)(this,r),(e=n.call(this,t)).SignInButtonPressed=function(t){"Sign in"==t?e.setState({showLoginModal:!0}):window.location.href="/auth/logout"},e.closeLoginModal=function(t){t.preventDefault(),e.setState({showLoginModal:!1})},e.handleGameClick=function(t,n,r){e.setState({PageSelected:a.a.createElement(yt,{highscores:n,gamedata:t,uri:r})})},e.handleClickCreateGame=function(t){t.preventDefault();var n=a.a.createElement(ut,{state:"new"});e.setState({PageSelected:n})},e.handleClickFindGame=function(t){t.preventDefault(),e.setState({PageSelected:a.a.createElement(gt,{handleGameClick:e.handleGameClick})})},console.log(window.highscoreslist),console.log(window.gameslist),""==window.uri?e.state={PageSelected:a.a.createElement(ut,null)}:e.state={PageSelected:a.a.createElement(yt,{gamedata:window.token.puzzledata,highscores:window.highscores,uri:window.uri})},e.state.showLoginModal=!1,e}return Object(l.a)(r,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("header",{id:"top"},a.a.createElement("div",{class:"site-title-nav"},a.a.createElement("input",{type:"checkbox",id:"tn-tg",class:"topnav-toggle fullscreen-toggle","aria-label":"Navigation"}),a.a.createElement("label",{for:"tn-tg",class:"fullscreen-mask"}),a.a.createElement("label",{for:"tn-tg",class:"hbg"},a.a.createElement("span",{class:"hbg__in"})),a.a.createElement("h1",{class:"site-title"},a.a.createElement("a",{href:"/"},"RobitsEvolved",a.a.createElement("span",null,".com"))),a.a.createElement("nav",{id:"topnav",class:"hover"},a.a.createElement("section",null,a.a.createElement("a",{href:"/"},a.a.createElement("span",{class:"play"},"Play"),a.a.createElement("span",{class:"home"},"robitsevolved")),a.a.createElement("div",{role:"group"},a.a.createElement("a",{onClick:this.handleClickCreateGame,href:"/#createGame"},"Create a game"),a.a.createElement("a",{onClick:this.handleClickFindGame,href:"/#findgame"},"Find a game"),a.a.createElement("a",{href:"/simul"},"Puzzle Rush"))),a.a.createElement("section",null,a.a.createElement("a",{href:"/training"},"Learn"),a.a.createElement("div",{role:"group"},a.a.createElement("a",{href:"/learn"},"Robits Basics"),a.a.createElement("a",{href:"/training"},"Starter Puzzles"))),a.a.createElement("section",null,a.a.createElement("a",{href:"/player"},"Community"),a.a.createElement("div",{role:"group"},a.a.createElement("a",{href:"/player"},"Players"),a.a.createElement("a",{href:"/team"},"Teams"),a.a.createElement("a",{href:"/forum"},"Forum"))),a.a.createElement("section",null,a.a.createElement("a",{href:"/analysis"},"Tools"),a.a.createElement("div",{role:"group"},a.a.createElement("a",{href:"/analysis"},"Robits solver (test)"),a.a.createElement("a",{href:"/analysis#explorer"},"Settings"))))),a.a.createElement("div",{class:"site-buttons"},a.a.createElement("div",{id:"clinput"},a.a.createElement("a",{class:"link"},a.a.createElement("span",{"data-icon":"y"})),a.a.createElement("input",{spellcheck:"false",autocomplete:"false","aria-label":"Search",placeholder:"Search"})),a.a.createElement("div",{class:"dasher"},a.a.createElement("a",{class:"toggle link anon"},a.a.createElement("span",{title:"Preferences","data-icon":"%"}))),a.a.createElement(Rt,null),a.a.createElement(wt,{onClick:this.SignInButtonPressed}))),this.state.PageSelected,a.a.createElement(Et,{closeLoginModal:this.closeLoginModal,show:this.state.showLoginModal}))}}]),r}(a.a.Component),kt=n(64);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(kt.a,null,a.a.createElement(jt,null)),document.getElementById("MainApp")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.5525e289.chunk.js.map