FROM openjdk:15
EXPOSE 8761
ADD /target/Eureka-0.0.1-SNAPSHOT.jar eureka-service.jar
ENTRYPOINT ["java", "-jar", "eureka-service.jar"]