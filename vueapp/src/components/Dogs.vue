<template>
    <div class="container">
        <h1 class="has-text-centered has-text-weight-bold is-size-1">LET THE DOGS OUT</h1>
        <hr />
        <div class="content">
            <select v-model="selected" @change="dogSelect">
                <option disabled value="">Please select one</option>
                <option v-if='dogs.length === 0' disabled>No dogs let out :( </option>
                <option v-for="(dog, key, index) in dogs" :value="key">{{ key }}</option> 
            </select>
             <div><img :src="dogImg" /></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return{
                dogs: [],
                dogsComplete: [],
                selected: '',
                dogImg: '',
            };
        },

        created() {
            var vm = this;
            vm.fetchDogs();
        },

        methods: {
            fetchDogs(){
                axios.get('https://dog.ceo/api/breeds/list/all')
                    .then ((res) => {
                        this.dogs = res.data.message;
                        
                    })
            },
            dogSelect(e) {
                var e = "https://dog.ceo/api/breed/" + this.selected + "/images/random";
                axios.get(e)
                    .then ((res) => {
                        this.dogImg = res.data.message;
                    })
            }
        }
    }
</script>
