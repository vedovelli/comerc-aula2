
import swal from 'sweetalert'

export default {
  methods: {
    confirm (obj) {
      const { message, route } = obj
      swal({
        title: 'Tem certeza?',
        text: message,
        icon: 'warning',
        buttons: {
          cancel: 'Cancelar',
          ok: 'Remover'
        },
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$http.delete(route).then(res => {
            swal(res.data.message).then(() => this.fetch())
          })
        }
      })
    }
  }
}
