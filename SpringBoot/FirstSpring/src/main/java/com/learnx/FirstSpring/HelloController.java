package com.learnx.FirstSpring;

import org.springframework.web.bind.annotation.*;

@RestController
public class HelloController {
    @GetMapping("/hello")
    public Object hello(){
        return new HelloResponse("Hello World!!");
    }
    @GetMapping("/hello/{name}")
    public HelloResponse helloParam(@PathVariable String name){
        return new HelloResponse("Hello, " +name);
    }
    @PostMapping("/hello")
    public HelloResponse helloPost(@RequestBody String name){
        return new HelloResponse("Hello "+ name +"! \n Good Morning !!");
    }
}
