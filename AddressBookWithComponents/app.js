Vue.component('addresse', {
    template: `<div>
        <br />
        {{curaddress.pname}}
        <br/>
        {{curaddress.paddress}}
        <br/>
        <button v-on:click="deleteAddress(curindex)" style="color: red">
          Delete
        </button>
        <br/>
    </div>`,
    data: {
        hovered: 0,
    },
    props: [
        "curaddress",
        "alist",
        "curindex"
    ],
    methods: {
        deleteAddress: function (dIndex) {
            this.alist.splice(dIndex, 1); 
        }
    }
})

var app = new Vue({
    el: "#app",
    data: {
        // variables to model each input
        personName: "",
        personAddress: "",

        // list to hold addresses
        addressList: [],
    },
    methods: {
        // function to push address into list, clear input fields
        addAddress: function () {
            let newAddress = {
                pname: this.personName,
                paddress: this.personAddress
            }
            this.addressList.push(newAddress);
            this.personAddress = "";
            this.personName = "";
            return
        },
    }
})