# Blog [en] 

In version **v2.0**, this [Blog](https://www.informateconeve.com.ar/) was re-created using the following technologies:

- **Astro**
- **TailwindCSS**
- **TinaCMS**

Deployed on **Vercel**

Previously, it used the following technologies:

- **NextJs**
- **Strapi**
- **MaterialUi**

Deployed on **Vercel** and **AWS**

# Why the changes?

These changes were made for two fundamental reasons: simplicity and performance. While **NextJs** and **MaterialUi** did not have significant performance issues, the transition from **SSR** to static web is noticeable. Additionally, when using **Strapi**, it was necessary to deploy the backend outside of Vercel.

To address these issues, the blog switched to using **TinaCMS**. Now, the platform takes care of pushing markdown files to the repository, making the blog static, more performant, and simpler to use for the owner.

## Info

It was built on the ["Stablo"](https://astro.build/themes/details/stablo-blog/) theme from **Astro**. The main focus was on the visual aspect, and **TinaCMS** was added for content creation and post management.

## Try it out

The blog is public, and you can access it at [informateconeve.com.ar](https://www.informateconeve.com.ar/). If you want to run it locally, you can do so with the following command:

```
pnpm run dev
```

This way, Tina will run locally, and you can access the **CMS** at:

```
localhost:[port]/admin/index.html
```

Note: Replace `[port]` with the actual port number specified in your local setup.
# Blog [es] 
En la **v2.0** este [Blog](https://www.informateconeve.com.ar/) fue re-creado con las siguientes tecnologias:

- **Astro**
- **TailwindCSS**
- **TinaCMS**

Deployado en **Vercel**

Previamente usaba las siguientes tecnologias:

- **NextJs**
- **Strapi**
- **MaterialUi**

Deployado en **Vercel** y **AWS**

# ¿Por que los cambios?

Estos cambios se llevaron a cabo por dos razones fundamentales, simplicidad y rendimiento.
Si bien **NextJs** y **Material** no tenian problemas notorios de rendimiento, el paso de **SSR** a web estatica si es notorio, por otra parte al usar **Strapi** era necesario deployar el backend fuera de vercel.
Para solucionar esto el blog hacian un fetch de los post de **Strapi** alojados en **AWS** en cambio ahora con **TinaCMS** la plataforma es la que se encarga de pushear los archivos markdown al repo y de esta manera el blog se vuelvio estatico, mas performate y simple de usar para la dueña

## Info

Se construyo sobre el Theme ["Stablo"](https://astro.build/themes/details/stablo-blog/) de **Astro**, se trabajo sobre todo en el apartado visual ademas de agregarle **TinaCMS** para la creacion de contenido y gestion de posts

## Probarlo

El blog es publico y podes verlo acceder en [informateconeve.com.ar](https://www.informateconeve.com.ar/)
y si deseas bajarte el repo podes correrlo con:

    pnpm run dev

De esta manera Tina correra de manera local y podras acceder al **CMS** en:

    localhost:[puerto]/admin/index.html
  
Nota: Reemplaza `[puerto]` con el número de puerto real especificado en tu configuración local.
