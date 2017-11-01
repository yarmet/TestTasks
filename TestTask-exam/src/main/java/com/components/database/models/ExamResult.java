package com.components.database.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;


@Getter
@Setter
@Entity
@Table(name = "exam_results")
public class ExamResult {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;


    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "student_id")
    private Student student;


    @Column(name = "exam_name")
    @Enumerated(EnumType.ORDINAL)
    private ExamNames examName;


    @Column(name = "ratio")
    private int ratio;

}
