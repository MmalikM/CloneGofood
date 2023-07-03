Component({
  methods: {
    onItemTap(e) {
    //  this.props.onTabSearchItem(e.target.dataset.name)
     this.$page.onInput(e.target.dataset.name)
    }
  }
});