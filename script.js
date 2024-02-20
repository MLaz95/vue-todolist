const {createApp} = Vue;

createApp({
    data() {
        return {

        // array with all the tasks
        toDoArray:[
            {
                text: 'Call grandma',
                done: false,
            },
            {
                text: 'Get groceries',
                done: false,
            },
            {
                text: 'laundry',
                done: true,
            },
            {
                text: 'update CV',
                done: false,
            },
            {
                text: 'book restaurant',
                done: true,
            },
        ],

        // new task, text value gets updated with user input
        newTask: {
            text: '',
            done: false,
        },
        }
    },

    methods: {
        deleteTask(taskIndex){
            this.toDoArray.splice(taskIndex, 1);
        },

        // uses spread operator to add the current values of newTask
        // then resets newTask.text to empty
        addTask(){
            this.toDoArray.push({...this.newTask});

            this.newTask.text = '';
        },

        isDone(taskIndex){
            this.toDoArray[taskIndex].done = !this.toDoArray[taskIndex].done
        }
    }


}).mount("#app");