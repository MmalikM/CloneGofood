Page({
  data: {},
  onSubmit(e) {
    const newUser= {
      username: e.detail.value.username ,
      password: e.detail.value.password,
      email: e.detail.value.email ,
      phone: e.detail.value.handphone,
      age: e.detail.value.age   
    }
    if(newUser.username && newUser.password && newUser.email && newUser.phone && newUser.age){
      my.httpRequest({
        url: 'https://dummyjson.com/users/add',
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        data: {
          username: newUser.username ,
          password: newUser.password,
          email: newUser.email ,
          phone: newUser.handphone,
          age: newUser.age 
        },
        success: (result) => {
          // my.alert({
          //   content: newUser,
          // });
          my.switchTab({
            url:"/page/login/login"
          })
        },
        fail: () => {
          my.alert({
            content: `login gagal`,
          });
        },
    
       
      });
      
    }else{
      my.alert({
        content: `input kosong`,
      });
    }
  },
});
