package com.kutay.demoYoutube.service;

import com.kutay.demoYoutube.entity.Department;
import com.kutay.demoYoutube.error.DepartmentNotFoundException;
import com.kutay.demoYoutube.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class DepartmentServiceImp implements DepartmentService{
    @Autowired
    DepartmentRepository departmentRepository;
    @Override
    public Department saveDepartment(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public List<Department> fetchDepartmentList() {
        return departmentRepository.findAll();
    }

    @Override
    public Department getDepartmentById(Long id) throws DepartmentNotFoundException {
        Optional<Department> department= departmentRepository.findById(id);
        if(!department.isPresent()){
            throw new DepartmentNotFoundException("Department Not Found.");
        }
        return department.get();
    }

    @Override
    public void deleteDeptById(Long id) {
        departmentRepository.deleteById(id);
    }

    @Override
    public Department updateDepartment(Long id, Department dept) {
        Department depBd=departmentRepository.findById(id).get();
        if(Objects.nonNull(dept.getDepartmentName())&& !"".equalsIgnoreCase(dept.getDepartmentName())){
            depBd.setDepartmentName(dept.getDepartmentName());
        }
        if(Objects.nonNull(dept.getDepartmentCode())&& !"".equalsIgnoreCase(dept.getDepartmentCode())){
            depBd.setDepartmentCode(dept.getDepartmentCode());
        }
        if(Objects.nonNull(dept.getDepartmentAddress())&& !"".equalsIgnoreCase(dept.getDepartmentAddress())){
            depBd.setDepartmentAddress(dept.getDepartmentAddress());
        }
        return departmentRepository.save(depBd);
    }

    @Override
    public Department getDepartmentByName(String deptName) {
        return departmentRepository.findByDepartmentName(deptName);
    }

    /*@Override
    public List<Department> fetchDepartmentList() {
        return departmentRepository.findAll()
    }*/
}
