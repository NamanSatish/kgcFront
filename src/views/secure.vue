<template>
  <div id="secure">
        //form
        <form-builder type="template" v-model="formConfigData" ref="FormBuilder" @change="getValue"></form-builder> 
        //Gui
        <form-builder type="gui" :form="yourConfigFormObject" v-model="formConfigData" ref="FormGui"></form-builder>

      // Form Basic
            <vue-json-pretty :data="JSON.parse(this.formBasic)"> </vue-json-pretty>


       //Form Complex
            <vue-json-pretty :data="JSON.parse(this.formData)">
              
    </vue-json-pretty>
  </div>
</template>







<script>
/* eslint-disable */
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

import VueJsonPretty from 'vue-json-pretty'
import FormBuilder from 'v-form-builder';

import axios from 'axios';
export default {
  name: "Secure",
  components: {
    FormBuilder,
    VueJsonPretty
  },
  mounted(){
        this.$refs.FormGui.setValue(this.guibasic)
    this.$refs.FormBuilder.setValue(this.templatecomplex)
  },
  created(){
    this.$refs.FormGui.setValue(this.guibasic)
    this.$refs.FormBuilder.setValue(this.templatecomplex)
  },
  data() {
    return {
      guibasic:{
"General": {
"Customer_Name": "Test",
"Delivery_Address": "",
"Delivery_Address_2": "City, State, ZIP",
"Day": "",
"Date": "mm/dd/yy",
"Job_Number": "",
"Job_Name": "",
"Job_Address": "",
"City_State_Zip_Code": "",
"Customer_Contact": "",
"Customer_Order": ""
},
"Options": {
"Contract": "",
"Time_Material": "",
"COR_Number": "",
"CORyes": "",
"Workday5to8": "",
"Workday4to10": "",
"Union": "",
"NonPLA": "",
"Prevailing_Wage": ""
}
},
      templatecomplex:{
"sections": [
{
"name": "section_580763",
"label": "General",
"clientKey": "General",
"order": 0,
"rows": [
{
"name": "section_580763_row_142021",
"label": "",
"order": 0,
"controls": [
{
"type": "text",
"name": "control_text_156501",
"fieldName": "Customer_Name",
"label": "Customer Name",
"order": 0,
"defaultValue": "",
"value": "Test",
"className": "col-md-12",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": true,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
},
{
"type": "text",
"name": "control_text_838661",
"fieldName": "Delivery_Address",
"label": "Delivery Street Address",
"order": 1,
"defaultValue": "",
"value": "",
"className": "col-md-12",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": true,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
},
{
"type": "text",
"name": "control_text_385883",
"fieldName": "Delivery_Address_2",
"label": "Delivery City, State, ZIP",
"order": 0,
"defaultValue": "City, State, ZIP",
"value": "City, State, ZIP",
"className": "col-md-12",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": true,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
}
]
},
{
"name": "section_580763_row_297006",
"label": "",
"order": 0,
"controls": [
{
"type": "text",
"name": "control_text_141454",
"fieldName": "Day",
"label": "Day",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-4",
"readonly": false,
"labelBold": false,
"labelItalic": false,
"labelUnderline": false,
"required": false,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
}
]
},
{
"name": "section_580763_row_719103",
"label": "",
"order": 0,
"controls": [
{
"type": "datepicker",
"name": "control_datepicker_53380",
"fieldName": "Date",
"label": "Job Date",
"order": 0,
"defaultValue": "",
"value": "mm/dd/yy",
"className": "col-md-4",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": true,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": true,
"dateFormat": "mm/dd/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
}
]
},
{
"name": "section_580763_row_838509",
"label": "",
"order": 0,
"controls": [
{
"type": "text",
"name": "control_text_987106",
"fieldName": "Job_Number",
"label": "Job Number",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-6",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": true,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
},
{
"type": "text",
"name": "control_text_958841",
"fieldName": "Job_Name",
"label": "Job Name",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-6",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": true,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
}
]
},
{
"name": "section_580763_row_81051",
"label": "",
"order": 0,
"controls": [
{
"type": "text",
"name": "control_text_936416",
"fieldName": "Job_Address",
"label": "Job Address",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-6",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": true,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
},
{
"type": "text",
"name": "control_text_293911",
"fieldName": "City_State_Zip_Code",
"label": "Job City, State, ZIP",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-6",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": true,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
}
]
},
{
"name": "section_580763_row_518898",
"label": "",
"order": 0,
"controls": [
{
"type": "text",
"name": "control_text_488348",
"fieldName": "Customer_Contact",
"label": "Customer Contact",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-6",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": true,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
},
{
"type": "text",
"name": "control_text_655885",
"fieldName": "Customer_Order",
"label": "Customer Order #",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-6",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": true,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
}
]
}
],
"labelPosition": "left",
"isDynamic": false,
"minInstance": 1,
"maxInstance": 0,
"instances": [
]
},
{
"name": "section_257133",
"label": "Options",
"clientKey": "Options",
"order": 0,
"rows": [
{
"name": "section_257133_row_811480",
"label": "",
"order": 0,
"controls": [
{
"type": "checkbox",
"name": "control_checkbox_269475",
"fieldName": "Contract",
"label": "Contract ",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-2",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": false,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
},
{
"type": "checkbox",
"name": "control_checkbox_659947",
"fieldName": "Time_Material",
"label": "Time & Material",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-1",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": false,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
}
]
},
{
"name": "section_257133_row_991460",
"label": "",
"order": 0,
"controls": [
{
"type": "text",
"name": "control_text_870283",
"fieldName": "COR_Number",
"label": "COR #",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-4",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": false,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
},
{
"type": "checkbox",
"name": "control_checkbox_605074",
"fieldName": "CORyes",
"label": "COR T&M (Check if yes)",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-2",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": false,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
}
]
},
{
"name": "section_257133_row_104885",
"label": "",
"order": 0,
"controls": [
{
"type": "checkbox",
"name": "control_checkbox_785151",
"fieldName": "Workday5to8",
"label": "5Days_8Hrs",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-3",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": false,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
}
]
},
{
"name": "section_257133_row_415130",
"label": "",
"order": 0,
"controls": [
{
"type": "checkbox",
"name": "control_checkbox_560413",
"fieldName": "Workday4to10",
"label": "4Days_10Hrs",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-3",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": false,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
}
]
},
{
"name": "section_257133_row_743643",
"label": "",
"order": 0,
"controls": [
{
"type": "checkbox",
"name": "control_checkbox_768559",
"fieldName": "Union",
"label": "Union",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-2",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": false,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
}
]
},
{
"name": "section_257133_row_710515",
"label": "",
"order": 0,
"controls": [
{
"type": "checkbox",
"name": "control_checkbox_929986",
"fieldName": "NonPLA",
"label": "Non PLA",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-2",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": false,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
}
]
},
{
"name": "section_257133_row_941825",
"label": "",
"order": 0,
"controls": [
{
"type": "checkbox",
"name": "control_checkbox_969419",
"fieldName": "Prevailing_Wage",
"label": "Prevailing Wage",
"order": 0,
"defaultValue": "",
"value": "",
"className": "col-md-2",
"readonly": false,
"labelBold": true,
"labelItalic": false,
"labelUnderline": false,
"required": false,
"isMultiLine": false,
"isInteger": false,
"decimalPlace": 0,
"isTodayValue": false,
"dateFormat": "dd/mm/yy",
"isNowTimeValue": false,
"timeFormat": "HH:mm",
"isMultiple": false,
"isAjax": false,
"dataOptions": [
],
"ajaxDataUrl": "",
"isChecked": false
}
]
}
],
"labelPosition": "left",
"isDynamic": false,
"minInstance": 1,
"maxInstance": 0,
"instances": [
]
}
],
"layout": "tab",
"_uniqueId": 0.6933784727452683,
"section_580763": {
},
"General": {
"control_text_156501": "",
"Customer_Name": "Test",
"control_text_838661": "",
"Delivery_Address": "",
"control_text_141454": "",
"control_text_385883": "",
"Delivery_Address_2": "City, State, ZIP",
"Day": "",
"control_datepicker_74610": "",
"Date": "mm/dd/yy",
"control_text_597761": "",
"control_datepicker_85538": "",
"control_text_277530": "",
"control_datepicker_53380": "",
"control_text_987106": "",
"Job_Number": "",
"control_text_958841": "",
"Job_Name": "",
"control_text_562579": "",
"control_text_936416": "",
"Job_Address": "",
"control_text_293911": "",
"City_State_Zip_Code": "",
"control_text_488348": "",
"Customer_Contact": "",
"control_text_655885": "",
"Customer_Order": ""
},
"section_666803": {
},
"section_340059": {
},
"section_257133": {
"control_checkbox_269475": "",
"Contract": ""
},
"Options": {
"Contract": "",
"control_text_568847": "",
"control_checkbox_659947": "",
"Time_Material": "",
"control_checkbox_56464": "",
"control_text_870283": "",
"COR_Number": "",
"control_checkbox_605074": "",
"CORyes": "",
"control_checkbox_785151": "",
"Workday5to8": "",
"control_checkbox_866034": "",
"Workday4to10": "",
"control_checkbox_768559": "",
"Union": "",
"control_checkbox_730886": "",
"NonPLA": "",
"control_checkbox_493789": "",
"Prevailing_Wage": "",
"Contract ": "",
"Contract ": "",
"Contract ": "",
" Contract": "",
"control_checkbox_969419": "",
"control_checkbox_929986": "",
"control_checkbox_560413": ""
}
},

      formData:"{}",
      formBasic:"{}",
      formValues:{},
      formDataValues:{},
      formConfigData:{},
      yourConfigFormObject:{},
       schema: {
      groups: [
        {
            legend: "User Details",
            fields: [
                {
                    type: "input",
                    inputType: "text",
                    label: "Name",
                    model: "name"
                },
                {
                    type: "input",
                    inputType: "number",
                    id: "current_age",
                    label: "Age",
                    model: "age"
                }
            ]
        }
    ]
}

      
    };
  },
  methods: {
    /*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */
  getValue() {
        // retrieve form values data
        this.formData = JSON.stringify(this.$refs.FormBuilder.getValue());
        this.formBasic = JSON.stringify(this.$refs.FormGui.getValue());
        let value = this.$refs.FormGui.getValue();
        this.yourConfigFormObject = this.$refs.FormBuilder.getValue()
        //console.log(value);
    },
  gimme: function(){
    this.yourConfigFormObject = this.$refs.FormBuilder.getValue()
    console.log(this.$refs.FormBuilder.getValue());
  },
  onModelUpdated(newVal, schema) {
  // newVal is the value, and schema is the path for the property on the model
  console.json(this.model);
},
    notification: function(type1,title1,group1,time,text1){
      this.$notify({
        type: type1,
        title: title1,
        group: group1,
        duration : time,
        text : text1
      })
    },
    
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>