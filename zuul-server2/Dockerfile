FROM openjdk:15
EXPOSE 8762
ADD /target/gateway-0.0.1-SNAPSHOT.war gateway-server.jar
ENTRYPOINT ["java", "-jar", "gateway-server.jar"]