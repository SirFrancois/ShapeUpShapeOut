const shapeContainer = document.getElementById("shape-container");
rectangleBtn = document.getElementById('recBtn');
squareBtn = document.getElementById('squareBtn');
circleBtn = document.getElementById('circleBtn');
triangleBtn = document.getElementById('triangleBtn');

rectangleBtn.addEventListener("click", () => new Rectangle(document.getElementById("rec-width").Value, document.getElementById("rec-height").Value ));
squareBtn.addEventListener("click", () => new Square(document.getElementById("square-length").Value,
circleBtn.addEventListener("click", () => new Circle(document.getElementById("circle-radius").Value,
triangleBtn.addEventListener("click", () => new Triangle(document.getElementById("triangle-height").Value,


addToDom() { 
}

class shape {
    constructor(){
        this.shape = document.createElement("div")
        this.shape.classList.add("shape")
        shapeContainer.appendChild(this.shape);
    }
}

class Rectangle extends shape{
    constructor(height, width){
        super();
        this.height = height;
        this.width = width;
        this.shape.style.height = `${height}px`;
        this.shape.style.width = `${width}px`;
        this.shape.style.backgroundColor = "Green"
        this.shape.style.top = Math.floor(math.random())
        this.shape.style.left = math.floor(math.random())
        this.addToDom 
    }
}

class Square extends Shape {
    constructor(){
        super();
        this.sideLength = sideLength;
        this.shape.style.height = `${sideLength}px`;
        this.shape.style.width = `${sideLength}px`;
        this.shape.style.backgroundColor = "red";
        this.shape.style.top = Math.floor(math.random())
        this.shape.style.left = math.floor(math.random())
        this.addToDom 
        }
}

class Circle extends Shape {
    constructor(radius){
        super();
        this.radius = radius;
        this.shape.style.height = `${this.radius}px`;
        this.shape.style.width = `${this.radius}px`;
        this.shape.style.backgroundColor = "purple";
        this.shape.style.top = math.floor(math.random())
        this.shape.style.left = math.floor(math.random())
        this.addToDom
        }
}

class Triangle extends Shape {
    constructor(){
        super();
        this.height = height;
        this.shape.style.height = `${side.height}px`;
        this.shape.style.width = `${side.height}px`;
        this.shape.style.backgroundColor = "yellow";
        this.shape.style.top = Math.floor(math.random())
        this.shape.style.left = math.floor(math.random())
        this.addToDom 
        }
}

}