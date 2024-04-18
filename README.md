# ¿Que es BrewPatcher - Playables hack?
#### Brewpatcher es un metodo para "Hackear" datos de guardado de Youtube Playables, Esto funciona editando los datos json que son enviados en las peticiones, para usarlo se debe extraer el curl como bash.
# ¿Como funciona?
#### El comando curl tiene toda la informacion de la peticion, incluyendo cookies y los datos del juego, este programa es capaz de serializarlos (Base64) -> (JSON) y permite editarlos a traves de la pagina web. Al momento de enviar los datos se enviaran al Backend, el cual va a enviar los datos de guardado ya serializados y editados, causando el cambio en los datos.
