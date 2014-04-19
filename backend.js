/*
 * Сервис, отвечающий за хранение и частичную обработку объектов. 
 * Может быть как в составе приложения, так и частью.
 * Главное назначение, позволить отделять основное приложение от хранения и первичной обработки. Это 
 * позволяет как располагать основную часть приложения в браузере(одно из примерений сферы), так и 
 * подключать множество frontend к одному backend(подобно тому, как работают обычные веб сайты, таким образом
 * используя сферу подобно обычному вебсайту и для тех же целей)
 */

exports.init = function(env, dsa){
    dsa.on('create',
	  function(sprout, stack){
	  })

    dsa.on('destroy',
	  function(sprout, stack){
	  })
}