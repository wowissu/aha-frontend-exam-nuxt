<template>
  <div class="w-full px-4 py-2">
    <div class="flex flex-nowrap items-center gap-x-4">
      <div>
        <Skeleton width="40px" height="40px" />
      </div>
      <div class="flex-1 leading-normal">
        <div class="tracking-[0.15px]">
          <Skeleton line width="33%" />
        </div>
        <div class="text-greyscale-400 text-sm tracking-[0.25px]">
          <Skeleton line />
        </div>
      </div>
      <div>
        <slot name="append" />
      </div>
    </div>
  </div>
</template>