<template>
    <!-- <div id="app"> -->
        <router-view @authenticated="setAuthenticated" />
    <!-- </div> -->
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "kgc",
                    password: "kindness"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
    body {
        background-color: rgb(255, 230, 230);
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: auto;
        height: max-content;
        margin: auto;
    }
</style>