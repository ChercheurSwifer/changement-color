// fonction random pour générer soit jaune , soit vert

let button = document.getElementById("color");

button.addEventListener("click", function() 
{
    const curColour = document.body.style.backgroundColor;

    document.body.style.backgroundColor = curColour === 'red' ? 'blue' : 'red';
});