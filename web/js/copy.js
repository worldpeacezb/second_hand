_l.utils.api('loveProject/getLoveNavs').done(function(r) {
    return $nav.html(_.template(navTmpl)({
        navigations: r.result.navigations
    }));
});

window._l.utils = {
    api: function (url, data, options) {
        var def, defaults, opts;
        def = $.Deferred();
        defaults = {
            type: "GET",
            dataType: 'jsonp'
        };
        opts = _.extend(defaults, options);
        $.ajax({
            url: "" + cfg.apiPrefix + url,
            data: data || {},
            dataType: opts.dataType,
            type: opts.type,
            jsonp: 'callBackParam',
            success: function (r) {
                var code;
                code = r.code;
                if (_.indexOf(cfg.apiCode.SUCCESS, code) !== -1) {
                    return def.resolve(r);
                } else {
                    return def.reject(r, url, data);
                }
            },
            error: function (r) {
                return def.reject(r);
            }
        });
        return def.promise();
    },
}