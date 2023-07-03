

Page({
  data: {
    riwayat:[],
    popUp:false,
    detailRating:{},
    star:new Array(5)
  },
  onLoad() {
    this.setData({
      riwayat: getApp().globalData.riwayatPesanan,
    })
    console.log("riwayat nih >>>>>> ", this.data.riwayat)
  },
  clickRating(e){
    const {id} = e.target.dataset
    const hasil = this.data.riwayat.find(el=> el.id===id)
    // console.log( "inii index >>>>> " + hasil.name)
    this.setData({
      popUp:true,
      detailRating:hasil
    })
  },
  close(){
    this.setData({
      popUp:false
    })
  },
  goDetail(e){
    const {id} = e.target.dataset
    my.navigateTo({
      url:"/page/detail-item/detail-item?id="+id
    })
  }
});
