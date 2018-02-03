import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
    { path: 'user-form', component:  UserFormComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'teacher', component: TeacherComponent },
    { path: 'student', component: StudentComponent }

]