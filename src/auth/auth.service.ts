import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminsService } from 'src/admins/admins.service';

@Injectable()
export class AuthService {
  constructor(
    private adminsService: AdminsService,
    private jwtService: JwtService,
  ) {}
  async validateAdmin(username: string, passwd: string): Promise<any> {
    const admin = await this.adminsService.admin({ username });
    if (admin && admin.password === passwd) {
      const { password, ...result } = admin;
      return result;
    }
    return null;
  }
  async login(admin: any) {
    const payload = { username: admin.username, sub: admin.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
