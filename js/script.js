let contato = document.getElementById("link1");
let blog = document.getElementById("link2");
let sobre = document.getElementById("link3");

contato.addEventListener("mouseover", function() {
    contato.classList.add("activa");    
});

contato.addEventListener("mouseleave", function() {
    contato.classList.remove("activa");
});

blog.addEventListener("mouseover", function() {
    blog.classList.add("activa");
});

blog.addEventListener("mouseleave", function() {
    blog.classList.remove("activa");
});

sobre.addEventListener("mouseover", function() {
    sobre.classList.add("activa");
});

sobre.addEventListener("mouseleave", function() {
    sobre.classList.remove("activa");
});

