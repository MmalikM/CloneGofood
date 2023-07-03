Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    logout(e){
      getApp().globalData.isLogin = false
      getApp().globalData.email = ""
       my.clearStorage()
       my.redirectTo({
        url:'/page/login/login'
       })
    },
  },
});
