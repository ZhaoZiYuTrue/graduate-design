<template>
    <div>
        <p>headline</p>
        <input type="text" v-model="title">
        <p>neirong</p>
        <input type="text" v-model="content">
        <div class="button" @click="add()">add</div>
    </div>
</template>

<script>
    import store from "@/store"
    export default {
        name: 'Add',
        data(){
            return {
                title: '',
                content: ''
            }
        },
        methods: {
            add(){
                
                store.commit('addItem',{
                    title: this.title,
                    content: this.content
                },
                this.title = '',
                this.content = '',)
                this.$router.push('/home/retrieval')
            }
        }
    }
</script>

<style scoped>

</style>