chrome.runtime.onMessage.addListener( data => {
	if ( data.type === 'notification' ) {
		notify( data.message );
	}
});

chrome.runtime.onInstalled.addListener( () => {
	chrome.contextMenus.create({
		id: 'notify',
		title: "Notify!: %s", 
		contexts:[ "selection" ]
	});
});

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		if (request.event == "copy") {
			console.log("copy detected");
		}
		if (request.event == "paste") {
			console.log("paste detected");
		}

		sendResponse({});
	});

chrome.contextMenus.onClicked.addListener( ( info, tab ) => {
	if ( 'notify' === info.menuItemId ) {
		notify( info.selectionText );
	}
} );

const notify = message => {
	chrome.storage.local.get( ['notifyCount'], data => {
		let value = data.notifyCount || 0;
		chrome.storage.local.set({ 'notifyCount': Number( value ) + 1 });
	} );

	return chrome.notifications.create(
		'',
		{
			type: 'basic',
			title: 'Notificaiton!',
			message: message || 'Notify!',
			iconUrl: './assets/icons/128.png',
		}
	);
};