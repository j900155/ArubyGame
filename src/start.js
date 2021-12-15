
function CreateStingray(imgPath, width, height) 
{
    var obj = {};
    obj.imgPath = imgPath;
    obj.img = new Image();
    obj.img.src = imgPath;

    obj.dx = 0;
    obj.dy = 0;
    obj.x = canvas.width/2;
    obj.y = canvas.height/2;
    obj.width = width;
    obj.height = height;
    return obj;
}

function CreateBall(color, width) 
{
    var obj = {};
    obj.dx = getRandomInt(3)+1;
    obj.dy = getRandomInt(3)+1;
    obj.x = canvas.width/2;
    obj.y = canvas.height/2;
    obj.width = width;
    return obj;
}

function getRandomInt(max)
{
  return Math.floor(Math.random() * max);
}

function Move(obj)
{
    obj.x += obj.dx;
    obj.y += obj.dy;
    if((obj.x+ obj.width) > canvas.width)
    {
        obj.x = canvas.width - obj.width;
    }
    else if(obj.x < 0)
    {
        obj.x = 0;
    }

    if((obj.y + obj.height) > canvas.height)
    {
        obj.y  = canvas.height-obj.height;   
    }
    else if(obj.y < 0)
    {
        obj.y = 0;
    }
    
}
function MoveBall(obj)
{
    obj.x += obj.dx;
    obj.y += obj.dy;
    if(obj.width > obj.x)
    {
        obj.dx = Math.abs(obj.dx) 
    }
    else if((canvas.width-obj.width) < obj.x)
    {
        obj.dx = Math.abs(obj.dx) *-1
    }

    if(obj.width > obj.y)
    {
        obj.dy = Math.abs(obj.dy)
    }
    else if((canvas.height) < obj.y)
    {
        obj.dy = Math.abs(obj.dy)* -1
    }
}