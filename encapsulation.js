/* Explain encapsulation */

var Managers = {}; //namespace

Managers.CssManager = (function(){

	/*
		private space
	*/

	return{
		//Public members
		addStyleSheet: function(id, url){
			var newStyleSheet = doc.createElement("link");
			setAttributes(newStyleSheet, {
				rel : "stylesheet",
				type : "text/css",
				id : id,
				href: url
			});
			doc.getElementsByTagName("head")[0].appendChild(newStyleSheet);
		},

		removeStyleSheet: function(id){
			var currentStyleSheet = doc.getElementById(id);
			if(currentStyleSheet){
				currentStyleSheet.parentNode.removeChild(currentStyleSheet);
			}
		},
			
		swapStyleSheet: function(id, url){
			this.removeStyleSheet(id);
			this.addStyleSheet(id, url);
		}
	}
})();

// You can access Managers.CssManager.addStyleSheet