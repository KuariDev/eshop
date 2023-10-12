// import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
// import { JwtService } from '../../auth/jwt.service'
// import { IAccessTokenPayload } from '../../auth/interfaces/accessToken.interface'
//
// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(
//     private readonly jwtService: JwtService,
//   ) {}
//
//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request = context.switchToHttp().getRequest();
//     const header = await request.headers.authorization
//
//     const type = header?.split(' ')[0]
//     const token = header?.split(' ')[1]
//     if (type != 'Bearer' || !token) {
//       throw new UnauthorizedException('Wrong access token')
//     }
//
//     const payload: IAccessTokenPayload = this.jwtService.accessVerify(token)
//     request.user = payload
//     return true
//   }
// }