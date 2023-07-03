Component({
  mixins: [],
  data: {
    isLoading:true
  },
  props: {},
  didMount() {

  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    goCart(e){
      const id = e.target.dataset.index
      my.navigateTo({
        url: "/page/detail-item/detail-item?id="+id
      })
    },
    onLoadImage(){
      this.setData({
        isLoading:false
      })
    }
  },
});
