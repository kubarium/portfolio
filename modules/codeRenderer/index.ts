// `nuxt/kit` is a helper subpath import you can use when defining local modules
// that means you do not need to add `@nuxt/kit` to your project's dependencies
import { addServerHandler, createResolver, defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "code-renderer",
  },
  setup() {
    const resolver = createResolver(import.meta.url);

    // Add an API route
    addServerHandler({
      route: "/api/code-renderer",
      handler: resolver.resolve("./runtime/api-route"),
    });
  },
});
