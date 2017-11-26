#Aktuelle Webtechnologien: Tools und Frameworks Workshop

###Worum geht das Projekt?
  Workshop für den Kurs Aktuelle Webtechnologien: Tools und Frameworks WS 17/18
  an der Beuth Hochschule für Technik Berlin bei Sven Spielvogel
 
###Projektsetup
Zuerst die Nodekonsole öffnen (Am besten gleich 2). Dort gehen wir in den Projektordner in den Ordner
    
    \webtech_restapi\frontend
und führen dort den Befehl

    npm install
   
aus. Anschließend gehen wir in den Projektordner

    \webtech_restapi\restapi
    
und führen denselben Befehl erneut aus

    npm install
    
Um das Projekt zu starten müssen wir uns in den beiden oben genannten Ordnern befinden(daher 2 Konsolen) und führen
im Ordner "\webtech_restapi\frontend" den Befehl

    ng serve
    
oder

    ng serve --open
    
aus. Das "--open", damit sich die Seite in eurem Standardbrowser öffnet.

Im Ordner "\webtech_restapi\restapi" führen wir den Befehl

    node ./bin/www

aus um den RestAPI Server zu starten.

Nun solltet ihr beide Dienste gestartet haben. Die Seite erreicht ihr über
    
    http://localhost:4200
    
###Wer arbeitet daran?
*   Denny Schumann (s62373@beuth-hochschule.de)
*   Jan Fromme (s61279@beuth-hochschule.de)
*   Paul Venneklaas (s61276@beuth-hochschule.de)
*   Tobias Belkner (s61278@beuth-hochschule.de) webtech_restapi
