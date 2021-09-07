function signup(){
    document.querySelector(".signin-form").style.cssText = "" = "display: none;";
    document.querySelector(".signup-form").style.cssText = "" = "display: block;";
    document.querySelector(".container").style.cssText = "" = "display: background: linear-gradient(to left bottom,#65dfc5, #6cdbeb );";
    document.querySelector("btn-signup").style.cssText = "display: none";
    document.querySelector("btn-signin").style.cssText = "display: block";
};

function signin(){
    document.querySelector(".signup-form").style.cssText = "display: none;";
    document.querySelector(".signin-form").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, rgb(6, 108, 224),  rgb(14, 48, 122));";
    document.querySelector(".btn-signin").style.cssText = "display: none";
    document.querySelector(".btn-signup").style.cssText = "display: block";
}