(function(a) {
    'use strict';

    var H = require('handlebars');

    a.module('angularjs-groovy').directive(
        'ngGroovyImgDetail',
        [
            '$s',
            '$parse',
            '$compile',
            'viewData',
            'baseView',
            function($s, $parse, $compile, viewData, baseView) {
                return {
                    restrict: baseView.restrict,
                    priority: baseView.priority + 1,
                    Controller: baseView.Controller,
                    link: function(scope, element, attrs) {
                        element.addClass('groovy-list-view');

                        var options = attrs.ngGroovyViewOptions ? $parse(attrs.ngGroovyViewOptions)() : {};
                        viewData.setViewOptions(
                            scope,
                            element,
                            attrs,
                            $compile(H.templates.listView({
                                id: viewData.views.length - 1,
                                name: attrs.ngGroovyViewName,
                                img: attrs.ngGroovyViewImg,
                                subView: options.subView
                            }))(scope)
                        );

                        baseView.link(scope, element, attrs);
                    }
                };
            }
        ]
    );
})(angular);
