import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParfumDTO } from '../../../models';
@Injectable({
  providedIn: 'root'
})
export class ParfumokService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<ParfumDTO[]>('/api/parfum');
  }

  getAllFieldsData() {
    return this.http.get<ParfumDTO[]>('/api/parfum/id');
  }

  getOne(id: number) {
    return this.http.get<ParfumDTO>(`/api/parfum/` + id);
  }

  create(parfum: ParfumDTO) {
    return this.http.post<ParfumDTO>('/api/parfum', parfum);
  }

  update(parfum: ParfumDTO) {
    return this.http.put<ParfumDTO>('/api/parfum', parfum);
  }

  delete(id: number) {
    return this.http.delete(`/api/parfum/` + id);
  }
}
