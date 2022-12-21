const { crateApp } = Vue

    .createApp({
        data() {
            return {
                randomMails : [],
            }
        },

        methods: {
            generateNewMail(){
                for(let i = 0; i < 10; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                        console.log(response.data.response);
                        this.randomMails.push(response.data.response);
                    });
                }
            }
        },
    }).mount('#app');

