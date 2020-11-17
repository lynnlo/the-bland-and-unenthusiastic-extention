function replaceInText(element, pattern, replacement) {
    // Search for nodes
    for (let node of element.childNodes) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                replaceInText(node, pattern, replacement);
                break;
            case Node.TEXT_NODE:
                // Replaces '!' with '.' and lowers all characters
                node.textContent = node.textContent.replace(pattern, replacement);
                node.textContent = node.textContent.toLowerCase();
                break;
            case Node.DOCUMENT_NODE:
                replaceInText(node, pattern, replacement);
        }
    }
}

chrome.runtime.onMessage.addListener(function(){
    replaceInText(document.body, /!/g, '.');
})