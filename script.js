const {createApp} = Vue;

createApp({
    data() {
        return {

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

        }
    },

    methods: {
        deleteTask(taskIndex){
            this.toDoArray.splice(taskIndex, 1);
        }
    }


}).mount("#app");