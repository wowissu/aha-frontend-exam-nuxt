<template>
  <nav class="w-[80px] bg-greyscale-100">
    <div class="flex flex-col items-center">
      <div class="h-[89px] flex justify-center items-center">
        <LogoBox />
      </div>
      <div class="flex flex-col gap-y-4">
        <slot name="menu">
          <!-- menu slot -->
        </slot>
      </div>
    </div>
  </nav>
</template>
