package com.kutay.demoYoutube.repository;

import com.kutay.demoYoutube.entity.Department;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest //We use that while testing repository layer.Because we use database.It is more safety.
class DepartmentRepositoryTest {

    @Autowired
    private DepartmentRepository repository;
    @Autowired
    private TestEntityManager entityManager;
    //To test embedded database instedad of actual database.


    @BeforeEach
    void setUp() {

        Department department=Department.builder()
                .departmentId(1l)
                .departmentName("ME")
                .departmentCode("X")
                .departmentAddress("Teknopark")
                .build();


        entityManager.persist(department);


    }
    @Test
    public void whenFindById_thenReturnDepartment(){
        Department dept=repository.findById(1L).get();
        assertEquals(dept.getDepartmentName(),"ME");

    }
}