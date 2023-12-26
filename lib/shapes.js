// file contains OOP definitions

// Shape constructor: accepts an integer value for
// vertices, a float for radius, and a string for
// color. 
const Shape = function(vertices, radius, color)
{
    this.vertices = parseInt(vertices);
    this.radius = parseFloat(radius);
    this.color = color;
    this.draw = function()
    {
        console.log(`${this}.draw was envoked`);
    }
}

