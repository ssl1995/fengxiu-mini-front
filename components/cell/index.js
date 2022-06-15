Component({

  properties: {
    cell: Object
  },
  data: {

  },
  methods: {
    onTag(event) {
      console.log(123);

      this.triggerEvent('celltag', {

      })
    }
  },
});