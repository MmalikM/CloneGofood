
Page({
  data: {
    menus: new Array(10),
    page:1,
    title:"",
  },
  onLoad(query) {
    this.setData({
      title:query.title
    })
    my.httpRequest({
      url: 'https://backend-dummy.vercel.app/api/products/all?page='+this.data.page,
      success: (res) => {
        const result = res.data.data;
        this.setData({
          menus:result
        })
        console.log(this.data.menus)
      },
      fail:(err)=> {
        console.log(err)
      }
    });
  },
  onReachBottom(){
    const dummy = new Array(50)
    this.setData({
      page: this.data.page+1,
      menus: [...this.data.menus, ...dummy]
    })
    // console.log("page >>>>>> ",this.data.menus)
    my.httpRequest({
      url: 'https://backend-dummy.vercel.app/api/products/all?page='+this.data.page,
      success: (res) => {
        const resetMenus = this.data.menus.slice(0,-50)
        console.log("ini resetttttt >>>>> ", resetMenus)
        const result = res.data.data;
        this.setData({
          menus:[...resetMenus,...result]
        })
        console.log(this.data.menus)
      },
      fail:(err)=> {
        console.log(err)
      }
    });

  }
});
