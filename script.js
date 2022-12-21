const { crateApp } = Vue

    .createApp({
        data() {
            return {
                randomMail : '',
            }
        },

        methods: {
            generateNewMail(){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                    console.log(response.data.response);
                    this.randomMail = response.data.response;
                });
            }
        },

        created(){
            this.generateNewMail()
        }
    }).mount('#app');

