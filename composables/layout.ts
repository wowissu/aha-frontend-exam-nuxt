export function useLayout () {
  const { $device } = useNuxtApp();
  const layout = computed(() => $device.isMobile ? 'page-mobile' : 'page-desktop');

  return layout;
}