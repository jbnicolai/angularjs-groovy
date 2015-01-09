(function(w, d, a, g) {
    'use strict';

    require('./settings/conf');

    if (typeof a === 'undefined') {
        throw new Error('AngularJs-Groovy: No instance of AngularJS could be found.');
    }

    g.masterDetail = g.mD || g.masterDetail;
    g.header = g.h || g.header;

    delete g.mD;
    delete g.h;

    var m = a.module('angularjs-groovy', [
        'conf'
    ]).constant('$s', g);

    // Configs to append meta/style
    require('./configs/meta')(m);
    require('./configs/style')(m);

    // Services
    require('./services/Handlebars');
    require('./services/views');

    // Controllers
    require('./controllers/base');

    // Directives
    require('./directives/base');
    require('./directives/header');
    require('./directives/masterDetail');
    require('./directives/footer');
    require('./directives/view');
})(window, document, angular, groovy || window.groovy);
