import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ServicesService } from './services.service';

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
          this.headers = {
            token: res.headers.get("token"),
            id: res.headers.get("id"),
            admin: res.headers.get("admin"),
            role: res.headers.get("role"),
            userType: res.headers.get("user_type"),
          };
          expect(res).toBeDefined();
      }, (e: any) => {
          expect(e);
      });
  })
});
