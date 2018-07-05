import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MineRoutes } from "../app.routes";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MineComponent } from "./mine.component";
import { FlagComponent } from "../flag/flag.component";
import { AllComponent } from "../all/all.component";

@NgModule({
    imports: [
        RouterModule.forChild(MineRoutes),
        CommonModule,
        FlexLayoutModule,TableModule
    ],
    exports: [RouterModule, MineComponent, FlagComponent, AllComponent],
    declarations: [ AllComponent, MineComponent, FlagComponent],
    providers: [],
})
export class MineModule {
}
