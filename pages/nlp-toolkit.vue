<script setup lang='ts'>
const techStack = [
  "Vue.js", "UIKit", "JSON", "Tailwind", "Nuxt.js","Nuxt UI", "XML", "NLP"
]
const images = ["Turkish-Framenet-Palazlanmak-Before", "Turkish-Framenet-Palazlanmak-After", "Turkish-Morphological-Analysis-Before", "Turkish-Morphological-Analysis-After", "Turkish-Wordnet-Yemek-Before", "Turkish-Wordnet-Yemek-After"].map(img => ({image: `images/${img}.jpg`,description:`${img.replaceAll('-',' ')}`}))
</script>
<template>
  <Panel class="flex-grow px-12 overflow-auto">
    <template #header>
      <div class="flex items-center gap-2">
        <h1 class="text-3xl py-4">NLP Toolkit</h1>
      </div>
    </template>
    <div class="flex flex-row gap-12">
      <div class="max-w-192 text-justify">
        <p>
          The <strong>NLP Toolkit</strong> is a web-based application designed to provide users with interactive
          natural language processing capabilities. It offers functionalities such as sentiment analysis, named entity
          recognition, and emotion detection, enabling users to gain insights from textual data. The application
          features a user-friendly interface, making it accessible for both beginners and professionals interested in
          exploring NLP techniques.
        </p>
        <p>Originally built as a linguistic research tool, the NLP Toolkit supported tokenization, part-of-speech
          tagging, and more for English and Turkish datasets—but suffered from poor usability and a convoluted codebase.
          I led a complete frontend modernization effort focused on improving user experience and developer efficiency.
        </p>
        <ul>
          <li class="mb-1">
            <span class="pi pi-palette" /> <strong>UI/UX Redesign:</strong>
            <p>
              Rebuilt the interface using UIKit and Vue.js, adding intuitive navigation and a cleaner visual hierarchy.
            </p>
          </li>
          <li class="mb-1">
            <span class="pi pi-box" /> <strong>Componentization:</strong>
            <p> Refactored repeated code into reusable Vue components like the search fields. </p>
          </li>
          <li class="mb-1">
            <span class="pi pi-database" /> <strong>Data Optimization:</strong>
            <p>
              Restructured JSON datasets and achieved up to 50% file size reduction, improving load times.
            </p>
          </li>
          <li class="mb-1">
            <span class="pi pi-compass" /> <strong>Dev Experience:</strong>
            <p>
              Separated logic from markup, eliminating legacy code that mixed HTML with data functions.
            </p>
          </li>
        </ul>

        <p>The result is a streamlined, visually polished app that is easier to maintain, extend, and use.</p>

        <Divider type="dashed" />

        <figure class="text-center">
          <figcaption>The home page before...</figcaption>
          <Image preview src="images/Homepage-Before.jpg" alt="Home page before modernization" class="my-2" />
        </figure>

        <figure class="text-center">
          <figcaption>and after.</figcaption>
          <Image preview src="images/Homepage-After.jpg" alt="Home page after modernization" class="my-2" />
        </figure>

        <Divider type="dashed" />

        <p>
          Since the project launch, the research team has agreed to a server-side version of this web application. This
          new effort will involve Nuxt.js and Tailwind unlike the original client-side version that utilized Vue and
          UIKit.
        </p>


        <p>And here are more screenshots from the project:</p>

        <Carousel :value="images" :numVisible="1" :numScroll="1" circular>
          <template #item="slotProps">
            <div class="border border-zinc-200 dark:border-surface-700 rounded m-2  p-4">
              <div class="mb-4">
                <div class="relative mx-auto">
                  <Image preview :src="slotProps.data.image" :alt="slotProps.data.description" class="w-full rounded" />
                </div>
              </div>
              <div class="mb-4 font-medium text-center">{{ slotProps.data.description }}</div>
            </div>
          </template>
        </Carousel>

      </div>
      <div>
        <p class="flex flex-col gap-2">
          <Button icon="pi pi-external-link" as="a" label="Live Demo" href="https://nlptoolkit-web-simple.onrender.com/"
            target="_blank" rel="noopener" />
          <Button icon="pi pi-github" as="a" label="GitHub Repo"
            href="https://github.com/kubarium/nlptoolkit-web-simple" target="_blank" rel="noopener" />
        </p>
        <h3 class="py-2">Tech Stack</h3>
        <div class="flex flex-row flex-wrap gap-2 max-w-40">
          <Tag v-for="tech in techStack.sort()" :key="tech" :value="tech" severity="info" />
        </div>
      </div>
    </div>

  </Panel>

</template>