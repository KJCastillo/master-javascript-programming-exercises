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
// it('Loop and add a conditional to print the position (i) where wally was fund', function () {
//     const _app = rewire('./app.js');
//     const people = _app.__get__('people');
//     const position = people.indexOf("Wally");
//     expect(_buffer.includes(position+"\n")).toBe(true);
// });
test("You should create the variable called getLastElement.", function () {
    const file = rewire("./app.js");
    const myVar = file.__get__('getLastElement');
    expect(myVar).toBeTruthy();
});
it('The output in the console should match the one in the instructions!', function () {
    const _app = rewire('./app.js');

    function getLastElement(array) {
        // your code here
        if (array.length > 0) {
            return array[array.length - 1]
        }
        else {
            return undefined
        }
    }

    let _output = 48
    expect(parseInt(_buffer)).toEqual(_output)
    // expect(_buffer).toMatch(_output.map(n => n).join("\n"));
    // expect(_buffer).toMatch(_output.map(n => n).join(","));
});
