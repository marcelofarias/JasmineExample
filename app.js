/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'JasmineExample',

    extend: 'JasmineExample.Application',
    
    // Do not create a viewport in test mode to allow 
    // the default Jasmine HTML reporter to work properly
    autoCreateViewport: window.testMode ? false : 'JasmineExample.view.main.Main'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to JasmineExample.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
