Page({
  data:{
    user:{},
    expand3rd: false,
    modalOpened:false,
    userId:0
  },
  onLoad(query) {
    const id = query.id;
    this.setData({
      userId:id
    })
    my.httpRequest({
      url: 'https://dummyjson.com/users/'+id,
      method: 'GET',
      success: (res) => {
        const result = res.data;
        console.log(result)
        this.setData({
          user:result
        })
       
      },
      fail:(err)=> {
        console.log(err)
      }
    });
  },
  onCardClick(ev) {
    my.alert({
      content: ev.info,
    });
  },
  onExtraActionClick(ev) {
    my.navigateTo({
      // url: "/page/login/login"
    })
  },

  openModal() {
    this.setData({
      modalOpened: true,
      expand3rd:true
    });
  },
  onModalClick() {
    this.setData({
      modalOpened: false,
      expand3rd:false

    });
  },
  onModalClose() {
    this.setData({
      modalOpened: false,
      expand3rd:false
    });
  },
  toggle() {
    this.setData({
      expand3rd: !this.data.expand3rd,
    });
  },

  onSubmit(e){
    console.log("ini id >>>>>>>" + this.data.userId)
    console.log(e.detail.value)
    my.alert({
      content: e.detail.value
    })
    // my.httpRequest({
    //   url: 'https://dummyjson.com/users/'+ this.data.userId,
    //   headers: {'Content-Type': 'application/json'},
    //   method: 'PATCH',
    //   data: {
    //     firstName: e.detail.value.firstName ,
    //     username: e.detail.value.username ,
    //     age: e.detail.value.age
    //   },
    //   success: (res) => {
    //     const result = res.data;
    //     my.alert({
    //       content: result
    //     })

    //   },
    //   fail:(err)=> {
    //     console.log(err)
    //   }
    // });
    this.setData({
      modalOpened: false,
      expand3rd:false

    });
  }
});
