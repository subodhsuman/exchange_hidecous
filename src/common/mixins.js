import ApiClass from '@/api/api'
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

        logoutAlert: function () {
            this.$swal.fire({
                    title: "Please Confirm!",
                    text: "Are you sure you want to Logout!",
                    icon: "warning",
                    iconColor: "#db9d2b",
                    showCloseButton: true,
                    showCancelButton: true,
                    closeOnConfirm: false,
                    confirmButtonColor: "#db9d2b",
                    cancelButtonColor: "#db9d2b",
                    confirmButtonText: "logout from all devices!",
                    showLoaderOnConfirm: true,
                    cancelButtonText: "logout from this device only!",
                    showLoaderOnCancel: true,
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        new Promise((resolve) => setTimeout(resolve, 5000));
                 
                        this.inLogout("hardlogout");
                        
                    } else if (result.dismiss == this.$swal.DismissReason.cancel) {
                        this.inLogout("logout");
                       

                    }
                });
        },

      async inLogout(type) {
            let res = await ApiClass.deleteRequest(type, true);
            if (res?.data) {                
                if (res.data.status_code == 1) {
                    localStorage.clear();
                    this.$store.commit("setLogin", false);
                    location.replace("/exchange");
                    this.success(res.data.message);
                } else {
                    this.failed(res.data.message);
                }
            }
        }

    }
}

export default SweetAlert