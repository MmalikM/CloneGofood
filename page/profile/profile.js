
Page({
  data: {
    listUsers:null,
    expand3rd: false,
   
  },
  onLoad(){
    console.log("ini kiriman login >>>> "+this.data)
    my.httpRequest({
      url: 'https://dummyjson.com/users',
      method: 'GET',
      success: (res) => {
        const result = res.data.users;
        console.log(result)
        this.setData({
          listUsers:result
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
  onActionClick() {
    my.alert({
      content: "action click",
    });
  },
  onExtraActionClick(ev) {
    const id = ev.info
    console.log(id)
    my.navigateTo({
      url: "/page/detail/detail?id="+id
    })
    console.log("ini ev. targetnya >>>>>>>>" +ev.info)
  },
  toggle() {
    this.setData({
      expand3rd: !this.data.expand3rd,
    });
  },
  
});
