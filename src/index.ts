import fs from 'fs-extra';
import { stringify } from 'querystring';
import { markdown } from './utils/markdown.js';

const compile = async function (path: string) {
    let prepend = './';
    if (path.includes('/')) {
        const lastIndex = path.lastIndexOf('/');
        const pathBeforeFile = path.substring(0, lastIndex) + '/';

        prepend += '../'.repeat(path.split('/').length - 1);

        await fs.mkdirs(`./docs/${pathBeforeFile}`);
    } else {
        await fs.mkdirs('./docs');
    }

    await fs.mkdirs('./docs');

    console.log(`Compiling ./content/${path}.md ..`);
    const content = await fs.readFile(`./content/${path}.md`, 'utf8');
    const rendered = await markdown.render(content);

    const htmlFile = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="${prepend}github-markdown.css">
    <link rel="stylesheet" href="${prepend}zenburn.css">
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

    await fs.writeFile(`./docs/${path}.html`, htmlFile, 'utf8');
};

(async function () {
    await fs.mkdirs('./docs');
    await fs.copy(
        './node_modules/highlight.js/styles/default.css',
        './docs/default.css',
        { overwrite: true }
    );

    await compile('index');
    await compile('map');
    await compile('map/blood_splat');

    console.log('HTML generated.');
})();

export {};
