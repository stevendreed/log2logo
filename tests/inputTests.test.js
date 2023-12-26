
// const jest = require('jest');

const svgTest = function()
{
    console.log('svgTest');
}
const squareSidesTest = function()
{
    console.log('squareSidesTest');
}
const isEquilTriTest = function()
{
    console.log('isEquilTriTest');
}
const equalRadTest = function()
{
    console.log('equalRadTest');
}

describe('file', () =>
{
    it('should be a .svg file',
    () => svgTest());
})

describe('shapes', () => 
{
    describe('square', () =>
    {
        it('should have the same height and width',
        () => squareSidesTest());
    });
    describe('triangle', () =>
    {
        it('should be an equilateral triangle',
        () => isEquilTriTest());
    });
    describe('circle', () =>
        it('should have an equal radius', 
        () => equalRadTest()))
});