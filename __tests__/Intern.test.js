const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const test = new Intern('Jack Loveday', 1, 'jacktloveday@gmail.com', 'Carleton');
    expect(test.name).toEqual(expect.any(String));
    expect(test.id).toEqual(expect.any(Number));
    expect(test.email).toEqual(expect.any(String));
    expect(test.school).toEqual(expect.any(String));
});

test('gets intern name', () => {
    const intern = new Intern('Jack Loveday', 1, 'jacktloveday@gmail.com', 'Carleton');
    expect(intern.getName()).toEqual(expect.any(String));
});

test('gets intern ID', () => {
    const intern = new Intern('Jack Loveday', 1, 'jacktloveday@gmail.com', 'Carleton');
    expect(intern.getId()).toEqual(expect.any(Number));
});

test('gets intern email', () => {
    const intern = new Intern('Jack Loveday', 1, 'jacktloveday@gmail.com', 'Carleton');
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

test('gets school of intern', () => {
    const intern = new Intern('Jack Loveday', 1, 'jacktloveday@gmail.com', 'Carleton');
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('gets role of intern', () => {
    const intern = new Intern('Jack Loveday', 1, 'jacktloveday@gmail.com', 'Carleton');
    expect(intern.getRole()).toEqual("Intern");
});
