import type { DeltaRouter } from '@delta-comic/utils'

declare module 'vue' {
  interface ComponentCustomProperties {
    $router: DeltaRouter
  }
}

declare module 'vue-router' {
  interface TypesConfig {
    Router: DeltaRouter
    $router: DeltaRouter
  }
}

export {}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, unknown>
  export default component
}