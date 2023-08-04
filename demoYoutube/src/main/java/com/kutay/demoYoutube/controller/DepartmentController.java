package com.kutay.demoYoutube.controller;

import com.kutay.demoYoutube.entity.Department;
import com.kutay.demoYoutube.error.DepartmentNotFoundException;
import com.kutay.demoYoutube.service.DepartmentService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class DepartmentController {

    @Autowired
    private DepartmentService service;

    //private final Logger LOGGER= (Logger) LoggerFactory.getLogger(DepartmentController.class);
    private final Logger LOGGER=LoggerFactory.getLogger(DepartmentController.class);

    @PostMapping("api/v1/demo")
    public Department saveDepartment(@Valid @RequestBody Department department) {
        LOGGER.info("Inside save department of DepartmentController");
        return service.saveDepartment(department);
    }

    @GetMapping("api/v1/demo")
    public List<Department> fetchDepartmentList() {
        LOGGER.info("Inside fetch department of DepartmentController");
        return service.fetchDepartmentList();
    }

    @GetMapping("api/v1/demo/{id}")
    public Department getDepartmentById(@PathVariable("id") Long id) throws DepartmentNotFoundException {
        return service.getDepartmentById(id);
    }

    @DeleteMapping("api/v1/demo/{id}")
    public String deleteDepartmentById(@PathVariable("id") Long id){
        LOGGER.info("Inside delete department of DepartmentController");
        service.deleteDeptById(id);
        return "Deleted succesfully!";
    }

    @PutMapping("api/v1/demo/{id}")
    public Department updateDepartment(@PathVariable("id") Long id,@Valid @RequestBody Department dept){
        return service.updateDepartment(id,dept);
    }
    @GetMapping("api/v1/demo/name/{name}")
    public Department getDepartmentByName(@PathVariable("name") String deptName){
        return service.getDepartmentByName(deptName);

    }

}
