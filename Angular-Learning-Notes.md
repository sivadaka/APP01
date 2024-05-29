Angular Architecture
    talks about the list of artifacts on angular application is made up of

        1. each angular artifact is a typescript class
        2. each class is marked with a decorator to identify its role.
        3. each of these decorators are passed a json-object called meta-data which has the configuration.

    modules:
        @NgModule({
            declarations: [],
            imports:[],
            exports:[],
            providers:[],
            bootstarp:[]
        })
        class SalesModule {

        }

        Directives
            @Directive({
                selector:'[appFastMovingStock]'
                providers:[]
            })
            class FastMovingStockDirective {

            }

            components
                @Component({
                    selector:'app-dashboard',
                    templateUrl:'app-dashboard.component.html'
                    styleUrls:['app-dashboard.component.css'],
                    providers:[]
                })
                class salesDashboardComponent{

                }

        pipes
            @pipe({
                name: 'inwords'
            })
            class IntoWordsPipe {

            }

        services
        @Injectable({
            providedIn:'root'
        })
        class Stockservice{

        }

        Angular Modules

            Module is a isolated logical unit of an application.
            Angular modules and javascript/typescipt modules live alongside one another in an angular app.
            Angular modules is a class by itself.

            @NgModule({
                declarations: [/*list of all components, directive and pipes that belong to this module */],
                imports : [/* list of other moduels we want to import from */],
                exports: [list of components or pipes or directive that belong here but are allowed to be used elsewhere],
                providers: [list of services that belong to this module]
                bootstart: [list of components that must be loaded along within the module]
            })
            class Salesmodule {

            }

            each angular application is housed inside a top-level module called 'ROOT MODULE'. the 'ROOT MODULE' is generally named as 'AppModule'.
            'ROOT MODULE' will not have 'exports' section in its meta-data.
            only 'ROOT MODULE' has 'bootstart' section in its meta-data.
            ng g module ModuleName  is the command used for creating a module

    Angular Components:
        Component is an html element created using angular framework.

        ng g c SalesDashboard --skip-tests  - this ng commad will  create component without tests

    Data binding
        is the way to consume the fields and methods of a component class in its template.
        we bind the fields with DOM in the html and the methods with the events in the html.

        Interpolation (one way data binding)
            to render the value of an expression in the content of an element.
            <element> {{expression}} </element>
            <p> sum of {{n1}} and {{n2}} is {{n1+n2}} </p>

        Two-Way Data Binding
            to bind a field with a form-element. The value of the field is loaded into the form-element for the first time.
            when ever the form-element is edited, the value of the field is as well updated.

            <input [(ngModel)]="fieldName" />
            'ngModel' is a directive defined in 'FormsModule' from @angular/forms
        
