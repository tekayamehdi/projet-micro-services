FROM openjdk:15
Expose 8090
ADD /target/lunettesMS-0.0.1-SNAPSHOT.jar docker-service-lunettes.jar
ENTRYPOINT ["java","-jar","docker-service-lunettes.jar"]