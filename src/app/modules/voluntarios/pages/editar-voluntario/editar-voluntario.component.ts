import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VoluntariosService } from '../../services/voluntario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivityTypes, GenderType, IdentificationType } from '../../interfaces/voluntarios';

@Component({
  selector: 'app-editar-voluntario',
  templateUrl: './editar-voluntario.component.html',
  styleUrl: './editar-voluntario.component.scss'
})

export class EditarVoluntarioComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string },
  private voluntarioService : VoluntariosService) {}

  public identificationType = [
    { id: '1', description: 'Cédula'},
    { id: '3', description: 'Pasaporte'},
  ]

  public genderType = [
    {id: 1, description: 'Masculino'},
    {id: 2, description: 'Femenino'},
  ]

  public activityType = [
    {id: 1, description: 'Ayudar'},
    {id: 1, description: 'Donar'},
  ]


  get title(): string {
    return this.data.title;
  }

  public voluntarioForm = new FormGroup({
    identificationTypeId : new FormControl<IdentificationType>(IdentificationType.Cedula, {nonNullable:true}),
    identification : new FormControl<string>('', {nonNullable:true, validators: [Validators.minLength(10), Validators.maxLength(10)],},),
    firstName : new FormControl<string>('',{nonNullable:true}),
    lastName : new FormControl<string>('',{nonNullable:true}),
    email : new FormControl<string>('',{nonNullable:true}),
    phoneNumber: new FormControl<string>('', {nonNullable:true, validators: [Validators.minLength(10), Validators.maxLength(10)]}),
    genderType : new FormControl<GenderType>(GenderType.Male, {nonNullable:true}),
    address : new FormControl<string>('', {nonNullable:true}),
    activityType: new FormControl<ActivityTypes>(ActivityTypes.Ayudar, {
      nonNullable:true
    })
  });

  onSubmit() : void {
    if(this.voluntarioForm.invalid) return

    this.voluntarioService.addVoluntario(this.voluntarioForm.value).subscribe()
  }
}
