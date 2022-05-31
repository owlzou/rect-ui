export function getParent(cur: any, name: String) {
    let p = cur.$parent;
    while (p && p.$options.name != name) {
        p = p.$parent;
    }
    if (p && p.$options.name == name) {
        return p;
    } else {
        return null;
    }
}