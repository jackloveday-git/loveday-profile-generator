const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const test = new Manager('Jack Loveday', 1, 'jacktloveday@gmail.com', 1);
    expect(test.name).toEqual(expect.any(String));
    expect(test.id).toEqual(expect.any(Number));
    expect(test.email).toEqual(expect.any(String));
    expect(test.officeNumber).toEqual(expect.any(Number));
});

test('gets Manager name', () => {
    const test = new Manager('Jack Loveday', 1, 'jacktloveday@gmail.com', 1);
    expect(test.getName()).toEqual(expect.any(String));
});

test('gets Manager ID', () => {
    const test = new Manager('Jack Loveday', 1, 'jacktloveday@gmail.com', 1);
    expect(test.getId()).toEqual(expect.any(Number));
});

test('gets Manager email', () => {
    const test = new Manager('Jack Loveday', 1, 'jacktloveday@gmail.com', 1);
    expect(test.getEmail()).toEqual(expect.stringContaining(test.email.toString()));
});

test('gets office number of Manager', () => {
    const test = new Manager('Jack Loveday', 1, 'jacktloveday@gmail.com', 1);
    expect(test.getOffice()).toEqual(expect.any(Number));
});

test('gets role of Manager', () => {
    const test = new Manager('Jack Loveday', 1, 'jacktloveday@gmail.com', 1);
    expect(test.getRole()).toEqual("Manager");
});
