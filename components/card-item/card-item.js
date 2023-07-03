Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onTabHandle(e){
      const {id} = e.target.dataset 
      const itemDetail = this.$page.data.resultFind
      const detailItem = itemDetail.menus.find(el=>el.id===id) 
      this.$page.setData({
        popUpMenu:true,
        detailItem:detailItem
      })
      // console.log("ini bro >>>>>", this.$page.data.detailItem)
    },
    addItemBuy(e){
      const id = e.target.dataset.itemId
      console.log("masuk nih >>>>> ",id)
      const menus = this.$page.data.resultFind.menus
  
      const toko = this.$page.data.resultFind
      const menuToUpdate = toko.menus.find(menu => menu.id === id);
      menuToUpdate.jmlhBlanja += 1;
  
      const result = menus.find(el=>el.id == id)
      this.$page.setData({
        resultFind:toko,
        totalBayar: this.$page.data.totalBayar + result.harga,
        count: this.$page.data.count +1
      })
      // console.log("ini resultt klik >> ", this.$page.data.resultFind)
  },
  minusItemBuy(e){
    const id = e.target.dataset.itemId
    const menus = this.$page.data.resultFind.menus
    const result = menus.find(el=>el.id == id)
    const toko = this.$page.data.resultFind
    const menuToUpdate = toko.menus.find(menu => menu.id === id);
    menuToUpdate.jmlhBlanja<=0? 0 :menuToUpdate.jmlhBlanja -= 1;
    this.$page.setData({
      resultFind:toko,
      totalBayar:(this.$page.data.totalBayar <=0? 0: this.$page.data.totalBayar - result.harga),
      count: (this.$page.data.count <=0? 0 : this.$page.data.count - 1)
    })
  
    // console.log("ini resultt klik >> ", this.$page.data.resultFind)
  },
  },
});
