describe("Jasmine Example", function() {
    
    it("can run basic expectations", function() {
        expect(1).toBe(1);
    });
    
    it("loads application classes to be tested", function() {
        var controller = Ext.create('JasmineExample.view.main.MainController');
        expect(controller).toBeDefined();
        Ext.destroy(controller);
    });
    
    it("allows testing controller methods", function() {
        var controller = Ext.create('JasmineExample.view.main.MainController');
        expect(controller.sum(2, 3)).toBe(5);
        Ext.destroy(controller);
    });
    
});
