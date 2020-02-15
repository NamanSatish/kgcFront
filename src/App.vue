<template>
  <v-app>
    <v-app-bar app dark class="red darken-2">
      <v-toolbar-title class="headline">
        <span class="font-weight-black">KGC</span>
        <span class="font-weight-light">DAYSHEET</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        @click="reload"
        outlined
        color="white"
      >
        <v-icon>refresh</v-icon>
      </v-btn>
    </v-app-bar>

    <br/>
    <br/>
    <br/>

    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="ml-3 mr-3"     
    >
      <v-text-field
        v-model="custData.customer"
        :rules="custRules"
        label="Customer"
        required
      ></v-text-field>
      <v-text-field
        v-model="custData.address1"
        label="Street Address"
      ></v-text-field>
      <v-text-field
        v-model="custData.address2"
        label="City, State, Zip"
      ></v-text-field>
      <v-radio-group v-model="custData.billing">
      <v-radio
        label="Contract"
        value="contract"
      ></v-radio>
      <v-radio
        label="T&M"
        value="tm"
      ></v-radio>
    </v-radio-group>

    <!-- Workers Cards -->
    <h3>Workers</h3>
    <v-card max-width="350" class="pa-5 mb-5" v-for="(workerRow,index) in workerRows" :key="`workerRow-${index}`"> <!-- Change to workerRow.Name if wanted -->
      <h4>#{{index+1}}</h4>
      <v-text-field
        v-model="workerRow.workerName"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="workerRow.workerClass"
        label="Class"
        required
      ></v-text-field>
      <v-text-field
        v-model="workerRow.workerHrs"
        label="Hrs"
        type="number"
        :rules="numRules"
        required
      ></v-text-field>
    </v-card>
      <v-btn 
        @click="addWorkerRow"
        color="primary"
      ><v-icon>add</v-icon></v-btn>
      <v-btn
        @click="removeWorkerRow(index);"
        outlined
        color="secondary"
        class="ml-3"
      ><v-icon>remove</v-icon>
      </v-btn>

    <br/>
    <br/>

    <!-- Equipment Cards -->
    <h3>Equipment</h3>
    <v-card max-width="350" class="pa-5 mb-5" v-for="(equipRow,index) in equipRows" :key="`equipRow-${index}`"> <!-- Change back to equipRow.equipNo if needed -->
        <h4>#{{index+1}}</h4>
        <v-select
          :items="equipment"
          v-model="equipRow.equipName"
          label="Select Equipment"
        ></v-select>
      <v-text-field
        v-model="equipRow.equipNo"
        label="Equip#"
        type="number"
        :rules="numRules"        
      ></v-text-field>
      <v-text-field
        v-model="equipRow.equipHrs"
        label="Hrs"
        type="number"
        :rules="numRules"
      ></v-text-field>
    </v-card>
      <v-btn 
        @click="addEquipRow"
        color="primary"
      ><v-icon>add</v-icon></v-btn>
      <v-btn
        @click="removeEquipRow(index);"
        outlined
        color="secondary"
        class="ml-3"
      ><v-icon>remove</v-icon></v-btn>

    <br/>
    <br/>

     <!-- Purchases Cards -->
    <h3>Purchases</h3>
    <v-card max-width="350" class="pa-5 mb-5" v-for="(purchRow,index) in purchRows" :key="`purchRow-${index}`"> <!-- Change back to purchRow.purchItem if needed -->
      <h4>#{{index+1}}</h4><!-- type text added to stop textbox from being unselected after one character input -->
      <v-text-field
        v-model="purchRow.purchItem"
        label="Item"
        type="text"
        required
      ></v-text-field> 
      <v-text-field
        v-model="purchRow.purchInv"
        label="Inv/Purch#"
        required
      ></v-text-field>
      <v-text-field
        v-model="purchRow.purchAmount"
        label="Amount"
        type="number"
        :rules="numRules"
        required
      ></v-text-field>
      <v-radio-group v-model="purchRow.purchBilling">
      <v-radio
        label="Account"
        value="account"
      ></v-radio>
      <v-radio
        label="Credit Card"
        value="credit card"
      ></v-radio>
    </v-radio-group>
    </v-card>
      <v-btn 
        @click="addPurchRow"
        color="primary"
      ><v-icon>add</v-icon></v-btn>
      <v-btn
        @click="removePurchRow(index);"
        outlined
        color="secondary"
        class="ml-3"
      ><v-icon>remove</v-icon>
      </v-btn>

    <br />
    <br />
    <!-- Reciept Upload -->
      <h3>Reciept Upload</h3>
        <picture-input 
          class="pa-0 mb-0"
          width="200"
          height="300"
          ref="pictureInput"
          accept="image/jpeg,image/png" 
          :hideChangeButton="true"
          :removable="true"
          :crop="false"
          :custom-strings="{
            upload: '<h1>Hmm.. Something might have gone wrong</h1>',
            drag: '<h1>Receipt Upload<h1>',
            remove: 'Remove',
          }"
          @change="receiptUpload"
          @remove="receiptRemove"
        ></picture-input>
    <br/>
    <br/>
    <!--Signature box-->
      <h3>Customer Signature</h3>
      <VueSignaturePad 
        id="signature" 
        width="100%" 
        height="150px" 
        ref="signaturePad" 
        class="mb-3"
      />
      <v-btn 
        @click="submitForm"
        min-width=200
        color="primary"
        class="mr-5"
      >Submit</v-btn>
      <v-btn 
        @click="clear"
        outlined
        color="secondary"
        class="mr-5"
      >Clear Signature</v-btn>
