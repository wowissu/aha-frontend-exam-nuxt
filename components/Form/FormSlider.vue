<template>
  <div>
    <div class="leading-[1.5] mb-[26px]">
      <span class="text-5xl font-bold mr-2.5">30</span>
      <span>results</span>
    </div>
    <div>
      <div class="h-[8px] bg-white bg-opacity-30 mb-[14px] rounded">
        <!-- line -->
        <div class="line rounded" style="width: 80%">
          <!-- line dot -->
          <div class="line-dot" />
        </div>
      </div>
      <!-- anchors -->
      <div class="w-full flex flex-row flex-nowrap">
        <div class="anchor">
          3
        </div>
        <div class="anchor">
          6
        </div>
        <div class="anchor">
          9
        </div>
        <div class="anchor">
          12
        </div>
        <div class="anchor">
          15
        </div>
        <div class="anchor flex-grow text-right">
          50
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .line {
    --big-circle-size: 26px;

    background: linear-gradient(270deg, #FFD25F 0, #FF5C01 100%);
    position: relative;
    height: 100%;
  }

  .line-dot {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%) translateX(50%);
    display: block;
    height: var(--big-circle-size);
    width: var(--big-circle-size);
    z-index: 10;
    background-color: #FFD25F;
    border-radius: 100%;
    cursor: pointer;
  }

  .line-dot:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    display: block;
    height: 14px;
    width: 14px;
    z-index: 11;
    background-color: #1B1B1B;
    border-radius: 100%;
  }

  .anchors {
    width: 100%;
  }

  .anchor {
    letter-spacing: 0.15px;
    color: #FFFFFF;
    opacity: 0.5;
  }

  .anchor:not(:last-child) {
    width: 18.5%;
  }
</style>