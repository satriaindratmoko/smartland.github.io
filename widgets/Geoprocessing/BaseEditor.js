///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(['dojo/_base/declare',
  'dojo/Deferred',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin'
],
function(declare, Deferred, _WidgetBase) {
  //summary:
  //  this is the base editor for all input editors.
  //  all editors should be passed into param object, label property when created.
  var clazz = declare([_WidgetBase], {

    baseClass: 'jimu-gp-editor-base',

    //derived editor should override this property.
    editorName: 'BaseEditor',

    //if this property is not empty, when the depend parameter's value change,
    //the update method will be invoked.
    //This property is set in runtime
    dependParam: '',

    postCreate: function(){
      this.inherited(arguments);
    },

    getValue: function(){
      //return the value that user input
    },

    reset: function() {

    },

    getGPValue: function(){
      //return the value that the GP requried
      //by default, we use getValue's return value
      var def = new Deferred();
      def.resolve(this.getValue());
      return def;
    },

    wrapGPValue: function(value){
      if(!value){
        return value;
      }
      if(!value.toJson){
        value.toJson = function(){
          return value;
        };
      }
      return value;
    },

    wrapValueToDeferred: function(value){
      var def = new Deferred();
      def.resolve(value);
      return def;
    },

    update: function(/*jshint unused: false*/ dependParamValue){

    }
  });
  return clazz;
});
