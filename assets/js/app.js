console.log('collegato');

const { createApp } = Vue;

createApp({
    data(){
        return{
            pathImg: 'assets/img/',
            nameImg:'logo.png',
            errorMsg:'',
            characters: 5,
            valueNewTask:'',
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
                    done: false,
                },
            ]
        }
    },
    methods: {
        deleteTask(index){
            this.errorMsg = '';
            if(this.todoLists[index].done){
                this.todoLists.splice(index,1)
            }
            else{
                this.errorMsg = 'Attenzione! Devi prima completarla per eliminarla.'
            }
        },
        createTask(){
            this.errorMsg = '';
            if(this.valueNewTask.length < 5){
                this.errorMsg = 'Attenzione! Inserisci almeno 5 caratteri.'
            }
            else{
                const newTask = {
                    text: this.valueNewTask,
                    done: false
                }

                if(this.todoLists.includes(newTask.text) === this.valueNewTask){
                    this.errorMsg = 'Attenzione! Task già esistente.'
                }
                else{
                    this.todoLists.unshift(newTask);
                }
                            console.log(this.valueNewTask, newTask.text);
                // this.todoLists.unshift(newTask);

            }
            // this.errorMsg = '';
            // this.valueNewTask = '';
        }

    },
    created(){
        console.log('creata');
    },
    mounted(){
        console.log('montata');
        
    }
}).mount('#app')