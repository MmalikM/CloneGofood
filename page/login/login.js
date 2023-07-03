Page({
  data: {
    token:null,
  },
  onSubmit(e) {
    if(e.detail.value.username && e.detail.value.password){
      const statusTerm = getApp().globalData.term

      my.httpRequest({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: {
          email:e.detail.value.username ,
        },
        success: (result) => {
          const accessToken = result.data.accessToken
          const refreshToken = result.data.refreshToken
          const email = result.data.email
         
          my.setStorageSync({
            key: "email",
            data: email
          },
         )

          my.setStorageSync({
            key: "accessToken",
            data: accessToken
          },
         )
         my.setStorageSync({
          key: "refreshToken",
          data: refreshToken
        },
        )

        if(statusTerm){ 
          my.switchTab({
            url:"/page/home/home"
          })
        }else{
          my.navigateTo({
            url:"/page/termOfService/termOfService"
          })
        }
        },
        fail: (err) => {
          if(err.status === 400){
            my.alert({
              content: err.data.error,
            });
          }else{
            my.alert({
              content: "input kosong",
            });
          }
        },
      });
      
    }else{
      my.alert({
        content: `input kosong`,
      });
    }
  },
  close(){
    this.setData({
      popUpTerm:false
    })
  },
 
  goHelp(){
    my.navigateTo({
      url:"/page/webView/webView"
    })
  },
  onReset() { 
  },
});