const makanan =[
  {
    id:1,
    name:"Pizza Hut Delivery - PHD",
    lokasi:"Cidodol Raya",
    tanggal: new Date(),
    status:"masih di Restoran",
    jarak:"1.45",
    waktu:"22 min",
    rating:"4.6 (4rb) rating",
    img:"https://seeklogo.com/images/P/pizza-hut-delivery-logo-0D4BD3755C-seeklogo.com.png",
    total:"30.000",
    menus:[
      {
        id:1,
        status:"Recomended",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:2,
        status:"Recomended",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:3,
        status:"Recomended",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:4,
        status:"Recomended",
        nameItem: "Limo 6 pcs",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:5,
        status:"Pizza",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:6,
        status:"Pizza",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:7,
        status:"Pizza",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:8,
        status:"Pizza",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:9,
        nameItem: "Quartza Pizza",
        status:"Pasta",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:10,
        status:"Pasta",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:11,
        status:"Pasta",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:12,
        status:"Pasta",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:13,
        status:"Snack",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:14,
        status:"Snack",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:15,
        status:"Snack",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:16,
        status:"Snack",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
    ]
  },
  {
    id:2,
    name:"McDonald's",
    lokasi:"Cidodol Raya",
    tanggal: new Date(),
    status:"masih di Restoran",
    jarak:"1.45",
    waktu:"22 min",
    rating:"4.6 (4rb) rating",
    img:"../../image/logo/mcd.webp",
    total:"30.000",
    menus:[
      {
        id:1,
        status:"Recomended",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:2,
        status:"Recomended",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:3,
        status:"Recomended",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:4,
        status:"Recomended",
        nameItem: "Limo 6 pcs",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:5,
        status:"Pizza",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:6,
        status:"Pizza",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:7,
        status:"Pizza",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:8,
        status:"Pizza",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:9,
        nameItem: "Quartza Pizza",
        status:"Pasta",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:10,
        status:"Pasta",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:11,
        status:"Pasta",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:12,
        status:"Pasta",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:13,
        status:"Snack",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:14,
        status:"Snack",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:15,
        status:"Snack",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:16,
        status:"Snack",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
    ]
  },
  {
    id:3,
    name:"MIXUE",
    lokasi:"Cidodol Raya",
    tanggal: new Date(),
    status:"sedang diantar",
    jarak:"1.45",
    waktu:"22 min",
    rating:"4.6 (4rb) rating",
    img:"../../image/logo/mixue.webp",
    total:"30.000",
    menus:[
      {
        id:1,
        status:"Recomended",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:2,
        status:"Recomended",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:3,
        status:"Recomended",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:4,
        status:"Recomended",
        nameItem: "Limo 6 pcs",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:5,
        status:"Pizza",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:6,
        status:"Pizza",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:7,
        status:"Pizza",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:8,
        status:"Pizza",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:9,
        nameItem: "Quartza Pizza",
        status:"Pasta",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:10,
        status:"Pasta",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:11,
        status:"Pasta",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:12,
        status:"Pasta",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:13,
        status:"Snack",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:14,
        status:"Snack",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:15,
        status:"Snack",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:16,
        status:"Snack",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
    ]
  },
  {
    id:4,
    name:"Nasi Goreng Seafood",
    lokasi:"Cidodol Raya",
    tanggal: new Date(),
    status:"masih di Restoran",
    jarak:"1.45",
    waktu:"22 min",
    rating:"4.6 (4rb) rating",
    img:"../../image/logo/nasi-goreng-seafood.webp",
    total:"30.000",
    menus:[
      {
        id:1,
        status:"Recomended",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:2,
        status:"Recomended",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:3,
        status:"Recomended",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:4,
        status:"Recomended",
        nameItem: "Limo 6 pcs",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:5,
        status:"Pizza",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:6,
        status:"Pizza",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:7,
        status:"Pizza",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:8,
        status:"Pizza",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:9,
        nameItem: "Quartza Pizza",
        status:"Pasta",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:10,
        status:"Pasta",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:11,
        status:"Pasta",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:12,
        status:"Pasta",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:13,
        status:"Snack",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:14,
        status:"Snack",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:15,
        status:"Snack",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:16,
        status:"Snack",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
    ]
  },
  {
    id:5,
    name:"ayam goreng enak",
    lokasi:"Cidodol Raya",
    tanggal: new Date(),
    status:"di restoran",
    jarak:"1.45",
    waktu:"22 min",
    rating:"4.6 (4rb) rating",
    img:"../../image/logo/ayam-goreng.webp",
    total:"30.000",
    menus:[
      {
        id:1,
        status:"Recomended",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:2,
        status:"Recomended",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:3,
        status:"Recomended",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:4,
        status:"Recomended",
        nameItem: "Limo 6 pcs",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:5,
        status:"Pizza",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:6,
        status:"Pizza",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:7,
        status:"Pizza",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:8,
        status:"Pizza",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:9,
        nameItem: "Quartza Pizza",
        status:"Pasta",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:10,
        status:"Pasta",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:11,
        status:"Pasta",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:12,
        status:"Pasta",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:13,
        status:"Snack",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:14,
        status:"Snack",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:15,
        status:"Snack",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:16,
        status:"Snack",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
    ]
  },
  {
    id:6,
    name:"kopi kenangan",
    lokasi:"Cidodol Raya",
    tanggal: new Date(),
    status:"masih di Restoran",
    jarak:"1.45",
    waktu:"22 min",
    rating:"4.6 (4rb) rating",
    img:"../../image/logo/kopken.webp",
    total:"30.000",
    menus:[
      {
        id:1,
        status:"Recomended",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:2,
        status:"Recomended",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:3,
        status:"Recomended",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:4,
        status:"Recomended",
        nameItem: "Limo 6 pcs",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:5,
        status:"Pizza",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:6,
        status:"Pizza",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:7,
        status:"Pizza",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:8,
        status:"Pizza",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:9,
        nameItem: "Quartza Pizza",
        status:"Pasta",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:10,
        status:"Pasta",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:11,
        status:"Pasta",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:12,
        status:"Pasta",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:13,
        status:"Snack",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:14,
        status:"Snack",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:15,
        status:"Snack",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:16,
        status:"Snack",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
    ]
  },
  {
    id:7,
    name:"Starbucks",   
    lokasi:"Cidodol Raya",
    status:"sedang diantar",
    tanggal: new Date(),
    jarak:"1.45",
    waktu:"22 min",
    rating:"4.6 (4rb) rating",
    img:"../../image/logo/starbucks.jpeg",
    total:"30.000",
    menus:[
      {
        id:1,
        status:"Recomended",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:2,
        status:"Recomended",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:3,
        status:"Recomended",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvQRmH_NEUBAoKO6wENu_XL2LVH-dhLe2Fg&usqp=CAU",
        jmlhBlanja:0,

      },
      {
        id:4,
        status:"Recomended",
        nameItem: "Limo 6 pcs",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:5,
        status:"Pizza",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:6,
        status:"Pizza",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:7,
        status:"Pizza",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:8,
        status:"Pizza",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:9,
        nameItem: "Quartza Pizza",
        status:"Pasta",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:10,
        status:"Pasta",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:11,
        status:"Pasta",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:12,
        status:"Pasta",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:13,
        status:"Snack",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:14,
        status:"Snack",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:15,
        status:"Snack",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:16,
        status:"Snack",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
    ]
  },
  {
    id:8,
    name:"padang sederhana",   
    lokasi:"Cidodol Raya",
    status:"sedang diantar",
    tanggal: new Date(),
    jarak:"1.45",
    waktu:"22 min",
    rating:"4.6 (4rb) rating",
    img:"../../image/logo/padang.webp",
    total:"30.000",
    menus:[
      {
        id:1,
        status:"Recomended",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:2,
        status:"Recomended",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:3,
        status:"Recomended",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:4,
        status:"Recomended",
        nameItem: "Limo 6 pcs",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:5,
        status:"Pizza",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:6,
        status:"Pizza",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:7,
        status:"Pizza",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:8,
        status:"Pizza",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:9,
        nameItem: "Quartza Pizza",
        status:"Pasta",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:10,
        status:"Pasta",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:11,
        status:"Pasta",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:12,
        status:"Pasta",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:13,
        status:"Snack",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:14,
        status:"Snack",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:15,
        status:"Snack",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:16,
        status:"Snack",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
    ]
  },
  {
    id:9,
    name:"Bakso Urat",   
    lokasi:"Cidodol Raya",
    status:"sedang diantar",
    tanggal: new Date(),
    jarak:"1.45",
    waktu:"22 min",
    rating:"4.6 (4rb) rating",
    img:"../../image/logo/bakso.webp",
    total:"30.000",
    menus:[
      {
        id:1,
        status:"Recomended",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:2,
        status:"Recomended",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:3,
        status:"Recomended",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:4,
        status:"Recomended",
        nameItem: "Limo 6 pcs",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:5,
        status:"Pizza",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:6,
        status:"Pizza",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:7,
        status:"Pizza",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:8,
        status:"Pizza",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:9,
        nameItem: "Quartza Pizza",
        status:"Pasta",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:10,
        status:"Pasta",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:11,
        status:"Pasta",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:12,
        status:"Pasta",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:13,
        status:"Snack",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:14,
        status:"Snack",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:15,
        status:"Snack",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:16,
        status:"Snack",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
    ]
  },
  {
    id:10,
    name:"sate madura",   
    lokasi:"Cidodol Raya",
    status:"sedang diantar",
    tanggal: new Date(),
    jarak:"1.45",
    waktu:"22 min",
    rating:"4.6 (4rb) rating",
    img:"../../image/logo/sate.webp",
    total:"30.000",
    menus:[
      {
        id:1,
        status:"Recomended",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:2,
        status:"Recomended",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:3,
        status:"Recomended",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:4,
        status:"Recomended",
        nameItem: "Limo 6 pcs",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:5,
        status:"Pizza",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:6,
        status:"Pizza",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:7,
        status:"Pizza",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:8,
        status:"Pizza",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:9,
        nameItem: "Quartza Pizza",
        status:"Pasta",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:10,
        status:"Pasta",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:11,
        status:"Pasta",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:12,
        status:"Pasta",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:13,
        status:"Snack",
        nameItem: "Quartza Pizza",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:14,
        status:"Snack",
        nameItem: "Pasta Meriah",
        harga: 67000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:15,
        status:"Snack",
        nameItem: "Limo Cruncheeze",
        harga: 140000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
      {
        id:16,
        status:"Snack",
        nameItem: "Limo Cruncheeze 6 toping",
        harga: 132000,
        detail: "Baru - Quartza 4 topping Favourite dalam 1 Pizza",
        ImageUrl:"https://riniisparwati.com/wp-content/uploads/2021/12/Paket-My-Box-Pizza-Hut-isinya-apa-saja.png",
        jmlhBlanja:0,

      },
    ]
  },  
]

Page({
  data: {
    resultFind:{},
    listMenu:[],
    listPesanan:[],
    detailItem:{},
    popUpMenu:false,
    totalBayar:0,
    count:0,
    modalBayar:false,
    idToko:'',
  },
  onLoad(query){

    
    // const getAccessToken = my.getStorageSync({key:"accessToken"}).data
    // const getRefreshToken = my.getStorageSync({key:"refreshToken"}).data
    // const getEmail = my.getStorageSync({key:'email'}).data
    
    // function refresh (){
    //   console.log("refersh kepanggil <<<<<<<<<<<<<<< ")
    //   my.httpRequest({
    //     url: 'http://localhost:3000/refresh',
    //     method: 'POST',
    //     data: {
    //       email:getEmail,
    //       refreshToken:getRefreshToken
    //     },
    //     success: (res) => {
    //       const newAccessToken = res.data.accessToken
    //       my.removeStorageSync({key:"accessToken"})
    //       my.setStorageSync({
    //         key: "accessToken",
    //         data: newAccessToken
    //       })
    //       cekToken(newAccessToken)
    //     },
    //     fail: (err) => {
    //       console.log(err)
    //       my.clearStorage()
    //       my.redirectTo({
    //         url:'/page/login/login'
    //       })
    //     },
    //   });
    // }

    // function cekToken(accessToken){
    //   my.httpRequest({
    //     url: 'http://localhost:3000/protected',
    //     headers:{
    //       'Authorization': 'Bearer ' + accessToken
    //     },
    //     method: 'GET',
    //     success: (res) => {
    //       const status = res.data.success
    //       if(status){
    //         console.log("token asli >>>>> ", accessToken)
    //       }
    //       console.log("masuk sukses")
    //     },
    //     fail: (err) => {
    //       refresh()
    //     },
    //   });
    // }

    // cekToken(getAccessToken)
    

    const {id} = query
    const result = makanan.find(el=>el.id == id)
    this.setData({
      resultFind:result,
      idToko:id
    })

    const menuList =  [...new Set(result.menus.map((el) => el.status))];
    this.setData({
      listMenu:menuList
    })
  },
  onTabListMenu(){
    // console.log("keklik")
    this.setData({
      popUpMenu:true
    })
  },
  closePopUpList(){
    // console.log("close sih harusnya")
    this.setData({
      popUpMenu:false
    })
  },
  openModal() {
    const chekout = this.data.resultFind.menus.filter(el =>el.jmlhBlanja > 0)
    this.setData({
      listPesanan:chekout
    })
    this.setData({
      modalBayar: true,
    });
  },
  submitModal(e){
    this.data.resultFind.total = this.data.totalBayar
    if(getApp().globalData.riwayatPesanan.length > 0){
      getApp().globalData.riwayatPesanan.push(this.data.resultFind)
    }

    if(getApp().globalData.riwayatPesanan.length === 0) getApp().globalData.riwayatPesanan =[this.data.resultFind]

    // console.log("riwayat bro >>>>>> ", getApp().globalData.riwayatPesanan)
    const reset = makanan.find(el=>el.id == this.data.idToko)
    console.log("makanan nih >>>> ", makanan[0].menus[0])
    console.log("reset >>>>", reset.menus[0])
    this.setData({
      modalBayar: false,
      resultFind:reset,
      count:0,
      totalBayar:0,
      listPesanan:[]
    });

    console.log("hasil reset >>>>", this.data.resultFind.menus[0])
    my.switchTab({
      url:"/page/tabBar/riwayat/riwayat"
    })
  },  
  closeModal() {
    this.setData({
      modalBayar: false,
    });
  },
});
