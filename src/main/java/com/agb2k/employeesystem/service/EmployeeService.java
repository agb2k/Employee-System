package com.agb2k.employeesystem.service;

import com.agb2k.employeesystem.model.Employee;

import java.util.List;

public interface EmployeeService {
    public Employee saveEmployee(Employee employee);

    public List<Employee> getAllEmployees();
}
