FROM openjdk:15
Expose 8090
ADD /target/clientsMS-0.0.1-SNAPSHOT.jar docker-service-clients.jar
ENTRYPOINT ["java","-jar","docker-service-clients.jar"]