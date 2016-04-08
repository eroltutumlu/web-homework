"use strict"

var userInfo = function(){
    
    var getDomElements = {
        'adress' : document.getElementById('ddAdress'),
        'ipAdress' : document.getElementById('ddIpAdress'),
        'browser' : document.getElementById('ddBrowser')
    };
    
    var getInit =  function(){
         this.geo = navigator.geolocation || undefined;
         this.xhrs = new XMLHttpRequest();
    };
    
    var getFullAdress = function() {
        if(this.geo !== 'undefined'){
            
            var self = this;
            
            this.geo.getCurrentPosition(function(position){
                var fullText = position.coords.latitude + ',' + position.coords.longitude; 
                
                self.xhrs.onreadystatechange = function(){
                    if(self.xhrs.readyState === 4 && self.xhrs.status === 200){
                        var myArr = JSON.parse(self.xhrs.responseText);
                        getDomElements.adress.innerHTML = myArr.results[2].formatted_address;
                    }
                }
                
                self.xhrs.open('GET','http://maps.googleapis.com/maps/api/geocode/json?latlng='+fullText+'&sensor=false',true);
                self.xhrs.send();
                
            }, function(){
                console.log('Daha modern bir browser kullanınız.');
            });
        };
    };
    
    var getIp = function() {
        getDomElements.ipAdress.innerHTML = "I will later add";
    };
    
    var getBrowser = function(){
        getDomElements.browser.innerHTML = navigator.appName + ', ' + navigator.platform;
    }
    
    return {
        getInit: getInit,
        getFullAdress : getFullAdress,
        getIp : getIp,
        getBrowser : getBrowser
    }
    
    
}();

userInfo.getInit();
userInfo.getFullAdress();
userInfo.getIp();
userInfo.getBrowser();

