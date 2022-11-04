console.log('collegato');

const { createApp } = Vue;

createApp({
    data(){
        return{
            pathImg: 'assets/img/',
            nameImg:'logo.png',
            errorMsg:'prova erorre',
            characters: 5,
            valueNewTask:'test',
            todoLists: [
                {
                    text:'Scegliere i componenti del pc',
                    done: false,
                },
                {
                    text:'Valutare i vari siti',
                    done: true,
                },
                {
                    text:'Comprare i componenti',
                    done: false,
                },
            ]
        }
    },
    methods: {

    },
    created(){
        console.log('creata');
    },
    mounted(){
        console.log('montata');
        
    }
}).mount('#app')