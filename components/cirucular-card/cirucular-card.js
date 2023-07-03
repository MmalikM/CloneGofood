Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    goCategory(e){
      const {title} =e.target.dataset
      my.navigateTo({
        url:"/page/category/category?title="+title
      })
    }
  },
});
