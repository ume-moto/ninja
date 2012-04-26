/* <copyright>
 This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
 No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
 (c) Copyright 2011 Motorola Mobility, Inc.  All Rights Reserved.
 </copyright> */

var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component,
    DefaultPresets = require("js/panels/presets/default-animation-presets").animationPresets;

exports.AnimationsLibrary = Montage.create(Component, {
    hasTemplate: {
        value: true
    },
    presetData : {
        value: null
    },
    deserializedFromTemplate : {
        value: function() {
            this.presetData = DefaultPresets;
        }
    },
    handleNodeActivation: {
        value: function(presetData) {
            this.application.ninja.presetsController.applyPreset(presetData);
      	}
 	}
});