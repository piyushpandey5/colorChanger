console.log("this is the page")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id==buttons[0].id){
            body.style.backgroundColor = buttons[0].id;
        }
        else if(e.target.id==buttons[1].id){
            body.style.backgroundColor = buttons[1].id;
        }
        else if(e.target.id==buttons[2].id){
            body.style.backgroundColor = buttons[2].id;
        }
        else if(e.target.id==buttons[3].id){
            body.style.backgroundColor = buttons[3].id;
        }
        else if(e.target.id==buttons[4].id){
            body.style.backgroundColor = buttons[4].id;
        }
    })
})