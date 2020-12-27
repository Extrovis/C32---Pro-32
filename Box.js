class Box{

    constructor(x, y, width, height) {
        var properties = {
            isStatic: false
        }

        this.body = Bodies.rectangle(x, y, width, height, properties);

        this.width = width;
        this.height = height;

        this.visibility = 255;

        World.add(world, this.body);
    }

    scoreCheck(){
        
        if(this.visibility < 255 && this.visibility > -1){
            score++;
        }
    }

    display() {

        if(this.body.speed < 3){

            var pos = this.body.position;

            push();
    
            rectMode(CENTER);
    
            translate(pos.x, pos.y);
    
            fill("white");
    
            rect(0, 0, this.width, this.height);
    
            noFill();
    
            pop();

        }else {

            push();

            this.visibility -= 1;

            tint(255, this.visibility);

            pop();

            World.remove(world, this.body);

        }

        console.log(score);

    }

}