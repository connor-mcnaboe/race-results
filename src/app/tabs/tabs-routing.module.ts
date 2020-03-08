import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'results-calculator',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../results-calculator-tab/results-calculator.module').then(m => m.ResultsCaclulatorPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/results-calculator',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/results-calculator',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
