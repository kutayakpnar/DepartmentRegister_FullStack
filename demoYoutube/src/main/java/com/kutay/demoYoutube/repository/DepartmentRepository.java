package com.kutay.demoYoutube.repository;

import com.kutay.demoYoutube.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//Its like my database

@Repository
public interface DepartmentRepository extends JpaRepository<Department,Long> {

    public Department findByDepartmentName(String departmentName);
}
