package reactspb.demoreactspb.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class user {

    @Id
    @GeneratedValue
    private Long id;
    private String Username;
    private String name;
    private String email;

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return Username;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}
