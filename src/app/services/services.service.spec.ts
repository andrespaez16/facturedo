import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ServicesService } from './services.service';



/*unit testt login */
describe('Http test', () => {
  let service: ServicesService;
  beforeEach(async () => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [
              ServicesService,
        
          ]
      }).compileComponents();
  });
  beforeEach(() => {
      service = TestBed.get(ServicesService);
  })
  it('ingreso al app', () => {
    let credenciales = {
      identifier: "fernandopc@gamil.com",
      password:'1234567789',
  }
      service.auth(credenciales).subscribe((res:any) => {
          expect(res).toBeDefined();
      }, (e: any) => {
          expect(e);
      });
  })

  it('ingreso al app', () => {
    let credenciales = {
      identifier: "fernandopc@gamil.com",
      password:'',
  }
      service.auth(credenciales).subscribe((res:any) => {
          expect(res).toBeDefined();
      }, (e: any) => {
          expect(e);
      });
  })
});

/*Unit test list */

describe('Http test', () => {
    let service: ServicesService;
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ServicesService,
          
            ]
        }).compileComponents();
    });
    beforeEach(() => {
        service = TestBed.get(ServicesService);
    })
    it('lista los servicios', () => {
        service.listOfEnvoices().subscribe((res:any) => {
            this.headers = {
             Authorization: res.headers.get("token"),
            };
            expect(res).toBeDefined();
        }, (e: any) => {
            expect(e);
        });
    })
  });



/*Unit test show */
