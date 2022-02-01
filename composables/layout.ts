export function useLayout () {
  const { $device } = useNuxtApp();

  const layout = computed(() => $device.value.isMobile ? 'page-mobile' : 'page-desktop');

  return layout;
}