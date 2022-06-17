canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car2_width=100;
car_height=90;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car2_x=10;
car2_y=10;


function add() {
	car2=new Image();
    car2.onload=uploadBackground;
    car2.src=background_image;

    greencar_imgTag=new Image();
    greencar_imgTag.onload=uploadBackground;
    greencar_imgTag.src=background_image;

}

function uploadBackground() {
	ctx.drawImage(concrete-road,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car2,car2_x,car2_y,car2_width,car2_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car2_y>=0)
    {
        car2_y=car2_y-10;
        console.log("when up arrow key is pressed,x= "+car2_x+",y= " +car2_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
    if(car2_y<=500)
    {
        car2_y=car2_y+10;
        console.log("when down arrow key is pressed,x= "+car2_x+",y= " +car2_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
    if(car2_x>=0)
    {
        car2_x=car2_x-10;
        console.log("when up arrow key is pressed,x= "+car2_x+",y= " +car2_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
    if(car2_x<=700)
    {
        car2_x=car2_x+10;
        console.log("when up arrow key is pressed,x= "+car2_x+",y= " +car2_y);
        uploadBackground();
        uploadgreencar();
    }
}