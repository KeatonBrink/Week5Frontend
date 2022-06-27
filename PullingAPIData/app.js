const API_URL = "https://fakestoreapi.com";

var app = new Vue({
    el: "#app",
    data: {
        //Variables here
        products: []
    },
    methods: {
        //functions here
    },
    //  This method uses .then() to talk to api at start of page
    // created: function () {
    //     fetch(API_URL + "/products").then((response) => {
    //         response.json().then((data) => {
    //             console.log(data);
    //             this.products = data;
    //         })
    //     })
    // }
    // This method uses async/await to talk to api at start of page
    //async created() {
    created: async function () {
        // GET request using fetch with async/await
        //await stops the asyncronouse function, and forces the line to finish working  
        const response = await fetch(API_URL + "/products");
        const data = await response.json();
        this.products = data;
      }
});




/* 

=== Instructions ===

1. Get the Vue <script> tag hooked up 
    (Can be found on v2.vuejs.org under 'Get Started')

2. Fetch the API resource 'products' (GET request on https://fakestoreapi.com/products)
    2.1 Use Postman or console.log() to see what the data looks like

3. Use a v-for to display each item in the list
    3.1 Display the following: image, title, description and price


=== If you've finished the above ===

4. Fetch the data using 'async/await' instead of '.then()' 
    (look up javascript async/await)

*/