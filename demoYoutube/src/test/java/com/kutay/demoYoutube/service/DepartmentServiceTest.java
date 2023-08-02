package com.kutay.demoYoutube.service;

import com.kutay.demoYoutube.error.DepartmentNotFoundException;
import com.kutay.demoYoutube.repository.DepartmentRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.kutay.demoYoutube.entity.Department;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DepartmentServiceTest {
    @Autowired
    private DepartmentService service;
    @MockBean
    private DepartmentRepository repository;//Service layer depends on repository layer so we
                                            //are going to mock repository layer.

    @BeforeEach
    void setUp() {
        Department dept=Department.builder()
                .departmentName("IT")
                .departmentAddress("İyte")
                .departmentCode("İyte1")
                .departmentId(1L).build();
        Mockito.when(repository.findByDepartmentName("IT")).thenReturn(dept);
        //Whenever findByDepartName method is called,dept object will return.

    }
    @Test
    @DisplayName("Get Data based on Valid Department Name.")
    //For skip specific test case use @Diasbled
    public void whenValidDepartmentName_thenDepartmentShouldFound(){
        String deptName="IT";
        Department found= service.getDepartmentByName(deptName);
        assertEquals(deptName,found.getDepartmentName());


    }
}