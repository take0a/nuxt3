# いまさらNuxt
## 01 環境構築
### 前提
- OS：Amazon Linux release 2023.6.20250218 (Amazon Linux)
    - cat /etc/amazon-linux-release
- Node.js：v20.11.1
    - node --version
- pnpm：9.15.4 -> 10.4.1
    - pnpm --version
    - corepack install -g pnpm@10.4.1

### プロジェクト作成
- https://nuxt.com/docs/getting-started/installation
```
$ pnpx nuxi@latest init 01

        .d$b.
       i$$A$$L  .d$b
     .$$F` `$$L.$$A$$.
    j$$'    `4$$:` `$$.
   j$$'     .4$:    `$$.
  j$$`     .$$:      `4$L
 :$$:____.d$$:  _____.:$$:
 `4$$$$$$$$P` .i$$$$$$$$P`

ℹ Welcome to Nuxt!
ℹ Creating a new project in 01.

✔ Which package manager would you like to use?
pnpm
◐ Installing dependencies...
 WARN  2 deprecated subdependencies found: glob@7.2.3, inflight@1.0.6
Packages: +613
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 690, reused 607, downloaded 6, added 613, done

> nuxt-app@ postinstall /home/ec2-user/work/nuxt3/01
> nuxt prepare

✔ Types generated in .nuxt

dependencies:
+ nuxt 3.15.4
+ vue 3.5.13
+ vue-router 4.5.0

Done in 7.7s using pnpm v10.4.1
✔ Installation completed.

✔ Initialize git repository?
No

✨ Nuxt project has been created with the v3 template. Next steps:
 › cd 01
 › Start development server with pnpm run dev
 ```

- 初回起動
```
$ cd 01
$ pnpm dev

> nuxt-app@ dev /home/ec2-user/work/nuxt3/01
> nuxt dev

Nuxt 3.15.4 with Nitro 2.10.4

  ➜ Local:    http://localhost:3000/
  ➜ Network:  use --host to expose

  ➜ DevTools: press Shift + Alt + D in the browser (v1.7.0)

✔ Vite client built in 27ms
✔ Vite server built in 326ms
✔ Nuxt Nitro server built in 887 ms
ℹ Vite client warmed up in 3ms
ℹ Vite server warmed up in 1075ms
```

- ESLint
- https://eslint.nuxt.com/packages/module#quick-setup
- ドキュメントとちょっと違うが --dev をつけた方がよさそう
```
$ pnpx nuxi module add eslint --dev
ℹ Resolved @nuxt/eslint, adding module...
ℹ Installing @nuxt/eslint@1.1.0 as a development dependency
 WARN  2 deprecated subdependencies found: glob@7.2.3, inflight@1.0.6
Packages: +171
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 858, reused 773, downloaded 8, added 171, done

devDependencies:
+ @nuxt/eslint 1.1.0

Done in 5.2s using pnpm v10.4.1
 WARN  2 deprecated subdependencies found: glob@7.2.3, inflight@1.0.6
Already up to date
Progress: resolved 858, reused 781, downloaded 0, added 0, done

devDependencies:
+ eslint 9.21.0

Done in 1.8s using pnpm v10.4.1
ℹ Adding @nuxt/eslint to the modules
✔ ESLint config file created at /home/ec2-user/work/nuxt3/01/eslint.config.mjs
[4:24:24 AM] ℹ If you have .eslintrc or .eslintignore files, you might want to migrate them to the new config file
✔ Types generated in .nuxt
```

- TypeScript
- 上と同じページの続き
- https://eslint.nuxt.com/packages/module#quick-setup
```
$ pnpm add -D typescript
 WARN  2 deprecated subdependencies found: glob@7.2.3, inflight@1.0.6
Already up to date
Progress: resolved 858, reused 781, downloaded 0, added 0, done

devDependencies:
+ typescript 5.7.3

Done in 1.7s using pnpm v10.4.1
```

- VSCode の ESLint 拡張
- 3.0.10 には問題があるようなので、プレリリース版 3.0.13 に更新する

- pnpm scripts
- https://eslint.nuxt.com/packages/module#npm-scripts
```package.json
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
```

```
$ pnpm lint

> nuxt-app@ lint /home/ec2-user/work/nuxt3/01
> eslint .

$ pnpm lint:fix

> nuxt-app@ lint:fix /home/ec2-user/work/nuxt3/01
> eslint . --fix
```

- ESLint Stylistic
- https://eslint.nuxt.com/packages/module#eslint-stylistic
```nuxt.config.ts
  eslint: {
    config: {
      stylistic: true 
    }
  }
```

- VSCode for ESLint
```.vscode/setting.json
{
  "editor.tabSize": 2,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "[vue]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "eslint.format.enable": true
}
```

- Vuetify3
- https://nuxt.vuetifyjs.com/guide/
```
$ pnpm i -D vuetify
 WARN  2 deprecated subdependencies found: glob@7.2.3, inflight@1.0.6
Packages: +1
+
Progress: resolved 859, reused 781, downloaded 1, added 1, done

devDependencies:
+ vuetify 3.7.13

Done in 3.5s using pnpm v10.4.1
```

```
$ pnpx nuxi module add vuetify-nuxt-module --dev
ℹ Resolved vuetify-nuxt-module, adding module...
ℹ Installing vuetify-nuxt-module@0.18.3 as a development dependency
 WARN  2 deprecated subdependencies found: glob@7.2.3, inflight@1.0.6
Packages: +28
++++++++++++++++++++++++++++
Progress: resolved 893, reused 782, downloaded 11, added 28, done

devDependencies:
+ vuetify-nuxt-module 0.18.3

Done in 2.7s using pnpm v10.4.1
ℹ Adding vuetify-nuxt-module to the modules
✔ Types generated in .nuxt                                         
```

```
$ pnpm i @mdi/font
 WARN  2 deprecated subdependencies found: glob@7.2.3, inflight@1.0.6
Packages: +1
+
Progress: resolved 894, reused 793, downloaded 1, added 1, done

dependencies:
+ @mdi/font 7.4.47

Done in 1.8s using pnpm v10.4.1
```

- 設定が書けるようにしておく
```nuxt.config.ts
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {}
  }
```

- テスト
- https://nuxt.com/docs/getting-started/testing
- https://vuetifyjs.com/en/getting-started/unit-testing/
```
 
```

```nuxt.config.ts
  modules: [
    '@nuxt/eslint',
    'vuetify-nuxt-module',
    '@nuxt/test-utils/module',
  ],
```
 
```vitest.config.ts
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        domEnvironment: 'happy-dom',
      },
    },
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
})
```

## 02 基本


## 03 認証
### 環境構築
- https://nuxt.com/modules/auth-utils#quick-setup
```
$ pnpx nuxi module add auth-utils
ℹ Resolved nuxt-auth-utils, adding module...
ℹ Installing nuxt-auth-utils@0.5.16 as a dependency
 WARN  2 deprecated subdependencies found: glob@7.2.3, inflight@1.0.6
Packages: +21
+++++++++++++++++++++
Progress: resolved 954, reused 833, downloaded 21, added 21, done

dependencies:
+ nuxt-auth-utils 0.5.16

Done in 6.3s using pnpm v10.4.1
ℹ Adding nuxt-auth-utils to the modules
✔ Types generated in .nuxt            
```

```
$ pnpm dev
```
で実行すると、.env 上に NUXT_SESSION_PASSWORD が生成される

```.env
NUXT_SESSION_PASSWORD=9a17f7a08f604f41ac74c567f477f645
```

#### Google Cloud