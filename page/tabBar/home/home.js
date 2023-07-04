const swiper=[
  {
    imgUrl:"https://lelogama.go-jek.com/cache/ae/91/ae910c0e96c5798a72e65e323a22a44c.webp"
  },
  {
    imgUrl:"https://lelogama.go-jek.com/cache/3c/11/3c11b79ccfe05fd8a9e85b36325a39da.webp"
  },
  {
    imgUrl:"https://lelogama.go-jek.com/cache/2e/87/2e87a434ba3143b141c05f8b1dd0f289.webp"
  }
]

const fitur =[
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/854/854878.png',
    text: 'Terdekat',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132871.png',
    text: 'Diskon',
  },
  {
    icon: 'https://img.freepik.com/free-icon/megaphone_318-755623.jpg',
    text: 'Promo',
  },
  {
    icon: 'https://cdn.icon-icons.com/icons2/1880/PNG/512/iconfinder-winner-4341317_120535.png',
    text: 'Juara Lokal',
  },
  {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7NY1UxpVx2ctxYOQ2KPBgxLUJSBKcQ5JOQQ&usqp=CAU',
    text: 'Sarapan',
  },
  {
    icon: 'https://cdn.icon-icons.com/icons2/1880/PNG/512/iconfinder-winner-4341317_120535.png',
    text: 'Terlaris',
  },
  {
    icon: 'https://e7.pngegg.com/pngimages/683/354/png-clipart-piggy-bank-piggy-bank.png',
    text: 'Menu Hemat',
  },
  {
    icon: 'https://e7.pngegg.com/pngimages/402/465/png-clipart-computer-icons-health-food-nutrition.png',
    text: 'Menu Sehat',
  },
]

const option = ["blue", "green", "grey"]
const list =[
  {
    img:"../../image/minuman.webp",
    name:"minuman",
  },
  {
    img:"../../image/jajanan.webp",
    name:"jajanan"
  },
  {
    img:"../../image/roti.webp",
    name:"roti"
  },
  {
    img:"../../image/china.webp",
    name:"china"
  },
  {
    img:"../../image/barat.webp",
    name:"barat"
  },
  {
    img:"../../image/bakmie.webp",
    name:"bakmie"
  },
  {
    img:"../../image/korea.webp",
    name:"korea"
  },
]


Page({
  data: {
    swiper:swiper,
    option:option,
    fitur:fitur,
    list:list,
    terlaris:new Array(20)
  },
  onLoad() {
    my.httpRequest({
      url: 'https://backend-dummy.vercel.app/api/products/all',
      success: (res) => {
        const result = res.data.data;
        const filter = result.filter(el => el.availability ==="Terlaris")
        this.setData({
          terlaris:filter
        })
        // console.log("hasil filter >>>>>"+this.data.terlaris)
      },
      fail:(err)=> {
        console.log(err)
      }
    })
  },
  goSearch(){
    my.switchTab({
      url:"/page/tabBar/riwayat/riwayat"
    })
  },
  onItemClick(){
    my.navigateTo({
      url:"/page/category/category?title=Terdekat"
    })
  }
});
