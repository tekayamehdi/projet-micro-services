FROM openjdk:15
EXPOSE 8086
ADD /target/vendeursMS-0.0.1-SNAPSHOT.jar docker-service-vendeurs.jar
ENTRYPOINT ["java","-jar","docker-service-vendeurs.jar"]