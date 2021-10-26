FROM openjdk:15
EXPOSE 8082
ADD /target/lunettesMS-0.0.1-SNAPSHOT.jar docker-service-lunettes.jar
ENTRYPOINT ["java","-jar","docker-service-lunettes.jar"]