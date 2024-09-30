import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{

  employees: Employee[] = [
    {
      id: "5g4ee4cc-44b-a567-06gt746390327",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: 1234567890,
      salary: 50000,
      department: "Engineering"
    },
    {
      id: "5g4fe4cc-44b-a567-06gt765765025",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: 9876543210,
      salary: 60000,
      department: "Marketing"
    },
    {
      id: "7g4fn4cc-44b-a567-06g750h250327",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: 5551234567,
      salary: 55000,
      department: "Human Resources"
    }
  ];

  constructor(){ }

  ngOnInit(): void {
    this.employees.push()
  }
}
