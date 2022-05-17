<div align="center">
<h2>Kittl UI Assignment</h2>
  
[![Netlify Status](https://api.netlify.com/api/v1/badges/262e82b9-6fe5-4d6f-b8db-7b26794e9ccc/deploy-status)](https://app.netlify.com/sites/kittl-ui-assignment/deploys)
</div>

## 🗂Table of contents
- [Part1](#part1)
- [Part2](#part2)

## Part1
Implement a Button component and a set of Storybook stories that reflect its different possible states.

Demo : [Storybook Component](https://static-ui-storybook.netlify.app/?path=/story/button--primary-button)

Related Files :
- [Button.js](https://github.com/samyukthasudhakar/kittl-ui-assignment/blob/main/src/components/Button/index.js)
- [Button.stories.js](https://github.com/samyukthasudhakar/kittl-ui-assignment/blob/main/src/stories/Button.stories.js)

## Part2
Create a simple UI with the rendered svg image and a slider beneath to control the strength of the Arch effect.
- [SvgArc.js](https://github.com/samyukthasudhakar/kittl-ui-assignment/blob/main/src/components/SvgArc/index.js)
- [ArcTransformation.stories.js](https://github.com/samyukthasudhakar/kittl-ui-assignment/blob/main/src/stories/ArcTransofrmation.stories.js)
- [warpImage.js](https://github.com/samyukthasudhakar/kittl-ui-assignment/blob/main/src/utils/warpImage.js)

Demo : [Storybook Component](https://static-ui-storybook.netlify.app/?path=/story/arc-transformation--arc-transformation-for-svg)

Approach : Implemented arc tranformation by drawing the image pixel by pixel and by applying a offset on the Y axis.
No frameworks have been used. Done purely with Javascript using React.
