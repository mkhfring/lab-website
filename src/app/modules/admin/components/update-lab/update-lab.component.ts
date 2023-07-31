import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LabService } from 'src/app/services/lab.service';

@Component({
  selector: 'app-update-lab',
  templateUrl: './update-lab.component.html',
  styleUrls: ['./update-lab.component.css']
})
export class UpdateLabComponent implements OnInit {
  labEditForm = new FormGroup(
    {
      title: new FormControl(''),
      summary: new FormControl('')
    }
  )
  operationMessage:string = ''
  constructor(private auth:AuthService, private router:Router, private labedit:LabService) { }

  
  ngOnInit(): void {
  }
  onSubmit(): void{
    this.labedit.edit_lab(this.labEditForm.value.title || '', this.labEditForm.value.summary || '').subscribe(
      response => {
        this.operationMessage = 'Lab updated successfully';
        console.log(response);
        this.router.navigate(['home'])
      },
      error => {
        this.operationMessage = 'Error updating lab';
        console.error(error);
      }
    )

  }
    
}
