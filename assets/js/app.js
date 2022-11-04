console.log('collegato');

const { createApp } = Vue;

createApp({
    data(){
        return{
            todoLists: [
                {
                    text:'Scegliere i componenti del pc',
                    done: true,
                },
                {
                    text:'Valutare i vari siti',
                    done: false,
                },
                {
                    text:'Comprare i componenti',
                    done: true,
                },
            ]
        }
    },
    methods: {

    },
    created(){

    },
    mounted(){

    }
}).mount('#app')