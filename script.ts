
class Circle
{
    radius:number;
    color:string;
    constructor(radius:number=1,color:string="red")
    {
        this.radius=radius;
        this.color=color;
    }
    getRadius():number{ return this.radius; }
    setRadius(radius:number):void{ this.radius=radius; }
    getColor():string{ return this.color; }
    setColor(color:string):void{ this.color=color; }
    toString():string{ return `Circle[Radius=${this.radius},Color=${this.color}]`; }
    getArea():number{ return 3.14*this.radius*this.radius; }
    getCircumference():number{ return 2*3.14*this.radius; }
}

let circle1=new Circle();
let circle2=new Circle(2);
let circle3=new Circle(3,"blue");

console.log("Circle 1:",circle1.toString(),circle1.getArea(),circle1.getCircumference());
console.log("Circle 2:",circle2.toString(),circle2.getArea(),circle2.getCircumference());
console.log("Circle 3:",circle3.toString(),circle3.getArea(),circle3.getCircumference());