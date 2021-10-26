declare global {
  namespace NodeJS {
    interface Process {
      /**
       * 是否是开发环境
       */
      IS_DEV: boolean

      getStaticVersion(path: string): string
    }
  }

  interface ImportMeta {
    env: {
      MODE: 'development' | 'production'
      [props: string]: any
    }
  }
}

export {}
