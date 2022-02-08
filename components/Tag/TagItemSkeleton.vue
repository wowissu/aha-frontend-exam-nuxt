<template>
  <div class="w-[150px]">
    <div class="aspect-square flex items-end bg-[#262626] rounded-[10px] overflow-hidden">
      <Skeleton fit />
    </div>
    <div class="py-[20px] lg:py-[12px] leading-[1.5]">
      <div class="text-[14.9px] tracking-[0.139688px]">
        <Skeleton line width="50%" />
      </div>
      <div class="text-greyscale-400 text-[11.175px] tracking-[0.3725px]">
        <Skeleton line />
      </div>
    </div>
  </div>
</template>