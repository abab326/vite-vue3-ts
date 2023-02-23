/// <reference types="vite/client" />
declare module "*.vue" {
    import type { App, defineComponent, ComponentOptions } from "vue";
    const component:
        | ComponentOptions
        | ComponentOptions["setup"]
        | (ReturnType<typeof defineComponent> & {
              install(app: App): void;
          });
    export default component;
}
declare module "*.vue" {}
