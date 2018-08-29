import { NgModule } from '@angular/core';

import { TestinsertSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TestinsertSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TestinsertSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestinsertSharedCommonModule {}
