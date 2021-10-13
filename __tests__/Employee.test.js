const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const test = new Employee('Jack Loveday', 1, 'jacktloveday@gmail.com');
    expect(test.name).toEqual(expect.any(String));
    expect(test.id).toEqual(expect.any(Number));
    expect(test.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Jack Loveday', 1, 'jacktloveday@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('Jack Loveday', 1, 'jacktloveday@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Jack Loveday', 1, 'jacktloveday@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('Jack Loveday', 1, 'jacktloveday@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
});
