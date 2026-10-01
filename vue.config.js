// vue-loader 15 imports a default export from plain <style> blocks, which only
// re-export with `export *`. Harmless, but webpack 5 warns for each one.
const styleExportWarning = /export 'default' \(imported as 'style\d+'\) was not found/

module.exports = {
    publicPath: '/',
    configureWebpack: {
        plugins: [{
            // filtered at afterCompile since friendly-errors reads compilation.warnings
            // directly and bypasses webpack's ignoreWarnings
            apply: compiler => compiler.hooks.afterCompile.tap('IgnoreStyleExportWarning', compilation => {
                compilation.warnings = compilation.warnings.filter(w => !styleExportWarning.test(w.message))
            })
        }]
    }
}
