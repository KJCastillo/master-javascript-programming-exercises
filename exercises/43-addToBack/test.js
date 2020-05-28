const fs = require('fs');
const path = require('path');
const rewire = require("rewire");
let _log = console.log;
let _buffer = '';

global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");
it('You have to use the console.log function inside the loop', function () {
    const app = require('./app.js');
    expect(console.log.mock.calls.length > 0).toBe(true);
});

test("You should create the variable called addToBack.", function () {
    const file = rewire("./app.js");
    const myVar = file.__get__('addToBack');
    expect(myVar).toBeTruthy();
});

it('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');

    function addToBack(arr, element) {
        // your code here
        arr.push(element);
        return arr;
    }

    let _output = [1, 2, 3]

    expect(_buffer).toMatch(_output.map(n => n).join(","));
    
    // expect(parseInt(_buffer)).toEqual(_output)
    // expect(_buffer).toMatch(_output.map(n => n).join("\n"));
});
