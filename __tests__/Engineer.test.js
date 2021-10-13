const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const test = new Engineer('Jack Loveday', 1, 'jacktloveday@gmail.com', 'jackloveday-git');
    expect(test.name).toEqual(expect.any(String));
    expect(test.id).toEqual(expect.any(Number));
    expect(test.email).toEqual(expect.any(String));
    expect(test.github).toEqual(expect.any(String));
});

test('gets Engineer name', () => {
    const test = new Engineer('Jack Loveday', 1, 'jacktloveday@gmail.com', 'jackloveday-git');
    expect(test.getName()).toEqual(expect.any(String));
});

test('gets Engineer ID', () => {
    const test = new Engineer('Jack Loveday', 1, 'jacktloveday@gmail.com', 'jackloveday-git');
    expect(test.getId()).toEqual(expect.any(Number));
});

test('gets Engineer email', () => {
    const test = new Engineer('Jack Loveday', 1, 'jacktloveday@gmail.com', 'jackloveday-git');
    expect(test.getEmail()).toEqual(expect.stringContaining(test.email.toString()));
});

test('gets github of Engineer', () => {
    const test = new Engineer('Jack Loveday', 1, 'jacktloveday@gmail.com', 'jackloveday-git');
    expect(test.getGitHub()).toEqual(expect.any(String));
});

test('gets role of Engineer', () => {
    const test = new Engineer('Jack Loveday', 1, 'jacktloveday@gmail.com', 'jackloveday-git');
    expect(test.getRole()).toEqual("Engineer");
});
