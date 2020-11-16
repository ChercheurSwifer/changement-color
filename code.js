// fonction random pour générer soit jaune , soit vert

function changeBodyBg(){
    let bobox = Math.floor(Math.random() * 2) + 1  
    switch(bobox)
    {
        case 1:
            document.body.style.background = 'yellow';
        break;

        case 2:
            document.body.style.background = 'green';
        break;
    }
}