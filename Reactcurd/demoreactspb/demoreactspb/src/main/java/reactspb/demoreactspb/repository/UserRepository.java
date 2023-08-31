package reactspb.demoreactspb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import reactspb.demoreactspb.model.user;

public interface UserRepository extends JpaRepository<user,Long> {


}
