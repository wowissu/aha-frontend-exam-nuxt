<script lang="ts" setup>
type AnchorKey = number;

const props = defineProps<{
  modelValue: number
}>();

const emits = defineEmits<{
  (event: 'update:modelValue', val: number): void
}>();

const anchorKeys = ref<AnchorKey[]>([3, 6, 9, 12, 15, 50]);
const anchorRefMap = reactive<Record<AnchorKey, HTMLDivElement>>({});
const anchorPageXMap = ref<Record<AnchorKey, number>>({});
const currentAnchorKey = ref<AnchorKey>();
const rockerRef = ref<HTMLDivElement>();
const lineBarRef = ref<HTMLDivElement>();
const lineBarLeft = computed(() => lineBarRef.value.getBoundingClientRect().left);
const lineBarWidth = computed(() => lineBarRef.value.parentElement.offsetWidth);

function onRockerMousedown (mousedownEvt: MouseEvent) {
  const lineOffsetWidth = lineBarRef.value.offsetWidth;
  const startAt = mousedownEvt.pageX;

  lineBarRef.value.classList.add('no-transition');

  function onRockerMousemove (evt: MouseEvent) {
    setLineWidth(evt.pageX, startAt - lineOffsetWidth);

    evt.preventDefault();
  }

  function onRockerMouseup (evt: MouseEvent) {
    window.removeEventListener('mousemove', onRockerMousemove);
    window.removeEventListener('mouseup', onRockerMouseup);

    lineBarRef.value.classList.remove('no-transition');
    setClosestAnchorAsCurrent(evt.pageX);

    evt.stopPropagation();
    evt.preventDefault();
  }

  window.addEventListener('mousemove', onRockerMousemove);
  window.addEventListener('mouseup', onRockerMouseup);
}

function setClosestAnchorAsCurrent (needle: number) {
  const map = anchorPageXMap.value;

  const cloestAnchorKey = Object.entries(map)
    .filter(([anchorkey]) => {
      return +anchorkey !== currentAnchorKey.value;
    })
    .reduce((candidateKey, [anchorkey, anchorX]) => {
      const candidateX = map[candidateKey];

      if (candidateX) {
        return Math.abs(anchorX - needle) < Math.abs(candidateX - needle) ? +anchorkey : candidateKey;
      }

      return +anchorkey;
    }, 0);

  setCurrentAnchorKey(cloestAnchorKey);
}

function setLineWidth (val: number, offsetX = lineBarLeft.value) {
  const maxWidth = lineBarWidth.value;
  const w = Math.min(Math.max(0, val - offsetX), maxWidth);

  lineBarRef.value.style.setProperty('width', `${w}px`);
}

function setCurrentAnchorKey (anchorKey: AnchorKey) {
  currentAnchorKey.value = anchorKey;
  emits('update:modelValue', anchorKey);
}

function onLineBarClick (e: PointerEvent) {
  setClosestAnchorAsCurrent(e.pageX);
}

// update line width when current anchor changed
watch(currentAnchorKey, (aKey) => {
  const val = anchorPageXMap.value[aKey.toString()] ?? 0;

  setLineWidth(val);
});

// update anchor Ref map
function updateAnchorPageXMap () {
  if (Object.keys(anchorRefMap).length === anchorKeys.value.length) {
    anchorPageXMap.value = Object.fromEntries(Object.entries(anchorRefMap).map(([key, el]) => {
      return [key, el.getBoundingClientRect().left];
    }));
  }
}

onMounted(() => {
  updateAnchorPageXMap();
  currentAnchorKey.value = props.modelValue;
});
</script>

<template>
  <div>
    <div class="leading-[1.5] mb-[26px]">
      <span class="text-5xl font-bold mr-2.5">{{ props.modelValue }}</span>
      <span>results</span>
    </div>
    <div class="relative" @click.stop="onLineBarClick">
      <div class="h-[8px] bg-white bg-opacity-30 mb-[14px] rounded">
        <!-- line -->
        <div ref="lineBarRef" class="line rounded" style="width: 0px;">
          <!-- line dot -->
          <div ref="rockerRef" class="line-rocker" @mousedown.prevent.stop="onRockerMousedown" />
        </div>
      </div>
      <!-- anchors -->
      <div class="w-full flex flex-row flex-nowarp justify-between">
        <div
          v-for="aKey in anchorKeys"
          :key="aKey"
          :ref="(el: HTMLDivElement) => anchorRefMap[aKey] = el"
          class="anchor"
        >
          <div>
            {{ aKey }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .line {
    --big-circle-size: 26px;

    background: linear-gradient(270deg, #FFD25F 0, #FF5C01 100%);
    position: relative;
    height: 100%;
  }

  .line:not(.no-transition) {
    transition: width 0.5s;
  }

  .line-rocker {
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

  .line-rocker:after {
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
    width: 1px;
    height: 1px;
    position: relative;
  }

  .anchor:last-child div {
    position: absolute;
    right: 0px;
    top: 0px;
  }

  .anchor:first-child div {
    position: absolute;
    left: 0px;
    top: 0px;
  }

  .anchor:not(:last-child):not(:first-child) {
    left: -10px;
  }

  .anchor:not(:last-child):not(:first-child) div {
    transform: translateX(-50%);
    transform-origin: left;
    position: absolute;
    top: 0px;
  }
</style>