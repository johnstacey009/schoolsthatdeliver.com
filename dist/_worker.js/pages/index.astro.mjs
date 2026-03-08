globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderHead, l as renderSlot, r as renderTemplate, h as createAstro, n as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DMwBPUOh.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/jstacey/dev/projects/schoolsthatdeliver.com/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Schools That Deliver", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="hero" data-astro-cid-j7pv25f6> <div class="book-container" data-astro-cid-j7pv25f6> <img src="/images/book-cover.jpg" alt="Schools That Deliver - Book Cover by John Edwards and Bill Martin" width="600" height="900" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Schools That Deliver</h1> <p class="subtitle" data-astro-cid-j7pv25f6>John Edwards | Bill Martin</p> </div> </main> ` })} `;
}, "/Users/jstacey/dev/projects/schoolsthatdeliver.com/src/pages/index.astro", void 0);

const $$file = "/Users/jstacey/dev/projects/schoolsthatdeliver.com/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
