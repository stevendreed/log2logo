// file contains OOP definitions

// Shape constructor: accepts an integer value for
// vertices, a float for radius, and a string for
// color. 
class Shape
{
    constructor(vertices, radius, color)
    {
        this.vertices = parseInt(vertices);
        this.radius = parseFloat(radius);
        this.color = color;
    }
    draw()
    {
        console.log(`${this}.draw was envoked`);
    }
}
class Square extends Shape
{
    constructor(radius, color)
    {
        super(4, radius, color);
    }
}
class Triangle extends Shape
{
    constructor(radius, color)
    {
        super(3, radius, color);
    }
}
class Circle extends Shape
{
    constructor(radius, color)
    {
        // 360 vertices, 1 for each degree
        super(360, radius, color);
    }
}

module.exports =
{
    Shape, Square, Triangle, Circle
}