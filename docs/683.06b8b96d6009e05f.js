"use strict";(self.webpackChunkfront_angular=self.webpackChunkfront_angular||[]).push([[683],{8683:(f,a,i)=>{i.r(a),i.d(a,{AuthModule:()=>g});var c=i(6814),r=i(2058),t=i(2029),u=i(3721);const l=[{path:"",component:(()=>{class e{constructor(o,n){this.authService=o,this.router=n,this.isAuthenticated=!1}onLogin(o,n){this.authService.login(o,n).subscribe(s=>{s?(this.isAuthenticated=!0,this.authenticatedUser=s,localStorage.setItem("token",s.token),this.router.navigate(["/home"])):console.error("Inicio de sesi\xf3n fallido")})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(u.e),t.Y36(r.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:10,vars:0,consts:[[1,"ctn-login"],[1,"ctn-login-form"],["src","assets/Logo_AutoAlert.png","alt","Logo-AutoAlert"],["type","text","name","user","placeholder","Usuario","required",""],["user",""],["type","password","name","password","placeholder","Contrase\xf1a","required",""],["pass",""],["type","button","value","INICIAR SESI\xd3N",3,"click"]],template:function(n,s){if(1&n){const p=t.EpF();t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"p"),t._uU(4,"Para ingresar se puede usar user1 o user2 y cualquier contrase\xf1a."),t.qZA(),t._UZ(5,"input",3,4)(7,"input",5,6),t.TgZ(9,"input",7),t.NdJ("click",function(){t.CHM(p);const d=t.MAs(6),m=t.MAs(8);return t.KtG(s.onLogin(d.value,m.value))}),t.qZA()()()}},styles:[".ctn-login[_ngcontent-%COMP%]{background-color:#faebd7;height:90%;display:flex;align-items:center}.ctn-login-form[_ngcontent-%COMP%]{background:white;margin:auto;display:flex;flex-direction:column;width:95%;max-width:500px;height:95%;max-height:700px;align-items:center;border-radius:15px}.ctn-login-form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40%;margin-top:20%;margin-bottom:30px}"]})}return e})()}];let h=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(l),r.Bz]})}return e})(),g=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.ez,h]})}return e})()}}]);