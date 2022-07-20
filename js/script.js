let contato = document.getElementById("link1");
let blog = document.getElementById("link2");
let sobre = document.getElementById("link3");

contato.addEventListener("mouseover", function() {
    contato.classList.add("active");    
});

contato.addEventListener("mouseleave", function() {
    contato.classList.remove("active");
});

blog.addEventListener("mouseover", function() {
    blog.classList.add("active");
});

blog.addEventListener("mouseleave", function() {
    blog.classList.remove("active");
});

sobre.addEventListener("mouseover", function() {
    sobre.classList.add("active");
});

sobre.addEventListener("mouseleave", function() {
    sobre.classList.remove("active");
});