import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [TimePipe],
  exports: [TimePipe, CommonModule],
})
export class SharedModule {}
