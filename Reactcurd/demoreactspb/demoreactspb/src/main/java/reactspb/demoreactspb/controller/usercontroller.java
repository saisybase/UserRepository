package reactspb.demoreactspb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactspb.demoreactspb.exception.UserNotFoundException;
import reactspb.demoreactspb.model.user;
import reactspb.demoreactspb.repository.UserRepository;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class usercontroller {

    @Autowired
    private  UserRepository urep;
    @PostMapping("/adduser")
    user newuser(@RequestBody user newuser)
    {
        return urep.save(newuser);
    }

    @GetMapping("/readuser")
    List<user> allusers()
    {
        return urep.findAll();
    }

    @GetMapping("/listuser/{id}")
    user oneuser(@PathVariable Long id){
        return urep.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/edituser/{id}")
    user updateuser(@RequestBody user newuser,@PathVariable Long id)
    {
        return urep.findById(id)
                .map(us->{
                    us.setUsername(newuser.getUsername());
                    us.setName(newuser.getName());
                    us.setEmail(newuser.getEmail());
                            return  urep.save(us);
                })
                .orElseThrow(()->new UserNotFoundException(id));

    }

 @DeleteMapping("user/{id}")
 String deluser(@PathVariable Long id)
 {
     if (!urep.existsById(id))
     {
         throw new UserNotFoundException(id);
     }
     urep.deleteById(id);
     return "User with id "+id+" has been deleted successfully";
 }

}
