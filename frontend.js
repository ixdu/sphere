/*
 * Сервис, который реализует б'ольшую часть функциональности сферы, конечно же используя другие сервисы.
 * Может быть как частью приложения, так и работать отдельно.
 * Его назначение - сосредоточить в себе функциональность сферы полностью абстрагировавшись от способов
 * вывода информации, способов её передачи и хранения. По этим причинам, frontend использует ui
 * как frontend себя и backend для хранения и переработки совместно с другими frontend.
 */

var ui = require('../dsa/objects/ui.js');

/* It is disabled now, but can be use for unusual cases
function address_requester(stack){
    with(ui.highlevel){
	var addr_card = new card({ name : 'address' }, null, stack);
	var addr_entry;
	function open_addr(){
	    try{
	//	alert('./objects/' + addr_entry.get_value() + '.js')
		var sobject = require('./objects/' + addr_entry.get_value() + '.js');
//		addr_card.destroy();
		new sobject(null, stack);
	    } catch (x) {
		alert(JSON.stringify(x) + 'ddddd');
		addr_entry.set_placeholder('такого объекта не существует');
		addr_entry.set_value('');
	    }
	}
	addr_entry = new entry({ name : 'addr',
				     height : 1,
				     width : 2,
				     advertisement : 'введите адрес',
				     on_text_change : open_addr
				   }, null, stack);
	new click({ height : 1,
		    width : 1,
		    label : 'открыть',
		    on_click : open_addr
		  }, null, stack);
    }
}

*/

function objects_chooser(stack){
    var objects = require('./objects/list.js');
    with(ui.highlevel){
	var chooser = new card({ name : 'objects_chooser' }, null, stack);
	for(key in objects){
	    if(objects[key] == 'file'){
		new click({ height : 1,
			    width : 1,
			    label : key,
			    on_click : (function(key){
					    return function(){
						var sobject = require('./objects/' + key + '.js');
						new sobject(null, stack);
					    };
					})(key)
			  }, null, stack);		
	    }
	}	
    }
}

exports.init = function(dsa){
    var _backend;
    dsa.on('create', 
	   function(sprout, stack, backend){
	       _backend = backend;
	       ui.init('pc');
//	       ui.block_size_ask(address_requester);
	       ui.block_size_ask(objects_chooser);
//    var address_panel = sloader.load('sphere/ui/address_panel', mq, env);
//    var action_panel = sloader.load('sphere/ui/action_panel', mq, env);
//    var area = sloader.load('sphere/ui/area', mq, env);
//    var objects_loader = sloader.load('sphere/objects_loader', mq, env);    
/*
	       seq.run([{
			    name : 'objects_loader',
			    
			    action : ['s', objects_loader, 'init', ui], 
			    
			    next : [
				{
				    action : ['s', area, 'create', ui] 
				},
				{
				    action : ['s', address_panel, 'create', ui]
				},
				{
				    action : ['s', action_panel, 'create', ui]   
				}
			    ]
			}
	    ]);    	       */
	   });
    
    dsa.on('destroy',
	  function(sprout, stack){
	  });
};