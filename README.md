<h1>Javascript Console</h1>


<p>Hello! So you are new using this console!, Lets get you started</p>
<h2>Requirements<h2>
  <p>
    For use this, you only need Node.JS and NPM
  </p>
<h2>Installation</h2>
<p>
  For install it you download this repo and type in console this with the directory of the console open:
</p>

<code>npm i</code>

<h2>How to use</h2>

<p>
  Its very simple to use!
  When you execute it using 'node index.js'(node.js required) it asks you for a code for it to be executed, after you write it, press enter,
  the result of that code will be logged into the console.
</p>

<h2>Using Plugins</h2>

<p>
  Plugins are additions to the console, they are javascript files that have functions,
  When you execute the 'help' command you will see all the plugins you have installed and its IDs.
  For Execute a plugin function use 'plug[ID].func.(Function)'.
</p>

<h2>Developing Plugins</h2>

<p>
  Developing plugins is not that hard, if you know how to make libarys, you will know how to make plugins.
  Its easy, just create your own functions and then export them using 'module.exports'
</p>
<code>
module.exports = function(x,y){return x+y}
</code>

<h2>NPM Version</h2>
<p>
  Installing this with NPM is Easier than in GitHub, You just type in shell this:
</p>
<code>npm i javascriptconsole -g</code>
<p>
After doing that just type 'js' and you will have it! (for installing plugins go to %appdata%\npm\node_modules\javascriptconsole\plugins)
</p>
