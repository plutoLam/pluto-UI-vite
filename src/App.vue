<template>
  <div>
    <l-button color="red" icon="search" round plain>红色按钮</l-button>
    <l-button color="green">绿色按钮</l-button>
    <l-button color="blue" size="s">绿色按钮</l-button>
    <l-button color="blue" round plain icon="search"></l-button>
    <l-button color="green" round plain icon="edit"></l-button>
    <l-button color="gray" round plain icon="check"></l-button>
    <l-button color="yellow" round plain icon="message"></l-button>
    <l-button color="red" round icon="delete"></l-button>
  </div>
</template>

<script>
import LButton from "./button";
// import Test from "./JSXButton";
// import PlutoUI from "./entry";
export default {
  components: {
    LButton,
  },
};
</script>

<style lang="scss" scoped></style>
