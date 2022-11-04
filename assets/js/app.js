console.log('collegato');

const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            pathImg: 'assets/img/',
            nameImg:'logo.png',
            alert:'',
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
            this.alert = '';
            if(this.todoLists[index].done){
                this.todoLists.splice(index,1)
            }
            else{
                this.alert = 'fa-solid fa-circle-exclamation';
                this.errorMsg = 'Attenzione! Devi prima completarla per eliminarla.'
            }
        },
        createTask(){
            this.errorMsg = '';
            this.alert ='';
            if(this.valueNewTask.length < 5){
                this.alert = 'fa-solid fa-circle-exclamation';
                this.errorMsg = 'Attenzione! Inserisci almeno 5 caratteri.'
            }
            else{
                const newTask = {
                    text: this.valueNewTask,
                    done: false
                }
                
                const isFind = this.todoLists.find(item => item.text === newTask.text);
                
                if(isFind){
                    this.alert = 'fa-solid fa-circle-exclamation';
                    this.errorMsg = 'Attenzione! Task già esistente.'
                }
                else{
                    this.todoLists.unshift(newTask);
                }
                // console.log(this.valueNewTask, newTask.text);
            }
            this.valueNewTask = '';
        }
    },
    created(){
        console.log('creata');
    },
    mounted(){
        console.log('montata');
        
    }
}).mount('#app')