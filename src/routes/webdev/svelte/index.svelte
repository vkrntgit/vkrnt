<script>
</script>

<main>

<br><br>

<h2> Svelte + Svelte Kit notes</h2>
I picked Svelte Kit in Jan 2022. Great framework to build node apps. I liked it so much that I moved this site from plain html+css site to Sveltei Kit. The framework is SEO friendly, pre-renders pages and allows rapid development of components and static pages. <br>


<h3>Here are a few basic instructions to get started on Svelte Kit</h3>
How to start a Svelte project<br>
<div class="code">npm init svelte@next <name></div>
<br>
How to build and deploy<br>
<div class="code">npm install</div>
<div class="code">npm run build</div>
<div class="code">npm run dev&</div> (to run npm in backgroud)
<br>
<br>

In case you run without ‘&’ (in foreground), use CMD and 'c' (or on Windows, right Ctrl and ‘c’) to terminate server and return to terminal prompt
<br>
<br>
Copy and push public folder to deploy to production.
<br>
<br>
<br>

<h3>Sveltekit: How to create a common header, footer and page layout</h3>
Save the styling and header, footer tags  to src/routes/__layout.svelte <br>
This file should have the header, main and footer tags with elements common to all pages.
Use &lt; slot &gt;  &nbsp; &lt; /slot &gt; for content specific to each page.<br><br>
In the individual site pages, you don’t need to code the common elements. Jump directly to components and text specific to that page. The styling defined in __layout is automatically applied. <br><br><br>

<h3>Sveltekit: Creating common stylesheet. </h3>
 Save css to src/styles/global.css <br>
Now open the __layout file and add the following line in the script tag:<br>
<div class="code">
   import '../style/global.css'
</div> 
<br>
<br>

<h3> Containarize your sveltkit site </h3>
Create a docker image of svelte kit code.
<br><br>
Steps:<br>
1. Open package.json. Change adapter-auto to adapter-node<br>
2. Open package-lock.json. Change adapter-auto to adapter-node<br>
3. npm run build <br>
4.  node build <br>
5. Create Dockerfile <br>
6. Enter <br>
<div class="code">    
    FROM node:16 <br>
    WORKDIR /app <br>
    COPY package.json package-lock.json ./ <br>
    RUN npm ci <br>
    COPY . . <br>
    RUN npm build && npm prune --production <br>
    ENV PORT 5050 <br>
    EXPOSE 5050 <br>
    CMD ["node","build"] <br>
</div> 
7. Create .dockerignore <br>
8. Enter these files <br>
<div class="code">    
    .git <br>
    .svelte-kit<br>
    build <br>
    node_modules <br>
    .dockerignore <br>
    .gitignore <br>
    Dockerfile <br>
    README.md <br>
</div>
<br>
<br>

<h3> Sveltekit: How to make an exception to the standard layout defined in __layout.svelte</h3>
If you want a page to take on a skin that is different from the standard layout, create a page __layout.reset.svelte in the folder of the page. This applies the reset layout instead of the standard layout defined in __layout.svelte.
<br>
<br>
<br>
<h3> Sveltekit: How to define a component that can be accessed by any page</h3>
Save your components in the lib folder. Let's say you are creating a component called 'title' that can be called from any page. To create this component, create a file named title.svelte in the lib folder. Insert script, div and style in the file to shape the component. <br><br>
Here's how to call the component in any page:<br>

<div class="code">
    &lt; script &gt; <br>
        import Title from '$lib/title.svelte' <br>
    &lt; /script &gt; <br>
<br><br>
   &lt; header &gt;<br>
        &lt; Title title='my title text' &gt;<br>
   &lt; /header &gt;<br>
</div>
<br>
<br>

<h3>Sveltekit reference material:</h3>
Good training on basics:<br>
<a href="https://www.youtube.com/watch?v=9OlLxkaeVvw&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=1">The Net Ninja</a>
<br>
<br>
Other references:
<a href="https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog">Building a blog with Sveltekit</a>
<br>
<br>
<br>
<br>
<br>
</main>
