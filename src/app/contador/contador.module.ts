import { NgModule } from "@angular/core";
import { compileNgModule } from "@angular/compiler";
import { contadorComponent } from "./contador/contador.component";
import { AppComponent } from "../app.component";

@NgModule ({
    declarations:[
        contadorComponent,
    ],

    exports:[
        contadorComponent
    ]

})

export class ContadorModule{} 