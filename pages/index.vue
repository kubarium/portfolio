<script setup lang='ts'>
</script>
<template>
  <Panel class="flex-grow px-12 overflow-auto">
    <template #header>
      <div class="flex items-center gap-2">
        <h1 class="text-3xl py-4">Hi there!</h1>
      </div>
    </template>
    <div class="flex flex-row gap-12">
      <div class="max-w-192 text-justify">
        <p>
          I’m Kumsal Obuz — a multidisciplinary developer, writer, and educator with <strong>20+</strong> years of
          experience.
        </p>
        <p>
          Throughout my career, I’ve worked across continents and industries—from building enterprise websites to
          designing game mechanics and authoring technical books. I’m driven by a deep respect for clarity and
          usability, and I strive to make technology more human through thoughtful design, clean code, and purposeful
          documentation.
        </p>
        <h2 class="text-2xl py-4">At a Glance </h2>
        <p>
          Whether I’m crafting interactive UIs, simplifying complex systems, or mentoring the next wave of developers, I
          bring a unique blend of creativity and precision to every project.
        </p>
        <ul>
          <li class="mb-1">
            🧩 <span class="font-semibold">Frontend Development</span>
            <p> Vue/Nuxt specialist with a focus on reusable, scalable UI components and modern web architecture. </p>
          </li>
          <li class="mb-1">
            🖋 <span class="font-semibold">Technical Writing & Docs</span>
            <p>Published author with Packt, experienced curriculum designer, and hands-on workshop facilitator.</p>
          </li>
          <li class="mb-1">
            🎮 <span class="font-semibold">Game & Tool Development</span>
            <p>Indie studio founder, systems designer, and developer of utility tools for both players and creators.</p>
          </li>
          <li class="mb-1">
            🎯 <span class="font-semibold">Mentorship & Consulting</span>
            <p>Helping small studios and indie devs refine their pitch, sharpen their focus, and grow sustainably.</p>
          </li>
        </ul>
        <h2 class="text-2xl py-4">Career Highlights</h2>
        <p>
          In 2020, I founded
          <em>
            <a href="https://viroidgames.com" target="_blank" rel="nofollow external noopener noreferrer">
              Viroid Games
            </a>
          </em>,
          an independent studio that transitioned into a consulting practice for small teams. I’ve delivered strategy
          guidance, creative support, and B2B content while continuing hands-on development and mentorship. During this
          period, I also authored
          <em>
            <a href="https://www.amazon.com/Development-Blender-Godot-point-click/dp/1801816026" target="_blank"
              rel="nofollow external noopener noreferrer">
              Game Development with Blender and Godot
            </a>
          </em>
          (Packt), turning complex workflows into digestible, beginner-friendly instruction.
        </p>

        <p>
          Beyond development, I’m deeply invested in education and community. At OCAD University, I designed and taught
          <em>Low Poly Game Art</em>, helping students at various levels navigate technical concepts with confidence and
          creativity. I also founded the <em>Godot Toronto</em> community to foster learning and connection between
          developers.
        </p>
      </div>
      <div>
        <h2 class="text-2xl pb-4"> Looking to collaborate? </h2>
        <p class="flex flex-col gap-2">
          <Button icon="pi pi-envelope" class="uppercase rounded-4xl!" label="Send an Email" as="a"
            href="mailto:iam@denizkumsal.com" />
          <Script src="https://embed.ycb.me" async="true" data-domain="kumsalobuz" data-type="button-link"
            data-innertext="BOOK A SESSION" data-buttoncolor="#10B981" data-displaymode="auto"></Script>
        </p>
      </div>
    </div>
  </Panel>

</template>