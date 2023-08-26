# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Multi-step form solution](#frontend-mentor---multi-step-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Extra Screenshots](#extra-screenshots)
- [React + TypeScript + Vite](#react--typescript--vite)
  - [Expanding the ESLint configuration](#expanding-the-eslint-configuration)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![Screenshot](./src/assets/screenshots/React%20Multi-step%20Form%20-%20multi-step-form-react-fm.netlify.app.png)

### Links

- Solution URL: [Github Repo - multi-step-form](https://github.com/yogeshdatir/multi-step-form)
- Live Site URL: [Multi step form](https://multi-step-form-react-fm.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- EmotionJs - For styles
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

- How to configure svg and images imports with Vite.
- Multi-step form is nothing but small router with shared state among all form components.

### Continued development

- This project can be used to try to create micro-frontend component and integrate with existing projects.
- This projects useful platform to create various kinds of input components, especially inputs used in payment flows.
  - Masked inputs
  - Phone inputs with specific mask
  - Credit card input with masks: card number, expiration input, CVV input, etc.
  - Currency inputs with masks
  - Locale based currency inputs

### Useful resources

- Youtube Tutorial by [Web Dev Simplified
  ](https://www.youtube.com/@WebDevSimplified) channel : [**Multistep Form Custom Hook With React And TypeScript**](https://youtu.be/uDCBSnWkuH0) - This helped me for to understand pattern behind the multi-step form components with a custom hook. I really liked this pattern and will use it going forward.
- Youtube Tutorial by [PedroTech](https://www.youtube.com/@PedroTechnologies) channel: [**ReactJS Multi-Step Form Tutorial - React Hooks Tutorial**](https://youtu.be/wOxP4k9f5rk) - This tutorial is an easy implementation of multi-step form component. I'd recommend it to anyone still learning this concept. It uses straightforward strategy to create multi-step form component without any custom hook or complex concept. This tutorial can be used to grasp stepping stone to move onto the custom hook pattern.

## Author

- Website - [Yogesh Datir](https://github.com/yogeshdatir)
- Frontend Mentor - [@yogeshdatir](https://www.frontendmentor.io/profile/yogeshdatir)

## Extra Screenshots

![Screenshot](./src/assets/screenshots/React%20Multi-step%20Form%20-%20multi-step-form-react-fm.netlify.app%202.png)

![Screenshot](./src/assets/screenshots/React%20Multi-step%20Form%20-%20multi-step-form-react-fm.netlify.app%203.png)

![Screenshot](./src/assets/screenshots/React%20Multi-step%20Form%20-%20multi-step-form-react-fm.netlify.app%204.png)

![Screenshot](./src/assets/screenshots/React%20Multi-step%20Form%20-%20multi-step-form-react-fm.netlify.app%205.png)

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
