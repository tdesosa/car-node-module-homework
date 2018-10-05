class Car {
    constructor(color, convertible){
        this.color = color;
        this.convertible = convertible;
        this.speed = 0;
    }
    accelerate(accelerate){
        this.speed += accelerate;
    };
    decelerate(decelerate){
        this.speed -= decelerate;
    };
};

module.exports = Car;