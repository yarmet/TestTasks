package com.components.database.repository;


import com.components.database.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface StudentsRepository extends JpaRepository<Student, Integer> {

    @Query("select student from Student student join student.examResults results group by results.student having avg(results.ratio) >=:ratio")
    List<Student> getStudents(@Param("ratio") double ratio);

}
