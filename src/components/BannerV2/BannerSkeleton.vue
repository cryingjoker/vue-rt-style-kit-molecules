<script type="text/jsx">
// @info Стили подключены в глобальном бандле
export default {
  name: 'RtBannerSkeleton',
  functional: true,
  render(h) {
    return <div class="rt-skeleton-banner">
      <div class="rt-container flex-fill d-flex td-sp-h-none height-fill">
        <rt-col class="height-fill td-sp-h-none" size={12}>
          <div class="rt-skeleton-banner-mob-image">
            <div class="rt-skeleton-banner-mob-image-item"></div>
          </div>
          <div class="rt-skeleton-banner-wrapper d-flex flex-fill td-sp-h-1 md-sp-r-none height-fill">
            <rt-row class="flex-fill rt-skeleton-banner-content md-d-block">
              <rt-col size={1} t-hide={true} m-hide={true}></rt-col>
              <rt-col
                size={5}
                tablet-size={3}
                mobile-size={3}
                class="d-flex flex-fill md-height-fill"
              >
                <div
                  class="rt-skeleton-banner-inner"
                >
                  <div
                    class="md-sp-t-1-2 d-flex flex-column rt-skeleton-banner-inner-content"
                  >
                    <div class="md-flex-fill">
                      <div class="rt-skeleton-banner-header rt-skeleton-banner__wave"></div>
                      <div class="rt-skeleton-banner-label"></div>
                      <div
                        class="rt-skeleton-banner-description rt-skeleton-banner__wave"
                      ></div>
                    </div>
                    <div class="rt-skeleton-banner-actions">
                      <div class="rt-skeleton-banner-actions-button"></div>
                      <div class="rt-skeleton-banner-actions-arrows">
                      </div>
                    </div>
                    <div class="rt-skeleton-banner-paginator">
                    </div>
                  </div>
                </div>
              </rt-col>
              <rt-col size={6} tablet-size={3} mobile-size={3} class="rt-skeleton-banner-image">
                <div class="rt-skeleton-banner-image-item"></div>
              </rt-col>
            </rt-row>
          </div>
        </rt-col>
      </div>
    </div>
  }
}
</script>
