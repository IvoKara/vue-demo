"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const NProgress = require("nprogress");
const pinia = require("pinia");
require("quill");
const vue3Quill = require("vue3-quill");
const vueQuery = require("vue-query");
const viteSsg = require("vite-ssg");
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const core = require("@vueuse/core");
const vueRouter = require("vue-router");
const head = require("@vueuse/head");
const jwt_decode = require("jwt-decode");
const axios = require("axios");
const components = require("@vueuse/components");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const NProgress__default = /* @__PURE__ */ _interopDefaultLegacy(NProgress);
const jwt_decode__default = /* @__PURE__ */ _interopDefaultLegacy(jwt_decode);
const axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios);
const install$4 = ({ isClient, router }) => {
  if (isClient) {
    NProgress__default.default.configure({
      template: `
            <div style="background: rgb(202 138 4);" class="bar" role="bar">
              <div class="peg">
              </div>
            </div>
          `
    });
    router.beforeEach((to, from) => {
      if (to.path !== from.path) {
        window.scrollTo(0, 0);
        NProgress__default.default.start();
      }
    });
    router.afterEach(() => {
      NProgress__default.default.done();
    });
  }
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$4
}, Symbol.toStringTag, { value: "Module" }));
const install$3 = ({ app, isClient, initialState }) => {
  const pinia$1 = pinia.createPinia();
  app.use(pinia$1);
  if (isClient)
    pinia$1.state.value = initialState.pinia || {};
  else
    initialState.pinia = pinia$1.state.value;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$3
}, Symbol.toStringTag, { value: "Module" }));
const install$2 = async ({ app, isClient }) => {
  if (isClient) {
    const PrimeVue = await Promise.resolve().then(() => /* @__PURE__ */ _interopNamespace(require("primevue/config")));
    app.use(PrimeVue.usePrimeVue);
    const Editor = await Promise.resolve().then(() => /* @__PURE__ */ _interopNamespace(require("primevue/editor")));
    app.component("Editor", Editor);
  }
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$2
}, Symbol.toStringTag, { value: "Module" }));
const install$1 = ({ app, isClient }) => {
  if (isClient)
    app.use(vue3Quill.quillEditor);
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$1
}, Symbol.toStringTag, { value: "Module" }));
const install = ({ app, initialState }) => {
  const client = new vueQuery.QueryClient();
  initialState.vueQueryState = { toJSON: () => vueQuery.dehydrate(client) };
  client.mount();
  app.provide(vueQuery.VUE_QUERY_CLIENT, client);
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = /* @__PURE__ */ vue.defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const watchScroll = vue.ref(null);
    vue.provide("window", watchScroll);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = vue.resolveComponent("RouterView");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "watchScroll",
        ref: watchScroll,
        "transition-dark-light": "",
        "scroll-smooth": "",
        scrollbar: "~\n      rounded\n      track-radius-0\n      track-color-neutral-200 thumb-color-neutral-400\n      dark:track-color-stone-600 dark:thumb-color-neutral-300"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const App_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const isDark = core.useDark({
  valueDark: "halloween",
  attribute: "data-theme",
  valueLight: "bumblebee",
  onChanged(isItDark) {
    return;
  }
});
core.useToggle(isDark);
core.usePreferredDark();
const _sfc_main$z = /* @__PURE__ */ vue.defineComponent({
  __name: "DarkToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const watchScroll = vue.inject("window");
    const { y } = core.useScroll(watchScroll);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)} data-v-9d906970><label class="swap swap-rotate rounded-full p-1 b-2" data-v-9d906970><span sr-only data-v-9d906970>Dark Toggle</span><input type="checkbox" data-v-9d906970><div i-carbon-sun class="${serverRenderer.ssrRenderClass([{ "w-4 h-4": vue.unref(y) > 0 }, "swap-on fill-current max-w-7 max-h-7 no-conflict-transition"])}" data-v-9d906970></div><div i-carbon-moon class="${serverRenderer.ssrRenderClass([{ "w-4 h-4": vue.unref(y) > 0 }, "swap-off fill-current max-w-7 max-h-7 no-conflict-transition"])}" data-v-9d906970></div></label></div>`);
    };
  }
});
const DarkToggle_vue_vue_type_style_index_0_scoped_9d906970_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/DarkToggle.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __unplugin_components_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-9d906970"]]);
const useUserStore = pinia.defineStore("user", {
  state: () => ({
    token: core.useStorage("token", null),
    payload: core.useStorage("payload", null)
  }),
  getters: {
    isLoggedIn(state) {
      return state.token !== null;
    }
  },
  actions: {
    async logoff() {
      this.token = null;
      this.payload = null;
    },
    async acc() {
      if (this.token === null)
        return;
      const api = axios__default.default.create({
        baseURL: "http://192.168.201.59:3001",
        headers: {
          authorization: `Bearer ${this.token}`
        }
      });
      const result = await api.get("acc");
      return result == null ? void 0 : result.data;
    }
  }
});
const _sfc_main$y = /* @__PURE__ */ vue.defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const sidebarRoutes = vue.ref([
      { name: "Dashboard", link: "/admin" },
      { name: "Preview", link: "/admin/preview" },
      { name: "Edit Posts", link: "/admin/posts/edit" },
      { name: "Settings", link: "/admin/settings" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_DarkToggle = __unplugin_components_1$1;
      const _component_RouterView = vue.resolveComponent("RouterView");
      _push(`<!--[--><div class="grid grid-cols-[1fr_5fr]"><nav p-7 h-screen bg-light-500 dark:bg-neutral-800><h3 text-3xl mb-9 mt-3 ml-6> Welcome, `);
      if (vue.unref(userStore).token === null) {
        _push(`<span>Someone!</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${serverRenderer.ssrInterpolate((_a = JSON.parse(vue.unref(userStore).payload)) == null ? void 0 : _a.username)}! </span></h3><ul flex flex-col gap-2 text-lg><!--[-->`);
      serverRenderer.ssrRenderList(sidebarRoutes.value, (route, i) => {
        _push(`<li>`);
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
          to: route.link,
          block: "",
          py: "3.5",
          "px-6": "",
          "rounded-2": "",
          "active-class": "bg-black dark:bg-gray bg-opacity-10 dark:bg-opacity-10"
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(route.name)}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(route.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav><main py-12 px-15>`);
      _push(serverRenderer.ssrRenderComponent(_component_DarkToggle, {
        fixed: "",
        "top-3": "",
        "right-3": ""
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`</main></div> wefwefewfwqes <!--]-->`);
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/admin.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const _sfc_main$x = /* @__PURE__ */ vue.defineComponent({
  __name: "ScrollButton",
  __ssrInlineRender: true,
  setup(__props) {
    const watchScroll = vue.inject("window");
    const { y: scrollByY } = core.useScroll(watchScroll);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(watchScroll) !== null) {
        _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><button class="btn btn-primary no-animation" fixed bottom="-20" right="2rem" transition-transform-1000 style="${serverRenderer.ssrRenderStyle({
          transform: vue.unref(scrollByY) > 0 ? "translate3d(0px, -200%, 10px)" : "unset"
        })}"> top </button></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ScrollButton.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = /* @__PURE__ */ vue.defineComponent({
  __name: "SocialIcon",
  __ssrInlineRender: true,
  props: {
    link: null
  },
  setup(__props) {
    vue.ref("Name");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        "text-white": "",
        "hover:text-gray-300": ""
      }, _attrs))}>`);
      if (__props.link) {
        _push(`<a${serverRenderer.ssrRenderAttr("href", __props.link)} target="_blank" rel="noopener norefferer">`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SocialIcon.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const _sfc_main$v = /* @__PURE__ */ vue.defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const breakpoints = core.useBreakpoints(
      {
        ...core.breakpointsTailwind,
        xs: 430
      }
    );
    const xs = breakpoints.smaller("xs");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SocialIcon = _sfc_main$w;
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        "transition-dark-light": "",
        "text-center": "",
        class: "bg-neutral-800 dark:bg-amber-800 text-white"
      }, _attrs))}><div font-oswald text-base sm:text-xl md:text-2xl lg:text-3xl py-4>`);
      if (!vue.unref(xs)) {
        _push(`<p> Sofia, Bulgaria | chrisparvanov17@gmail.com | Tel: +359-87-698-8867 </p>`);
      } else {
        _push(`<p><ul space-y-2><li>Sofia, Bulgaria</li><li>chrisparvanov17@gmail.com</li><li>Tel: +359-87-698-8867</li></ul></p>`);
      }
      _push(`</div><p font-montserrat text="0.6rem" md:text-xs md:py-2 pb-2> \xA9 ${serverRenderer.ssrInterpolate(new Date().getFullYear())} by Chris K. Parvanov and Ivo Karaneshev.<br> Proudly created from Ivo Karaneshev. </p><div><div flex items-center justify-center gap-4 mt-2 pb-4 text-xs>`);
      _push(serverRenderer.ssrRenderComponent(_component_SocialIcon, { link: "https://www.facebook.com/chriskphotogprahy/?ref=bookmarks" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div mx-auto w-4 h-4 lg:w-5 lg:h-5 i-bi-facebook alt="facebook icon"${_scopeId}><span sr-only${_scopeId}>Link to Facebook profile</span></div>`);
          } else {
            return [
              vue.createVNode("div", {
                "mx-auto": "",
                "w-4": "",
                "h-4": "",
                "lg:w-5": "",
                "lg:h-5": "",
                "i-bi-facebook": "",
                alt: "facebook icon"
              }, [
                vue.createVNode("span", { "sr-only": "" }, "Link to Facebook profile")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_SocialIcon, { link: "mailto:chrisparvanov17@gmail.com" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div mx-auto w-4 h-4 lg:w-5 lg:h-5 i-simple-icons-gmail alt="gmail icon"${_scopeId}><span sr-only${_scopeId}>Send a mail</span></div>`);
          } else {
            return [
              vue.createVNode("div", {
                "mx-auto": "",
                "w-4": "",
                "h-4": "",
                "lg:w-5": "",
                "lg:h-5": "",
                "i-simple-icons-gmail": "",
                alt: "gmail icon"
              }, [
                vue.createVNode("span", { "sr-only": "" }, "Send a mail")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_SocialIcon, { link: "https://www.instagram.com/chriskvisuals/" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div mx-auto w-4 h-4 lg:w-5 lg:h-5 i-bi-instagram alt="instagram icon"${_scopeId}><span sr-only${_scopeId}>Link to Instagram profile</span></div>`);
          } else {
            return [
              vue.createVNode("div", {
                "mx-auto": "",
                "w-4": "",
                "h-4": "",
                "lg:w-5": "",
                "lg:h-5": "",
                "i-bi-instagram": "",
                alt: "instagram icon"
              }, [
                vue.createVNode("span", { "sr-only": "" }, "Link to Instagram profile")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_SocialIcon, { link: "https://www.youtube.com/channel/UCGe-ZbNlWRqOBchqgNL17WQ" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div mx-auto w-4 h-4 lg:w-5 lg:h-5 i-fa-youtube-play alt="youtube icon"${_scopeId}><span sr-only${_scopeId}>Link to YouTube channel</span></div>`);
          } else {
            return [
              vue.createVNode("div", {
                "mx-auto": "",
                "w-4": "",
                "h-4": "",
                "lg:w-5": "",
                "lg:h-5": "",
                "i-fa-youtube-play": "",
                alt: "youtube icon"
              }, [
                vue.createVNode("span", { "sr-only": "" }, "Link to YouTube channel")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></footer>`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = /* @__PURE__ */ vue.defineComponent({
  __name: "LoginIcon",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const { payload } = pinia.storeToRefs(userStore);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (!vue.unref(userStore).isLoggedIn) {
        _push(`<div><div class="avatar placeholder" cursor-pointer><div class="bg-base-content transition-dark-light text-base-100 rounded-full">`);
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/admin/login" }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div i-mdi:user scale="~ 50px"${_scopeId}><span sr-only${_scopeId}>Link to login page</span></div>`);
            } else {
              return [
                vue.createVNode("div", {
                  "i-mdi:user": "",
                  scale: "~ 50px"
                }, [
                  vue.createVNode("span", { "sr-only": "" }, "Link to login page")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<div><div class="avatar placeholder" cursor-pointer><div class="bg-base-content text-base-100 ring-primary-focus ring-2 ring-offset-base-100 transition-dark-light rounded-full w-10"><span class="text-base">${serverRenderer.ssrInterpolate((_a = JSON.parse(vue.unref(payload))) == null ? void 0 : _a.username.charAt(0))}</span></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/LoginIcon.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = /* @__PURE__ */ vue.defineComponent({
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const items = vue.ref([
      { name: "Home", link: "/" },
      { name: "Portfolio", link: "/portfolio" },
      { name: "Blog", link: "/blog" },
      { name: "About", link: "/about" },
      { name: "Contacts", link: "/contacts" }
    ]);
    const breakpoints = core.useBreakpoints(core.breakpointsTailwind);
    const md = breakpoints.smaller("md");
    const watchScroll = vue.inject("window");
    const { y } = core.useScroll(watchScroll);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_LoginIcon = _sfc_main$u;
      const _component_DarkToggle = __unplugin_components_1$1;
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        "z-1": "",
        "pb-15": ""
      }, _attrs))} data-v-a71384ee>`);
      if (!vue.unref(md)) {
        _push(`<div fixed class="full-navbar-width" data-v-a71384ee><nav flex justify-center items-center font-montserrat class="${serverRenderer.ssrRenderClass([{ "text-sm": vue.unref(y) > 0 }, "bg-base-100 text-lg"])}" data-v-a71384ee><ul flex justify-center transition-font-1000 data-v-a71384ee><!--[-->`);
        serverRenderer.ssrRenderList(items.value, (item, i) => {
          _push(`<li m-4 data-v-a71384ee>`);
          _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
            to: item.link,
            "active-class": "text-amber-950 dark:text-[#c75404ed] font-600"
          }, {
            default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer.ssrInterpolate(item.name)}`);
              } else {
                return [
                  vue.createTextVNode(vue.toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
        _push(serverRenderer.ssrRenderComponent(_component_LoginIcon, {
          mt: "2.3",
          "ml-4": "",
          "self-start": "",
          class: "no-animation",
          "transition-all-1000": ""
        }, null, _parent));
        _push(`</nav>`);
        _push(serverRenderer.ssrRenderComponent(_component_DarkToggle, {
          absolute: "",
          "top-3": "",
          "right-3": ""
        }, null, _parent));
        _push(`<div transition-all-1000 h="0.5" mx-auto class="${serverRenderer.ssrRenderClass([vue.unref(y) > 0 ? "w-full" : "w-140", "bg-[#926511] dark:bg-amber-700"])}" data-v-a71384ee></div></div>`);
      } else {
        _push(`<nav fixed left-0 right-0 flex justify-between items-center py-1 px-3 transition-dark-light class="bg-amber-300 dark:bg-amber-800" data-v-a71384ee><p font-bold font-oswald data-v-a71384ee> Chris K. Parvanov </p><label for="mobile-drawer" class="hidden md:block drawer-button btn btn-ghost btn-square" data-v-a71384ee><span i-heroicons-solid:menu w-7 h-7 data-v-a71384ee></span></label></nav>`);
      }
      _push(`</header>`);
    };
  }
});
const Navigation_vue_vue_type_style_index_0_scoped_a71384ee_lang = "";
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Navigation.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-a71384ee"]]);
const _sfc_main$s = /* @__PURE__ */ vue.defineComponent({
  __name: "Drawer",
  __ssrInlineRender: true,
  setup(__props) {
    const drawerToggle = vue.ref(null);
    function toggleDrawer() {
      drawerToggle.value.checked = false;
    }
    const items = vue.ref([
      { name: "Home", link: "/" },
      { name: "Portfolio", link: "/portfolio" },
      { name: "Blog", link: "/blog" },
      { name: "About", link: "/about" },
      { name: "Contacts", link: "/contacts" },
      { name: "Login", link: "/admin/login" }
    ]);
    const breakpoints = core.useBreakpoints({
      ...core.breakpointsTailwind,
      "xs": "400px",
      "2xs": "330px"
    });
    const mobile = breakpoints.smaller("md");
    const md = breakpoints.between("xs", "md");
    const xs = breakpoints.between("2xs", "xs");
    const xsAndSmaller = breakpoints.smaller("2xs");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      if (vue.unref(mobile)) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "drawer drawer-end" }, _attrs))}><input id="mobile-drawer" type="checkbox" class="drawer-toggle"><div class="drawer-content overflow-y-hidden">`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div><div class="drawer-side overflow-x-hidden"><label for="mobile-drawer" class="drawer-overlay"></label><div class="${serverRenderer.ssrRenderClass([{ "w-80": vue.unref(md), "w-65": vue.unref(xs), "w-55": vue.unref(xsAndSmaller) }, "flex flex-col gap-1.5 p-4 overflow-y-auto bg-base-100 text-base-content"])}"><div class="ml-3 flex justify-center items-center h-10 w-10"><label for="mobile-drawer"><div i-maki:cross w-5 h-5 opacity-50></div></label></div><!--[-->`);
        serverRenderer.ssrRenderList(items.value, (item, i) => {
          _push(`<div>`);
          _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
            block: "",
            "rounded-2": "",
            "px-5": "",
            "py-3": "",
            to: item.link,
            class: "text-base-content",
            "transition-color-1000": "",
            "active-class": "bg-black dark:bg-gray bg-opacity-10 dark:bg-opacity-10",
            onClick: ($event) => toggleDrawer()
          }, {
            default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer.ssrInterpolate(item.name)}`);
              } else {
                return [
                  vue.createTextVNode(vue.toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--><div text-xs px-5 mt text-neutral flex-inline items-center gap-4> Dark Mode <span><input type="checkbox" class="toggle"${serverRenderer.ssrIncludeBooleanAttr(vue.unref(isDark)) ? " checked" : ""}></span></div></div></div></div>`);
      } else {
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Drawer.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_Drawer = _sfc_main$s;
  const _component_Navigation = __unplugin_components_1;
  const _component_RouterView = vue.resolveComponent("RouterView");
  const _component_Footer = _sfc_main$v;
  const _component_ClientOnly = vue.resolveComponent("ClientOnly");
  const _component_ScrollButton = _sfc_main$x;
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Drawer, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div w-full h-screen flex flex-col justify-between class="text-base-content"${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_Navigation, null, null, _parent2, _scopeId));
        _push2(`<main my-5 px-4 py-5 text-center${_scopeId}>`);
        _push2(serverRenderer.ssrRenderComponent(_component_RouterView, null, null, _parent2, _scopeId));
        _push2(`</main>`);
        _push2(serverRenderer.ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(serverRenderer.ssrRenderComponent(_component_ScrollButton, null, null, _parent3, _scopeId2));
            } else {
              return [
                vue.createVNode(_component_ScrollButton)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode("div", {
            "w-full": "",
            "h-screen": "",
            flex: "",
            "flex-col": "",
            "justify-between": "",
            class: "text-base-content"
          }, [
            vue.createVNode(_component_Navigation),
            vue.createVNode("main", {
              "my-5": "",
              "px-4": "",
              "py-5": "",
              "text-center": ""
            }, [
              vue.createVNode(_component_RouterView)
            ]),
            vue.createVNode(_component_Footer)
          ]),
          vue.createVNode(_component_ClientOnly, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_ScrollButton)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/default.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __layout_1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$q = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_RouterView = vue.resolveComponent("RouterView");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    "text-center": "",
    "text-6xl": ""
  }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterView, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/notfound.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __layout_2 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$p = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ "text-center": "" }, _attrs))}><div flex text-xs justify-evenly text-neutral-500 dark:text-stone-400>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
    to: "/",
    class: "hover:text-neutral-700 dark:hover:text-stone-3"
  }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home `);
      } else {
        return [
          vue.createTextVNode(" Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
    to: "/portfolio",
    class: "hover:text-neutral-700 dark:hover:text-stone-3"
  }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Portfolio `);
      } else {
        return [
          vue.createTextVNode(" Portfolio ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
    to: "/contacts",
    class: "hover:text-neutral-700 dark:hover:text-stone-3"
  }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contacts `);
      } else {
        return [
          vue.createTextVNode(" Contacts ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/BottomNavigation.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const __unplugin_components_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$o = /* @__PURE__ */ vue.defineComponent({
  __name: "signin",
  __ssrInlineRender: true,
  setup(__props) {
    const router = vueRouter.useRouter();
    const authStore = useUserStore();
    vue.onBeforeMount(() => {
      if (authStore.isLoggedIn)
        router.push("/admin");
    });
    vue.watch(() => authStore.isLoggedIn, () => {
      router.push("/admin");
    });
    const breakpoints = core.useBreakpoints({
      sm: "460px",
      xs: "350px"
    });
    const mobile = breakpoints.smaller("sm");
    const xsMobile = breakpoints.smaller("xs");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = vue.resolveComponent("RouterView");
      const _component_BottomNavigation = __unplugin_components_0$2;
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        "text-center": "",
        "text-gray-700": "",
        "dark:text-gray-200": "",
        flex: "",
        "flex-col": "",
        "flex-wrap": "",
        "justify-center": "",
        "mx-auto": "",
        h: "90vh",
        "max-w-100": "",
        class: { "w-[80%]": vue.unref(mobile) }
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`<div mx-auto mt-15 min-w="80%" class="${serverRenderer.ssrRenderClass({ "w-[100%]": vue.unref(xsMobile) })}"><hr text-neutral-200 dark:text-neutral-700>`);
      _push(serverRenderer.ssrRenderComponent(_component_BottomNavigation, { "mt-2": "" }, null, _parent));
      _push(`</div></main>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/signin.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_RouterView = vue.resolveComponent("RouterView");
  _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    "px-4": "",
    "py-10": "",
    "text-center": "",
    "text-gray-700": "",
    "dark:text-gray-200": ""
  }, _attrs))}><div w="1/4" m-auto text-center text-gray-300 bg-orange-800> Sub Layout `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterView, null, null, _parent));
  _push(`</div></main>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/sub/sublayout.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __layout_4 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$2]]);
