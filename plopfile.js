module.exports = function (plop) {
    // controller generator
    plop.setGenerator('readme', {
        description: 'create readme',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'project name please'
        }],
        actions: [{
            type: 'add',
            path: 'src/README.md',
            templateFile: 'templates/readme.hbs'
        }]
    });
};
