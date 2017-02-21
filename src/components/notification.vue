<template>

    <div class="notification-wrapper" v-if="showing" v-on:click="hide()">

        <div class="notification" :class="alertType">
            <div class="noti-icon">
                <i :class="iconType" class="fa"></i>
            </div>
            <div class="noti-text">
                <div class="noti-headline">
                    {{header}}
                </div>
                <div class="noti-description">
                    {{content}}
                </div>
            </div>
        </div>

    </div>
</template>
<style>
    @keyframes fadein{
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
    .notification-wrapper{
        position: fixed;
        right: 50px;
        bottom: 50px;
        z-index: 1000000;
        animation-duration: 1s;
        animation-name: fadein;
        animation-iteration-count: 1;
        animation-direction: alternate;
    }
    body .notification-wrapper:nth-of-type(7){bottom: 450px!important;}
    body .notification-wrapper:nth-of-type(6){bottom: 350px!important;}
    body .notification-wrapper:nth-of-type(5){bottom: 250px!important;}
    body .notification-wrapper:nth-of-type(4){bottom: 150px!important;}
    body .notification-wrapper:nth-of-type(3){bottom: 50px!important;}
    .notification{
        z-index: 1000000;
        min-width: 300px;
        height: 80px;
        opacity: 0.95;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px 0 rgba(0, 0, 0, 0.08);
    }
    .noti-icon{
        width: 80px;
        float: left;
        text-align: center;
        line-height: 80px;
        font-size: 30px;
        background: #f4f8fb;
        color: #fff;
        border-radius: 4px 0px 0px 4px;
    }
    .noti-text{
        padding-left: 100px;
        padding-right: 20px;
        border-radius: 4px;
    }
    .noti-headline{
        padding-top: 20px;
        font-weight: bold;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        color: #555;
    }
    .noti-description{
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        padding-top: 20px;
        padding-bottom: 20px;
        display: table;
    }
    .notification.custom-alert .noti-text{background: rgba(93,156,236,0.5);}
    .notification.custom-alert .noti-icon{background-color: #5d9cec;}
    .notification.custom-error .noti-text{background: rgba(240,80,80,0.5);}
    .notification.custom-error .noti-icon{background-color: #f05050;}
    .notification.custom-success .noti-text{background: rgba(129,200,104,0.5);}
    .notification.custom-success .noti-icon{background-color: #81c868;}
</style>
<script>
    export default{
        data: function() {
            return {
                showing: true,
            }
        },
      props:['type', 'header', 'content'],
        created(){

        },
        methods:{
            hide: function(){
                this.showing = false;
            }
        },
        computed: {
            alertType: function () {
                switch(this.type) {
                    case "alert":
                        return "custom-alert";
                        break;
                    case "success":
                        return "custom-success";
                        break;
                    case "error":
                        return "custom-error";
                        break;
                }
            },
            iconType: function () {
                switch(this.type) {
                    case "alert":
                        return "fa-bell";
                        break;
                    case "success":
                        return "fa-check";
                        break;
                    case "error":
                        return "fa-times";
                        break;
                }
            }
        }
    }
</script>