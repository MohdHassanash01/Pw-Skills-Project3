let logo = document.querySelector(".nav-part1 img")

console.log(logo);
logo.addEventListener("mouseenter",function(){
    logo.style.cursor = 'pointer'
})

logo.addEventListener("mouseleave",function(){
    logo.style.cursor = 'pointer'
})


//++++++++++++++++++++++++++++++++++++++


let line = document.querySelector(".nav-part1 .line")

line.addEventListener("mouseenter",function(){

    line.style.backgroundColor = '#ba0cc5'
    line.style.cursor = 'pointer'
   
})

line.addEventListener("mouseleave",function(){
     
    line.style.backgroundColor = 'white'
    line.style.cursor = 'none'

})


let nav = document.querySelectorAll(".navList h3")
console.log(nav);
nav.forEach(function(item){
    
item.addEventListener("mouseenter",function(){
    
    item.style.border = '2px solid white'
    item.style.color = 'white'
    item.style.cursor = 'pointer'
})

item.addEventListener("mouseleave",function(){
    
    item.style.border = '2px solid transparent'
    item.style.color = 'white'
})

})


let btn = document.querySelectorAll(".btns button")
console.log(btn);

btn.forEach(function(item){

    item.addEventListener("mouseenter",function(){
        item.style.border = '3px solid #ba0cc5'
        item.style.backgroundColor = 'white';
        item.style.color = "#ba0cc5"
    })


    item.addEventListener("mouseleave",function(){
        item.style.border = '3px solid transparent'
        item.style.backgroundColor = '#ba0cc5';
        item.style.color = "white"
    })

})


let heading = document.querySelectorAll(".hero .heading")

console.log(heading);

heading.forEach(function(item){

    item.addEventListener("mouseenter",function(){
        item.style.WebkitTextStroke = '2px rgb(59,173,209)'
        item.style.color = 'black'
        item.style.scale  = 1.1
        item.style.cursor = 'pointer'
    })

    item.addEventListener("mouseleave",function(){
        item.style.WebkitTextStroke = '2px transparent'
        item.style.color = 'white'
        item.style.scale  = 1
        item.style.cursor = 'none'

    })
})

let count = 0
let log = document.querySelector(".btns .log")
log.addEventListener("click",function(){
    if (count == 0) {
        log.innerHTML = 'Log In'
        alert("LOG IN")
        count ++
    } else {
        log.innerHTML = 'Sign In'
        count --
    }
})

let para = document.querySelector(".hero .para")

para.addEventListener("mouseenter",function(){

    para.style.color = '#ba0cc5'
    para.style.cursor = 'pointer'

})

para.addEventListener("mouseleave",function(){
    para.style.color = 'white'
    para.style.cursor = 'none'

})


let btn2 = document.querySelector(".hero .second ")

btn2.addEventListener("mouseenter",function(){
    btn2.style.border = '3px solid #ba0cc5'
    btn2.style.backgroundColor = 'white';
    btn2.style.color = "#ba0cc5"
    btn2.style.cursor = 'pointer'

})


btn2.addEventListener("mouseleave",function(){
    btn2.style.border = '3px solid transparent'
    btn2.style.backgroundColor = '#ba0cc5';
    btn2.style.color = "white"
    btn2.style.cursor = 'none'

})

let flag = 0
btn2.addEventListener("click",function(){
    if (flag == 0 ) {
        btn2.innerHTML = 'Allow To Access'
flag ++
    }else{
        btn2.innerHTML = 'Request Early Access'
        flag --
    }
})


let cursor = document.querySelector(".cursor")
let body = document.querySelector("body")
body.addEventListener("mousemove",function(dets){

cursor.style.left = dets.x+"px"
cursor.style.top = dets.y+"px"

})

let num = 0
let token = document.querySelector(".btns .token")
console.log(token);
token.addEventListener("click",function(){
    if (log.innerHTML == 'Log In') {
        token.innerHTML = 'Add Token'
        num ++
    } 
    else if(log.innerHTML != 'Log In'){
        alert("Please Log In")
       
    }
    else{
        token.innerHTML = 'Buy 1 Token'
        num --
    }
})


// Animation 


let tl = gsap.timeline()
tl .from(".navList h3",{
    y:-80,
    opacity:0,
    duration:0.8,
    stagger:0.3,
})

tl.from(".btns button",{
    x:-100,
    opacity:0,
    stagger:1,
    duration:0.5

})

tl.from(".hero .heading",{
    rotation:180,
    opacity:0,
    duration:0.5,
    scale:0,
    stagger:1,
    
})


tl .from(".hero .para",{
    y:-80,
    opacity:0,
    duration:0.8,
    stagger:0.3,
})

tl.from(".hero .second ",{
    y:80,
    opacity:0,
    duration:0.8,
})

tl.from(".down",{
    y:30,
    duration:0.5,
    repeat:-1,
    yoyo:true,
    opacity:0
})