<script>
</script>

<br><br>

<h2> Svelte + Svelte Kit notes</h2>

I picked Svelte Kit in Jan 2022. Great framework to build node apps. I liked it so much that I moved this site from plain html+css site to Sveltei Kit. The framework is SEO friendly, pre-renders pages and allows rapid development of components and static pages. <br>
<br>
<br>

<h3>Here are a few basic instructions to get started on Svelte Kit</h3>



How to start a Svelte project<br>
<div class="code">npm init svelte@next <name></div>
<br>
How to build and deploy<br>
<div class="code">npm install</div>
<div class="code">npm run build</div>
<div class="code">npm run dev&</div> (to run npm in backgroud)
<br><br>

In case you run without ‘&’ (in foreground), use right Ctrl and ‘c’ to terminate server and return to terminal prompt
<br><br>
Copy and push public folder to deploy to production<br><br>


<br><br>


Save layout to src/routes/__layout.svelte
This file should have the header, main and footer tags with elements common to all pages.
Use <slot></slot> for content specific to each page.
In the individual pages, you don’t need to code the common elements. Jump directly to components and text specific to that page.

 Save css to src/styles/global.css
<br><br>

Good training on basics:<br>
https://www.youtube.com/watch?v=ftiTVitDbx0&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=4
<br><br>

Other references:
https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
09 Feb 2022
<br><br><br>
