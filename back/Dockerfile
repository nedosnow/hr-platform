FROM openjdk:17
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=target/CommonEditor-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} CommonEditor-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/CommonEditor-0.0.1-SNAPSHOT.jar"]