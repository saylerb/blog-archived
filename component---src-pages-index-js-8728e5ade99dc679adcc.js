(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{230:function(n,a,e){"use strict";e.r(a);var t=e(273),s=e(0),o=e.n(s),i=e(233),l=e(239);a.default=function(){return o.a.createElement(l.a,null,o.a.createElement("h1",null,"Hi there"),o.a.createElement("p",null,"Welcome to my personal site!"),o.a.createElement(i.StaticQuery,{query:"534343722",render:function(n){return o.a.createElement("ul",null,n.allMarkdownRemark.edges.map(function(n){return o.a.createElement("li",{key:n.node.id},o.a.createElement("span",null,n.node.frontmatter.date," "),o.a.createElement(i.Link,{to:n.node.frontmatter.path},n.node.frontmatter.title))}))},data:t}))}},233:function(n,a,e){"use strict";e.r(a),e.d(a,"graphql",function(){return g}),e.d(a,"StaticQueryContext",function(){return d}),e.d(a,"StaticQuery",function(){return h});var t=e(0),s=e.n(t),o=e(15),i=e.n(o),l=e(232),p=e.n(l);e.d(a,"Link",function(){return p.a}),e.d(a,"withPrefix",function(){return l.withPrefix}),e.d(a,"navigate",function(){return l.navigate}),e.d(a,"push",function(){return l.push}),e.d(a,"replace",function(){return l.replace}),e.d(a,"navigateTo",function(){return l.navigateTo});var c=e(234),r=e.n(c);e.d(a,"PageRenderer",function(){return r.a});var u=e(49);e.d(a,"parsePath",function(){return u.a});var d=s.a.createContext({}),h=function(n){return s.a.createElement(d.Consumer,null,function(a){return n.data||a[n.query]&&a[n.query].data?(n.render||n.children)(n.data?n.data.data:a[n.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},234:function(n,a,e){var t;n.exports=(t=e(236))&&t.default||t},235:function(n){n.exports={data:{site:{siteMetadata:{title:"Brian's posts"}}}}},236:function(n,a,e){"use strict";e.r(a);var t=e(0),s=e.n(t),o=e(15),i=e.n(o),l=e(53),p=e(1),c=function(n){var a=n.location,e=p.a.getResourcesForPathname(a.pathname);return s.a.createElement(l.a,{location:a,pageResources:e})};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=c},237:function(n,a,e){},239:function(n,a,e){"use strict";var t=e(235),s=e(0),o=e.n(s),i=e(15),l=e.n(i),p=e(241),c=e.n(p),r=e(233),u=function(n){var a=n.siteTitle;return o.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(r.Link,{to:"/",style:{color:"white",textDecoration:"none"}},a))))},d=(e(237),function(n){var a=n.children;return n.data,o.a.createElement(r.StaticQuery,{query:"755544856",render:function(n){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(u,{siteTitle:n.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},a))},data:t})});d.propTypes={children:l.a.node.isRequired},a.a=d},273:function(n){n.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/brian/workspace/personal/saylerb.github.io/src/pages/2018-08-17-hello-gatsby/index.md absPath of file >>> MarkdownRemark",frontmatter:{path:"/hello-gatsby",title:"Hello, Gatsby",date:"2018-08-17"},excerpt:"I'm probably overengineering this blog, but that's okay. This has been a fun\nlearning experience, I get to use a technology that I like to…",timeToRead:1,html:"<p>I'm probably overengineering this blog, but that's okay. This has been a fun\nlearning experience, I get to use a technology that I like to use (React) while\nalso learning some new ones (GraphQL). Right now I'm writing this post in\nMarkdown, and Gatsby is transforming it into HTML for me.</p>\n<p>The Gatbsy documentation is great, and it's easy to get started by walking\nthrough their <a href=\"https://next.gatsbyjs.org/tutorial/\">tutorial</a> and using one of\nthe <a href=\"https://next.gatsbyjs.org/docs/gatsby-starters/\">starters</a>.</p>"}},{node:{id:"/Users/brian/workspace/personal/saylerb.github.io/src/pages/2018-08-26-setting-up-a-new-intellij-project/index.md absPath of file >>> MarkdownRemark",frontmatter:{path:"/set-up-a-new-intellj-project-with-gradle",title:"How to Set Up a New IntelliJ Project with Gradle",date:"2018-08-26"},excerpt:"Step 1: Install things Install IntelliJ CE Download IntelliJ Community Edition and copy to Applications folder. Open, don't import any…",timeToRead:3,html:'<h2>Step 1: Install things</h2>\n<h3>Install IntelliJ CE</h3>\n<ul>\n<li>Download IntelliJ Community Edition and copy to Applications folder.</li>\n<li>Open, don\'t import any settings.</li>\n<li>You can skip the rest of the initial configuration process.</li>\n</ul>\n<h3>Make sure you have Java installed</h3>\n<ul>\n<li>Java 1.8, which is the current version of Java in Long Term\nSupport as of this article, has most of the modern features that\nanyone new to Java will need.</li>\n<li><a href="http://exercism.io/languages/java/installation#mac-os-x">Exercism has a pretty good page for instructions on\ninstallation</a>. If\nyou want to download an older version of Java, you\'ll have to make some\nadjustments to the installation instructions. For example, if you want to\ndownload Java 8 on a Mac with the Homebrew package manager. You can do:</li>\n</ul>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">brew tap caskroom/versions\nbrew cask install java8</code></pre>\n      </div>\n<p>See <a href="https://stackoverflow.com/questions/24342886/how-to-install-java-8-on-mac">this StackOverflow\npost</a>\nfor more details.</p>\n<ul>\n<li>You don\'t need to install Gradle, since IntelliJ has a Gradle wrapper out of\nthe box.</li>\n</ul>\n<h2>Step 2: Create a project</h2>\n<ul>\n<li>When you open up IntelliJ, there should be a dialog that is open.</li>\n<li>Select <strong>Create a Project</strong>.</li>\n<li>The Left panel will show different types of projects. Select <code class="language-text">Gradel</code>.\nGradle is a build tool and dependency manager. Build scripts are written in\nGroovy, a dynamic langauge that feels like a mix of Ruby and Java.</li>\n<li>Select your project SDK in the top drop down menu. The version of Java you\ninstalled should be there.</li>\n<li>\n<p>On the next screen, you\'ll see GroupID, ArtifactID, and Version. These are\nmaven artifacts (Maven is another build tool that uses an XML configuration\nfile) These aren\'t that important to us, but we have to fill them out.</p>\n<ul>\n<li>GroupID - usually identifies the organization/team for a particular\nproject. E.g. <code class="language-text">com.companyname.project</code>. If it\'s a personal project, you\ncan just use your name.</li>\n<li>ArtifactID - the name to give to your jar without a version number. E.g.\n<code class="language-text">MyFirstProject</code>.</li>\n<li>Version - the version number. This would increment with each release if\nyou were distributing the software. e.g. <code class="language-text">1.0</code></li>\n</ul>\n</li>\n<li>On the next screen, make sure to check <code class="language-text">Create separate module per source\nset</code>, and <code class="language-text">Use default gradle wrapper</code>. You can use the Project JVM for\nGradle JVM (the same one you specified earlier)</li>\n<li>On the next screen select the location of the project to save</li>\n<li>It will prompt you that the file is going to be created by IntelliJ, click\nyes.</li>\n<li>Intially, your Gradle build will start syncing.</li>\n</ul>\n<h3>What is the <code class="language-text">build.gradle</code>?</h3>\n<ul>\n<li>In the root of the project, you should see file called <code class="language-text">build.gradle</code> that\nwas generated for you. Gradle makes it really easy to build your project\n(compile your Java source files). It can also do many other things, including\nrunning your tests, and creating a JAR file containing your classes. The\n<code class="language-text">build.gradle</code> file is written in Groovey, a dynamic language that feels like a\nmix of Java and Ruby.</li>\n<li>If you step into the <code class="language-text">build.gradle</code>, you\'ll see that it already has jUnit\nspecified as a dependency, which is great.</li>\n</ul>\n<h3>Things to add to your <code class="language-text">.gitignore</code></h3>\n<p>A simple <code class="language-text">.gitignore</code> for this project could be:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">.idea/\nbuild\n.gradle\n!gradle-wrapper.jar</code></pre>\n      </div>\n<ul>\n<li>Ignoring the <code class="language-text">.idea/</code> directory is optional. JetBrains would probably\nrecomend publishing it, because it contains metadata about your IDE setup\nwhich can be useful for others working on the same team. If you think it\'s valuable\nto publish, by all means go ahead and do it.</li>\n<li>Ignore the <code class="language-text">build</code> directory. This is where gradle will put the compiled Java\nclasses. Since anyone who downloads your source code can build the project\nthemselves, there\'s no need to publish this directory.</li>\n<li>Ignore the <code class="language-text">.gradle</code> directory.</li>\n<li>Don\'t ignore the gradle-wrapper.jar. This can allow anyone to pull the\nproject down and build without having to install Gradle manually.</li>\n</ul>\n<h3>Basic directory structure</h3>\n<p>By default, Gradle expects the following directory structure:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">src\n├── main\n│   └── java\n│       └── hello\n│           └── Hello.java\n└── test\n    └── java\n        └── hello\n            └── HelloTest.java</code></pre>\n      </div>\n<p>And that\'s pretty much it to get started with a new project. The next post will\ndescribe you how to wire up some simple JUnit tests so you can start\ndeveloping TDD-style!</p>'}},{node:{id:"/Users/brian/workspace/personal/saylerb.github.io/src/pages/2018-09-06-java-string-comparison/index.md absPath of file >>> MarkdownRemark",frontmatter:{path:"/java-string-comparison",title:"Java String Comparison",date:"2018-09-06"},excerpt:"You usually don't want to compare strings using the   operator.   This\nStackOverflow\npost \nprovides a good explaination. TR;DR is that…",timeToRead:1,html:'<p>You usually don\'t want to compare strings using the <code class="language-text">==</code> operator.  <a href="https://stackoverflow.com/questions/767372/string-equals-versus/767379#767379">This\nStackOverflow\npost</a>\nprovides a good explaination. TR;DR is that sometimes the <code class="language-text">==</code> will return what\nyou expect, but not always.</p>\n<div class="gatsby-highlight" data-language="java">\n      <pre class="language-java"><code class="language-java">String helloOne <span class="token operator">=</span> <span class="token string">"Hello, World!"</span><span class="token punctuation">;</span>\n\nString helloTwo <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span>\nhelloTwo <span class="token operator">+=</span> <span class="token string">", World!"</span><span class="token punctuation">;</span>\n\nSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>helloOne<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Hello, World!"</span>\nSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>helloTwo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Hello, World!"</span>\nSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>helloOne <span class="token operator">==</span> helloTwo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\nSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>helloOne<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>helloTwo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></code></pre>\n      </div>\n<p>If both strings were initialized as string literals (i.e. they are surrounded\nby <code class="language-text">&quot;</code>), then the comparsion with <code class="language-text">==</code> will work. This is because the Java\ncompiler will represent those strings as the same object in memory. So when in\ndoubt, it\'s a good idea to use <code class="language-text">equals</code> to do string comparison.</p>'}},{node:{id:"/Users/brian/workspace/personal/saylerb.github.io/src/pages/2018-09-11-event-delegation/index.md absPath of file >>> MarkdownRemark",frontmatter:{path:"/event-delegation",title:"What is Event Delegation in JavaScript?",date:"2018-09-11"},excerpt:"What is event bubbling? Web browsers need an algorithm for managing events that happen on the DOM.  For\nexample, the browser listens for the…",timeToRead:2,html:'<h3>What is event bubbling?</h3>\n<p>Web browsers need an algorithm for managing events that happen on the DOM.  For\nexample, the browser listens for the user clicking the mouse, and when the\nmouse is clicked, an event is fired off which contains the information about\nthat action. For example, the action was of \'click\' type, and the user clicked\non an anchor tag element.</p>\n<p>Event bubbling describes a behavior of web browsers, where when an event is\nfired, the event cascades up the DOM hierarchy.</p>\n<p>If we picture the DOM as a giant family tree, when something happens to one\nchild, that child tells its parent what happened, and then that parent tells\nits parent, and so on. Any event listeners that are attached to DOM elements in\nthe ancestry chain can react to events happening further down the family tree.\nThis is not only a very convenient way of managing behavior happening in an\napplication, because it allows for one listener to react to many events. But it\nalso helps work with common problems seen in UI programming, where elements may\nbe added and removed from the page dynamically (and even after the initial page\nload), so we need a dynamic way to handle those events.</p>\n<h3>How does this tie into event delegation?</h3>\n<p>Event delegation is one way we can take advantage of event bubbling. Let\'s say\nwhen you click on an individual element in a list, we want to display the text\nof the element clicked in a message paragraph tag.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Here is a message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Hi there<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Hello again<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>We could add 3 separate event listeners to each item in the list. However, this\ncan become cumbersome, and imagine our list may grow in the future, or we load\nitems dynamically from a database. We would need to loop through all the items\nin the list and add an event listener to every one, and make sure to re-loop\nevery time a new item is added or removed from the list.</p>\n<p>Taking advantage of how the browser handles event bubbling, you can get the\nsame behavior by adding a single event handler on a common ancestor, which can\nlisten to events that bubble up from its children:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">   <span class="token keyword">const</span> messageElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#message"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#list\'</span><span class="token punctuation">)</span>\n     <span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> event <span class="token operator">=></span> messageElement<span class="token punctuation">.</span>innerText <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>innerText<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Reducing the number of event listeners in your code is a good practice! For\nfurther reading, see these links below:</p>\n<h3>Further reading</h3>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events">MDN - Introduction to events</a></li>\n<li><a href="https://davidwalsh.name/event-delegate">How JavaScript Event Delegation Works</a></li>\n</ul>'}},{node:{id:"/Users/brian/workspace/personal/saylerb.github.io/src/pages/2018-11-04-remove-duplicates/index.md absPath of file >>> MarkdownRemark",frontmatter:{path:"/remove-duplicates",title:"Removing duplicates from a string",date:"2018-11-04"},excerpt:"I was working on a simple exercise to determine if a word is an isogram, which\nmeans that the word does not have any repeating characters…",timeToRead:2,html:'<p>I was working on a simple exercise to determine if a word is an isogram, which\nmeans that the word does not have any repeating characters.</p>\n<p>For example, "flashpoint" is an isogram, but "eleven" is not (it has 3 e\'s).</p>\n<p>I originally planned to count all the occurrences of each letter, but then I\nthought I actually don\'t need to capture all the information just to determine\nif there are repeating letters.</p>\n<p>One way to easily de-duplicate a piece of data is to take advantage of a Set,\nwhich is an unordered collection that cannot have duplicates. By taking a\ncollection with duplicates and putting it into a set, we can remove the\nduplicates and then compare lengths of the collections to determine if the\noriginal word had duplicates.</p>\n<div class="gatsby-highlight" data-language="java">\n      <pre class="language-java"><code class="language-java"><span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Arrays<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Set<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span>Collectors<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">IsogramChecker</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">boolean</span> <span class="token function">isIsogram</span><span class="token punctuation">(</span>String phrase<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>phrase<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        String lowerCaseNoDelimiters <span class="token operator">=</span> phrase<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">"-|\\\\s"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        String<span class="token punctuation">[</span><span class="token punctuation">]</span> characters <span class="token operator">=</span> lowerCaseNoDelimiters<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        Set<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">></span></span> set <span class="token operator">=</span> Arrays<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>characters<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span>Collectors<span class="token punctuation">.</span><span class="token function">toSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> set<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> lowerCaseNoDelimiters<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>One thing that Java surprised me with: splitting an empty string on an empty string <code class="language-text">&quot;&quot;</code> returns an non-empty array (<code class="language-text">[&quot;&quot;]</code>)! According to <a href="https://stackoverflow.com/a/37796531/5252217">this StackOverflow post</a>, this corner case was explained in the Java documentation at some point, but I could not find it in my Javadoc:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(Note that the case where the input is itself an empty string is special,\nas described above, and the limit parameter does not apply there.)</code></pre>\n      </div>\n<p>Here, I\'m not specifying a limit as the second parameter on <code class="language-text">split()</code> invocation, since it doesn\'t actually get applied when splitting empty strings.</p>\n<p>My solution to this edge case was to just early return out of the function if an empty string is passed in.</p>\n<p>Check out <a href="https://exercism.io/tracks/java/exercises/isogram/solutions/3ab1869f32ae41b8bc3e8eb99c0a94ce">this solution on exercism.com</a></p>\n<h3>Further reading</h3>\n<ul>\n<li>\n<p><a href="https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collectors.html#toSet--">Oracle - Collectors.toSet()</a></p>\n</li>\n<li>\n<p><a href="https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#replaceAll-java.lang.String-java.lang.String-">Oracle - String.replaceAll</a></p>\n</li>\n<li>\n<p><a href="https://stackoverflow.com/a/37796531/5252217">StackOverflow - Splitting an empty string</a></p>\n</li>\n</ul>'}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-8728e5ade99dc679adcc.js.map