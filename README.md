# projet-micro-services
 
 Notre projet se base sur les ventes de lunettes.
Dans ce projet on a créer plusieurs microservices indépendamment déployables qui communiquent entre eux (clientMS, VendeursMS, LunettesMS)
en utilisant les facilités offertes par Spring Boot App, eureka, docker, zuul. et aussi un autre microservice (Lentille) avec nodeJS.

etape 1: prepare spring boot apps for running:
  maven clean install

etape 2: dockerize le microservices:
cd projet-micro-services\composeboard\docker-compose-vendeurBoard
docker-compose up

etape 3: run nodeJs microservice:
cd projet-micro-services\microservice-node
npm install
npm run dev

 ____________________________________
| Pour le run de angular front-end : |
|____________________________________|

**etape 1:** ``` cd projetAngular2.0-main ``` 

**etape 2:** Install Node form  https://nodejs.org/en/

**etape 3:** ``` npm install ```

**etape 4:** ``` npm install -g json-server ``` (Install JSON mock server)

**etape 5:** ```npm install -g @angular/cli ``` (Install angular CLI)

**etape 6:** Open two terminal/command prompt  

**etape 7:** In one run command:   ``` ng serve ```

 ____________________________________________________
| Pour tester si le nodeJS microservice is running : |
|http://localhost:4000                               |
|____________________________________________________|

 ____________________________________________________
| Pour lister les services en marche sur eureka: :   |
|http://localhost:8761                               |
|____________________________________________________|




