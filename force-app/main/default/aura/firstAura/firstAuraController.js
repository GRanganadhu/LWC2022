({
    handleCustomEvent : function(component, event, helper) {
        alert('handled custom event by aura');
        const msg = event.getParam("message");
        alert(msg);
        const me = component.find('child');
        me.publicMethod('message from ara comp using public method');
    }
})
