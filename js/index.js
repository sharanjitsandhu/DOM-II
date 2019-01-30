// Your code goes here


//mouseover
const navItems = document.querySelector('.nav');

navItems.addEventListener('mouseover', e => {
    e.target.style.color = "#17A2B8";
    e.target.style.fontSize = "small";
});
// reset the color after a short delay
navItems.addEventListener('mouseout', e => {
    e.target.style.color = "";
    e.target.style.fontSize = "";
   
});

//creating an input search object
let navItemss = document.getElementsByClassName("container")[0];
let createNewNode = (name) => {
  let newNode = document.createElement("input");
  newNode.innerHTML = name;
  return newNode;
}
navItemss.append(createNewNode("search"));

//keydown
const input = document.querySelector("input");
input.addEventListener('keydown', e => {
    e.target.style.backgroundColor = "#AED4E1";
    e.stopPropagation();
    //console.log(`${e.code}`);
});


//dblclick
const buttons = Array.from(document.getElementsByClassName("btn"));
buttons[0].addEventListener('dblclick', e => {
    e.currentTarget.style.color = "#C0D5A8";
});
buttons[1].addEventListener('dblclick', e => {
    e.currentTarget.style.color = "#C0D5A8";
});
buttons[2].addEventListener('dblclick', e => {
    e.currentTarget.style.color = "#C0D5A8";
});


//load
// const script = document.createElement("script");
//   script.addEventListener("load", e => {
//     console.log("Script finished loading and executing");
//   });
//   script.src = "home-page.less";
//   script.async = true;
//   document.getElementsByTagName("script")[0].parentNode.appendChild(script);


//scroll
const scroll = Array.from(document.getElementsByClassName("intro"))[0];
scroll.getElementsByTagName("p")[0].addEventListener('scroll', e => {
    e.currentTarget.style.color = "blue";
});
console.log(scroll);
