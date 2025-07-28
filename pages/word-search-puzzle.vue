<script setup lang='ts'>
useHead({
  title: 'Word Search Puzzle'
})
const techStack = [
  "Vue.js", "Pinia", "Tailwind", "HTML", "CSS", "jQuery", "jsPDF", "html2canvas", "Affinity Designer", "Affinity Publisher", "Etsy", "Gumroad", "PrimeVue", "render.com", "YAML"
]

</script>
<template>
  <Panel class="flex-grow px-12 overflow-auto">
    <template #header>
      <div class="flex items-center gap-2">
        <h1 class="text-3xl py-4">Word Search Puzzle</h1>
      </div>
    </template>
    <div class="flex flex-row gap-12">
      <div class="max-w-192 text-justify">
        <p>
          In the spring of 2025, I set out to solve a problem I kept hearing about from ESL teachers: finding vocabulary
          worksheets that actually matched their curriculum. Most word searches online were either too easy, poorly
          organized, or full of random words.
        </p>

        <h2>Suitable candidates </h2>
        <p>I thought of the <a href="https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000"
            target="_blank">Oxford 5000
            word list</a> I had come across a while ago. First order of business was to collect
          data from their website. I used some basic jQuery requests in the Console tab of my browser to parse the data
          and store it on my computer. What followed was to create a simple Bun project where I distributed the entire
          5000 word list into different buckets like alphabetically sorted in difficulty levels.
        </p>
        <p>For those of you who took English exams, you might be familiar with the scoring or labelling system that
          measures your English competency. For others, it’s a six-level system, from A1 to C2, organized within the
          <a href="https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions#:~:text=The%20CEFR%20organises%20language%20proficiency,'can%2Ddo'%20descriptors."
            target="_blank">Council
            of Europe</a>.
        </p>



        <Divider type="dashed" />

        <figure class="text-center">
          <Image preview src="images/word-search-puzzles-oxford-5000.jpg" alt="The Oxford 5000 list" class="my-2" />
          <figcaption>The Oxford 5000 list</figcaption>
        </figure>


        <Divider type="dashed" />

        <p>
          Once I had the individual data files per competency, I looked for ways to create the puzzles. A quick search
          resulted in a few <a href="https://wordsearchlabs.com/" target="_blank">websites</a> where users could enter a
          comma or end-of-line separated list of words to populate a board of letters.


        </p>

        <Divider type="dashed" />

        <figure class="text-center">
          <Image preview src="images/word-search-puzzles-word-search-labs.jpg" alt="wordsearchlabs.com" class="my-2" />
          <figcaption>wordsearchlabs.com</figcaption>
        </figure>
        <Divider type="dashed" />

        <p>I didn’t want to over-engineer and turn this project into a never-ending discovery of deeper and deeper
          levels of complexity. For example, although creating a JavaScript library or at least a Class that accepted a
          list of words that would output a board of letters might have been a triumph in and of itself, I refrained
          from doing it because there was already a good application doing this sort of thing.

        </p>

        <h2>A novel approach
        </h2>
        <p>What excited me most was to collect their result and turn it into a printable PDF document. So, I turned my
          attention to taking a screenshot and pasting it into a page layout software like <a
            href="https://affinity.serif.com/en-gb/publisher/" target="_blank">Affinity Publisher</a>. However,
          this process quickly revealed a different problem. What was I to do with the words?
        </p>
        <p>See, page layout applications are great and they come with all sorts of font and text flow options. That
          being said, if I were to list 20 or even 30 words just below a grid of letters, they would each have to be
          typed
          separately. I would quickly grow tired of doing that after creating a few puzzles, let alone poring over 5000
          words and typing them individually.</p>
        <p>If only there was a plugin that would accept a comma-separated list of words and create individual text
          instances. Such plugin systems exist, if you could write one on your own, in Adobe Photoshop, but user-defined
          plugins don’t exist yet in the software I used.</p>
        <p>Besides, that would go against the principle of keeping things simple. Instead, I decided to build a
          <strong>web app</strong>
          that would simulate a printable page. The final work, which is still in progress until I am satisfied with all
          of its bells and whistles, can be seen below and visited <a href="https://word-search-puzzles.onrender.com/"
            target="_blank">here</a>.
        </p>

        <Divider type="dashed" />
        <figure class="text-center">
          <Image preview src="images/word-search-puzzles-puzzle-core.jpg" alt="Word Search Puzzle - The Core Interface"
            class="my-2" />
          <figcaption>Word Search Puzzle - The Core Interface</figcaption>
        </figure>
        <Divider type="dashed" />

        <p>From here on, I’d like to describe how I built the application, since I believe I have covered the
          motivational aspect of the project up to this point. I chose <a href="https://vuejs.org/"
            target="_blank">Vue.js</a> as the framework and <a href="https://primevue.org/" target="_blank">PrimeVue</a>
          for
          the UI
          components. In the past, I would often hand craft the CSS parts of my pet projects, but it was about time I
          got my hands dirty with <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.</p>

        <p>The interface is simple; a series of input fields on the left side, accompanied by a large preview area on
          the right section. A puzzle consists of a title, an array of letters that form the grid, some instructions for
          how the words are organized, and naturally, its list of words. Since I use a separate application to create
          the grid, I store its URL in case I need to go back for corrections like changing the grid size.

        </p>

        <p>I wanted to separate the styling from the core elements of a puzzle. That’s why there is a
          <strong>Styles</strong> section
          that lets me change font styles, size and line height if necessary. After all, some puzzles have a long list
          of words or their letter grid has too many columns and rows which need a bit of fine-tuning. All the
          information about a puzzle can then be saved in a <strong>YAML</strong> file and loaded later at will.

        </p>

        <Divider type="dashed" />
        <figure class="text-center">
          <Image preview src="images/word-search-puzzles-puzzle-styles.jpg"
            alt="Word Search Puzzle - The Styles Interface" class="my-2" />
          <figcaption>Word Search Puzzle - The Styles Interface</figcaption>
        </figure>
        <Divider type="dashed" />

        <p>
          The preview area comes with a few options, like in which format I want to preview the puzzle. Letter format is
          common in North America, but the rest of the world uses A4. Although they are relatively close to each other,
          when you want to distribute words horizontally, some words near the right side of the page may be pushed onto
          the next row.
        </p>

        <p>
          When I am happy with the representation of a puzzle in each page format, I press the <strong>Print</strong>
          button. This triggers
          a bunch of operations. Firstly, I create an <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe"
            target="_blank">iframe</a>
          and add it to
          the document temporarily. Why? Hold your
          horses
          for the time being.
        </p>

        <p>
          Most of the time, you assign a URL to an iframe’s <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe#src"
            target="_blank">src</a>
          property, but
          that doesn’t exist in my case since I am
          building the content of that iframe dynamically. Thus, the <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe#srcdoc"
            target="_blank">srcdoc</a>
          property is used to pass the HTML structure
          of
          my content as a string. In the source content I provide, the iframe’s head section has all the necessary
          script
          and style declarations that mimic my preview area.
        </p>

        <p>
          Secondly, when the iframe has all the necessary information and is added to the DOM, it triggers an onload
          event. In the event handle, really cool stuff starts to happen. I use <a
            href="https://html2canvas.hertzen.com/" target="_blank">html2canvas</a> to take a screenshot of that
          iframe’s body as if its contents were rendered in your browser. I was tempted to use this library to snap the
          preview area too, but there was a caveat which is why I used an iframe in the first place.
        </p>

        <p>
          Ideally, I would like my PDFs to reflect the real page size rather than what I see on the screen. In other
          words, pixels must be mapped to points. That’s how the print world works. By rendering the same content in a
          temporary iframe, I scale up my content there to be 300DPI and the correct size in inches and centimeters,
          depending on the page format, <a href="https://en.wikipedia.org/wiki/Letter_(paper_size)" target="_blank">US
            Letter</a> and <a href="https://en.wikipedia.org/wiki/A4" target="_blank">A4</a> respectively.
        </p>

        <p>
          Lastly, once the correct format and dimensions are attained, I use <a href="https://jspdf.com/"
            target="_blank">jsPDF</a> to create a one page PDF document in
          which I embed an image. That is the screenshot I have just taken from the iframe. In the end, the file
          creation
          process automatically triggers a download event, and it silently creates a file in my Downloads folder. Happy
          as
          a clam!
        </p>
        <h2>Pipeline Concerns
        </h2>
        <p>
          So far, so good. I could create a puzzle and enter its relevant parts in my interface to generate a PDF file.
          However, this wouldn’t scale because there were over 40 word sets in the A1 category. If I wanted to include
          other levels, the number would quickly go over 150 sets, easily.
        </p>

        <p>
          Each set would take a few minutes, if not several, to create if everything went in perfect order. Sometimes, I
          would have to come back to a set and include or remove a word or two, so all words in the A1 level would be
          more
          or less equally distributed.
        </p>

        <p>
          To convey a more accurate picture of what the effort entailed, here was my process:

        </p>
        <ol class="list-decimal list-inside mb-2">
          <li class="mb-1">
            Copy a number of words from my data file which is just a .txt file.
          </li>
          <li class="mb-1">
            Create a new puzzle in the <a href="https://wordsearchlabs.com/" target="_blank">Word Search Labs</a> (WSL)
            app and paste the words.

          </li>
          <li class="mb-1">
            Fill in the other information like title, direction of the letters on the board, and the size of the grid.
            Finally, save the puzzle which takes you to a preview area.

          </li>
          <li class="mb-1">
            Copy the letter grid and paste it in my app.
          </li>
          <li class="mb-1">
            Copy the URL of the WSL puzzle and paste it in my app.
          </li>
          <li class="mb-1">
            Type the title of the puzzle in my app.
          </li>
          <li class="mb-1">
            Copy and paste the word list again into my app.
          </li>
          <li class="mb-1">
            Fuss with the style, so stuff fits on the page. This step is optional most of the time because I constructed
            a
            template and the appropriate styles that work in most cases.
          </li>
        </ol>

        <p>
          What gave me grief was that I was duplicating my efforts. First of all, I already had the word list copied.
          Although I could have right away pasted this in my app and move on to the puzzle generator app, I still had to
          come back to my app and make sure the title and letters were accurate. When you want to go fast and there is
          already a puzzle filled from a previous session, it was tempting to fill in new information and hit that
          <strong>Save</strong>
          button, that would act like a <em>Save As</em> button, or press that <strong>Print</strong> button to print
          the new case.
        </p>

        <p>
          I had all the right pieces, but it felt like things were still not moving fast enough. In other words, I was
          copying and pasting back and forth and it was prone to errors if I messed up the order and forgot a step. This
          is where I opted to do some engineering work.
        </p>

        <p>
          I looked into creating a bookmark in my browser that I could use it as a button to trigger a chain of events.
          It’s no secret, but it’s still not widely known that you could run a piece of JavaScript on any websites
          without opening the Developer Tools and fiddling with the Console tab. The trick is to store your code as if
          it’s a bookmark. When you create one, you are asked to type in a URL and the label of the bookmark. I changed
          the URL section of my bookmark to the following:
        </p>

        <Divider type="dashed" />

        <CodeRenderer file="./data/code/word-search-puzzle/copyPuzzle.js" />
        <Divider type="dashed" />

        <p>
          That JavaScript declaration at the beginning is crucial. It tells the browser that the URL value is not to be
          treated as a visitable page. Instead, the browser will parse and interpret the rest as if that piece of code
          was running as part of a web page. Which also means it’s important you trigger that bookmark when you are on
          the right page.
        </p>

        <p>
          In my case, when I am done with filling in the puzzle info on WSL, the preview area will accept my commands. I
          leave the details of extracting the desired chunks of information to the reader. What’s more important is
          copying multiple elements to the clipboard.
        </p>

        <p>
          Normally, when you select a piece of text on a web page and press <code>CTRL+C</code>, it only copies that
          part. If you repeat this operation in other sections, they are copied one at a time. Although there are
          applications that store and let you use previously copied information, it does so via an interface where you
          select the individual cases. That would hardly fix my problem of preventing multiple clicks. Instead, I wanted
          to copy all the information and paste into my app in one go.
        </p>

        <p>
          The payload part and what follows in my code does exactly that. After storing all the necessary parts in an
          object, I serialize and store it using the <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API" target="_blank">Clipboard API</a>.
          What I do with this bulk information is not terribly interesting, but worth a quick mention. I added a paste
          event to my app that distributes the parts to their rightful place.
        </p>
        <h3>We need answers</h3>
        <p>
          It turns out I needed a similar scheme when it came to collecting the answer for a given puzzle. Although the
          WSL website offers a checkbox to turn on and off the answers in the final preview, it does so by drawing a
          closed loop around the appropriate letters using SVG. This is not something trivial I can copy by using jQuery
          trickery.
        </p>

        <p>
          I was already using html2canvas to snapshot a part of my application. Could I have used it to capture the
          answers? In fact, I could. What I did next was a mix of using html2canvas and the effort I just used to
          capture
          the puzzle parts with a bit of finesse:
        </p>
        <Divider type="dashed" />
        <CodeRenderer file="./data/code/word-search-puzzle/downloadAnswers.js" :highlight-lines="[19]" />
        <Divider type="dashed" />
        <p>
          I start by removing some unnecessary elements from the page. Once I turn on the answers, I fix the font-size
          and
          the width of some elements so the final resolution would be as high as possible. After all, the result will go
          into a 300DPI PDF document. I do some DOM manipulation to move the title just above the letter grid, and take
          a
          snapshot of those two in one go.
        </p>

        <p>
          All of this is happening in the onload event once the page is injected with html2canvas dynamically since it’s
          not
          part of the website. Luckily, WSL uses jQuery. So, that was one less thing to fuss about. Not every website
          uses
          jQuery. Thus, if you are going to follow a similar tactic in acquiring content from websites, you may want to
          inject jQuery first. Otherwise, use vanilla JS document selectors if that’s your thing.
        </p>

        <h3>A bundle of joy</h3>
        <p>
          At this point, the flow is as smooth as it can be. I know that there could be improvements to the system, but
          I
          wanted to get something out as quickly as possible as a proof of concept.
        </p>

        <p>
          Once I collected single page PDF files for all the puzzles and their answer keys, it was time to turn all that
          into a bundled book. This required some graphics work. Surprisingly, or perhaps not, this aspect of the
          project
          took longer than the software part, since visual design is rarely as straightforward as writing code.
        </p>

        <p>
          When you write code, you get instant feedback via error highlighting. It’s also a good practice to write
          tests.
          So, you can run your current and future code against these if you keep adding more features. In design, that
          test is like playing mental gymnastics.
        </p>

        <p>
          You place shapes and text; you decide on layout; you take out or include information that’s helpful or
          crucial,
          which is a process you have to leave aside and give it time. So, it can brew in the back of your mind. Then
          you
          look at your work intermittently to catch odd-looking stuff, and it’s not always the beauty aspect of it that
          backfires. For example, at some point, I realized that I needed to highlight the importance of the CEFR level.
        </p>
        <p>
          Bundling the pages and exporting them as one single PDF is not that much interesting to talk on. Perhaps it’s
          best to show the end result. For the time being, I’ve decided to deploy my work on <a
            href="https://www.etsy.com/ca/listing/4318568577/oxford-5000-a1-word-search-puzzles"
            target="_blank">Etsy</a>
          and <a href="https://gumroad.com/wordsearchpuzzles" target="_blank">Gumroad</a>.
          Soon, I’ll
          try <a href="https://www.teacherspayteachers.com/Store/WordSearchPuzzles" target="_blank">Teachers Pay
            Teachers</a>, too.
        </p>

        <p>
          All in all, this was an interesting and fun undertaking, since it was a good bridge between merging web and
          print. I’ve learned a lot in using Vue.js, Tailwind and print-specific CSS properties; investigating tools
          like
          jsPDF and html2canvas, and even practicing the good old jQuery a bit.
        </p>

        <p>
          On the print side, I had a chance to utilize Affinity Designer and Publisher. If I were to work on this
          project
          longer, I could maybe do more on the web side to reduce my work on the final PDF creation because that part
          still has some redundancies, but that’s a story for another day.
        </p>

        <p>
          Thank you for reading my journey in this fun project and do buy a copy or two for yourself and your loved
          ones.

        </p>
      </div>
      <div>
        <p class="flex flex-col gap-2">
          <Button icon="pi pi-external-link" as="a" label="Live Demo" href="https://word-search-puzzles.onrender.com/"
            target="_blank" rel="noopener" />
        </p>
        <h3 class="py-2">Tech Stack & Tools</h3>
        <div class="flex flex-row flex-wrap gap-2 max-w-52">
          <TagCloud :tags="techStack" />
        </div>
      </div>
    </div>

  </Panel>

</template>