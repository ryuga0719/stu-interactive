var d=Object.defineProperty;var c=(n,e,i)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i;var r=(n,e,i)=>(c(n,typeof e!="symbol"?e+"":e,i),i);import{S as h,C as l,P as m,a as u,W as p,O as w,M as f,b as g,c as y,T as b}from"./vendor/vendor-3a709af7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();class L{constructor(e,i){this._renderer=e,this._camera=i,this.onResize(),window.addEventListener("resize",()=>{this.onResize()})}onResize(){const e=window.innerWidth,i=window.innerHeight;this._renderer.setPixelRatio(window.devicePixelRatio),this._renderer.setSize(e,i),this._camera.aspect=e/i,this._camera.updateProjectionMatrix()}}const M="data:model/mtl;base64,bmV3bXRsIG1haW4KS2EgMS4wIDEuMCAxLjAKS2QgMS4wIDEuMCAxLjAKS3MgMC4wIDAuMCAwLjAKZCAxLjAKTnMgMC4wCmlsbHVtIDAKbWFwX0tkIHJvb21BcmVhLmpwZwo=",P=""+new URL("../img/roomArea.jpg",import.meta.url).href,A=""+new URL("../roomArea/roomArea.obj",import.meta.url).href,v=""+new URL("../media/guide.mp3",import.meta.url).href;class z{constructor(){r(this,"button");r(this,"audio");r(this,"isPlay");this.audio=new Audio,this.button=document.getElementById("button"),this.bind(),this.isPlay=!1}playMp3File(){const e=v;this.audio.src=e,this.isPlay?(this.audio.pause(),this.isPlay=!1):(this.audio.play(),this.isPlay=!0)}bind(){this.button.addEventListener("click",()=>{this.playMp3File()})}}class C{constructor(){r(this,"canvas");r(this,"scene");r(this,"camera");r(this,"light");r(this,"renderer");r(this,"controls");r(this,"resizer");r(this,"amplitude",.3);r(this,"initPosition",{x:-3,y:9,z:-5});r(this,"easing",.002);this.canvas=document.getElementById("canvas"),this.scene=new h,this.scene.background=new l(0),this.camera=new m(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(this.initPosition.x,this.initPosition.y,this.initPosition.z),this.camera.lookAt(0,0,0),this.light=new u(16777215,1.5,150,1),this.light.position.x=-3,this.light.position.y=10,this.light.position.z=0,this.scene.add(this.light),this.renderer=new p({canvas:this.canvas}),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.controls=new w(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.2,this.resizer=new L(this.renderer,this.camera),this.loadObjMtl(),this.animate()}loadObjMtl(){new f().load(M,i=>{i.preload();const o=new g;o.setMaterials(i),o.load(A,t=>{t.traverse(s=>{s instanceof y&&(s.material.map=new b().load(P))}),t.scale.set(5,5,5),this.scene.add(t)})})}animate(){requestAnimationFrame(()=>this.animate()),this.controls.update(),this.camera.position.y=Math.sin(Date.now()*this.easing)*this.amplitude+this.initPosition.y,this.renderer.render(this.scene,this.camera)}}new C;new z;
