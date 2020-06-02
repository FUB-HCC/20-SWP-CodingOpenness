package swp2020.dummyserver

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ServerApplication

    fun main(args: Array<String>) {
        runApplication<ServerApplication>(*args)
    }