const layouts = {
  "admin": _sfc_main$y,
  "default": __layout_1,
  "notfound": __layout_2,
  "signin": _sfc_main$o,
  "sub/sublayout": __layout_4
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "default"],
      children: [{ ...route, path: "" }]
    };
  });
}
const _sfc_main$m = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useUserStore();
    const accs = vue.ref([]);
    head.useHead({
      title: "Home"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>This is home page</p>`);
      if (vue.unref(authStore).isLoggedIn) {
        _push(`<button class="btn btn primary"> Get Acc </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      serverRenderer.ssrRenderList(accs.value, (acc) => {
        _push(`<div>${serverRenderer.ssrInterpolate(acc)}</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __pages_import_0__ = () => Promise.resolve().then(() => ____all_);
const __pages_import_1__ = () => Promise.resolve().then(() => about);
const __pages_import_2__ = () => Promise.resolve().then(() => contacts);
const __pages_import_4__ = () => Promise.resolve().then(() => portfolio);
const __pages_import_5__ = () => Promise.resolve().then(() => register);
const __pages_import_6__ = () => Promise.resolve().then(() => index$1);
const __pages_import_7__ = () => Promise.resolve().then(() => login);
const __pages_import_8__ = () => Promise.resolve().then(() => preview);
const __pages_import_9__ = () => Promise.resolve().then(() => settings);
const __pages_import_10__ = () => Promise.resolve().then(() => _slug_);
const __pages_import_11__ = () => Promise.resolve().then(() => index);
const __pages_import_12__ = () => Promise.resolve().then(() => edit);
const routes$1 = [{ "name": "all", "path": "/:all(.*)*", "component": __pages_import_0__, "props": true, "meta": { "layout": "notfound" } }, { "name": "about", "path": "/about", "component": __pages_import_1__, "props": true, "meta": { "layout": "default" } }, { "name": "contacts", "path": "/contacts", "component": __pages_import_2__, "props": true }, { "name": "index", "path": "/", "component": _sfc_main$m, "props": true }, { "name": "portfolio", "path": "/portfolio", "component": __pages_import_4__, "props": true }, { "name": "register", "path": "/register", "component": __pages_import_5__, "props": true, "meta": { "layout": "signin" } }, { "name": "admin", "path": "/admin", "component": __pages_import_6__, "props": true, "meta": { "layout": "admin", "requiresAuth": true } }, { "name": "admin-login", "path": "/admin/login", "component": __pages_import_7__, "props": true, "meta": { "layout": "signin" } }, { "name": "admin-preview", "path": "/admin/preview", "component": __pages_import_8__, "props": true, "meta": { "layout": "admin" } }, { "name": "admin-settings", "path": "/admin/settings", "component": __pages_import_9__, "props": true, "meta": { "layout": "admin" } }, { "name": "blog-slug", "path": "/blog/:slug", "component": __pages_import_10__, "props": true }, { "name": "blog", "path": "/blog", "component": __pages_import_11__, "props": true }, { "name": "admin-posts-edit", "path": "/admin/posts/edit", "component": __pages_import_12__, "props": true, "meta": { "layout": "admin" } }];
const routes = setupLayouts(routes$1);
const tailwind = "";
const __uno = "";
const nprogress = "";
const full = "";
const themes = "";
const createApp = viteSsg.ViteSSG(
  _sfc_main$A,
  { routes },
  (ctx) => {
    Object.values(Object.assign({ "./modules/nprogress.ts": __vite_glob_0_0, "./modules/pinia.ts": __vite_glob_0_1, "./modules/primevue.ts": __vite_glob_0_2, "./modules/quill.ts": __vite_glob_0_3, "./modules/vuequery.ts": __vite_glob_0_4 })).forEach((i) => {
      var _a;
      return (_a = i.install) == null ? void 0 : _a.call(i, ctx);
    });
    ctx.app.provide("isClient", ctx.isClient);
  }
);
const _sfc_main$l = /* @__PURE__ */ vue.defineComponent({
  __name: "[...all]",
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "Not Found"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p> Page not found </p>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
        "text-lg": "",
        "text-blue-400": "",
        to: "/"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Go to start page `);
          } else {
            return [
              vue.createTextVNode(" Go to start page ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const block0 = {};
if (typeof block0 === "function")
  block0(_sfc_main$l);
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/[...all].vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const ____all_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$l
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    pt: "0.12em",
    h: "1em",
    mb: "0.25em",
    "text-center": "",
    "text-8xl": "",
    "sm:text": "30",
    "md:text": "38",
    "mx-auto": "",
    "w-full": "",
    class: "font-greatvibes text-base-content transition-dark-light"
  }, _attrs))}>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h1>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PageHeading.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "/KrisProfilePhoto.jpg";
const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "About"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeading = __unplugin_components_0$1;
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(_component_PageHeading, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              vue.createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div flex justify-around items-center max-w-4xl mx-auto flex-wrap sm:flex-nowrap><img h-100 alt="Chris photo"${serverRenderer.ssrRenderAttr("src", _imports_0)} width="267" height="400"><p lg:shrink font-montserrat md:text-2xl prose-slate max-w-130> Hi, there! I am Chris K Parvanov. I am 17 year old photogpraph enthusisast from Sofia, Bulgaria. I love travelling and photogpraphing the life around me! Portrait photos are my passion but I also make shots from events, products, nature. </p></div></div>`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$j);
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/about.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const about = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const nameRef = vue.ref("");
    const email = vue.ref("");
    const message = vue.ref("");
    const emailValid = vue.ref(null);
    const nameEmpty = vue.ref(null);
    const messageEmpty = vue.ref(null);
    vue.watch(email, (val) => {
      if (emailValid.value === false)
        emailValid.value = null;
    });
    const xs = core.useBreakpoints(core.breakpointsTailwind).smaller("sm");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        "mx-auto": "",
        "sm:w-100": "",
        "md:w-120": "",
        "lg:w-150": "",
        "text-left": "",
        class: { "max-w-80": vue.unref(xs) }
      }, _attrs))}><label for="name" w-full><p font-oswald>Name:</p>`);
      if (nameEmpty.value === true) {
        _push(`<p mb-1 text-xs class="text-error"> * Required </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input id="name"${serverRenderer.ssrRenderAttr("value", nameRef.value)} type="text" name="name" placeholder="Your Name..." class="${serverRenderer.ssrRenderClass([{
        "input-success": nameEmpty.value !== null && !nameEmpty.value,
        "input-error": nameEmpty.value !== null && nameEmpty.value
      }, "w-full input input-bordered input-sm !h-10 sm:input-md sm:!h-12"])}"></label><label for="name"><p mt-2 font-oswald>Email:</p>`);
      if (emailValid.value === false) {
        _push(`<p mb-1 text-xs class="text-error"> * ${serverRenderer.ssrInterpolate(email.value !== email.value.trim() ? "Remove whitespaces" : email.value === "" ? "Required" : "Enter valid email")}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input id="name"${serverRenderer.ssrRenderAttr("value", email.value)} name="name" autocomplete="email" placeholder="Your Email adress..." class="${serverRenderer.ssrRenderClass([{
        "input-success": emailValid.value !== null && emailValid.value,
        "input-error": emailValid.value !== null && !emailValid.value
      }, "input input-bordered w-full input-sm sm:input-md !h-10 sm:!h-12"])}"></label><label><p mt-2 font-oswald>Message:</p>`);
      if (messageEmpty.value === true) {
        _push(`<p mb-1 text-xs class="text-error"> * Required </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<textarea id="message"${serverRenderer.ssrRenderAttr("rows", vue.unref(xs) ? 4 : 8)} placeholder="Your thoughts..." class="${serverRenderer.ssrRenderClass([{
        "textarea-success": messageEmpty.value !== null && !messageEmpty.value,
        "textarea-error": messageEmpty.value !== null && messageEmpty.value
      }, "textarea textarea-bordered w-full resize-none"])}">${serverRenderer.ssrInterpolate(message.value)}</textarea></label><button type="submit" class="${serverRenderer.ssrRenderClass([{ "btn-block": vue.unref(xs) }, "mt-2 btn btn-primary !h-9 btn-sm sm:btn-md"])}"> Send </button></form>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ContactForm.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __name: "contacts",
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "Contacts"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeading = __unplugin_components_0$1;
      const _component_ContactForm = _sfc_main$i;
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(_component_PageHeading, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contacts`);
          } else {
            return [
              vue.createTextVNode("Contacts")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_ContactForm, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/contacts.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
  __name: "portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "Portfolio"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeading = __unplugin_components_0$1;
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(_component_PageHeading, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Portrait Gallery`);
          } else {
            return [
              vue.createTextVNode("Portrait Gallery")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/portfolio.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const portfolio = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __name: "smallTextUnderForm",
  __ssrInlineRender: true,
  props: {
    options: null
  },
  setup(__props) {
    const xs = core.useBreakpoints(core.breakpointsTailwind).smaller("sm");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<small${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: { "text-xs": vue.unref(xs) }
      }, _attrs))}>${serverRenderer.ssrInterpolate(__props.options.text)} `);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
        class: "link link-primary underline-offset-2",
        to: __props.options.link
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(__props.options.linkText)}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(__props.options.linkText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</small>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/smallTextUnderForm.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __name: "InputField",
  __ssrInlineRender: true,
  props: ["fieldValue", "section"],
  emits: ["update:fieldValue"],
  setup(__props) {
    vue.ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ "my-3": "" }, _attrs))}><p text-left mb="0.5" text-sm sm:text-base>${serverRenderer.ssrInterpolate(__props.section.label)}: </p><input${serverRenderer.ssrRenderAttr("value", __props.fieldValue)} class="input input-bordered w-full !h-10 sm:input-md sm:!h-12"${serverRenderer.ssrRenderAttr("type", __props.section.type)}${serverRenderer.ssrRenderAttr("placeholder", __props.section.placeholder)}></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/InputField.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __name: "LoginFrom",
  __ssrInlineRender: true,
  props: {
    name: null,
    hasConfirmPass: { type: Boolean },
    smallText: null,
    isLoading: { type: Boolean }
  },
  emits: ["onSubmit"],
  setup(__props) {
    const props = __props;
    const username = vue.ref("");
    const password = vue.ref("");
    const confirmPass = vue.ref("");
    const inputOptions = [
      { label: "Username", type: "text", placeholder: "Username", targetRef: username },
      { label: "Password", type: "password", placeholder: "Password", targetRef: password }
    ];
    if (props.hasConfirmPass === true) {
      inputOptions.push(
        { label: "Confirm password", type: "password", placeholder: "Confirm", targetRef: confirmPass }
      );
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputField = _sfc_main$e;
      const _component_SmallTextUnderForm = _sfc_main$f;
      _push(`<!--[-->`);
      if (__props.isLoading) {
        _push(`<div transition ease-in-out transition-duration="0.4s" z-10 fixed opacity-50 top-0 bottom-0 left-0 right-0 class="bg-base-100"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div transition-dark-light><h1 text-2xl>${serverRenderer.ssrInterpolate(__props.name)}</h1><form><!--[-->`);
      serverRenderer.ssrRenderList(inputOptions, (opt) => {
        _push(serverRenderer.ssrRenderComponent(_component_InputField, {
          key: opt.label,
          fieldValue: opt.targetRef.value,
          "onUpdate:fieldValue": ($event) => opt.targetRef.value = $event,
          section: opt
        }, null, _parent));
      });
      _push(`<!--]--><button type="submit" class="${serverRenderer.ssrRenderClass([{ loading: __props.isLoading === true }, "btn btn-primary w-full my-2 !h-9 btn-sm sm:btn-md"])}">${serverRenderer.ssrInterpolate(__props.name)}</button></form><div class="my-2">`);
      _push(serverRenderer.ssrRenderComponent(_component_SmallTextUnderForm, { options: __props.smallText }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/LoginFrom.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
function useFormMutation(url, axiosInst) {
  return vueQuery.useMutation((data) => axios__default.default.post(url, data), {
    onSuccess: ({ data }, variables, context) => {
      axiosInst.defaults.headers.authorization = `Bearer ${data.token}`;
    }
  });
}
const inst = axios__default.default.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});
const axiosInstance = vue.ref(inst);
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const smallText = vue.ref({
      text: "Already have a profile?",
      link: "/admin/login",
      linkText: "Login here!"
    });
    const url = "http://192.168.201.59:3002/register";
    const { data, mutateAsync, isLoading, error: err } = useFormMutation(url, axiosInstance.value);
    const error = err;
    async function register2(event) {
      var _a;
      await mutateAsync(event);
      userStore.token = (_a = data.value) == null ? void 0 : _a.data.token;
      if (userStore.token)
        userStore.payload = JSON.stringify(jwt_decode__default.default(userStore.token));
    }
    head.useHead({
      title: "Register"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_LoginFrom = _sfc_main$d;
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_LoginFrom, {
        name: "Register",
        "small-text": smallText.value,
        "is-loading": vue.unref(isLoading),
        "has-confirm-pass": true,
        onOnSubmit: register2
      }, null, _parent));
      _push(`<div class="text-error text-xs sm:text-sm">${serverRenderer.ssrInterpolate((_a = vue.unref(error)) == null ? void 0 : _a.response.data)}</div><!--]-->`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$c);
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/register.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const register = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    "font-bold": "",
    "text-7xl": "",
    "mb-12": ""
  }, _attrs))}>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h1>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AdminPanelHeading.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "Dashboard"
    });
    const userStore = useUserStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminPanelHeading = __unplugin_components_0;
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_AdminPanelHeading, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              vue.createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div> Admin Dashboard </div>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
        to: "/",
        class: "btn btn-primary"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              vue.createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
        to: "/",
        class: "btn",
        onClick: ($event) => vue.unref(userStore).logoff()
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Logout `);
          } else {
            return [
              vue.createTextVNode(" Logout ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="btn btn-primary"> explore transform </div><!--]-->`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$a);
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/admin/index.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const smallText = vue.ref({
      text: "Don't have a profile?",
      link: "/register",
      linkText: "Register now!"
    });
    const userStore = useUserStore();
    const url = "http://192.168.201.59:3002/login";
    const { data, mutate, mutateAsync, isLoading, error: err } = useFormMutation(url, axiosInstance.value);
    const error = err;
    async function login2(event) {
      var _a;
      await mutateAsync(event);
      userStore.token = (_a = data.value) == null ? void 0 : _a.data.token;
      if (userStore.token)
        userStore.payload = JSON.stringify(jwt_decode__default.default(userStore.token));
    }
    vue.ref("");
    vue.ref("");
    head.useHead({
      title: "Login"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_LoginFrom = _sfc_main$d;
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_LoginFrom, {
        name: "Login",
        "small-text": smallText.value,
        "is-loading": vue.unref(isLoading),
        onOnSubmit: login2
      }, null, _parent));
      _push(`<div class="text-error text-xs sm:text-sm">${serverRenderer.ssrInterpolate((_a = vue.unref(error)) == null ? void 0 : _a.response.data)}</div><!--]-->`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$9);
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/admin/login.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const login = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __name: "preview",
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "Preview"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminPanelHeading = __unplugin_components_0;
      _push(serverRenderer.ssrRenderComponent(_component_AdminPanelHeading, _attrs, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Preview `);
          } else {
            return [
              vue.createTextVNode(" Preview ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$8);
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/admin/preview.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const preview = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "Settings"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminPanelHeading = __unplugin_components_0;
      _push(serverRenderer.ssrRenderComponent(_component_AdminPanelHeading, _attrs, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Settings `);
          } else {
            return [
              vue.createTextVNode(" Settings ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$7);
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/admin/settings.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const settings = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
function usePostUserQuery(userId, { enabled }) {
  return vueQuery.useQuery(
    ["user", userId],
    () => axiosInstance.value.get(`/users/${userId.value}`),
    {
      enabled,
      select: (user) => user.data
    }
  );
}
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __name: "UserIcon",
  __ssrInlineRender: true,
  props: {
    userId: null,
    enabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const refProps = vue.toRefs(props);
    const {
      data: user,
      isLoading: isUserLoading,
      isError,
      error
    } = usePostUserQuery(refProps.userId, { enabled: refProps.enabled });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "flex justify-center items-center" }, _attrs))}><div bg-gray-200 dark:bg-gray-6 w-13 h-13 rounded-full flex items-center justify-center>`);
      if (vue.unref(isUserLoading)) {
        _push(`<div i-carbon-user></div>`);
      } else if (vue.unref(isError)) {
        _push(`<div text-2xl font-bold text-red>${serverRenderer.ssrInterpolate(vue.unref(error))}</div>`);
      } else {
        _push(`<div text-2xl font-bold>${serverRenderer.ssrInterpolate((_a = vue.unref(user)) == null ? void 0 : _a.name.charAt(0))}</div>`);
      }
      _push(`</div><div ml-2>${serverRenderer.ssrInterpolate((_b = vue.unref(user)) == null ? void 0 : _b.name)}</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/UserIcon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
