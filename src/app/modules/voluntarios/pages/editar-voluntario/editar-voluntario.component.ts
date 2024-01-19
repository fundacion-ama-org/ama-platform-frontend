import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VoluntariosService } from '../../services/voluntario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivityTypes, GenderType, IdentificationType } from '../../interfaces/voluntarios';

@Component({
  selector: 'app-editar-voluntario',
  templateUrl: './editar-voluntario.component.html',
  styleUrl: './editar-voluntario.component.scss'
})

export class EditarVoluntarioComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, row: any},
  private voluntarioService : VoluntariosService, public dialogRef: MatDialogRef<EditarVoluntarioComponent>) {
    this.voluntarioForm.setValue({
      identificationTypeId: IdentificationType.Cedula,
      identification: data.row.identification,
      firstName: data.row.firstName,
      lastName: data.row.lastName,
      email: data.row.email,
      phoneNumber: data.row.phoneNumber,
      gender: data.row.gender,
      address: data.row.address,
      activityTypeId: data.row.activityTypeId,
    });

    console.log(data.row);

  }

  public identificationType = [
    { id: 1, description: 'Cédula'},
    { id: 3, description: 'Pasaporte'},
  ]

  public genderType = [
    {description: 'Masculino'},
    {description: 'Femenino'},
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
    gender : new FormControl<GenderType>(GenderType.Male, {nonNullable:true}),
    address : new FormControl<string>('', {nonNullable:true}),
    activityTypeId: new FormControl<ActivityTypes>(ActivityTypes.Ayudar, {
      nonNullable:true
    })
  });

  onSubmit() : void {
    if(this.voluntarioForm.invalid) return


    const updated = {
      identificationTypeId : 1,
      identification : this.voluntarioForm.value.identification,
      firstName : this.voluntarioForm.value.firstName,
      lastName : this.voluntarioForm.value.lastName,
      email : this.voluntarioForm.value.email,
      phoneNumber : this.voluntarioForm.value.phoneNumber,
      gender : this.voluntarioForm.value.gender,
      address : this.voluntarioForm.value.address,
      activityTypeId : this.voluntarioForm.value.activityTypeId,
    }

    console.log(this.data.row.id);


    this.voluntarioService.updateVoluntario(updated, this.data.row.id).subscribe()
    this.dialogRef.close(true);
  }
}
