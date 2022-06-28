const API_URL = "https://api.justyy.workers.dev/api/fortune";

Vue.component("new-fortune", {
    // display the current fortune in an <h1>
    // display two buttons for sorting
        // The on-click of those buttons will call the function passed in through a prop
    template: `
        <div>
            <h1> {{fortune}} </h1>
            <button v-on:click="sortFortune(fortune, good)
    `,
    props: [
        // two props
        //  - String to hold the fortune text
        //  - Function for sorting the fortune (a method in the Vue instance)
    ]
});

Vue.component("sorted-fortune", {
    // in an <h4> or <div> display the text and bind the 'color' style to your fortune-color prop
    template: ``,
    props: [
        // two props
        //  - String to hold the fortune text
        //  - String representing a red/green color to bind the 'color' style
    ]
});

var app = new Vue({
    el: "#app",
    data: {
        // a string representing the new fortune (not yet sorted)
        newFortune: "",

        // two arrays which hold all previously sorted fortunes
        goodFortune: [],
        badFortune: [],
    },
    methods: {
        // set the new_fortune to the data from fetch(API_URL) 
            // Try to use 'async / await' rather than '.then()'
        getNewFortune: async function () {
            const response = await fetch(API_URL);
            const data = await response.json();
            this.newFortune = data;
        },
        // pushes the fortune given into one of two data arrays (good_fortunes, bad_fortunes)
        sortFortune: function (fortune, category) {
        }
    },
    // Get a new fortune when the app first loads
    created: async function () {
            const response = await fetch(API_URL);
            const data = await response.json();
            this.newFortune = data;
    }
});