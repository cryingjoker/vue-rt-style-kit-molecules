/**
 * Данный список компонентов подключается динамически на страницу
 * @info используется только для Widgets-шин сайта
 * @see RTRU-11155
 */
export default {
  // Rt: () => import('./components//.vue').catch(e => console.error(e)),
  
  RtCarouselV3: () => import('./components/CarouselV3/CarouselV3.vue').catch(e => console.error(e)),
  RtCarouselSlideV3: () => import('./components/CarouselV3/CarouselV3Item.vue').catch(e => console.error(e)),

  RtPrivilege: () => import('./components/Privilege/Privilege.vue').catch(e => console.error(e)),

  RtTabs: () => import('./components/Tabs/Tabs.vue').catch(e => console.error(e)),
  RtTabsContentItem: () => import('./components/Tabs/TabsContentItem.vue').catch(e => console.error(e)),
  RtTabsNavItem: () => import('./components/Tabs/TabsNavigationItem.vue').catch(e => console.error(e)),
}
