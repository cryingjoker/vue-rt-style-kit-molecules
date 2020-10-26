<template>
  <div :class="`${cmpName}`">
    <div class="rt-container flex-fill d-flex td-sp-h-none height-fill">
      <rt-col class="height-fill td-sp-h-none" size="12">
        <div :class="`${cmpName}-mob-image`">
          <div :class="`${cmpName}-mob-image-item`"></div>
        </div>
        <div :class="`${cmpName}-wrapper d-flex flex-fill td-sp-h-1 md-sp-r-none height-fill`">
          <rt-row :class="`flex-fill ${cmpName}-content md-d-block`">
            <rt-col size="1" t-hide="{true" m-hide="{true"></rt-col>
            <rt-col
              size="5"
              tablet-size="3"
              mobile-size="3"
              class="d-flex flex-fill md-height-fill"
            >
              <div
                :class="`${cmpName}-inner`"
              >
                <div
                  :class="`md-sp-t-1-2 d-flex flex-column ${cmpName}-inner-content`"
                >
                  <div class="md-flex-fill">
                    <div :class="`${cmpName}-header text-block ${cmpName}__wave`"></div>
                    <div :class="`${cmpName}-label text-block`"></div>
                    <div
                      :class="`${cmpName}-description ${cmpName}__wave`"
                    ></div>
                  </div>
                  <div :class="`${cmpName}-actions`">
                    <div :class="`${cmpName}-actions-button`"></div>
                    <div :class="`${cmpName}-actions-arrows`">
                      <div :class="`${cmpName}-actions-arrows-item`"></div>
                      <div :class="`${cmpName}-actions-arrows-item`"></div>
                    </div>
                  </div>
                  <div :class="`${cmpName}-paginator d-flex`">
                    <div :class="`${cmpName}-paginator-item`"></div>
                    <div :class="`${cmpName}-paginator-item`"></div>
                    <div :class="`${cmpName}-paginator-item`"></div>
                  </div>
                </div>
              </div>
            </rt-col>
            <rt-col size="6" tablet-size="3" mobile-size="3" :class="`${cmpName}-image`">
              <div :class="`${cmpName}-image-item`"></div>
            </rt-col>
          </rt-row>
        </div>
      </rt-col>
    </div>
  </div>
</template>
<script>
export default {
  name: "RtBannerSkeleton",
  data() {
    return {
      cmpName: "rt-skeleton-banner"
    };
  }
};
</script>
