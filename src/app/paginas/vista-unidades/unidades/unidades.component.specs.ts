import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnidadesComponent } from './unidades.component';
import { ActivatedRoute } from '@angular/router';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { UnidadesService } from '../../../servicios/unidad.services';
import { Unidad } from '../../../modelos/unidad.model';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('UnidadesComponent', () => {
    let component: UnidadesComponent;
    let fixture: ComponentFixture<UnidadesComponent>;
    let httpMock: HttpTestingController;
    let unidadesService: UnidadesService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UnidadesComponent],
            imports: [
                RouterTestingModule.withRoutes([]),
                HttpClientTestingModule,
            ],
            providers: [
                UnidadesService,
                {
                    provide: ActivatedRoute,
                    useValue: { params: of({ id: 1 }) },
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UnidadesComponent);
        component = fixture.componentInstance;
        httpMock = TestBed.inject(HttpTestingController);
        unidadesService = TestBed.inject(UnidadesService);
        fixture.detectChanges();
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fetch units on init', () => {
        const dummyUnidades: Unidad[] = [
            {
                id: 1,
                nombre: 'Unidad 1',
                color: 'red',
                imagen: 'imagen1.png',
                id_proyecto: 1,
            },
            {
                id: 2,
                nombre: 'Unidad 2',
                color: 'blue',
                imagen: 'imagen2.png',
                id_proyecto: 1,
            },
        ];

        spyOn(unidadesService, 'getUnidadesPorProyecto').and.returnValue(
            of(dummyUnidades)
        );
        component.ngOnInit();

        expect(component.unidades).toEqual(dummyUnidades);
        expect(component.unidadesVacias).toBeFalse();
    });

    it('should set unidadesVacias to true if no units are fetched', () => {
        const dummyUnidades: Unidad[] = [];

        spyOn(unidadesService, 'getUnidadesPorProyecto').and.returnValue(
            of(dummyUnidades)
        );
        component.ngOnInit();

        expect(component.unidades).toEqual(dummyUnidades);
        expect(component.unidadesVacias).toBeTrue();
    });
});
