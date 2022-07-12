

var SweetAlert = {
    methods: {
        success: function (message) {
            this.$swal({
                title: message,
                position: 'top-end',
                icon: "success",
                toast: true,
                timer: '3000',
                showConfirmButton: false,
            });
        },
        failed: function (message) {
            this.$swal({
                title: message,
                position: 'top-end',
                icon: "error",
                toast: true,
                timer: '3000',
                showConfirmButton: false,
            });
        },
       
        // alert(options) {
        //     swal(options)
        // },
        // alertSuccess({
        //     title = "Success!", text = "That's all done!", timer = 1000, showConfirmationButton = false
        // } = {}) {
        //     this.alert({
        //         title: title,
        //         text: text,
        //         timer: timer,
        //         showConfirmButton: showConfirmationButton,
        //         type: 'success'
        //     });
        // },
        // alertError({
        //     title = "Error!", text = "Oops...Something went wrong"
        // } = {}) {
        //     this.alert({
        //         title: title,
        //         text: text,
        //         type: 'error'
        //     });
        // },
    }
}

export default SweetAlert