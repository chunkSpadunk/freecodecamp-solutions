const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

function updatePreview() {
    const markdownText = editor.value;
    const htmlText = marked(markdownText);
    preview.innerHTML = htmlText;
}

/* 
Marked. js takes the Markdown files and can generate the HTML code client-side on the fly, without the need for a static site build process before deployment (although this is also an option with Marked
*/

editor.addEventListener('input', updatePreview);

// this below will be the default markdown content
editor.value = `# Heading 1
## Heading 2
[Link](https://www.example.com)
\`inline code\`
\`\`\`
// Code block
function greet() {
    return "Hello, world!";
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold Text**`;

// this will have the initial rendering take place
updatePreview();
