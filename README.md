<p align="center">
  <a href="https://www.medusa-commerce.com">
    <img alt="Medusa" src="https://user-images.githubusercontent.com/7554214/153162406-bf8fd16f-aa98-4604-b87b-e13ab4baf604.png" width="100" />
  </a>
</p>
<h1 align="center">
  Medusa Gatsby Starter with Wishlist
</h1>
<p align="center">
Medusa is an open-source headless commerce engine that enables developers to create amazing digital commerce experiences.
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Medusa is released under the MIT license." />
  </a>
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

> **Prerequisites**: To use this starter you should have a Medusa server with a **Wishlist** functionality implemented. You can use the [medusa-server-wishlist](https://github.com/carpad88/medusa-server-wishlist) along with this starter, or you can check [this tutorial](https://github.com/carpad88/medusa-gatsby-wishlist) to implement the wishlist in your medusa server.

## 🚀 Quick Start

1. **Clone this repository**

```zsh
  git clone git@github.com:carpad88/medusa-gatsby-wishlist.git storefront-wishlist
```

2. **Install dependencies**

```zsh
  cd storefront-wishlist
  yarn
```

3. **Link to your backend**

In the folder `storefront-wishlist` you should have a `.env.template` file with the following content:

```shell
GATSBY_MEDUSA_BACKEND_URL=http://localhost:9000
```

Before you can start developing your site you first need to copy this file into a new file named `.env.development`.

```zsh
mv .env.template .env.development
```

Per default your Medusa server should be running on `localhost:9000`, but if you have changed this you will then need to replace `GATSBY_MEDUSA_BACKEND_URL` with the URL of your Medusa server.

```zsh
GATSBY_MEDUSA_BACKEND_URL=<link to your server>
```

4. **Start development**

You should now be able to start developing your site.

```zsh
yarn start
```

5. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!
