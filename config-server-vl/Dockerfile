FROM openjdk:15
VOLUME /tmp
EXPOSE 8888
ADD /target/config-server-vl-0.0.1-SNAPSHOT.jar config-server-vl.jar
ENTRYPOINT ["java", "-jar", "config-server-vl.jar"]