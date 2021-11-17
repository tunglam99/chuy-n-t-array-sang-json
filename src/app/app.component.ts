import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
ngOnInit(): void {
  const a = {"cc14af6c-6e56-42a8-98df-b749206be675":"Bản tin","6f8170bf-dff6-4246-9a9d-c8ee5ceccfb7":"Cấu hình","68972fea-7487-4e21-81d5-06373f0687f3":"Cấu hình chung","4fa5aba4-1df5-4671-80ad-128c5dacb6f6":"Cấu hình hệ thống","878c1fc8-824a-4814-abc3-a3c783665ff2":"Chuyển quỹ tin lớp","578479fe-5b09-4de0-a585-6a81f5e0bb79":"Đăng ký Brandname","e45a617a-fed5-4148-9550-712c577518ee":"Đăng ký SMS CS riêng","b7a1017c-df4a-4c67-9556-9c2b469aa586":"DS liên lạc","1192b35f-d194-49ab-aa65-0e9a5a873e42":"Giáo viên","1686d546-1c9a-4d1c-97c1-e6ed2b8923cc":"Khai báo dữ liệu","c1fb6ca9-3692-4d38-b7e3-a863beb222e5":"Khóa điểm","d66cc0dc-5cff-4909-9357-1cbe8b271654":"Khóa điểm danh vi phạm","a460cf50-0c25-4f1a-bc4b-45ee93bc0487":"Khóa STT & Hồ sơ HS","dc23d943-e1f1-4f41-9e73-a22d6cb64f7d":"Lớp học","a0263126-769d-47ee-ae12-3d6f98444f80":"Môn học cho lớp","8e578fcd-c547-4a3f-8995-c40fe0cc7ea3":"Năm học","9e4b9862-399f-4a2f-ba39-b21edad198c8":"Nhóm liên lạc","ad1adc36-0969-4095-b3ce-5768f60f0b72":"PHHS","a397c922-a3bd-411d-b4c4-4e05a90fccf0":"Tài khoản","098568a2-8da2-42ae-b0ec-c42f0c503b09":"Thống kê liên lạc","2a32f46d-192e-4acd-b566-d2eeea972e54":"Tổ bộ môn","9a7b5cc8-8b99-4746-90d9-8590be7ccfd0":"Xếp loại, xếp hạng"}

  const b = Object.entries(a);
  const result
  a.forEach(x => {
    this.result.push({name: x[1], value: x[0]})
  })
 
}
