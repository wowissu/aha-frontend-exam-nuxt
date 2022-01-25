<template>
  <div class="bg-black text-white h-screen w-screen">
    <!-- page header -->

    <slot name="default">
      <!-- default slot -->
    </slot>

    <!-- page footer -->
  </div>
</template>

<style lang="css">
:root {
  app-bg-color: black;
  app-text-color: white;
}
</style>
