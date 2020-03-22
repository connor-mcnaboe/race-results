import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultsCalculatorPage } from "./results-calculator.page";
import { ComponentsModule } from 'src/components/comoponent.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: ResultsCalculatorPage }])
  ],
  declarations: [ResultsCalculatorPage]
})
export class ResultsCaclulatorPageModule {}
