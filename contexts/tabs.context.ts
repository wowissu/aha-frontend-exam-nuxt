export interface TabsContext {
  readonly activeName: string;
  setActive(tabname: string): void;
}

export const tabsProvideKey = Symbol('tabs');
export const tabPanelsProvideKey = Symbol('tab-panels');