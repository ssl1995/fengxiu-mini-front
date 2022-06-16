Component({

  properties: {
    cell: Object,
    x: Number,
    y: Number
  },
  data: {},
  methods: {
    onTap(event) {
      // 子组件向父组件传递参数、事件
      this.triggerEvent("celltag", {
        cell: this.properties.cell,
        x: this.properties.x,
        y: this.properties.y
      }, {
        // 开启冒泡和跨越组件边界
        bubbles: true,
        composed: true
      })
    }
  },

});