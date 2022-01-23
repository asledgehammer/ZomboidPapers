import fs from 'fs-extra';
import { markdown } from './utils/markdown.js';

(async function () {
    console.log('Converting Markdown to HTML...');

    // markdown source
    const content = await fs.readFile('./content/map.md', 'utf8');

    // converted to HTML
    const rendered = await markdown.render(content);

    const htmlFile = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="github-markdown.css">
    <link rel="stylesheet" href="zenburn.css">
    <style>
	    .markdown-body {
	    	box-sizing: border-box;
	    	min-width: 200px;
	    	max-width: 980px;
	    	margin: 0 auto;
	    	padding: 45px;
	    }
    
	    @media (max-width: 767px) {
	    	.markdown-body {
	    		padding: 15px;
	    	}
	    }
    </style>
  </head>
  <body style='margin: 0 auto; background-color: black;'>
    <article class="markdown-body">
      ${rendered}
    </article>
  </body>
</html>`;

    await fs.mkdirs('./docs');

    await fs.writeFile('./docs/map.html', htmlFile, 'utf8');

    await fs.copy(
        './node_modules/highlight.js/styles/default.css',
        './docs/default.css',
        { overwrite: true }
    );

    console.log('HTML generated.');
})();

export {};
