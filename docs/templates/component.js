// 修改自原文件 docs\node_modules\vue-docgen-cli\lib\templates\component.js

module.exports = function (renderedUsage, doc, config, fileName, requiresMd, _a) {
    var isSubComponent = _a.isSubComponent, hasSubComponents = _a.hasSubComponents;
    var displayName = doc.displayName, description = doc.description, docsBlocks = doc.docsBlocks, tags = doc.tags, functional = doc.functional;
    var _b = tags || {}, deprecated = _b.deprecated, author = _b.author, since = _b.since, version = _b.version, see = _b.see, link = _b.link;
    var frontMatter = [];
    if (!config.outFile && deprecated) {
        // to avoid having the squiggles in the left menu for deprecated items
        // use the frontmatter feature of vuepress
        frontMatter.push("title: ".concat(displayName));
    }
    // https://vitepress.vuejs.org/guide/differences-from-vuepress.html#default-theme-config
    // sidebarDepth is missing for vitepress
    /* if (hasSubComponents) {
        // show more than one level on subcomponents
        frontMatter.push('sidebarDepth: 2');
    }*/
    return "".concat(frontMatter.length && !isSubComponent
        ? "\n---\n".concat(frontMatter.join('\n'), "\n---\n")
        : '', "\n  ").concat(isSubComponent||hasSubComponents ? '#' : '', "# ").concat(deprecated ? "~~".concat(displayName, "~~") : displayName, "\n\n  ").concat(deprecated ? "> **Deprecated** ".concat(deprecated[0].description, "\n") : '', "\n  ").concat(description ? '> ' + description : '', "\n  \n  ").concat(functional ? renderedUsage.functionalTag : '', "\n  ").concat(author ? author.map(function (a) { return "Author: ".concat(a.description, "\n"); }) : '', "\n  ").concat(since ? "Since: ".concat(since[0].description, "\n") : '', "\n  ").concat(version ? "Version: ".concat(version[0].description, "\n") : '', "\n  ").concat(see ? see.map(function (s) { return "[See](".concat(s.description, ")\n"); }) : '', "\n  ").concat(link ? link.map(function (l) { return "[See](".concat(l.description, ")\n"); }) : '', "\n\n  ").concat(renderedUsage.props, "\n  ").concat(renderedUsage.methods, "\n  ").concat(renderedUsage.events, "\n  ").concat(renderedUsage.slots, "\n  ").concat(docsBlocks ? '---\n' + docsBlocks.join('\n---\n') : '', "\n\n  ").concat(requiresMd.length
            ? '---\n' + requiresMd.map(function (component) { return component.content; }).join('\n---\n')
            : '', "\n  ");
}