function usePostsQuery(slug, { enabled }) {
  return vueQuery.useQuery(
    ["posts", slug],
    () => axiosInstance.value.get(slug.value == null ? "/posts" : `/posts/${slug.value}`),
    {
      enabled,
      select: (post) => post.data
    }
  );
}
const fetchPosts = ({ pageParam = 1 }) => axiosInstance.value.get(`/posts?_page=${pageParam}`);
function usePostInfiniteQuery() {
  return vueQuery.useInfiniteQuery(
    "posts",
    fetchPosts,
    {
      getNextPageParam: (lastPage, pages) => {
        const nextPage = lastPage.data[lastPage.data.length - 1].id / 10 + 1;
        const maxPage = Number(lastPage.headers["x-total-count"]) / 10;
        return maxPage < nextPage ? false : nextPage;
      }
    }
  );
}
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __name: "Post",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    const props = __props;
    const postId = vue.ref(props.id);
    const { data: post, error, isLoading } = usePostsQuery(postId, {
      enabled: vue.computed(() => !!postId)
    });
    const userId = vue.computed(() => {
      var _a;
      return (_a = post.value) == null ? void 0 : _a.userId;
    });
    const enabled = vue.computed(() => {
      var _a;
      return !!((_a = post.value) == null ? void 0 : _a.userId);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserIcon = _sfc_main$6;
      if (vue.unref(post)) {
        _push(`<article${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          "max-w-200": "",
          "text-base-content": "",
          "mx-auto": "",
          "mt-10": ""
        }, _attrs))}><h1 text-2xl font-bold mb-4>${serverRenderer.ssrInterpolate(vue.unref(post).title)}</h1>`);
        _push(serverRenderer.ssrRenderComponent(_component_UserIcon, {
          "user-id": vue.unref(userId),
          enabled: vue.unref(enabled),
          "mb-3": ""
        }, null, _parent));
        _push(`<div mb-4>${serverRenderer.ssrInterpolate(vue.unref(post).body)}</div></article>`);
      } else if (vue.unref(error)) {
        _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>${serverRenderer.ssrInterpolate(vue.unref(error))}</div>`);
      } else if (vue.unref(isLoading)) {
        _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 text-2xl font-bold mb-4> Loading... </h1>`);
        _push(serverRenderer.ssrRenderComponent(_component_UserIcon, {
          "user-id": vue.unref(userId),
          enabled: vue.unref(enabled),
          "mb-3": ""
        }, null, _parent));
        _push(`<div mb-4> Loading ... </div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Post.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  props: {
    slug: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Post = _sfc_main$5;
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_Post, {
        id: props.slug
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
        to: "/blog",
        class: "btn btn-primary"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back `);
          } else {
            return [
              vue.createTextVNode(" Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/[slug].vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __name: "PostCard",
  __ssrInlineRender: true,
  props: ["content"],
  setup(__props) {
    const props = __props;
    const post = props.content;
    const imageLoaded = vue.ref(false);
    const breakpoints = core.useBreakpoints(core.breakpointsTailwind);
    breakpoints.smaller("sm");
    breakpoints.between("sm", "md");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "card card-normal h-full bg-primary text-primary-content shadow-lg dark:shadow-stone-700 transition-dark-light" }, _attrs))}><figure max-w-150 max-h="250px"><img src="https://picsum.photos/520/250" alt="Picture" class="${serverRenderer.ssrRenderClass(imageLoaded.value === true ? "opacity-100" : "opacity-0")}" transition-all duration="1000" ease-in-out></figure><div class="card-body"><h2>`);
      if (vue.unref(post)) {
        _push(`<span class="card-title text-left md:!text-xl sm:!text-lg !text-base">${serverRenderer.ssrInterpolate(`${vue.unref(post).id} ${(_a = vue.unref(post)) == null ? void 0 : _a.title}`)}</span>`);
      } else {
        _push(`<span class="card-title text-left"> Loading... </span>`);
      }
      _push(`</h2>`);
      if (vue.unref(post)) {
        _push(`<p sm:text-base text-sm text-left>${serverRenderer.ssrInterpolate((_c = (_b = vue.unref(post)) == null ? void 0 : _b.body) == null ? void 0 : _c.slice(0, 100).concat("..."))}</p>`);
      } else {
        _push(`<p> Loading content... </p>`);
      }
      _push(`<div class="card-actions justify-end">`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
        to: `/blog/${(_d = vue.unref(post)) == null ? void 0 : _d.id}`,
        class: "btn btn-primary-content"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Read more `);
          } else {
            return [
              vue.createTextVNode(" Read more ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PostCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __name: "PostList",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      data,
      error,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      isLoading
    } = usePostInfiniteQuery();
    function onIntersectionObserver([{ isIntersecting }]) {
      if ((hasNextPage == null ? void 0 : hasNextPage.value) && !isFetchingNextPage.value && isIntersecting)
        fetchNextPage.value();
    }
    const breakpoints = core.useBreakpoints({
      "3xl": "2074px",
      "2xl": "1960px",
      "xl": "1600px",
      "lg": "1340px"
    });
    const md = breakpoints.smaller("lg");
    const lg = breakpoints.between("lg", "xl");
    const xl = breakpoints.between("xl", "2xl");
    const xxl = breakpoints.between("2xl", "3xl");
    const xxxl = breakpoints["3xl"];
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_PostCard = _sfc_main$3;
      _push(`<!--[--><div grid auto-rows-fr auto-cols-fr class="${serverRenderer.ssrRenderClass({
        "grid-cols-4 gap-15": vue.unref(xxxl),
        "grid-cols-4 gap-7": vue.unref(xxl),
        "grid-cols-3 gap-15": vue.unref(xl),
        "grid-cols-2 gap-15": vue.unref(lg),
        "grid-cols-1 gap-15 max-w-150 p10 mx-auto": vue.unref(md)
      })}" z-0 mx-60>`);
      if (vue.unref(isLoading)) {
        _push(`<!--[-->`);
        serverRenderer.ssrRenderList(10, (n) => {
          _push(`<div mx-auto>`);
          _push(serverRenderer.ssrRenderComponent(_component_PostCard, null, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else if (vue.unref(error)) {
        _push(`<div text-2xl mx-auto text-red>${serverRenderer.ssrInterpolate(`Error: ${vue.unref(error)}`)}</div>`);
      } else {
        _push(`<!--[-->`);
        serverRenderer.ssrRenderList((_a = vue.unref(data)) == null ? void 0 : _a.pages, (page) => {
          _push(`<!--[--><!--[-->`);
          serverRenderer.ssrRenderList(page.data, (post) => {
            _push(`<div>`);
            _push(serverRenderer.ssrRenderComponent(_component_PostCard, { content: post }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div><hr my-10>`);
      if (!vue.unref(isLoading)) {
        _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          "my-4": "",
          "mt-6": "",
          class: "btn btn-primary",
          disabled: !vue.unref(hasNextPage) || vue.unref(isFetchingNextPage)
        }, serverRenderer.ssrGetDirectiveProps(_ctx, vue.unref(components.vIntersectionObserver), onIntersectionObserver)))}>`);
        if (vue.unref(isFetchingNextPage)) {
          _push(`<span>Loading more...</span>`);
        } else if (vue.unref(hasNextPage)) {
          _push(`<span>Load More</span>`);
        } else {
          _push(`<span>Nothing more to load</span>`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PostList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "Blog"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeading = __unplugin_components_0$1;
      const _component_PostList = _sfc_main$2;
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(_component_PageHeading, { h: "1.4em" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Blog `);
          } else {
            return [
              vue.createTextVNode(" Blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_PostList, { "mt-20": "" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "edit",
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      title: "Edit Post"
    });
    const content = vue.ref("<div>Hello there</div>");
    const postId = vue.ref(1);
    vue.ref(null);
    vue.onMounted(async () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminPanelHeading = __unplugin_components_0;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_quill_editor = vue.resolveComponent("quill-editor");
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_AdminPanelHeading, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Edit `);
          } else {
            return [
              vue.createTextVNode(" Edit ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<label for="post-id"><span class="text-xl mr-3">Post Id:</span><input id="post-id"${serverRenderer.ssrRenderAttr("value", postId.value)} type="number" name="post-id" min="1" max="100" border-2 p-3 rounded-3 border-gray-200></label><div id="myEditor"><p>Hello World!</p><p>Some initial <strong>bold</strong> text</p><p><br></p></div>`);
      _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_quill_editor, {
              value: content.value,
              "onUpdate:value": ($event) => content.value = $event,
              class: "!h-100"
            }, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_quill_editor, {
                value: content.value,
                "onUpdate:value": ($event) => content.value = $event,
                class: "!h-100"
              }, null, 8, ["value", "onUpdate:value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/admin/posts/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const edit = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
exports.createApp = createApp;
