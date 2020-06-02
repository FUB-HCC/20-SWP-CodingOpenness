package swp2020.dummyserver.web

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import swp2020.dummyserver.modul.Foo

/**
 *  Dummy responses for all CRUD operations
 */
@RestController
class DummyController {

    @PostMapping("/foos")
    fun createFoo(@RequestBody foo: Foo): ResponseEntity<Foo> {
        return ResponseEntity.ok().body(foo)
    }

    @GetMapping("/foos")
    fun getFoo(): ResponseEntity<Foo> {
        return ResponseEntity.ok().body(Foo())
    }

    @PutMapping("/foos")
    fun updateFoo(@RequestBody foo: Foo): ResponseEntity<Foo> {
        return ResponseEntity.ok().body(foo)
    }

    @DeleteMapping("/foos")
    fun deleteFoo(@RequestBody foo: Foo): ResponseEntity<Foo> {
        return ResponseEntity.ok().body(foo)
    }
}