Component({
  mixins: [],
  data: {
    isLoading: true
  },
  props: {},
  didMount() {

  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    onImageLoad(){
      this.setData({
        isLoading:false
      })
    }
  },
});
