package com.employee.employeeservices.controller;

import java.util.List;

import com.employee.employeeservices.model.Employee;
import com.employee.employeeservices.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @Autowired
    EmployeeService employeeService;    

    @GetMapping("/test")
	public String performTest(){
		return "Do some testing";
    }
    
    @GetMapping("/test/employees")
    public List<Employee> getEmployees(){
        return employeeService.findAllEmployees();
    } 

}