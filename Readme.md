# Boiter-Plate-React-Ts
## Description
This is a boiler plate project ready to be used that includes react, typescript, webpack, defined and ready to go.
## Project structure

- **Layout**: Defines Master Pages
- **Common**: Reusable components that can be used in other projects
  They do not depend on the domain. Depending on the project, It can also be used **common-app** for components that are specifictly reliable to this to this domain.
- **Content**: Place to store content f.e. images such as logos. 
- **Scenes**: Dummie pages without many funcional components. This pages just set the layout to apply and make use of - **pods** lás páginas, pero no tienen apenas lógica, elijes el layout a aplicar y llamas a uno o más pods
- **Pods**: This is where the core funtionality goes. They are functional isoleted pieces that can be used in one or many pages. Every needed piece should be also included here (api, vm, ...)

Credits to [Braulio Diez](https://github.com/brauliodiez)

## Make it run
All you need to do to make ir run is install packages via `npm install` and then start it using `npm start`.

> **Note**: It's set up for running on Google Chrome, If you want to set up a different default browser you will need to configure webpack by definning
>
> _`const defaultBrowser = "Google Chrome";`_
> According to your Operating System and the Browser that you wish to use.
> For further information I suggest you to visit [Webpack configuration website](https://webpack.js.org/configuration/dev-server/#devserveropen).
