const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    Getbackgroundimg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function Getbackgroundimg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responsejson = await response.json();
    var datetime=responsejson.datetime;
    var hour=datetime.slice(11,13)
    if(hour>=04&&hour<=06){
        bg="sunrise1.png"
    }
    else if(hour>=06&&hour<=08) {
    bg="sunrise2.png"
    }
    else if(hour>=08&&hour<=10){
        bg="sunrise3.png"
        }
        else if(hour>=10&&hour<=12){
            bg="sunrise4.png"
        }
        else if(hour>=12&&hour<=14){
            bg="sunrise5.png"
        }
        else if(hour>=14&&hour<=16){
           bg="sunrise6.png"
        }
        else if(hour>=16&&hour<=18){
            bg="sunrise7.png"
        }
        else if(hour>=18&&hour<=20){
            bg="sunrise8.png"
        }
        else if(hour>=20&&hour<=22){
            bg="sunrise9.png"
        }
        else if(hour>=22&&hour<=24){
            bg="sunrise10.png"
        }
    }
   }
}