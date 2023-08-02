package com.kutay.demoYoutube.service;

import com.kutay.demoYoutube.entity.Department;
import com.kutay.demoYoutube.error.DepartmentNotFoundException;

import java.util.List;

public interface DepartmentService {
    public Department saveDepartment(Department department);

    public List<Department> fetchDepartmentList();

    public Department getDepartmentById(Long id) throws DepartmentNotFoundException;

    public void deleteDeptById(Long id);

    public Department updateDepartment(Long id, Department dept);

    public Department getDepartmentByName(String deptName);

    //public List<Department> fetchDepartmentList();

}