<br/>
  <div class="text-center">
      <v-btn
        text
        href="https://thinkrelion.com"
        target="_blank"
        class="mt-5"
      >
        <span class="font-weight-light">Powered by Relion</span>
      </v-btn>
  </div>

    </v-form>
  </v-app>
</template>

<script>
import axios from "axios";
import PictureInput from 'vue-picture-input'
export default {
  name: "App",
  data() {
    return {
      valid: true,
      custData: {
        name: "",
        address1: "",
        address2: "",
        billing: "",
        timestamp: "",
      },
      custRules: [
        v => !!v || 'Customer name is required'
      ],
      numRules: [
        v => /^[0-9]*$/.test(v) || 'Enter valid number'
      ],
      image: [],
      equipRows: [],
      workerRows: [],
      purchRows: [],
      equipment: ["Truck & Tools","Backhoe","Drill Rig - Tool Truck","Drill Rig (Foundation)","Dump Truck (Bobtail)","Dump Truck (Super 10)","Well - Tool Truck","Well - Drill / Wtr Trk / Mud","Skid Steer","Mini-Excavator","Skip Loader","Compactor (Upright)","Compactor (Ride-on)","Compressor Truck (Demo)","Compressor (Towable)","Forklift (Reach) 5K","Forklift (Reach) 10K","Forklift (Warehouse)","Generator / Welder","Scissor Lift","Trencher (Ride-on)","Trencher (Walk Behind)","Water Trailer","Water Truck (2000 gal.)","Development Rig","Rail Rig","Welding Truck","Compressor (Small)","P&D (Portal to Portal)"],
      receipt: "",
    };
  },
  components: {
    PictureInput
  },
  methods: {
    getNow() {
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date +' '+ time;
      this.timestamp = dateTime;
    },
    receiptRemove(){
      this.image = [""]
    },
    receiptUpload (image) {
      if (image) {
        this.image.push(image);
      } else {
        alert('Sorry this format is not accepted. If you believe this is a mistake, please contact Relion.');
      }
    },
    clear() {
      this.$refs.signaturePad.clearSignature();
    },
    addWorkerRow() {
      this.workerRows.push({
        travel: "",
        perdiem: "",
        workerName: "",
        workerClass: "",
        workerHrs: ""
      });
    },
    removeWorkerRow(index) {
      this.workerRows.splice(index, 1);
    },
    addEquipRow() {
      this.equipRows.push({
        equipName: "",
        equipNo: "",
        equipHrs: ""
      });
    },
    removeEquipRow(index) {
      this.equipRows.splice(index, 1);
    },
    addPurchRow() {
      this.purchRows.push({
        purchItem: "",
        purchInv: "",
        purchAmount: "",
        purchBilling: ""
      });
    },
    removePurchRow(index) {
      this.purchRows.splice(index, 1);
    },
    reload(){
      location.reload();
    },
    submitForm() {
      //let rowData = this.rows;
      //let workerData = this.workerData;
      this.getNow();
      //console.log(this.image);
      if(this.$refs.form.validate()){
      axios.post("https://node.kgcinc.com:3000/api/v1/posts", { 
          body: {
            CustData: {
              customer: this.custData.customer,
              address1: this.custData.address1,
              address2: this.custData.address2,
              billing: this.custData.billing,
              signature: this.$refs.signaturePad.saveSignature()
            },
            InputData: {
              InputDate: this.timestamp,
              Workers: this.workerRows,
              Equipment: this.equipRows,
              Purchases: this.purchRows
            },
            Receipt: {
              image: this.image

            }
          }
        })
        .then(response => {
          // Future implementation of ID alert (For person to keep a record) ?
         // alert(JSON.stringify(response.data.YourPost));


          alert("Form received.  Thank you!");
          //reload page
          location.reload(); 
          alert(response);
        })
        .catch(error => {
          alert(error);
        });

      

      }
    },
  }
};
</script>

<style>
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>
