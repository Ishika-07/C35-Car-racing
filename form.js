class form {

    constructor(){

    }
    display(){
    
        var title = createElement('h2');
        title.html("Car Racing"); 
        title.position(170,10);

        var input = createInput("Name");
        input.position(130,160);

        var button = createButton('Play');
        button.position(250,250);

        var Greeting = createElement('h3');
        Greeting.html("Welcome");
        Greeting.position(250,50);


        button.mousePressed();
    }



}