import { NgModule } from '@angular/core'
import { HomeComponent } from './home.component'
import { CounterModule } from '../../components/counter/counter.module' 
import { UsersModule } from '../../components/users/users.module'

@NgModule({
  imports: [CounterModule, UsersModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})

export class HomeModule { }



