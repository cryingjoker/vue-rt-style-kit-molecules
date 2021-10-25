<script type="text/jsx">
  import { tabsStore } from "./TabsStore";

  export default {
    name: "RtTabsContentItem",
    props: {
      name: {
        type: String,
        default: ""
      }
    },
    data: () => ({
      isActive: false,
      parentid: "",
      namesArray: [],
      activeName: ""
    }),
    mounted() {
      this.addWatcher();


    },
    methods: {
      addWatcher(step = 0){
        const tabsParentUid = tabsStore.tabsNames[this.name]
        if(tabsParentUid) {
          this.onUpdateTabsStore();
          tabsStore.addWatcher(tabsParentUid, this.onUpdateTabsStore);
        }else{
          setTimeout(()=>{
            if(step < 100) {
              this.addWatcher(step+1)
            }
          },100)
        }

      },
      onUpdateTabsStore(){
        const tabsParentUid = tabsStore.tabsNames[this.name]
        this.isActive = tabsStore.tabsParents[tabsParentUid] ? tabsStore.tabsParents[tabsParentUid][this.name]?.isActive: false
      }

    },
    render() {
        if (this.isActive) {
          return <div class="rt-tabs-content__item">{this.$slots.default}</div>;
        }
        return null

    }


  };
</script>
