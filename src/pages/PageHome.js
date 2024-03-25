export const PageHome = () => {
	return /*html*/ `
	<div class="page pageHome">
<p>This site is a template for sites created with HTML, CSS and JavaScript files.</p>

<h2>Purpose</h2>
<ul>
	<li>to give you a useful HTML/CSS/JS <b>starter site</b> with many <b>features</b></li>
	<li>to make you aware of the <b>limitations</b> of HTML/CSS/JavaScript sites (sites you can start in the browser or with VSCode's Live Server extension)</li> 
	<li>to make the reasons clear why as a web developer you should instead learn <b>JavaScript frameworks</b>, e.g. React, Vue, Angular (sites which require Node and which you start with <code>npm run dev</code>)</li>
	<li>to allow you to work in a HTML/CSS/JavaScript site that has a <b>similar structure</b> to JavaScript frameworks</li>
</ul>

<h2>Features</h2>
<ul>
	<li>create new pages with simple <b>Router</b></li>
	<li>create and reuse nested <b>components</b></li>
	<li>display data from <b>local JSON files</b></li>
	<li>display data from <b>third-party APIs</b></li>
	<li>allow use to create/edit/delete data with <b>localStorage CRUD</b></li>
	<li>dynamically change the site (<b>dark mode</b>)</li>
	<li><b>responsive</b> design including mobile hambuger menu</li>
	<li><b>Font Awesome</b> icons</li>
	<li>can be easily <b>published to Vercel</b></li>
</ul>

<h2>Limitations</h2>
<ul>
	<li>you <b>cannot install npm packages</b> as you can in JavaScript Frameworks, which means that technologies such as TypeScript, Sass, Tailwind, testing frameworks, etc. are cumbersome to install and maintain</li>
	<li>Router has <b>no page bookmarking</b> and <b>no page refreshing</b> support, i.e. the URL does not reflect which page the user is on and so cannot bring the user back to the same page when clicking a bookmark or refreshing the page, and this is not possible since there is no Node server present as there is in JavaScript frameworks</li>
	<li>no <b>state variable support</b> which means adding interactivity to the site becomes exponentially complex</li>
	<li>VSCode <b>cannot auto-format HTML</b> in string literals</li>
</ul>

</div>
	`;
};