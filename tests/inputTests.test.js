
// const jest = require('jest');

const svgTest = function()
{
    console.log('svgTest');
}
const fileNameTest = function()
{
    console.log('fileNameTest');
}
const imageSizeTest = function()
{
    console.log('imageSizeTest');
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
    it('should be named logo.svg',
    () => fileNameTest());
    it('should be 300x200 pixels',
    () => imageSizeTest());
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