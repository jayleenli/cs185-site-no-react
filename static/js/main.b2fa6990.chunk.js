(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(6),s=a.n(c),o=a(1),l=a(2),r=a(3),m=a(4),g=(a(16),function(e){Object(m.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).addActiveClass=function(){if(e.props.page.title===e.props.activePage)return"active"},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.page.title;return n.a.createElement("li",{onClick:this.props.changePage.bind(this,this.props.page.title),className:this.addActiveClass()},n.a.createElement("a",null,n.a.createElement("span",null,e)))}}]),a}(i.Component)),h=function(e){Object(m.a)(a,e);var t=Object(r.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.pages.map((function(t){return n.a.createElement(g,{page:t,changePage:e.props.changePage,activePage:e.props.activePage})}));return n.a.createElement("div",{id:"nav-bar-div",className:"nav-bar"},n.a.createElement("ul",{id:"nav-bar-list"},t))}}]),a}(i.Component),d=a(7),u=a(8),p=a(10),v=a(9),E=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"main-body"},n.a.createElement("div",null,n.a.createElement("img",{src:"images/profile.jpg",className:"profile-img"})),n.a.createElement("div",null,n.a.createElement("p",null,"Hi my name is Jayleen Li and I am a junior at UC Santa Barbara. Since I already made a ",n.a.createElement("a",{href:"http://jayleenli.github.io",target:"_blank"},"professional portfolio")," I decided to have more fun with this portfolio for CS 185. :)",n.a.createElement("br",null),n.a.createElement("br",null),"Outside of school/coding things I like playing video games, watching anime or YouTube animations, and obessessing over korean girl groups.")))}}]),a}(i.Component),b=[{src:"images/kimbap.jpg",title:"kimbap",description:"Made some kimbap during quarantine!"},{src:"images/spam_musubi.jpg",title:"spam_musubi",description:"Made some spam musubis during quarantine!"},{src:"images/seaturtles.jpg",title:"seaturtles",description:"Some sea turtles I saw on a Hawaiian beach."},{src:"images/stickers.jpg",title:"stickers",description:"I like stickers a lot and these are some of my recent additions to my collection I got from campus fundraisers."},{src:"images/stickers2.jpg",title:"stickers2",description:"Stickers I got from Twitchcon! The Nezuko one is great"},{src:"images/soap.jpg",title:"soap",description:"Carved this out of soap when I was bored."},{src:"images/soap2.jpg",title:"soap2",description:"Carved this out of soap when I was bored."},{src:"images/dontdead.jpg",title:"dontdead",description:"At universal studios!"},{src:"images/viet_coffee.jpg",title:"viet_coffee",description:"Definitely not a coffee addict."},{src:"images/chicago_airport.jpg",title:"chicago_airport",description:"Chicago airport has this really cool underground bridge!"},{src:"images/takoyaki.jpg",title:"takoyaki",description:"Delicious takoyaki :)"},{src:"images/tattoo.jpg",title:"tattoo",description:'A "tattoo" my roomate drew on me'},{src:"images/tattoo2.jpg",title:"tattoo2",description:'Another "tattoo" of a great meme.'},{src:"images/tattoo3.jpg",title:"tattoo3",description:'Another "tattoo" of a great meme.'},{src:"images/doggo.jpg",title:"doggo",description:"A dog at my workplace!"},{src:"images/cat.jpg",title:"cat",description:"Cat cafe in Santa Barbara got those cute cats."},{src:"images/twitchcon.jpg",title:"twitchcon",description:"Took a picture with a random twich streamer... I thought she was lily pichu but she was one of her friends... still cool!"},{src:"images/twitchcon2.jpg",title:"twitchcon2",description:"GAME OF KEYBOARDS"},{src:"images/twitchcon3.jpg",title:"twitchcon3",description:"Another twitchcon picture!"},{src:"images/turtle_collection.jpg",title:"turtle_collection",description:"I like collecting turtles in my free time, definitely not a problem..."},{src:"images/portal_cube.jpg",title:"portal_cube",description:"I made this portal cube for my friend!"},{src:"images/ditto.jpg",title:"ditto",description:"I like the ditto pokemon plushie series..."},{src:"images/candle.jpg",title:"candle",description:"Made this candle in Santa Cruz!"},{src:"images/kcon.jpg",title:"kcon",description:"Saw my queens MAMAMOO at Kcon 2019 <3"},{src:"images/doggo2.jpg",title:"doggo2",description:"A doggo at work!"},{src:"images/doggo3.jpg",title:"doggo3",description:"Another doggo at work!"},{src:"images/mac.jpg",title:"mac",description:"A original Apple Mac someone brought into work!"},{src:"images/banana_slug.jpg",title:"banana_slug",description:"Banana slugs!"},{src:"images/squirtle.jpg",title:"squirtle",description:"Tried to make a squirtle from the squirtle squad with polymer clay LOL"},{src:"images/turtles.jpg",title:"turtles",description:"Turtles at the UCSB pond!"},{src:"images/avocados.jpg",title:"avocados",description:"I have these avocado plushies and I made the rightmost one out of felt to continue the chain :D"},{src:"images/boba.jpg",title:"boba",description:"Cool boba flavors at a boba shop in LA!"},{src:"images/tjturtle.jpg",title:"tjturtle",description:"Just a normal Sunday watching fishing videos with my turtle."},{src:"images/turtlepenguin.jpg",title:"turtlepenguin",description:"Some more felt creations I made."}],f=function(e){Object(m.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).makeVisible=function(){e.props.imgClicked&&(document.getElementById("lightbox-modal").style.display="flex")},e.addClickListener=function(){var e=document.getElementById("lightbox-modal");e&&e.addEventListener("click",(function(t){t.target===t.currentTarget&&(e.style.display="none")}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=b.find((function(t){return t.title===e.props.activeImage})),a=null,i=null;return t&&(a=t.src,i=t.description),a||(a=b[0].src,i=b[0].description),this.makeVisible(),this.addClickListener(),n.a.createElement("div",{id:"lightbox-modal",className:"photo-modal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("center",{style:{verticalAlign:"middle"}},n.a.createElement("img",{id:"modal-img",src:a,alt:"lightbox photo"}),n.a.createElement("div",{className:"caption-container"},n.a.createElement("p",{id:"caption"},i)))))}}]),a}(i.Component),j=function(e){Object(m.a)(a,e);var t=Object(r.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={activeImage:"None",imgClicked:!1},e.changeActivePhoto=function(t){e.setState({activeImage:t,imgClicked:!0})},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"main-body"},n.a.createElement("div",{id:"photo-col",className:"photo-collection"},n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"kimbap"),src:"images/kimbap.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"spam_musubi"),src:"images/spam_musubi.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"seaturtles"),src:"images/seaturtles.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"stickers"),src:"images/stickers.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"stickers2"),src:"images/stickers2.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"soap"),src:"images/soap.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"soap2"),src:"images/soap2.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"dontdead"),src:"images/dontdead.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"viet_coffee"),src:"images/viet_coffee.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"chicago_airport"),src:"images/chicago_airport.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"takoyaki"),src:"images/takoyaki.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"tattoo"),src:"images/tattoo.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"tattoo2"),src:"images/tattoo2.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"tattoo3"),src:"images/tattoo3.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"doggo"),src:"images/doggo.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"cat"),src:"images/cat.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"twitchcon"),src:"images/twitchcon.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"twitchcon2"),src:"images/twitchcon2.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"twitchcon3"),src:"images/twitchcon3.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"turtle_collection"),src:"images/turtle_collection.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"portal_cube"),src:"images/portal_cube.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"ditto"),src:"images/ditto.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"candle"),src:"images/candle.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"kcon"),src:"images/kcon.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"doggo2"),src:"images/doggo2.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"doggo3"),src:"images/doggo3.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"mac"),src:"images/mac.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"banana_slug"),src:"images/banana_slug.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"squirtle"),src:"images/squirtle.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"turtles"),src:"images/turtles.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"avocados"),src:"images/avocados.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"boba"),src:"images/boba.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"tjturtle"),src:"images/tjturtle.jpg"}),n.a.createElement("img",{onClick:this.changeActivePhoto.bind(this,"turtlepenguin"),src:"images/turtlepenguin.jpg"})),n.a.createElement(f,{activeImage:this.state.activeImage,imgClicked:this.state.imgClicked}))}}]),a}(i.Component),k=function(e){Object(m.a)(a,e);var t=Object(r.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"animations-desc"},n.a.createElement("p",null,"I used to make some dumb humor animations in high school so here's a video gallery of them. Scroll sideways (SHIFT+scroll) to see more! ",n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement("center",null,n.a.createElement("a",{href:"https://www.youtube.com/user/tjtheturtleisawesome",target:"_blank",className:"tube-btn"},"YouTube Channel: tjtheturtleisawesome")),n.a.createElement("div",{className:"contain_archive"},n.a.createElement("div",{className:"row_nm_videos"},n.a.createElement("div",{className:"row__inner"},n.a.createElement("div",{className:"tile"},n.a.createElement("iframe",{className:"tile__vid",src:"https://www.youtube.com/embed/mxUWu3R1gfY",width:"400",height:"300",frameBorder:"0",allowFullScreen:!0})),n.a.createElement("div",{className:"tile"},n.a.createElement("iframe",{className:"tile__vid",src:"https://www.youtube.com/embed/-LTjw3PzcbM",width:"400",height:"300",frameBorder:"0",allowFullScreen:!0})),n.a.createElement("div",{className:"tile"},n.a.createElement("iframe",{className:"tile__vid",src:"https://www.youtube.com/embed/OSUInLwSLZk",width:"400",height:"300",frameBorder:"0",allowFullScreen:!0})),n.a.createElement("div",{className:"tile"},n.a.createElement("iframe",{className:"tile__vid",src:"https://www.youtube.com/embed/NDjoVprETPU",width:"400",height:"300",frameBorder:"0",allowFullScreen:!0})),n.a.createElement("div",{className:"tile"},n.a.createElement("iframe",{className:"tile__vid",src:"https://www.youtube.com/embed/WI5rnuVwPzM",width:"400",height:"300",frameBorder:"0",allowFullScreen:!0})),n.a.createElement("div",{className:"tile"},n.a.createElement("iframe",{className:"tile__vid",src:"https://www.youtube.com/embed/SA6i70dufHE",width:"400",height:"300",frameBorder:"0",allowFullScreen:!0})),n.a.createElement("div",{className:"tile"},n.a.createElement("iframe",{className:"tile__vid",src:"https://www.youtube.com/embed/t54evWM43tE",width:"400",height:"300",frameBorder:"0",allowFullScreen:!0})),n.a.createElement("div",{className:"tile"},n.a.createElement("iframe",{className:"tile__vid",src:"https://www.youtube.com/embed/IWK_Ahh6OSA",width:"400",height:"300",frameBorder:"0",allowFullScreen:!0}))))))}}]),a}(i.Component),w=function(e){Object(m.a)(a,e);var t=Object(r.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"games-desc"},n.a.createElement("p",null,"Top games I've spent a lot of time playing ",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("div",{className:"game-content"},n.a.createElement("div",{className:"game-section"},n.a.createElement("div",{className:"game-img-section"},n.a.createElement("img",{className:"game-img",src:"images/games/tf2.jpg",alt:"tf2"})),n.a.createElement("div",{className:"game-content"},n.a.createElement("h2",null,"Team Fortress 2"),n.a.createElement("p",null,"Really the first game I invested a lot of time in and made online friends in!")," ",n.a.createElement("div",null,"Hours: 717.0"))),n.a.createElement("hr",null)),n.a.createElement("div",{className:"game-content"},n.a.createElement("div",{className:"game-section"},n.a.createElement("div",{className:"game-img-section"},n.a.createElement("img",{className:"game-img",src:"images/games/paladins.jpg",alt:"paladins"})),n.a.createElement("div",{className:"game-content"},n.a.createElement("h2",null,"Paladins"),n.a.createElement("p",null,"Overwatch but for poor people.")," ",n.a.createElement("div",null,"Hours: 107.0"))),n.a.createElement("hr",null)),n.a.createElement("div",{className:"game-content"},n.a.createElement("div",{className:"game-section"},n.a.createElement("div",{className:"game-img-section"},n.a.createElement("img",{className:"game-img",src:"images/games/dontstarvetog.jpg",alt:"dst"})),n.a.createElement("div",{className:"game-content"},n.a.createElement("h2",null,"Don't Starve Together"),n.a.createElement("p",null,"Don't starve!")," ",n.a.createElement("div",null,"Hours: 71.0"))),n.a.createElement("hr",null)),n.a.createElement("div",{className:"game-content"},n.a.createElement("div",{className:"game-section"},n.a.createElement("div",{className:"game-img-section"},n.a.createElement("img",{className:"game-img",src:"images/games/osu.jpg",alt:"osu"})),n.a.createElement("div",{className:"game-content"},n.a.createElement("h2",null,"Osu!"),n.a.createElement("p",null,"Additing rhythm game...")," ",n.a.createElement("div",null,"Hours: 62.0"))),n.a.createElement("hr",null)),n.a.createElement("div",{className:"game-content"},n.a.createElement("div",{className:"game-section"},n.a.createElement("div",{className:"game-img-section"},n.a.createElement("img",{className:"game-img",src:"images/games/nier.jpg",alt:"nier"})),n.a.createElement("div",{className:"game-content"},n.a.createElement("h2",null,"NieR:Automata"),n.a.createElement("p",null,"My favorite game!")," ",n.a.createElement("div",null,"Hours: 39.0"))),n.a.createElement("hr",null)),n.a.createElement("div",{className:"game-content"},n.a.createElement("div",{className:"game-section"},n.a.createElement("div",{className:"game-img-section"},n.a.createElement("img",{className:"game-img",src:"images/games/pitpeople.jpg",alt:"pitpeople"})),n.a.createElement("div",{className:"game-content"},n.a.createElement("h2",null,"Pit People"),n.a.createElement("p",null,"Been playing this a lot! Love Behemoth games")," ",n.a.createElement("div",null,"Hours: 21.0"))),n.a.createElement("hr",null)))}}]),a}(i.Component),y=function(e){Object(m.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).displayContent=function(){var t=e.props.activePage;return"Home"===t?n.a.createElement(E,null):"Photos"===t?n.a.createElement(j,null):"Animations"===t?n.a.createElement(k,null):n.a.createElement(w,null)},e}return Object(l.a)(a,[{key:"render",value:function(){return this.displayContent()}}]),a}(i.Component),C=function(e){Object(m.a)(a,e);var t=Object(r.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).displayTitle=function(){var t=e.state.activePage;return"Home"===t?"Jayleen's Portfolio":"Photos"===t?"Photo Gallery":"Animations"===t?"Videos I Animated":"Games"},e.toTop=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},e.state={activePage:"Home"},e.changePage=function(t){e.setState({activePage:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"nav-bar"},n.a.createElement(h,{pages:[{id:1,title:"Home"},{id:2,title:"Photos"},{id:3,title:"Animations"},{id:4,title:"Games"}],changePage:this.changePage,activePage:this.state.activePage})),n.a.createElement("div",{className:"page"},n.a.createElement("div",null,n.a.createElement("h1",null,this.displayTitle()),n.a.createElement("hr",null)),n.a.createElement(y,{activePage:this.state.activePage})),n.a.createElement("div",null,n.a.createElement("button",{onClick:this.toTop.bind(this),id:"scroll-to-top",className:"top-btn"},"Back to Top")))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.b2fa6990.chunk.js.map