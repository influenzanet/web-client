import { NgModule, ModuleWithProviders } from '@angular/core';

// import { AuthGuard } from './auth.guard';
import { ApiService } from './api.service';

@NgModule({
    imports: []
})
export class GlobalServicesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: GlobalServicesModule,
            providers: [
                // AuthGuard,
                ApiService,
            ]
        };
    }
}
